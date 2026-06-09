var ah = (e) => {
  throw TypeError(e);
};
var Dl = (e, t, n) => t.has(e) || ah("Cannot " + n);
var R = (e, t, n) => (
    Dl(e, t, "read from private field"), n ? n.call(e) : t.get(e)
  ),
  J = (e, t, n) =>
    t.has(e)
      ? ah("Cannot add the same private member more than once")
      : t instanceof WeakSet
      ? t.add(e)
      : t.set(e, n),
  H = (e, t, n, r) => (
    Dl(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n
  ),
  Le = (e, t, n) => (Dl(e, t, "access private method"), n);
var ys = (e, t, n, r) => ({
  set _(i) {
    H(e, t, i, n);
  },
  get _() {
    return R(e, t, r);
  },
});
function h1(e, t) {
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
function Rg(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Ag = { exports: {} },
  Ya = {},
  Mg = { exports: {} },
  X = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ns = Symbol.for("react.element"),
  p1 = Symbol.for("react.portal"),
  m1 = Symbol.for("react.fragment"),
  g1 = Symbol.for("react.strict_mode"),
  y1 = Symbol.for("react.profiler"),
  v1 = Symbol.for("react.provider"),
  x1 = Symbol.for("react.context"),
  w1 = Symbol.for("react.forward_ref"),
  S1 = Symbol.for("react.suspense"),
  E1 = Symbol.for("react.memo"),
  C1 = Symbol.for("react.lazy"),
  lh = Symbol.iterator;
function b1(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (lh && e[lh]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ng = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  jg = Object.assign,
  Lg = {};
function zi(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Lg),
    (this.updater = n || Ng);
}
zi.prototype.isReactComponent = {};
zi.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
zi.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Dg() {}
Dg.prototype = zi.prototype;
function ud(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Lg),
    (this.updater = n || Ng);
}
var cd = (ud.prototype = new Dg());
cd.constructor = ud;
jg(cd, zi.prototype);
cd.isPureReactComponent = !0;
var uh = Array.isArray,
  Og = Object.prototype.hasOwnProperty,
  dd = { current: null },
  Ig = { key: !0, ref: !0, __self: !0, __source: !0 };
function Fg(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Og.call(t, r) && !Ig.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: ns,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: dd.current,
  };
}
function T1(e, t) {
  return {
    $$typeof: ns,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function fd(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ns;
}
function P1(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var ch = /\/+/g;
function Ol(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? P1("" + e.key)
    : t.toString(36);
}
function Us(e, t, n, r, i) {
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
          case ns:
          case p1:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + Ol(s, 0) : r),
      uh(i)
        ? ((n = ""),
          e != null && (n = e.replace(ch, "$&/") + "/"),
          Us(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (fd(i) &&
            (i = T1(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ""
                  : ("" + i.key).replace(ch, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), uh(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var l = r + Ol(o, a);
      s += Us(o, t, n, l, i);
    }
  else if (((l = b1(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(o = e.next()).done; )
      (o = o.value), (l = r + Ol(o, a++)), (s += Us(o, t, n, l, i));
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
function vs(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Us(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function k1(e) {
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
var Ke = { current: null },
  Hs = { transition: null },
  R1 = {
    ReactCurrentDispatcher: Ke,
    ReactCurrentBatchConfig: Hs,
    ReactCurrentOwner: dd,
  };
function Vg() {
  throw Error("act(...) is not supported in production builds of React.");
}
X.Children = {
  map: vs,
  forEach: function (e, t, n) {
    vs(
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
      vs(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      vs(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!fd(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
X.Component = zi;
X.Fragment = m1;
X.Profiler = y1;
X.PureComponent = ud;
X.StrictMode = g1;
X.Suspense = S1;
X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = R1;
X.act = Vg;
X.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = jg({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = dd.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      Og.call(t, l) &&
        !Ig.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: ns, type: e.type, key: i, ref: o, props: r, _owner: s };
};
X.createContext = function (e) {
  return (
    (e = {
      $$typeof: x1,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: v1, _context: e }),
    (e.Consumer = e)
  );
};
X.createElement = Fg;
X.createFactory = function (e) {
  var t = Fg.bind(null, e);
  return (t.type = e), t;
};
X.createRef = function () {
  return { current: null };
};
X.forwardRef = function (e) {
  return { $$typeof: w1, render: e };
};
X.isValidElement = fd;
X.lazy = function (e) {
  return { $$typeof: C1, _payload: { _status: -1, _result: e }, _init: k1 };
};
X.memo = function (e, t) {
  return { $$typeof: E1, type: e, compare: t === void 0 ? null : t };
};
X.startTransition = function (e) {
  var t = Hs.transition;
  Hs.transition = {};
  try {
    e();
  } finally {
    Hs.transition = t;
  }
};
X.unstable_act = Vg;
X.useCallback = function (e, t) {
  return Ke.current.useCallback(e, t);
};
X.useContext = function (e) {
  return Ke.current.useContext(e);
};
X.useDebugValue = function () {};
X.useDeferredValue = function (e) {
  return Ke.current.useDeferredValue(e);
};
X.useEffect = function (e, t) {
  return Ke.current.useEffect(e, t);
};
X.useId = function () {
  return Ke.current.useId();
};
X.useImperativeHandle = function (e, t, n) {
  return Ke.current.useImperativeHandle(e, t, n);
};
X.useInsertionEffect = function (e, t) {
  return Ke.current.useInsertionEffect(e, t);
};
X.useLayoutEffect = function (e, t) {
  return Ke.current.useLayoutEffect(e, t);
};
X.useMemo = function (e, t) {
  return Ke.current.useMemo(e, t);
};
X.useReducer = function (e, t, n) {
  return Ke.current.useReducer(e, t, n);
};
X.useRef = function (e) {
  return Ke.current.useRef(e);
};
X.useState = function (e) {
  return Ke.current.useState(e);
};
X.useSyncExternalStore = function (e, t, n) {
  return Ke.current.useSyncExternalStore(e, t, n);
};
X.useTransition = function () {
  return Ke.current.useTransition();
};
X.version = "18.3.1";
Mg.exports = X;
var S = Mg.exports;
const L = Rg(S),
  _g = h1({ __proto__: null, default: L }, [S]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var A1 = S,
  M1 = Symbol.for("react.element"),
  N1 = Symbol.for("react.fragment"),
  j1 = Object.prototype.hasOwnProperty,
  L1 = A1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  D1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function zg(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) j1.call(t, r) && !D1.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: M1,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: L1.current,
  };
}
Ya.Fragment = N1;
Ya.jsx = zg;
Ya.jsxs = zg;
Ag.exports = Ya;
var w = Ag.exports,
  Bg = { exports: {} },
  lt = {},
  $g = { exports: {} },
  Wg = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(k, A) {
    var O = k.length;
    k.push(A);
    e: for (; 0 < O; ) {
      var W = (O - 1) >>> 1,
        B = k[W];
      if (0 < i(B, A)) (k[W] = A), (k[O] = B), (O = W);
      else break e;
    }
  }
  function n(k) {
    return k.length === 0 ? null : k[0];
  }
  function r(k) {
    if (k.length === 0) return null;
    var A = k[0],
      O = k.pop();
    if (O !== A) {
      k[0] = O;
      e: for (var W = 0, B = k.length, Y = B >>> 1; W < Y; ) {
        var q = 2 * (W + 1) - 1,
          xe = k[q],
          je = q + 1,
          ee = k[je];
        if (0 > i(xe, O))
          je < B && 0 > i(ee, xe)
            ? ((k[W] = ee), (k[je] = O), (W = je))
            : ((k[W] = xe), (k[q] = O), (W = q));
        else if (je < B && 0 > i(ee, O)) (k[W] = ee), (k[je] = O), (W = je);
        else break e;
      }
    }
    return A;
  }
  function i(k, A) {
    var O = k.sortIndex - A.sortIndex;
    return O !== 0 ? O : k.id - A.id;
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
    u = [],
    c = 1,
    d = null,
    f = 3,
    h = !1,
    v = !1,
    g = !1,
    x = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(k) {
    for (var A = n(u); A !== null; ) {
      if (A.callback === null) r(u);
      else if (A.startTime <= k)
        r(u), (A.sortIndex = A.expirationTime), t(l, A);
      else break;
      A = n(u);
    }
  }
  function E(k) {
    if (((g = !1), y(k), !v))
      if (n(l) !== null) (v = !0), $(C);
      else {
        var A = n(u);
        A !== null && _(E, A.startTime - k);
      }
  }
  function C(k, A) {
    (v = !1), g && ((g = !1), p(P), (P = -1)), (h = !0);
    var O = f;
    try {
      for (
        y(A), d = n(l);
        d !== null && (!(d.expirationTime > A) || (k && !z()));

      ) {
        var W = d.callback;
        if (typeof W == "function") {
          (d.callback = null), (f = d.priorityLevel);
          var B = W(d.expirationTime <= A);
          (A = e.unstable_now()),
            typeof B == "function" ? (d.callback = B) : d === n(l) && r(l),
            y(A);
        } else r(l);
        d = n(l);
      }
      if (d !== null) var Y = !0;
      else {
        var q = n(u);
        q !== null && _(E, q.startTime - A), (Y = !1);
      }
      return Y;
    } finally {
      (d = null), (f = O), (h = !1);
    }
  }
  var b = !1,
    T = null,
    P = -1,
    M = 5,
    N = -1;
  function z() {
    return !(e.unstable_now() - N < M);
  }
  function I() {
    if (T !== null) {
      var k = e.unstable_now();
      N = k;
      var A = !0;
      try {
        A = T(!0, k);
      } finally {
        A ? K() : ((b = !1), (T = null));
      }
    } else b = !1;
  }
  var K;
  if (typeof m == "function")
    K = function () {
      m(I);
    };
  else if (typeof MessageChannel < "u") {
    var D = new MessageChannel(),
      Q = D.port2;
    (D.port1.onmessage = I),
      (K = function () {
        Q.postMessage(null);
      });
  } else
    K = function () {
      x(I, 0);
    };
  function $(k) {
    (T = k), b || ((b = !0), K());
  }
  function _(k, A) {
    P = x(function () {
      k(e.unstable_now());
    }, A);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (k) {
      k.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || h || ((v = !0), $(C));
    }),
    (e.unstable_forceFrameRate = function (k) {
      0 > k || 125 < k
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (M = 0 < k ? Math.floor(1e3 / k) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (k) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var A = 3;
          break;
        default:
          A = f;
      }
      var O = f;
      f = A;
      try {
        return k();
      } finally {
        f = O;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (k, A) {
      switch (k) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          k = 3;
      }
      var O = f;
      f = k;
      try {
        return A();
      } finally {
        f = O;
      }
    }),
    (e.unstable_scheduleCallback = function (k, A, O) {
      var W = e.unstable_now();
      switch (
        (typeof O == "object" && O !== null
          ? ((O = O.delay), (O = typeof O == "number" && 0 < O ? W + O : W))
          : (O = W),
        k)
      ) {
        case 1:
          var B = -1;
          break;
        case 2:
          B = 250;
          break;
        case 5:
          B = 1073741823;
          break;
        case 4:
          B = 1e4;
          break;
        default:
          B = 5e3;
      }
      return (
        (B = O + B),
        (k = {
          id: c++,
          callback: A,
          priorityLevel: k,
          startTime: O,
          expirationTime: B,
          sortIndex: -1,
        }),
        O > W
          ? ((k.sortIndex = O),
            t(u, k),
            n(l) === null &&
              k === n(u) &&
              (g ? (p(P), (P = -1)) : (g = !0), _(E, O - W)))
          : ((k.sortIndex = B), t(l, k), v || h || ((v = !0), $(C))),
        k
      );
    }),
    (e.unstable_shouldYield = z),
    (e.unstable_wrapCallback = function (k) {
      var A = f;
      return function () {
        var O = f;
        f = A;
        try {
          return k.apply(this, arguments);
        } finally {
          f = O;
        }
      };
    });
})(Wg);
$g.exports = Wg;
var O1 = $g.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var I1 = S,
  at = O1;
function j(e) {
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
var Ug = new Set(),
  Ro = {};
function Fr(e, t) {
  Ai(e, t), Ai(e + "Capture", t);
}
function Ai(e, t) {
  for (Ro[e] = t, e = 0; e < t.length; e++) Ug.add(t[e]);
}
var cn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Nu = Object.prototype.hasOwnProperty,
  F1 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  dh = {},
  fh = {};
function V1(e) {
  return Nu.call(fh, e)
    ? !0
    : Nu.call(dh, e)
    ? !1
    : F1.test(e)
    ? (fh[e] = !0)
    : ((dh[e] = !0), !1);
}
function _1(e, t, n, r) {
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
function z1(e, t, n, r) {
  if (t === null || typeof t > "u" || _1(e, t, n, r)) return !0;
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
function Ge(e, t, n, r, i, o, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s);
}
var Ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ne[e] = new Ge(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ne[t] = new Ge(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ne[e] = new Ge(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ne[e] = new Ge(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ne[e] = new Ge(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ne[e] = new Ge(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ne[e] = new Ge(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ne[e] = new Ge(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ne[e] = new Ge(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var hd = /[\-:]([a-z])/g;
function pd(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(hd, pd);
    Ne[t] = new Ge(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(hd, pd);
    Ne[t] = new Ge(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(hd, pd);
  Ne[t] = new Ge(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ne[e] = new Ge(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ne.xlinkHref = new Ge(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ne[e] = new Ge(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function md(e, t, n, r) {
  var i = Ne.hasOwnProperty(t) ? Ne[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (z1(t, n, i, r) && (n = null),
    r || i === null
      ? V1(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var yn = I1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  xs = Symbol.for("react.element"),
  Qr = Symbol.for("react.portal"),
  Yr = Symbol.for("react.fragment"),
  gd = Symbol.for("react.strict_mode"),
  ju = Symbol.for("react.profiler"),
  Hg = Symbol.for("react.provider"),
  Kg = Symbol.for("react.context"),
  yd = Symbol.for("react.forward_ref"),
  Lu = Symbol.for("react.suspense"),
  Du = Symbol.for("react.suspense_list"),
  vd = Symbol.for("react.memo"),
  Mn = Symbol.for("react.lazy"),
  Gg = Symbol.for("react.offscreen"),
  hh = Symbol.iterator;
function qi(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (hh && e[hh]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var me = Object.assign,
  Il;
function lo(e) {
  if (Il === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Il = (t && t[1]) || "";
    }
  return (
    `
` +
    Il +
    e
  );
}
var Fl = !1;
function Vl(e, t) {
  if (!e || Fl) return "";
  Fl = !0;
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
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
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
    (Fl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? lo(e) : "";
}
function B1(e) {
  switch (e.tag) {
    case 5:
      return lo(e.type);
    case 16:
      return lo("Lazy");
    case 13:
      return lo("Suspense");
    case 19:
      return lo("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Vl(e.type, !1)), e;
    case 11:
      return (e = Vl(e.type.render, !1)), e;
    case 1:
      return (e = Vl(e.type, !0)), e;
    default:
      return "";
  }
}
function Ou(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Yr:
      return "Fragment";
    case Qr:
      return "Portal";
    case ju:
      return "Profiler";
    case gd:
      return "StrictMode";
    case Lu:
      return "Suspense";
    case Du:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Kg:
        return (e.displayName || "Context") + ".Consumer";
      case Hg:
        return (e._context.displayName || "Context") + ".Provider";
      case yd:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case vd:
        return (
          (t = e.displayName || null), t !== null ? t : Ou(e.type) || "Memo"
        );
      case Mn:
        (t = e._payload), (e = e._init);
        try {
          return Ou(e(t));
        } catch {}
    }
  return null;
}
function $1(e) {
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
      return Ou(t);
    case 8:
      return t === gd ? "StrictMode" : "Mode";
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
function qn(e) {
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
function Qg(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function W1(e) {
  var t = Qg(e) ? "checked" : "value",
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
function ws(e) {
  e._valueTracker || (e._valueTracker = W1(e));
}
function Yg(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Qg(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function da(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Iu(e, t) {
  var n = t.checked;
  return me({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function ph(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = qn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Xg(e, t) {
  (t = t.checked), t != null && md(e, "checked", t, !1);
}
function Fu(e, t) {
  Xg(e, t);
  var n = qn(t.value),
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
    ? Vu(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Vu(e, t.type, qn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function mh(e, t, n) {
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
function Vu(e, t, n) {
  (t !== "number" || da(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var uo = Array.isArray;
function di(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + qn(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function _u(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(j(91));
  return me({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function gh(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(j(92));
      if (uo(n)) {
        if (1 < n.length) throw Error(j(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: qn(n) };
}
function qg(e, t) {
  var n = qn(t.value),
    r = qn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function yh(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Zg(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function zu(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Zg(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Ss,
  Jg = (function (e) {
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
        Ss = Ss || document.createElement("div"),
          Ss.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Ss.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Ao(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var po = {
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
  U1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(po).forEach(function (e) {
  U1.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (po[t] = po[e]);
  });
});
function ey(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (po.hasOwnProperty(e) && po[e])
    ? ("" + t).trim()
    : t + "px";
}
function ty(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = ey(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var H1 = me(
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
function Bu(e, t) {
  if (t) {
    if (H1[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(j(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(j(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(j(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(j(62));
  }
}
function $u(e, t) {
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
var Wu = null;
function xd(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Uu = null,
  fi = null,
  hi = null;
function vh(e) {
  if ((e = os(e))) {
    if (typeof Uu != "function") throw Error(j(280));
    var t = e.stateNode;
    t && ((t = el(t)), Uu(e.stateNode, e.type, t));
  }
}
function ny(e) {
  fi ? (hi ? hi.push(e) : (hi = [e])) : (fi = e);
}
function ry() {
  if (fi) {
    var e = fi,
      t = hi;
    if (((hi = fi = null), vh(e), t)) for (e = 0; e < t.length; e++) vh(t[e]);
  }
}
function iy(e, t) {
  return e(t);
}
function oy() {}
var _l = !1;
function sy(e, t, n) {
  if (_l) return e(t, n);
  _l = !0;
  try {
    return iy(e, t, n);
  } finally {
    (_l = !1), (fi !== null || hi !== null) && (oy(), ry());
  }
}
function Mo(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = el(n);
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
  if (n && typeof n != "function") throw Error(j(231, t, typeof n));
  return n;
}
var Hu = !1;
if (cn)
  try {
    var Zi = {};
    Object.defineProperty(Zi, "passive", {
      get: function () {
        Hu = !0;
      },
    }),
      window.addEventListener("test", Zi, Zi),
      window.removeEventListener("test", Zi, Zi);
  } catch {
    Hu = !1;
  }
function K1(e, t, n, r, i, o, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var mo = !1,
  fa = null,
  ha = !1,
  Ku = null,
  G1 = {
    onError: function (e) {
      (mo = !0), (fa = e);
    },
  };
function Q1(e, t, n, r, i, o, s, a, l) {
  (mo = !1), (fa = null), K1.apply(G1, arguments);
}
function Y1(e, t, n, r, i, o, s, a, l) {
  if ((Q1.apply(this, arguments), mo)) {
    if (mo) {
      var u = fa;
      (mo = !1), (fa = null);
    } else throw Error(j(198));
    ha || ((ha = !0), (Ku = u));
  }
}
function Vr(e) {
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
function ay(e) {
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
function xh(e) {
  if (Vr(e) !== e) throw Error(j(188));
}
function X1(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Vr(e)), t === null)) throw Error(j(188));
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
        if (o === n) return xh(i), e;
        if (o === r) return xh(i), t;
        o = o.sibling;
      }
      throw Error(j(188));
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
        if (!s) throw Error(j(189));
      }
    }
    if (n.alternate !== r) throw Error(j(190));
  }
  if (n.tag !== 3) throw Error(j(188));
  return n.stateNode.current === n ? e : t;
}
function ly(e) {
  return (e = X1(e)), e !== null ? uy(e) : null;
}
function uy(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = uy(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var cy = at.unstable_scheduleCallback,
  wh = at.unstable_cancelCallback,
  q1 = at.unstable_shouldYield,
  Z1 = at.unstable_requestPaint,
  ve = at.unstable_now,
  J1 = at.unstable_getCurrentPriorityLevel,
  wd = at.unstable_ImmediatePriority,
  dy = at.unstable_UserBlockingPriority,
  pa = at.unstable_NormalPriority,
  eS = at.unstable_LowPriority,
  fy = at.unstable_IdlePriority,
  Xa = null,
  Qt = null;
function tS(e) {
  if (Qt && typeof Qt.onCommitFiberRoot == "function")
    try {
      Qt.onCommitFiberRoot(Xa, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Lt = Math.clz32 ? Math.clz32 : iS,
  nS = Math.log,
  rS = Math.LN2;
function iS(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((nS(e) / rS) | 0)) | 0;
}
var Es = 64,
  Cs = 4194304;
function co(e) {
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
function ma(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~i;
    a !== 0 ? (r = co(a)) : ((o &= s), o !== 0 && (r = co(o)));
  } else (s = n & ~i), s !== 0 ? (r = co(s)) : o !== 0 && (r = co(o));
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
      (n = 31 - Lt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function oS(e, t) {
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
function sS(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var s = 31 - Lt(o),
      a = 1 << s,
      l = i[s];
    l === -1
      ? (!(a & n) || a & r) && (i[s] = oS(a, t))
      : l <= t && (e.expiredLanes |= a),
      (o &= ~a);
  }
}
function Gu(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function hy() {
  var e = Es;
  return (Es <<= 1), !(Es & 4194240) && (Es = 64), e;
}
function zl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function rs(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Lt(t)),
    (e[t] = n);
}
function aS(e, t) {
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
    var i = 31 - Lt(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function Sd(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Lt(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var te = 0;
function py(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var my,
  Ed,
  gy,
  yy,
  vy,
  Qu = !1,
  bs = [],
  Wn = null,
  Un = null,
  Hn = null,
  No = new Map(),
  jo = new Map(),
  jn = [],
  lS =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Sh(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Wn = null;
      break;
    case "dragenter":
    case "dragleave":
      Un = null;
      break;
    case "mouseover":
    case "mouseout":
      Hn = null;
      break;
    case "pointerover":
    case "pointerout":
      No.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      jo.delete(t.pointerId);
  }
}
function Ji(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = os(t)), t !== null && Ed(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function uS(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Wn = Ji(Wn, e, t, n, r, i)), !0;
    case "dragenter":
      return (Un = Ji(Un, e, t, n, r, i)), !0;
    case "mouseover":
      return (Hn = Ji(Hn, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return No.set(o, Ji(No.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), jo.set(o, Ji(jo.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function xy(e) {
  var t = yr(e.target);
  if (t !== null) {
    var n = Vr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = ay(n)), t !== null)) {
          (e.blockedOn = t),
            vy(e.priority, function () {
              gy(n);
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
function Ks(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Yu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Wu = r), n.target.dispatchEvent(r), (Wu = null);
    } else return (t = os(n)), t !== null && Ed(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Eh(e, t, n) {
  Ks(e) && n.delete(t);
}
function cS() {
  (Qu = !1),
    Wn !== null && Ks(Wn) && (Wn = null),
    Un !== null && Ks(Un) && (Un = null),
    Hn !== null && Ks(Hn) && (Hn = null),
    No.forEach(Eh),
    jo.forEach(Eh);
}
function eo(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Qu ||
      ((Qu = !0),
      at.unstable_scheduleCallback(at.unstable_NormalPriority, cS)));
}
function Lo(e) {
  function t(i) {
    return eo(i, e);
  }
  if (0 < bs.length) {
    eo(bs[0], e);
    for (var n = 1; n < bs.length; n++) {
      var r = bs[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Wn !== null && eo(Wn, e),
      Un !== null && eo(Un, e),
      Hn !== null && eo(Hn, e),
      No.forEach(t),
      jo.forEach(t),
      n = 0;
    n < jn.length;
    n++
  )
    (r = jn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < jn.length && ((n = jn[0]), n.blockedOn === null); )
    xy(n), n.blockedOn === null && jn.shift();
}
var pi = yn.ReactCurrentBatchConfig,
  ga = !0;
function dS(e, t, n, r) {
  var i = te,
    o = pi.transition;
  pi.transition = null;
  try {
    (te = 1), Cd(e, t, n, r);
  } finally {
    (te = i), (pi.transition = o);
  }
}
function fS(e, t, n, r) {
  var i = te,
    o = pi.transition;
  pi.transition = null;
  try {
    (te = 4), Cd(e, t, n, r);
  } finally {
    (te = i), (pi.transition = o);
  }
}
function Cd(e, t, n, r) {
  if (ga) {
    var i = Yu(e, t, n, r);
    if (i === null) Xl(e, t, r, ya, n), Sh(e, r);
    else if (uS(i, e, t, n, r)) r.stopPropagation();
    else if ((Sh(e, r), t & 4 && -1 < lS.indexOf(e))) {
      for (; i !== null; ) {
        var o = os(i);
        if (
          (o !== null && my(o),
          (o = Yu(e, t, n, r)),
          o === null && Xl(e, t, r, ya, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else Xl(e, t, r, null, n);
  }
}
var ya = null;
function Yu(e, t, n, r) {
  if (((ya = null), (e = xd(r)), (e = yr(e)), e !== null))
    if (((t = Vr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = ay(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ya = e), null;
}
function wy(e) {
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
      switch (J1()) {
        case wd:
          return 1;
        case dy:
          return 4;
        case pa:
        case eS:
          return 16;
        case fy:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var _n = null,
  bd = null,
  Gs = null;
function Sy() {
  if (Gs) return Gs;
  var e,
    t = bd,
    n = t.length,
    r,
    i = "value" in _n ? _n.value : _n.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
  return (Gs = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Qs(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ts() {
  return !0;
}
function Ch() {
  return !1;
}
function ut(e) {
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
        ? Ts
        : Ch),
      (this.isPropagationStopped = Ch),
      this
    );
  }
  return (
    me(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ts));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ts));
      },
      persist: function () {},
      isPersistent: Ts,
    }),
    t
  );
}
var Bi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Td = ut(Bi),
  is = me({}, Bi, { view: 0, detail: 0 }),
  hS = ut(is),
  Bl,
  $l,
  to,
  qa = me({}, is, {
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
    getModifierState: Pd,
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
        : (e !== to &&
            (to && e.type === "mousemove"
              ? ((Bl = e.screenX - to.screenX), ($l = e.screenY - to.screenY))
              : ($l = Bl = 0),
            (to = e)),
          Bl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : $l;
    },
  }),
  bh = ut(qa),
  pS = me({}, qa, { dataTransfer: 0 }),
  mS = ut(pS),
  gS = me({}, is, { relatedTarget: 0 }),
  Wl = ut(gS),
  yS = me({}, Bi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  vS = ut(yS),
  xS = me({}, Bi, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  wS = ut(xS),
  SS = me({}, Bi, { data: 0 }),
  Th = ut(SS),
  ES = {
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
  CS = {
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
  bS = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function TS(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = bS[e]) ? !!t[e] : !1;
}
function Pd() {
  return TS;
}
var PS = me({}, is, {
    key: function (e) {
      if (e.key) {
        var t = ES[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Qs(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? CS[e.keyCode] || "Unidentified"
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
    getModifierState: Pd,
    charCode: function (e) {
      return e.type === "keypress" ? Qs(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Qs(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  kS = ut(PS),
  RS = me({}, qa, {
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
  Ph = ut(RS),
  AS = me({}, is, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Pd,
  }),
  MS = ut(AS),
  NS = me({}, Bi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  jS = ut(NS),
  LS = me({}, qa, {
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
  DS = ut(LS),
  OS = [9, 13, 27, 32],
  kd = cn && "CompositionEvent" in window,
  go = null;
cn && "documentMode" in document && (go = document.documentMode);
var IS = cn && "TextEvent" in window && !go,
  Ey = cn && (!kd || (go && 8 < go && 11 >= go)),
  kh = " ",
  Rh = !1;
function Cy(e, t) {
  switch (e) {
    case "keyup":
      return OS.indexOf(t.keyCode) !== -1;
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
function by(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Xr = !1;
function FS(e, t) {
  switch (e) {
    case "compositionend":
      return by(t);
    case "keypress":
      return t.which !== 32 ? null : ((Rh = !0), kh);
    case "textInput":
      return (e = t.data), e === kh && Rh ? null : e;
    default:
      return null;
  }
}
function VS(e, t) {
  if (Xr)
    return e === "compositionend" || (!kd && Cy(e, t))
      ? ((e = Sy()), (Gs = bd = _n = null), (Xr = !1), e)
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
      return Ey && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var _S = {
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
function Ah(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!_S[e.type] : t === "textarea";
}
function Ty(e, t, n, r) {
  ny(r),
    (t = va(t, "onChange")),
    0 < t.length &&
      ((n = new Td("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var yo = null,
  Do = null;
function zS(e) {
  Iy(e, 0);
}
function Za(e) {
  var t = Jr(e);
  if (Yg(t)) return e;
}
function BS(e, t) {
  if (e === "change") return t;
}
var Py = !1;
if (cn) {
  var Ul;
  if (cn) {
    var Hl = "oninput" in document;
    if (!Hl) {
      var Mh = document.createElement("div");
      Mh.setAttribute("oninput", "return;"),
        (Hl = typeof Mh.oninput == "function");
    }
    Ul = Hl;
  } else Ul = !1;
  Py = Ul && (!document.documentMode || 9 < document.documentMode);
}
function Nh() {
  yo && (yo.detachEvent("onpropertychange", ky), (Do = yo = null));
}
function ky(e) {
  if (e.propertyName === "value" && Za(Do)) {
    var t = [];
    Ty(t, Do, e, xd(e)), sy(zS, t);
  }
}
function $S(e, t, n) {
  e === "focusin"
    ? (Nh(), (yo = t), (Do = n), yo.attachEvent("onpropertychange", ky))
    : e === "focusout" && Nh();
}
function WS(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Za(Do);
}
function US(e, t) {
  if (e === "click") return Za(t);
}
function HS(e, t) {
  if (e === "input" || e === "change") return Za(t);
}
function KS(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var It = typeof Object.is == "function" ? Object.is : KS;
function Oo(e, t) {
  if (It(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Nu.call(t, i) || !It(e[i], t[i])) return !1;
  }
  return !0;
}
function jh(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Lh(e, t) {
  var n = jh(e);
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
    n = jh(n);
  }
}
function Ry(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Ry(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Ay() {
  for (var e = window, t = da(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = da(e.document);
  }
  return t;
}
function Rd(e) {
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
function GS(e) {
  var t = Ay(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Ry(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Rd(n)) {
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
          (i = Lh(n, o));
        var s = Lh(n, r);
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
var QS = cn && "documentMode" in document && 11 >= document.documentMode,
  qr = null,
  Xu = null,
  vo = null,
  qu = !1;
function Dh(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  qu ||
    qr == null ||
    qr !== da(r) ||
    ((r = qr),
    "selectionStart" in r && Rd(r)
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
    (vo && Oo(vo, r)) ||
      ((vo = r),
      (r = va(Xu, "onSelect")),
      0 < r.length &&
        ((t = new Td("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = qr))));
}
function Ps(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Zr = {
    animationend: Ps("Animation", "AnimationEnd"),
    animationiteration: Ps("Animation", "AnimationIteration"),
    animationstart: Ps("Animation", "AnimationStart"),
    transitionend: Ps("Transition", "TransitionEnd"),
  },
  Kl = {},
  My = {};
cn &&
  ((My = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Zr.animationend.animation,
    delete Zr.animationiteration.animation,
    delete Zr.animationstart.animation),
  "TransitionEvent" in window || delete Zr.transitionend.transition);
function Ja(e) {
  if (Kl[e]) return Kl[e];
  if (!Zr[e]) return e;
  var t = Zr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in My) return (Kl[e] = t[n]);
  return e;
}
var Ny = Ja("animationend"),
  jy = Ja("animationiteration"),
  Ly = Ja("animationstart"),
  Dy = Ja("transitionend"),
  Oy = new Map(),
  Oh =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function or(e, t) {
  Oy.set(e, t), Fr(t, [e]);
}
for (var Gl = 0; Gl < Oh.length; Gl++) {
  var Ql = Oh[Gl],
    YS = Ql.toLowerCase(),
    XS = Ql[0].toUpperCase() + Ql.slice(1);
  or(YS, "on" + XS);
}
or(Ny, "onAnimationEnd");
or(jy, "onAnimationIteration");
or(Ly, "onAnimationStart");
or("dblclick", "onDoubleClick");
or("focusin", "onFocus");
or("focusout", "onBlur");
or(Dy, "onTransitionEnd");
Ai("onMouseEnter", ["mouseout", "mouseover"]);
Ai("onMouseLeave", ["mouseout", "mouseover"]);
Ai("onPointerEnter", ["pointerout", "pointerover"]);
Ai("onPointerLeave", ["pointerout", "pointerover"]);
Fr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Fr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Fr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Fr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Fr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Fr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var fo =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  qS = new Set("cancel close invalid load scroll toggle".split(" ").concat(fo));
function Ih(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Y1(r, t, void 0, e), (e.currentTarget = null);
}
function Iy(e, t) {
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
            u = a.currentTarget;
          if (((a = a.listener), l !== o && i.isPropagationStopped())) break e;
          Ih(i, a, u), (o = l);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== o && i.isPropagationStopped())
          )
            break e;
          Ih(i, a, u), (o = l);
        }
    }
  }
  if (ha) throw ((e = Ku), (ha = !1), (Ku = null), e);
}
function ae(e, t) {
  var n = t[nc];
  n === void 0 && (n = t[nc] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Fy(t, e, 2, !1), n.add(r));
}
function Yl(e, t, n) {
  var r = 0;
  t && (r |= 4), Fy(n, e, r, t);
}
var ks = "_reactListening" + Math.random().toString(36).slice(2);
function Io(e) {
  if (!e[ks]) {
    (e[ks] = !0),
      Ug.forEach(function (n) {
        n !== "selectionchange" && (qS.has(n) || Yl(n, !1, e), Yl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ks] || ((t[ks] = !0), Yl("selectionchange", !1, t));
  }
}
function Fy(e, t, n, r) {
  switch (wy(t)) {
    case 1:
      var i = dS;
      break;
    case 4:
      i = fS;
      break;
    default:
      i = Cd;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Hu ||
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
function Xl(e, t, n, r, i) {
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
          if (((s = yr(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = o = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  sy(function () {
    var u = o,
      c = xd(n),
      d = [];
    e: {
      var f = Oy.get(e);
      if (f !== void 0) {
        var h = Td,
          v = e;
        switch (e) {
          case "keypress":
            if (Qs(n) === 0) break e;
          case "keydown":
          case "keyup":
            h = kS;
            break;
          case "focusin":
            (v = "focus"), (h = Wl);
            break;
          case "focusout":
            (v = "blur"), (h = Wl);
            break;
          case "beforeblur":
          case "afterblur":
            h = Wl;
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
            h = bh;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = mS;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = MS;
            break;
          case Ny:
          case jy:
          case Ly:
            h = vS;
            break;
          case Dy:
            h = jS;
            break;
          case "scroll":
            h = hS;
            break;
          case "wheel":
            h = DS;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = wS;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = Ph;
        }
        var g = (t & 4) !== 0,
          x = !g && e === "scroll",
          p = g ? (f !== null ? f + "Capture" : null) : f;
        g = [];
        for (var m = u, y; m !== null; ) {
          y = m;
          var E = y.stateNode;
          if (
            (y.tag === 5 &&
              E !== null &&
              ((y = E),
              p !== null && ((E = Mo(m, p)), E != null && g.push(Fo(m, E, y)))),
            x)
          )
            break;
          m = m.return;
        }
        0 < g.length &&
          ((f = new h(f, v, null, n, c)), d.push({ event: f, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (h = e === "mouseout" || e === "pointerout"),
          f &&
            n !== Wu &&
            (v = n.relatedTarget || n.fromElement) &&
            (yr(v) || v[dn]))
        )
          break e;
        if (
          (h || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          h
            ? ((v = n.relatedTarget || n.toElement),
              (h = u),
              (v = v ? yr(v) : null),
              v !== null &&
                ((x = Vr(v)), v !== x || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((h = null), (v = u)),
          h !== v)
        ) {
          if (
            ((g = bh),
            (E = "onMouseLeave"),
            (p = "onMouseEnter"),
            (m = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = Ph),
              (E = "onPointerLeave"),
              (p = "onPointerEnter"),
              (m = "pointer")),
            (x = h == null ? f : Jr(h)),
            (y = v == null ? f : Jr(v)),
            (f = new g(E, m + "leave", h, n, c)),
            (f.target = x),
            (f.relatedTarget = y),
            (E = null),
            yr(c) === u &&
              ((g = new g(p, m + "enter", v, n, c)),
              (g.target = y),
              (g.relatedTarget = x),
              (E = g)),
            (x = E),
            h && v)
          )
            t: {
              for (g = h, p = v, m = 0, y = g; y; y = Kr(y)) m++;
              for (y = 0, E = p; E; E = Kr(E)) y++;
              for (; 0 < m - y; ) (g = Kr(g)), m--;
              for (; 0 < y - m; ) (p = Kr(p)), y--;
              for (; m--; ) {
                if (g === p || (p !== null && g === p.alternate)) break t;
                (g = Kr(g)), (p = Kr(p));
              }
              g = null;
            }
          else g = null;
          h !== null && Fh(d, f, h, g, !1),
            v !== null && x !== null && Fh(d, x, v, g, !0);
        }
      }
      e: {
        if (
          ((f = u ? Jr(u) : window),
          (h = f.nodeName && f.nodeName.toLowerCase()),
          h === "select" || (h === "input" && f.type === "file"))
        )
          var C = BS;
        else if (Ah(f))
          if (Py) C = HS;
          else {
            C = WS;
            var b = $S;
          }
        else
          (h = f.nodeName) &&
            h.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (C = US);
        if (C && (C = C(e, u))) {
          Ty(d, C, n, c);
          break e;
        }
        b && b(e, f, u),
          e === "focusout" &&
            (b = f._wrapperState) &&
            b.controlled &&
            f.type === "number" &&
            Vu(f, "number", f.value);
      }
      switch (((b = u ? Jr(u) : window), e)) {
        case "focusin":
          (Ah(b) || b.contentEditable === "true") &&
            ((qr = b), (Xu = u), (vo = null));
          break;
        case "focusout":
          vo = Xu = qr = null;
          break;
        case "mousedown":
          qu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (qu = !1), Dh(d, n, c);
          break;
        case "selectionchange":
          if (QS) break;
        case "keydown":
        case "keyup":
          Dh(d, n, c);
      }
      var T;
      if (kd)
        e: {
          switch (e) {
            case "compositionstart":
              var P = "onCompositionStart";
              break e;
            case "compositionend":
              P = "onCompositionEnd";
              break e;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break e;
          }
          P = void 0;
        }
      else
        Xr
          ? Cy(e, n) && (P = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P &&
        (Ey &&
          n.locale !== "ko" &&
          (Xr || P !== "onCompositionStart"
            ? P === "onCompositionEnd" && Xr && (T = Sy())
            : ((_n = c),
              (bd = "value" in _n ? _n.value : _n.textContent),
              (Xr = !0))),
        (b = va(u, P)),
        0 < b.length &&
          ((P = new Th(P, e, null, n, c)),
          d.push({ event: P, listeners: b }),
          T ? (P.data = T) : ((T = by(n)), T !== null && (P.data = T)))),
        (T = IS ? FS(e, n) : VS(e, n)) &&
          ((u = va(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Th("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = T)));
    }
    Iy(d, t);
  });
}
function Fo(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function va(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = Mo(e, n)),
      o != null && r.unshift(Fo(e, o, i)),
      (o = Mo(e, t)),
      o != null && r.push(Fo(e, o, i))),
      (e = e.return);
  }
  return r;
}
function Kr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Fh(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((l = Mo(n, o)), l != null && s.unshift(Fo(n, l, a)))
        : i || ((l = Mo(n, o)), l != null && s.push(Fo(n, l, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var ZS = /\r\n?/g,
  JS = /\u0000|\uFFFD/g;
function Vh(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      ZS,
      `
`
    )
    .replace(JS, "");
}
function Rs(e, t, n) {
  if (((t = Vh(t)), Vh(e) !== t && n)) throw Error(j(425));
}
function xa() {}
var Zu = null,
  Ju = null;
function ec(e, t) {
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
var tc = typeof setTimeout == "function" ? setTimeout : void 0,
  e2 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  _h = typeof Promise == "function" ? Promise : void 0,
  t2 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof _h < "u"
      ? function (e) {
          return _h.resolve(null).then(e).catch(n2);
        }
      : tc;
function n2(e) {
  setTimeout(function () {
    throw e;
  });
}
function ql(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Lo(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Lo(t);
}
function Kn(e) {
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
function zh(e) {
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
var $i = Math.random().toString(36).slice(2),
  Kt = "__reactFiber$" + $i,
  Vo = "__reactProps$" + $i,
  dn = "__reactContainer$" + $i,
  nc = "__reactEvents$" + $i,
  r2 = "__reactListeners$" + $i,
  i2 = "__reactHandles$" + $i;
function yr(e) {
  var t = e[Kt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[dn] || n[Kt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = zh(e); e !== null; ) {
          if ((n = e[Kt])) return n;
          e = zh(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function os(e) {
  return (
    (e = e[Kt] || e[dn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Jr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(j(33));
}
function el(e) {
  return e[Vo] || null;
}
var rc = [],
  ei = -1;
function sr(e) {
  return { current: e };
}
function le(e) {
  0 > ei || ((e.current = rc[ei]), (rc[ei] = null), ei--);
}
function ie(e, t) {
  ei++, (rc[ei] = e.current), (e.current = t);
}
var Zn = {},
  _e = sr(Zn),
  qe = sr(!1),
  Nr = Zn;
function Mi(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Zn;
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
function Ze(e) {
  return (e = e.childContextTypes), e != null;
}
function wa() {
  le(qe), le(_e);
}
function Bh(e, t, n) {
  if (_e.current !== Zn) throw Error(j(168));
  ie(_e, t), ie(qe, n);
}
function Vy(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(j(108, $1(e) || "Unknown", i));
  return me({}, n, r);
}
function Sa(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Zn),
    (Nr = _e.current),
    ie(_e, e),
    ie(qe, qe.current),
    !0
  );
}
function $h(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(j(169));
  n
    ? ((e = Vy(e, t, Nr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      le(qe),
      le(_e),
      ie(_e, e))
    : le(qe),
    ie(qe, n);
}
var on = null,
  tl = !1,
  Zl = !1;
function _y(e) {
  on === null ? (on = [e]) : on.push(e);
}
function o2(e) {
  (tl = !0), _y(e);
}
function ar() {
  if (!Zl && on !== null) {
    Zl = !0;
    var e = 0,
      t = te;
    try {
      var n = on;
      for (te = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (on = null), (tl = !1);
    } catch (i) {
      throw (on !== null && (on = on.slice(e + 1)), cy(wd, ar), i);
    } finally {
      (te = t), (Zl = !1);
    }
  }
  return null;
}
var ti = [],
  ni = 0,
  Ea = null,
  Ca = 0,
  ft = [],
  ht = 0,
  jr = null,
  an = 1,
  ln = "";
function pr(e, t) {
  (ti[ni++] = Ca), (ti[ni++] = Ea), (Ea = e), (Ca = t);
}
function zy(e, t, n) {
  (ft[ht++] = an), (ft[ht++] = ln), (ft[ht++] = jr), (jr = e);
  var r = an;
  e = ln;
  var i = 32 - Lt(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - Lt(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    (o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (an = (1 << (32 - Lt(t) + i)) | (n << i) | r),
      (ln = o + e);
  } else (an = (1 << o) | (n << i) | r), (ln = e);
}
function Ad(e) {
  e.return !== null && (pr(e, 1), zy(e, 1, 0));
}
function Md(e) {
  for (; e === Ea; )
    (Ea = ti[--ni]), (ti[ni] = null), (Ca = ti[--ni]), (ti[ni] = null);
  for (; e === jr; )
    (jr = ft[--ht]),
      (ft[ht] = null),
      (ln = ft[--ht]),
      (ft[ht] = null),
      (an = ft[--ht]),
      (ft[ht] = null);
}
var ot = null,
  it = null,
  ce = !1,
  jt = null;
function By(e, t) {
  var n = pt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Wh(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ot = e), (it = Kn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ot = e), (it = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = jr !== null ? { id: an, overflow: ln } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = pt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ot = e),
            (it = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ic(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function oc(e) {
  if (ce) {
    var t = it;
    if (t) {
      var n = t;
      if (!Wh(e, t)) {
        if (ic(e)) throw Error(j(418));
        t = Kn(n.nextSibling);
        var r = ot;
        t && Wh(e, t)
          ? By(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ce = !1), (ot = e));
      }
    } else {
      if (ic(e)) throw Error(j(418));
      (e.flags = (e.flags & -4097) | 2), (ce = !1), (ot = e);
    }
  }
}
function Uh(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ot = e;
}
function As(e) {
  if (e !== ot) return !1;
  if (!ce) return Uh(e), (ce = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !ec(e.type, e.memoizedProps))),
    t && (t = it))
  ) {
    if (ic(e)) throw ($y(), Error(j(418)));
    for (; t; ) By(e, t), (t = Kn(t.nextSibling));
  }
  if ((Uh(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(j(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              it = Kn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      it = null;
    }
  } else it = ot ? Kn(e.stateNode.nextSibling) : null;
  return !0;
}
function $y() {
  for (var e = it; e; ) e = Kn(e.nextSibling);
}
function Ni() {
  (it = ot = null), (ce = !1);
}
function Nd(e) {
  jt === null ? (jt = [e]) : jt.push(e);
}
var s2 = yn.ReactCurrentBatchConfig;
function no(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(j(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(j(147, e));
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
    if (typeof e != "string") throw Error(j(284));
    if (!n._owner) throw Error(j(290, e));
  }
  return e;
}
function Ms(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      j(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Hh(e) {
  var t = e._init;
  return t(e._payload);
}
function Wy(e) {
  function t(p, m) {
    if (e) {
      var y = p.deletions;
      y === null ? ((p.deletions = [m]), (p.flags |= 16)) : y.push(m);
    }
  }
  function n(p, m) {
    if (!e) return null;
    for (; m !== null; ) t(p, m), (m = m.sibling);
    return null;
  }
  function r(p, m) {
    for (p = new Map(); m !== null; )
      m.key !== null ? p.set(m.key, m) : p.set(m.index, m), (m = m.sibling);
    return p;
  }
  function i(p, m) {
    return (p = Xn(p, m)), (p.index = 0), (p.sibling = null), p;
  }
  function o(p, m, y) {
    return (
      (p.index = y),
      e
        ? ((y = p.alternate),
          y !== null
            ? ((y = y.index), y < m ? ((p.flags |= 2), m) : y)
            : ((p.flags |= 2), m))
        : ((p.flags |= 1048576), m)
    );
  }
  function s(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function a(p, m, y, E) {
    return m === null || m.tag !== 6
      ? ((m = ou(y, p.mode, E)), (m.return = p), m)
      : ((m = i(m, y)), (m.return = p), m);
  }
  function l(p, m, y, E) {
    var C = y.type;
    return C === Yr
      ? c(p, m, y.props.children, E, y.key)
      : m !== null &&
        (m.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === Mn &&
            Hh(C) === m.type))
      ? ((E = i(m, y.props)), (E.ref = no(p, m, y)), (E.return = p), E)
      : ((E = ta(y.type, y.key, y.props, null, p.mode, E)),
        (E.ref = no(p, m, y)),
        (E.return = p),
        E);
  }
  function u(p, m, y, E) {
    return m === null ||
      m.tag !== 4 ||
      m.stateNode.containerInfo !== y.containerInfo ||
      m.stateNode.implementation !== y.implementation
      ? ((m = su(y, p.mode, E)), (m.return = p), m)
      : ((m = i(m, y.children || [])), (m.return = p), m);
  }
  function c(p, m, y, E, C) {
    return m === null || m.tag !== 7
      ? ((m = Ar(y, p.mode, E, C)), (m.return = p), m)
      : ((m = i(m, y)), (m.return = p), m);
  }
  function d(p, m, y) {
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return (m = ou("" + m, p.mode, y)), (m.return = p), m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case xs:
          return (
            (y = ta(m.type, m.key, m.props, null, p.mode, y)),
            (y.ref = no(p, null, m)),
            (y.return = p),
            y
          );
        case Qr:
          return (m = su(m, p.mode, y)), (m.return = p), m;
        case Mn:
          var E = m._init;
          return d(p, E(m._payload), y);
      }
      if (uo(m) || qi(m))
        return (m = Ar(m, p.mode, y, null)), (m.return = p), m;
      Ms(p, m);
    }
    return null;
  }
  function f(p, m, y, E) {
    var C = m !== null ? m.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return C !== null ? null : a(p, m, "" + y, E);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case xs:
          return y.key === C ? l(p, m, y, E) : null;
        case Qr:
          return y.key === C ? u(p, m, y, E) : null;
        case Mn:
          return (C = y._init), f(p, m, C(y._payload), E);
      }
      if (uo(y) || qi(y)) return C !== null ? null : c(p, m, y, E, null);
      Ms(p, y);
    }
    return null;
  }
  function h(p, m, y, E, C) {
    if ((typeof E == "string" && E !== "") || typeof E == "number")
      return (p = p.get(y) || null), a(m, p, "" + E, C);
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case xs:
          return (p = p.get(E.key === null ? y : E.key) || null), l(m, p, E, C);
        case Qr:
          return (p = p.get(E.key === null ? y : E.key) || null), u(m, p, E, C);
        case Mn:
          var b = E._init;
          return h(p, m, y, b(E._payload), C);
      }
      if (uo(E) || qi(E)) return (p = p.get(y) || null), c(m, p, E, C, null);
      Ms(m, E);
    }
    return null;
  }
  function v(p, m, y, E) {
    for (
      var C = null, b = null, T = m, P = (m = 0), M = null;
      T !== null && P < y.length;
      P++
    ) {
      T.index > P ? ((M = T), (T = null)) : (M = T.sibling);
      var N = f(p, T, y[P], E);
      if (N === null) {
        T === null && (T = M);
        break;
      }
      e && T && N.alternate === null && t(p, T),
        (m = o(N, m, P)),
        b === null ? (C = N) : (b.sibling = N),
        (b = N),
        (T = M);
    }
    if (P === y.length) return n(p, T), ce && pr(p, P), C;
    if (T === null) {
      for (; P < y.length; P++)
        (T = d(p, y[P], E)),
          T !== null &&
            ((m = o(T, m, P)), b === null ? (C = T) : (b.sibling = T), (b = T));
      return ce && pr(p, P), C;
    }
    for (T = r(p, T); P < y.length; P++)
      (M = h(T, p, P, y[P], E)),
        M !== null &&
          (e && M.alternate !== null && T.delete(M.key === null ? P : M.key),
          (m = o(M, m, P)),
          b === null ? (C = M) : (b.sibling = M),
          (b = M));
    return (
      e &&
        T.forEach(function (z) {
          return t(p, z);
        }),
      ce && pr(p, P),
      C
    );
  }
  function g(p, m, y, E) {
    var C = qi(y);
    if (typeof C != "function") throw Error(j(150));
    if (((y = C.call(y)), y == null)) throw Error(j(151));
    for (
      var b = (C = null), T = m, P = (m = 0), M = null, N = y.next();
      T !== null && !N.done;
      P++, N = y.next()
    ) {
      T.index > P ? ((M = T), (T = null)) : (M = T.sibling);
      var z = f(p, T, N.value, E);
      if (z === null) {
        T === null && (T = M);
        break;
      }
      e && T && z.alternate === null && t(p, T),
        (m = o(z, m, P)),
        b === null ? (C = z) : (b.sibling = z),
        (b = z),
        (T = M);
    }
    if (N.done) return n(p, T), ce && pr(p, P), C;
    if (T === null) {
      for (; !N.done; P++, N = y.next())
        (N = d(p, N.value, E)),
          N !== null &&
            ((m = o(N, m, P)), b === null ? (C = N) : (b.sibling = N), (b = N));
      return ce && pr(p, P), C;
    }
    for (T = r(p, T); !N.done; P++, N = y.next())
      (N = h(T, p, P, N.value, E)),
        N !== null &&
          (e && N.alternate !== null && T.delete(N.key === null ? P : N.key),
          (m = o(N, m, P)),
          b === null ? (C = N) : (b.sibling = N),
          (b = N));
    return (
      e &&
        T.forEach(function (I) {
          return t(p, I);
        }),
      ce && pr(p, P),
      C
    );
  }
  function x(p, m, y, E) {
    if (
      (typeof y == "object" &&
        y !== null &&
        y.type === Yr &&
        y.key === null &&
        (y = y.props.children),
      typeof y == "object" && y !== null)
    ) {
      switch (y.$$typeof) {
        case xs:
          e: {
            for (var C = y.key, b = m; b !== null; ) {
              if (b.key === C) {
                if (((C = y.type), C === Yr)) {
                  if (b.tag === 7) {
                    n(p, b.sibling),
                      (m = i(b, y.props.children)),
                      (m.return = p),
                      (p = m);
                    break e;
                  }
                } else if (
                  b.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === Mn &&
                    Hh(C) === b.type)
                ) {
                  n(p, b.sibling),
                    (m = i(b, y.props)),
                    (m.ref = no(p, b, y)),
                    (m.return = p),
                    (p = m);
                  break e;
                }
                n(p, b);
                break;
              } else t(p, b);
              b = b.sibling;
            }
            y.type === Yr
              ? ((m = Ar(y.props.children, p.mode, E, y.key)),
                (m.return = p),
                (p = m))
              : ((E = ta(y.type, y.key, y.props, null, p.mode, E)),
                (E.ref = no(p, m, y)),
                (E.return = p),
                (p = E));
          }
          return s(p);
        case Qr:
          e: {
            for (b = y.key; m !== null; ) {
              if (m.key === b)
                if (
                  m.tag === 4 &&
                  m.stateNode.containerInfo === y.containerInfo &&
                  m.stateNode.implementation === y.implementation
                ) {
                  n(p, m.sibling),
                    (m = i(m, y.children || [])),
                    (m.return = p),
                    (p = m);
                  break e;
                } else {
                  n(p, m);
                  break;
                }
              else t(p, m);
              m = m.sibling;
            }
            (m = su(y, p.mode, E)), (m.return = p), (p = m);
          }
          return s(p);
        case Mn:
          return (b = y._init), x(p, m, b(y._payload), E);
      }
      if (uo(y)) return v(p, m, y, E);
      if (qi(y)) return g(p, m, y, E);
      Ms(p, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number"
      ? ((y = "" + y),
        m !== null && m.tag === 6
          ? (n(p, m.sibling), (m = i(m, y)), (m.return = p), (p = m))
          : (n(p, m), (m = ou(y, p.mode, E)), (m.return = p), (p = m)),
        s(p))
      : n(p, m);
  }
  return x;
}
var ji = Wy(!0),
  Uy = Wy(!1),
  ba = sr(null),
  Ta = null,
  ri = null,
  jd = null;
function Ld() {
  jd = ri = Ta = null;
}
function Dd(e) {
  var t = ba.current;
  le(ba), (e._currentValue = t);
}
function sc(e, t, n) {
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
function mi(e, t) {
  (Ta = e),
    (jd = ri = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Xe = !0), (e.firstContext = null));
}
function vt(e) {
  var t = e._currentValue;
  if (jd !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), ri === null)) {
      if (Ta === null) throw Error(j(308));
      (ri = e), (Ta.dependencies = { lanes: 0, firstContext: e });
    } else ri = ri.next = e;
  return t;
}
var vr = null;
function Od(e) {
  vr === null ? (vr = [e]) : vr.push(e);
}
function Hy(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Od(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    fn(e, r)
  );
}
function fn(e, t) {
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
var Nn = !1;
function Id(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Ky(e, t) {
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
function un(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Gn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Z & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      fn(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Od(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    fn(e, n)
  );
}
function Ys(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Sd(e, n);
  }
}
function Kh(e, t) {
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
function Pa(e, t, n, r) {
  var i = e.updateQueue;
  Nn = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), s === null ? (o = u) : (s.next = u), (s = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== s &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (o !== null) {
    var d = i.baseState;
    (s = 0), (c = u = l = null), (a = o);
    do {
      var f = a.lane,
        h = a.eventTime;
      if ((r & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: h,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var v = e,
            g = a;
          switch (((f = t), (h = n), g.tag)) {
            case 1:
              if (((v = g.payload), typeof v == "function")) {
                d = v.call(h, d, f);
                break e;
              }
              d = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = g.payload),
                (f = typeof v == "function" ? v.call(h, d, f) : v),
                f == null)
              )
                break e;
              d = me({}, d, f);
              break e;
            case 2:
              Nn = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (f = i.effects),
          f === null ? (i.effects = [a]) : f.push(a));
      } else
        (h = {
          eventTime: h,
          lane: f,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = h), (l = d)) : (c = c.next = h),
          (s |= f);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (f = a),
          (a = f.next),
          (f.next = null),
          (i.lastBaseUpdate = f),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (l = d),
      (i.baseState = l),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (Dr |= s), (e.lanes = s), (e.memoizedState = d);
  }
}
function Gh(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(j(191, i));
        i.call(r);
      }
    }
}
var ss = {},
  Yt = sr(ss),
  _o = sr(ss),
  zo = sr(ss);
function xr(e) {
  if (e === ss) throw Error(j(174));
  return e;
}
function Fd(e, t) {
  switch ((ie(zo, t), ie(_o, e), ie(Yt, ss), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : zu(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = zu(t, e));
  }
  le(Yt), ie(Yt, t);
}
function Li() {
  le(Yt), le(_o), le(zo);
}
function Gy(e) {
  xr(zo.current);
  var t = xr(Yt.current),
    n = zu(t, e.type);
  t !== n && (ie(_o, e), ie(Yt, n));
}
function Vd(e) {
  _o.current === e && (le(Yt), le(_o));
}
var fe = sr(0);
function ka(e) {
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
var Jl = [];
function _d() {
  for (var e = 0; e < Jl.length; e++)
    Jl[e]._workInProgressVersionPrimary = null;
  Jl.length = 0;
}
var Xs = yn.ReactCurrentDispatcher,
  eu = yn.ReactCurrentBatchConfig,
  Lr = 0,
  pe = null,
  Ce = null,
  Pe = null,
  Ra = !1,
  xo = !1,
  Bo = 0,
  a2 = 0;
function De() {
  throw Error(j(321));
}
function zd(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!It(e[n], t[n])) return !1;
  return !0;
}
function Bd(e, t, n, r, i, o) {
  if (
    ((Lr = o),
    (pe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Xs.current = e === null || e.memoizedState === null ? d2 : f2),
    (e = n(r, i)),
    xo)
  ) {
    o = 0;
    do {
      if (((xo = !1), (Bo = 0), 25 <= o)) throw Error(j(301));
      (o += 1),
        (Pe = Ce = null),
        (t.updateQueue = null),
        (Xs.current = h2),
        (e = n(r, i));
    } while (xo);
  }
  if (
    ((Xs.current = Aa),
    (t = Ce !== null && Ce.next !== null),
    (Lr = 0),
    (Pe = Ce = pe = null),
    (Ra = !1),
    t)
  )
    throw Error(j(300));
  return e;
}
function $d() {
  var e = Bo !== 0;
  return (Bo = 0), e;
}
function Bt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Pe === null ? (pe.memoizedState = Pe = e) : (Pe = Pe.next = e), Pe;
}
function xt() {
  if (Ce === null) {
    var e = pe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ce.next;
  var t = Pe === null ? pe.memoizedState : Pe.next;
  if (t !== null) (Pe = t), (Ce = e);
  else {
    if (e === null) throw Error(j(310));
    (Ce = e),
      (e = {
        memoizedState: Ce.memoizedState,
        baseState: Ce.baseState,
        baseQueue: Ce.baseQueue,
        queue: Ce.queue,
        next: null,
      }),
      Pe === null ? (pe.memoizedState = Pe = e) : (Pe = Pe.next = e);
  }
  return Pe;
}
function $o(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function tu(e) {
  var t = xt(),
    n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = Ce,
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
      u = o;
    do {
      var c = u.lane;
      if ((Lr & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = d), (s = r)) : (l = l.next = d),
          (pe.lanes |= c),
          (Dr |= c);
      }
      u = u.next;
    } while (u !== null && u !== o);
    l === null ? (s = r) : (l.next = a),
      It(r, t.memoizedState) || (Xe = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (pe.lanes |= o), (Dr |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function nu(e) {
  var t = xt(),
    n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (o = e(o, s.action)), (s = s.next);
    while (s !== i);
    It(o, t.memoizedState) || (Xe = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Qy() {}
function Yy(e, t) {
  var n = pe,
    r = xt(),
    i = t(),
    o = !It(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (Xe = !0)),
    (r = r.queue),
    Wd(Zy.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (Pe !== null && Pe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Wo(9, qy.bind(null, n, r, i, t), void 0, null),
      ke === null)
    )
      throw Error(j(349));
    Lr & 30 || Xy(n, t, i);
  }
  return i;
}
function Xy(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = pe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (pe.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function qy(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Jy(t) && e0(e);
}
function Zy(e, t, n) {
  return n(function () {
    Jy(t) && e0(e);
  });
}
function Jy(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !It(e, n);
  } catch {
    return !0;
  }
}
function e0(e) {
  var t = fn(e, 1);
  t !== null && Dt(t, e, 1, -1);
}
function Qh(e) {
  var t = Bt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: $o,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = c2.bind(null, pe, e)),
    [t.memoizedState, e]
  );
}
function Wo(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = pe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (pe.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function t0() {
  return xt().memoizedState;
}
function qs(e, t, n, r) {
  var i = Bt();
  (pe.flags |= e),
    (i.memoizedState = Wo(1 | t, n, void 0, r === void 0 ? null : r));
}
function nl(e, t, n, r) {
  var i = xt();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Ce !== null) {
    var s = Ce.memoizedState;
    if (((o = s.destroy), r !== null && zd(r, s.deps))) {
      i.memoizedState = Wo(t, n, o, r);
      return;
    }
  }
  (pe.flags |= e), (i.memoizedState = Wo(1 | t, n, o, r));
}
function Yh(e, t) {
  return qs(8390656, 8, e, t);
}
function Wd(e, t) {
  return nl(2048, 8, e, t);
}
function n0(e, t) {
  return nl(4, 2, e, t);
}
function r0(e, t) {
  return nl(4, 4, e, t);
}
function i0(e, t) {
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
function o0(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), nl(4, 4, i0.bind(null, t, e), n)
  );
}
function Ud() {}
function s0(e, t) {
  var n = xt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && zd(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function a0(e, t) {
  var n = xt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && zd(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function l0(e, t, n) {
  return Lr & 21
    ? (It(n, t) || ((n = hy()), (pe.lanes |= n), (Dr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Xe = !0)), (e.memoizedState = n));
}
function l2(e, t) {
  var n = te;
  (te = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = eu.transition;
  eu.transition = {};
  try {
    e(!1), t();
  } finally {
    (te = n), (eu.transition = r);
  }
}
function u0() {
  return xt().memoizedState;
}
function u2(e, t, n) {
  var r = Yn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    c0(e))
  )
    d0(t, n);
  else if (((n = Hy(e, t, n, r)), n !== null)) {
    var i = He();
    Dt(n, e, r, i), f0(n, t, r);
  }
}
function c2(e, t, n) {
  var r = Yn(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (c0(e)) d0(t, i);
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
        if (((i.hasEagerState = !0), (i.eagerState = a), It(a, s))) {
          var l = t.interleaved;
          l === null
            ? ((i.next = i), Od(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Hy(e, t, i, r)),
      n !== null && ((i = He()), Dt(n, e, r, i), f0(n, t, r));
  }
}
function c0(e) {
  var t = e.alternate;
  return e === pe || (t !== null && t === pe);
}
function d0(e, t) {
  xo = Ra = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function f0(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Sd(e, n);
  }
}
var Aa = {
    readContext: vt,
    useCallback: De,
    useContext: De,
    useEffect: De,
    useImperativeHandle: De,
    useInsertionEffect: De,
    useLayoutEffect: De,
    useMemo: De,
    useReducer: De,
    useRef: De,
    useState: De,
    useDebugValue: De,
    useDeferredValue: De,
    useTransition: De,
    useMutableSource: De,
    useSyncExternalStore: De,
    useId: De,
    unstable_isNewReconciler: !1,
  },
  d2 = {
    readContext: vt,
    useCallback: function (e, t) {
      return (Bt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: vt,
    useEffect: Yh,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        qs(4194308, 4, i0.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return qs(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return qs(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Bt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Bt();
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
        (e = e.dispatch = u2.bind(null, pe, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Bt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Qh,
    useDebugValue: Ud,
    useDeferredValue: function (e) {
      return (Bt().memoizedState = e);
    },
    useTransition: function () {
      var e = Qh(!1),
        t = e[0];
      return (e = l2.bind(null, e[1])), (Bt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = pe,
        i = Bt();
      if (ce) {
        if (n === void 0) throw Error(j(407));
        n = n();
      } else {
        if (((n = t()), ke === null)) throw Error(j(349));
        Lr & 30 || Xy(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        Yh(Zy.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Wo(9, qy.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Bt(),
        t = ke.identifierPrefix;
      if (ce) {
        var n = ln,
          r = an;
        (n = (r & ~(1 << (32 - Lt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Bo++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = a2++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  f2 = {
    readContext: vt,
    useCallback: s0,
    useContext: vt,
    useEffect: Wd,
    useImperativeHandle: o0,
    useInsertionEffect: n0,
    useLayoutEffect: r0,
    useMemo: a0,
    useReducer: tu,
    useRef: t0,
    useState: function () {
      return tu($o);
    },
    useDebugValue: Ud,
    useDeferredValue: function (e) {
      var t = xt();
      return l0(t, Ce.memoizedState, e);
    },
    useTransition: function () {
      var e = tu($o)[0],
        t = xt().memoizedState;
      return [e, t];
    },
    useMutableSource: Qy,
    useSyncExternalStore: Yy,
    useId: u0,
    unstable_isNewReconciler: !1,
  },
  h2 = {
    readContext: vt,
    useCallback: s0,
    useContext: vt,
    useEffect: Wd,
    useImperativeHandle: o0,
    useInsertionEffect: n0,
    useLayoutEffect: r0,
    useMemo: a0,
    useReducer: nu,
    useRef: t0,
    useState: function () {
      return nu($o);
    },
    useDebugValue: Ud,
    useDeferredValue: function (e) {
      var t = xt();
      return Ce === null ? (t.memoizedState = e) : l0(t, Ce.memoizedState, e);
    },
    useTransition: function () {
      var e = nu($o)[0],
        t = xt().memoizedState;
      return [e, t];
    },
    useMutableSource: Qy,
    useSyncExternalStore: Yy,
    useId: u0,
    unstable_isNewReconciler: !1,
  };
function kt(e, t) {
  if (e && e.defaultProps) {
    (t = me({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function ac(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : me({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var rl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Vr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = He(),
      i = Yn(e),
      o = un(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Gn(e, o, i)),
      t !== null && (Dt(t, e, i, r), Ys(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = He(),
      i = Yn(e),
      o = un(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Gn(e, o, i)),
      t !== null && (Dt(t, e, i, r), Ys(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = He(),
      r = Yn(e),
      i = un(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Gn(e, i, r)),
      t !== null && (Dt(t, e, r, n), Ys(t, e, r));
  },
};
function Xh(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Oo(n, r) || !Oo(i, o)
      : !0
  );
}
function h0(e, t, n) {
  var r = !1,
    i = Zn,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = vt(o))
      : ((i = Ze(t) ? Nr : _e.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Mi(e, i) : Zn)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = rl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function qh(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && rl.enqueueReplaceState(t, t.state, null);
}
function lc(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), Id(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = vt(o))
    : ((o = Ze(t) ? Nr : _e.current), (i.context = Mi(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (ac(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && rl.enqueueReplaceState(i, i.state, null),
      Pa(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Di(e, t) {
  try {
    var n = "",
      r = t;
    do (n += B1(r)), (r = r.return);
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
function ru(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function uc(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var p2 = typeof WeakMap == "function" ? WeakMap : Map;
function p0(e, t, n) {
  (n = un(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Na || ((Na = !0), (xc = r)), uc(e, t);
    }),
    n
  );
}
function m0(e, t, n) {
  (n = un(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        uc(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        uc(e, t),
          typeof r != "function" &&
            (Qn === null ? (Qn = new Set([this])) : Qn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function Zh(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new p2();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = R2.bind(null, e, t, n)), t.then(e, e));
}
function Jh(e) {
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
function ep(e, t, n, r, i) {
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
              : ((t = un(-1, 1)), (t.tag = 2), Gn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var m2 = yn.ReactCurrentOwner,
  Xe = !1;
function Be(e, t, n, r) {
  t.child = e === null ? Uy(t, null, n, r) : ji(t, e.child, n, r);
}
function tp(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    mi(t, i),
    (r = Bd(e, t, n, r, o, i)),
    (n = $d()),
    e !== null && !Xe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        hn(e, t, i))
      : (ce && n && Ad(t), (t.flags |= 1), Be(e, t, r, i), t.child)
  );
}
function np(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Zd(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), g0(e, t, o, r, i))
      : ((e = ta(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Oo), n(s, r) && e.ref === t.ref)
    )
      return hn(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Xn(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function g0(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Oo(o, r) && e.ref === t.ref)
      if (((Xe = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (Xe = !0);
      else return (t.lanes = e.lanes), hn(e, t, i);
  }
  return cc(e, t, n, r, i);
}
function y0(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ie(oi, nt),
        (nt |= n);
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
          ie(oi, nt),
          (nt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        ie(oi, nt),
        (nt |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ie(oi, nt),
      (nt |= r);
  return Be(e, t, i, n), t.child;
}
function v0(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function cc(e, t, n, r, i) {
  var o = Ze(n) ? Nr : _e.current;
  return (
    (o = Mi(t, o)),
    mi(t, i),
    (n = Bd(e, t, n, r, o, i)),
    (r = $d()),
    e !== null && !Xe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        hn(e, t, i))
      : (ce && r && Ad(t), (t.flags |= 1), Be(e, t, n, i), t.child)
  );
}
function rp(e, t, n, r, i) {
  if (Ze(n)) {
    var o = !0;
    Sa(t);
  } else o = !1;
  if ((mi(t, i), t.stateNode === null))
    Zs(e, t), h0(t, n, r), lc(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = vt(u))
      : ((u = Ze(n) ? Nr : _e.current), (u = Mi(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && qh(t, s, r, u)),
      (Nn = !1);
    var f = t.memoizedState;
    (s.state = f),
      Pa(t, r, s, i),
      (l = t.memoizedState),
      a !== r || f !== l || qe.current || Nn
        ? (typeof c == "function" && (ac(t, n, c, r), (l = t.memoizedState)),
          (a = Nn || Xh(t, n, a, r, f, l, u))
            ? (d ||
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
          (s.context = u),
          (r = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      Ky(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : kt(t.type, a)),
      (s.props = u),
      (d = t.pendingProps),
      (f = s.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = vt(l))
        : ((l = Ze(n) ? Nr : _e.current), (l = Mi(t, l)));
    var h = n.getDerivedStateFromProps;
    (c =
      typeof h == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== d || f !== l) && qh(t, s, r, l)),
      (Nn = !1),
      (f = t.memoizedState),
      (s.state = f),
      Pa(t, r, s, i);
    var v = t.memoizedState;
    a !== d || f !== v || qe.current || Nn
      ? (typeof h == "function" && (ac(t, n, h, r), (v = t.memoizedState)),
        (u = Nn || Xh(t, n, u, r, f, v, l) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, v, l),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, v, l)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (s.props = r),
        (s.state = v),
        (s.context = l),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return dc(e, t, n, r, o, i);
}
function dc(e, t, n, r, i, o) {
  v0(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && $h(t, n, !1), hn(e, t, o);
  (r = t.stateNode), (m2.current = t);
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = ji(t, e.child, null, o)), (t.child = ji(t, null, a, o)))
      : Be(e, t, a, o),
    (t.memoizedState = r.state),
    i && $h(t, n, !0),
    t.child
  );
}
function x0(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Bh(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Bh(e, t.context, !1),
    Fd(e, t.containerInfo);
}
function ip(e, t, n, r, i) {
  return Ni(), Nd(i), (t.flags |= 256), Be(e, t, n, r), t.child;
}
var fc = { dehydrated: null, treeContext: null, retryLane: 0 };
function hc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function w0(e, t, n) {
  var r = t.pendingProps,
    i = fe.current,
    o = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    ie(fe, i & 1),
    e === null)
  )
    return (
      oc(t),
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
                : (o = sl(s, r, 0, null)),
              (e = Ar(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = hc(n)),
              (t.memoizedState = fc),
              e)
            : Hd(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return g2(e, t, s, r, a, i, n);
  if (o) {
    (o = r.fallback), (s = t.mode), (i = e.child), (a = i.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = Xn(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (o = Xn(a, o)) : ((o = Ar(o, s, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? hc(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = fc),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Xn(o, { mode: "visible", children: r.children })),
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
function Hd(e, t) {
  return (
    (t = sl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Ns(e, t, n, r) {
  return (
    r !== null && Nd(r),
    ji(t, e.child, null, n),
    (e = Hd(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function g2(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ru(Error(j(422)))), Ns(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = sl({ mode: "visible", children: r.children }, i, 0, null)),
        (o = Ar(o, i, s, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && ji(t, e.child, null, s),
        (t.child.memoizedState = hc(s)),
        (t.memoizedState = fc),
        o);
  if (!(t.mode & 1)) return Ns(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (o = Error(j(419))), (r = ru(o, r, void 0)), Ns(e, t, s, r);
  }
  if (((a = (s & e.childLanes) !== 0), Xe || a)) {
    if (((r = ke), r !== null)) {
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
          ((o.retryLane = i), fn(e, i), Dt(r, e, i, -1));
    }
    return qd(), (r = ru(Error(j(421)))), Ns(e, t, s, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = A2.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (it = Kn(i.nextSibling)),
      (ot = t),
      (ce = !0),
      (jt = null),
      e !== null &&
        ((ft[ht++] = an),
        (ft[ht++] = ln),
        (ft[ht++] = jr),
        (an = e.id),
        (ln = e.overflow),
        (jr = t)),
      (t = Hd(t, r.children)),
      (t.flags |= 4096),
      t);
}
function op(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), sc(e.return, t, n);
}
function iu(e, t, n, r, i) {
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
function S0(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((Be(e, t, r.children, n), (r = fe.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && op(e, n, t);
        else if (e.tag === 19) op(e, n, t);
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
  if ((ie(fe, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && ka(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          iu(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && ka(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        iu(t, !0, n, null, o);
        break;
      case "together":
        iu(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Zs(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function hn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Dr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(j(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Xn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Xn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function y2(e, t, n) {
  switch (t.tag) {
    case 3:
      x0(t), Ni();
      break;
    case 5:
      Gy(t);
      break;
    case 1:
      Ze(t.type) && Sa(t);
      break;
    case 4:
      Fd(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      ie(ba, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ie(fe, fe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? w0(e, t, n)
          : (ie(fe, fe.current & 1),
            (e = hn(e, t, n)),
            e !== null ? e.sibling : null);
      ie(fe, fe.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return S0(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        ie(fe, fe.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), y0(e, t, n);
  }
  return hn(e, t, n);
}
var E0, pc, C0, b0;
E0 = function (e, t) {
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
pc = function () {};
C0 = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), xr(Yt.current);
    var o = null;
    switch (n) {
      case "input":
        (i = Iu(e, i)), (r = Iu(e, r)), (o = []);
        break;
      case "select":
        (i = me({}, i, { value: void 0 })),
          (r = me({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = _u(e, i)), (r = _u(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = xa);
    }
    Bu(n, r);
    var s;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var a = i[u];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Ro.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (l && l.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in l)
              l.hasOwnProperty(s) &&
                a[s] !== l[s] &&
                (n || (n = {}), (n[s] = l[s]));
          } else n || (o || (o = []), o.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (o = o || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (o = o || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Ro.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && ae("scroll", e),
                  o || a === l || (o = []))
                : (o = o || []).push(u, l));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
b0 = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ro(e, t) {
  if (!ce)
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
function Oe(e) {
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
function v2(e, t, n) {
  var r = t.pendingProps;
  switch ((Md(t), t.tag)) {
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
      return Oe(t), null;
    case 1:
      return Ze(t.type) && wa(), Oe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Li(),
        le(qe),
        le(_e),
        _d(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (As(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), jt !== null && (Ec(jt), (jt = null)))),
        pc(e, t),
        Oe(t),
        null
      );
    case 5:
      Vd(t);
      var i = xr(zo.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        C0(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(j(166));
          return Oe(t), null;
        }
        if (((e = xr(Yt.current)), As(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Kt] = t), (r[Vo] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ae("cancel", r), ae("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ae("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < fo.length; i++) ae(fo[i], r);
              break;
            case "source":
              ae("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ae("error", r), ae("load", r);
              break;
            case "details":
              ae("toggle", r);
              break;
            case "input":
              ph(r, o), ae("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                ae("invalid", r);
              break;
            case "textarea":
              gh(r, o), ae("invalid", r);
          }
          Bu(n, o), (i = null);
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var a = o[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Rs(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Rs(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : Ro.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  ae("scroll", r);
            }
          switch (n) {
            case "input":
              ws(r), mh(r, o, !0);
              break;
            case "textarea":
              ws(r), yh(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = xa);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Zg(n)),
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
            (e[Kt] = t),
            (e[Vo] = r),
            E0(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = $u(n, r)), n)) {
              case "dialog":
                ae("cancel", e), ae("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ae("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < fo.length; i++) ae(fo[i], e);
                i = r;
                break;
              case "source":
                ae("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                ae("error", e), ae("load", e), (i = r);
                break;
              case "details":
                ae("toggle", e), (i = r);
                break;
              case "input":
                ph(e, r), (i = Iu(e, r)), ae("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = me({}, r, { value: void 0 })),
                  ae("invalid", e);
                break;
              case "textarea":
                gh(e, r), (i = _u(e, r)), ae("invalid", e);
                break;
              default:
                i = r;
            }
            Bu(n, i), (a = i);
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var l = a[o];
                o === "style"
                  ? ty(e, l)
                  : o === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && Jg(e, l))
                  : o === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && Ao(e, l)
                    : typeof l == "number" && Ao(e, "" + l)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Ro.hasOwnProperty(o)
                      ? l != null && o === "onScroll" && ae("scroll", e)
                      : l != null && md(e, o, l, s));
              }
            switch (n) {
              case "input":
                ws(e), mh(e, r, !1);
                break;
              case "textarea":
                ws(e), yh(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + qn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? di(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      di(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = xa);
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
      return Oe(t), null;
    case 6:
      if (e && t.stateNode != null) b0(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(j(166));
        if (((n = xr(zo.current)), xr(Yt.current), As(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Kt] = t),
            (o = r.nodeValue !== n) && ((e = ot), e !== null))
          )
            switch (e.tag) {
              case 3:
                Rs(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Rs(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Kt] = t),
            (t.stateNode = r);
      }
      return Oe(t), null;
    case 13:
      if (
        (le(fe),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ce && it !== null && t.mode & 1 && !(t.flags & 128))
          $y(), Ni(), (t.flags |= 98560), (o = !1);
        else if (((o = As(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(j(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(j(317));
            o[Kt] = t;
          } else
            Ni(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Oe(t), (o = !1);
        } else jt !== null && (Ec(jt), (jt = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || fe.current & 1 ? Te === 0 && (Te = 3) : qd())),
          t.updateQueue !== null && (t.flags |= 4),
          Oe(t),
          null);
    case 4:
      return (
        Li(), pc(e, t), e === null && Io(t.stateNode.containerInfo), Oe(t), null
      );
    case 10:
      return Dd(t.type._context), Oe(t), null;
    case 17:
      return Ze(t.type) && wa(), Oe(t), null;
    case 19:
      if ((le(fe), (o = t.memoizedState), o === null)) return Oe(t), null;
      if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
        if (r) ro(o, !1);
        else {
          if (Te !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = ka(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    ro(o, !1),
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
                return ie(fe, (fe.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            ve() > Oi &&
            ((t.flags |= 128), (r = !0), ro(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ka(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ro(o, !0),
              o.tail === null && o.tailMode === "hidden" && !s.alternate && !ce)
            )
              return Oe(t), null;
          } else
            2 * ve() - o.renderingStartTime > Oi &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), ro(o, !1), (t.lanes = 4194304));
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
          (o.renderingStartTime = ve()),
          (t.sibling = null),
          (n = fe.current),
          ie(fe, r ? (n & 1) | 2 : n & 1),
          t)
        : (Oe(t), null);
    case 22:
    case 23:
      return (
        Xd(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? nt & 1073741824 && (Oe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Oe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(j(156, t.tag));
}
function x2(e, t) {
  switch ((Md(t), t.tag)) {
    case 1:
      return (
        Ze(t.type) && wa(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Li(),
        le(qe),
        le(_e),
        _d(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Vd(t), null;
    case 13:
      if (
        (le(fe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(j(340));
        Ni();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return le(fe), null;
    case 4:
      return Li(), null;
    case 10:
      return Dd(t.type._context), null;
    case 22:
    case 23:
      return Xd(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var js = !1,
  Fe = !1,
  w2 = typeof WeakSet == "function" ? WeakSet : Set,
  F = null;
function ii(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ye(e, t, r);
      }
    else n.current = null;
}
function mc(e, t, n) {
  try {
    n();
  } catch (r) {
    ye(e, t, r);
  }
}
var sp = !1;
function S2(e, t) {
  if (((Zu = ga), (e = Ay()), Rd(e))) {
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
            u = 0,
            c = 0,
            d = e,
            f = null;
          t: for (;;) {
            for (
              var h;
              d !== n || (i !== 0 && d.nodeType !== 3) || (a = s + i),
                d !== o || (r !== 0 && d.nodeType !== 3) || (l = s + r),
                d.nodeType === 3 && (s += d.nodeValue.length),
                (h = d.firstChild) !== null;

            )
              (f = d), (d = h);
            for (;;) {
              if (d === e) break t;
              if (
                (f === n && ++u === i && (a = s),
                f === o && ++c === r && (l = s),
                (h = d.nextSibling) !== null)
              )
                break;
              (d = f), (f = d.parentNode);
            }
            d = h;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ju = { focusedElem: e, selectionRange: n }, ga = !1, F = t; F !== null; )
    if (((t = F), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (F = e);
    else
      for (; F !== null; ) {
        t = F;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var g = v.memoizedProps,
                    x = v.memoizedState,
                    p = t.stateNode,
                    m = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : kt(t.type, g),
                      x
                    );
                  p.__reactInternalSnapshotBeforeUpdate = m;
                }
                break;
              case 3:
                var y = t.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = "")
                  : y.nodeType === 9 &&
                    y.documentElement &&
                    y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(j(163));
            }
        } catch (E) {
          ye(t, t.return, E);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (F = e);
          break;
        }
        F = t.return;
      }
  return (v = sp), (sp = !1), v;
}
function wo(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && mc(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function il(e, t) {
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
function gc(e) {
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
function T0(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), T0(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Kt], delete t[Vo], delete t[nc], delete t[r2], delete t[i2])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function P0(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ap(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || P0(e.return)) return null;
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
function yc(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = xa));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (yc(e, t, n), e = e.sibling; e !== null; ) yc(e, t, n), (e = e.sibling);
}
function vc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (vc(e, t, n), e = e.sibling; e !== null; ) vc(e, t, n), (e = e.sibling);
}
var Re = null,
  Nt = !1;
function bn(e, t, n) {
  for (n = n.child; n !== null; ) k0(e, t, n), (n = n.sibling);
}
function k0(e, t, n) {
  if (Qt && typeof Qt.onCommitFiberUnmount == "function")
    try {
      Qt.onCommitFiberUnmount(Xa, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Fe || ii(n, t);
    case 6:
      var r = Re,
        i = Nt;
      (Re = null),
        bn(e, t, n),
        (Re = r),
        (Nt = i),
        Re !== null &&
          (Nt
            ? ((e = Re),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Re.removeChild(n.stateNode));
      break;
    case 18:
      Re !== null &&
        (Nt
          ? ((e = Re),
            (n = n.stateNode),
            e.nodeType === 8
              ? ql(e.parentNode, n)
              : e.nodeType === 1 && ql(e, n),
            Lo(e))
          : ql(Re, n.stateNode));
      break;
    case 4:
      (r = Re),
        (i = Nt),
        (Re = n.stateNode.containerInfo),
        (Nt = !0),
        bn(e, t, n),
        (Re = r),
        (Nt = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Fe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          (o = o.tag),
            s !== void 0 && (o & 2 || o & 4) && mc(n, t, s),
            (i = i.next);
        } while (i !== r);
      }
      bn(e, t, n);
      break;
    case 1:
      if (
        !Fe &&
        (ii(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          ye(n, t, a);
        }
      bn(e, t, n);
      break;
    case 21:
      bn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Fe = (r = Fe) || n.memoizedState !== null), bn(e, t, n), (Fe = r))
        : bn(e, t, n);
      break;
    default:
      bn(e, t, n);
  }
}
function lp(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new w2()),
      t.forEach(function (r) {
        var i = M2.bind(null, e, r);
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
              (Re = a.stateNode), (Nt = !1);
              break e;
            case 3:
              (Re = a.stateNode.containerInfo), (Nt = !0);
              break e;
            case 4:
              (Re = a.stateNode.containerInfo), (Nt = !0);
              break e;
          }
          a = a.return;
        }
        if (Re === null) throw Error(j(160));
        k0(o, s, i), (Re = null), (Nt = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (u) {
        ye(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) R0(t, e), (t = t.sibling);
}
function R0(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ct(t, e), zt(e), r & 4)) {
        try {
          wo(3, e, e.return), il(3, e);
        } catch (g) {
          ye(e, e.return, g);
        }
        try {
          wo(5, e, e.return);
        } catch (g) {
          ye(e, e.return, g);
        }
      }
      break;
    case 1:
      Ct(t, e), zt(e), r & 512 && n !== null && ii(n, n.return);
      break;
    case 5:
      if (
        (Ct(t, e),
        zt(e),
        r & 512 && n !== null && ii(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Ao(i, "");
        } catch (g) {
          ye(e, e.return, g);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && o.type === "radio" && o.name != null && Xg(i, o),
              $u(a, s);
            var u = $u(a, o);
            for (s = 0; s < l.length; s += 2) {
              var c = l[s],
                d = l[s + 1];
              c === "style"
                ? ty(i, d)
                : c === "dangerouslySetInnerHTML"
                ? Jg(i, d)
                : c === "children"
                ? Ao(i, d)
                : md(i, c, d, u);
            }
            switch (a) {
              case "input":
                Fu(i, o);
                break;
              case "textarea":
                qg(i, o);
                break;
              case "select":
                var f = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var h = o.value;
                h != null
                  ? di(i, !!o.multiple, h, !1)
                  : f !== !!o.multiple &&
                    (o.defaultValue != null
                      ? di(i, !!o.multiple, o.defaultValue, !0)
                      : di(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[Vo] = o;
          } catch (g) {
            ye(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((Ct(t, e), zt(e), r & 4)) {
        if (e.stateNode === null) throw Error(j(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (g) {
          ye(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (Ct(t, e), zt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Lo(t.containerInfo);
        } catch (g) {
          ye(e, e.return, g);
        }
      break;
    case 4:
      Ct(t, e), zt(e);
      break;
    case 13:
      Ct(t, e),
        zt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Qd = ve())),
        r & 4 && lp(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Fe = (u = Fe) || c), Ct(t, e), (Fe = u)) : Ct(t, e),
        zt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (F = e, c = e.child; c !== null; ) {
            for (d = F = c; F !== null; ) {
              switch (((f = F), (h = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  wo(4, f, f.return);
                  break;
                case 1:
                  ii(f, f.return);
                  var v = f.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (g) {
                      ye(r, n, g);
                    }
                  }
                  break;
                case 5:
                  ii(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    cp(d);
                    continue;
                  }
              }
              h !== null ? ((h.return = f), (F = h)) : cp(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (i = d.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((a = d.stateNode),
                      (l = d.memoizedProps.style),
                      (s =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = ey("display", s)));
              } catch (g) {
                ye(e, e.return, g);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (g) {
                ye(e, e.return, g);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      Ct(t, e), zt(e), r & 4 && lp(e);
      break;
    case 21:
      break;
    default:
      Ct(t, e), zt(e);
  }
}
function zt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (P0(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(j(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Ao(i, ""), (r.flags &= -33));
          var o = ap(e);
          vc(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = ap(e);
          yc(e, a, s);
          break;
        default:
          throw Error(j(161));
      }
    } catch (l) {
      ye(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function E2(e, t, n) {
  (F = e), A0(e);
}
function A0(e, t, n) {
  for (var r = (e.mode & 1) !== 0; F !== null; ) {
    var i = F,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || js;
      if (!s) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || Fe;
        a = js;
        var u = Fe;
        if (((js = s), (Fe = l) && !u))
          for (F = i; F !== null; )
            (s = F),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? dp(i)
                : l !== null
                ? ((l.return = s), (F = l))
                : dp(i);
        for (; o !== null; ) (F = o), A0(o), (o = o.sibling);
        (F = i), (js = a), (Fe = u);
      }
      up(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (F = o)) : up(e);
  }
}
function up(e) {
  for (; F !== null; ) {
    var t = F;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Fe || il(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Fe)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : kt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Gh(t, o, r);
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
                Gh(t, s, n);
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
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && Lo(d);
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
              throw Error(j(163));
          }
        Fe || (t.flags & 512 && gc(t));
      } catch (f) {
        ye(t, t.return, f);
      }
    }
    if (t === e) {
      F = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (F = n);
      break;
    }
    F = t.return;
  }
}
function cp(e) {
  for (; F !== null; ) {
    var t = F;
    if (t === e) {
      F = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (F = n);
      break;
    }
    F = t.return;
  }
}
function dp(e) {
  for (; F !== null; ) {
    var t = F;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            il(4, t);
          } catch (l) {
            ye(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              ye(t, i, l);
            }
          }
          var o = t.return;
          try {
            gc(t);
          } catch (l) {
            ye(t, o, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            gc(t);
          } catch (l) {
            ye(t, s, l);
          }
      }
    } catch (l) {
      ye(t, t.return, l);
    }
    if (t === e) {
      F = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (F = a);
      break;
    }
    F = t.return;
  }
}
var C2 = Math.ceil,
  Ma = yn.ReactCurrentDispatcher,
  Kd = yn.ReactCurrentOwner,
  gt = yn.ReactCurrentBatchConfig,
  Z = 0,
  ke = null,
  Se = null,
  Me = 0,
  nt = 0,
  oi = sr(0),
  Te = 0,
  Uo = null,
  Dr = 0,
  ol = 0,
  Gd = 0,
  So = null,
  Ye = null,
  Qd = 0,
  Oi = 1 / 0,
  rn = null,
  Na = !1,
  xc = null,
  Qn = null,
  Ls = !1,
  zn = null,
  ja = 0,
  Eo = 0,
  wc = null,
  Js = -1,
  ea = 0;
function He() {
  return Z & 6 ? ve() : Js !== -1 ? Js : (Js = ve());
}
function Yn(e) {
  return e.mode & 1
    ? Z & 2 && Me !== 0
      ? Me & -Me
      : s2.transition !== null
      ? (ea === 0 && (ea = hy()), ea)
      : ((e = te),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : wy(e.type))),
        e)
    : 1;
}
function Dt(e, t, n, r) {
  if (50 < Eo) throw ((Eo = 0), (wc = null), Error(j(185)));
  rs(e, n, r),
    (!(Z & 2) || e !== ke) &&
      (e === ke && (!(Z & 2) && (ol |= n), Te === 4 && Ln(e, Me)),
      Je(e, r),
      n === 1 && Z === 0 && !(t.mode & 1) && ((Oi = ve() + 500), tl && ar()));
}
function Je(e, t) {
  var n = e.callbackNode;
  sS(e, t);
  var r = ma(e, e === ke ? Me : 0);
  if (r === 0)
    n !== null && wh(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && wh(n), t === 1))
      e.tag === 0 ? o2(fp.bind(null, e)) : _y(fp.bind(null, e)),
        t2(function () {
          !(Z & 6) && ar();
        }),
        (n = null);
    else {
      switch (py(r)) {
        case 1:
          n = wd;
          break;
        case 4:
          n = dy;
          break;
        case 16:
          n = pa;
          break;
        case 536870912:
          n = fy;
          break;
        default:
          n = pa;
      }
      n = F0(n, M0.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function M0(e, t) {
  if (((Js = -1), (ea = 0), Z & 6)) throw Error(j(327));
  var n = e.callbackNode;
  if (gi() && e.callbackNode !== n) return null;
  var r = ma(e, e === ke ? Me : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = La(e, r);
  else {
    t = r;
    var i = Z;
    Z |= 2;
    var o = j0();
    (ke !== e || Me !== t) && ((rn = null), (Oi = ve() + 500), Rr(e, t));
    do
      try {
        P2();
        break;
      } catch (a) {
        N0(e, a);
      }
    while (!0);
    Ld(),
      (Ma.current = o),
      (Z = i),
      Se !== null ? (t = 0) : ((ke = null), (Me = 0), (t = Te));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Gu(e)), i !== 0 && ((r = i), (t = Sc(e, i)))), t === 1)
    )
      throw ((n = Uo), Rr(e, 0), Ln(e, r), Je(e, ve()), n);
    if (t === 6) Ln(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !b2(i) &&
          ((t = La(e, r)),
          t === 2 && ((o = Gu(e)), o !== 0 && ((r = o), (t = Sc(e, o)))),
          t === 1))
      )
        throw ((n = Uo), Rr(e, 0), Ln(e, r), Je(e, ve()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(j(345));
        case 2:
          mr(e, Ye, rn);
          break;
        case 3:
          if (
            (Ln(e, r), (r & 130023424) === r && ((t = Qd + 500 - ve()), 10 < t))
          ) {
            if (ma(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              He(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = tc(mr.bind(null, e, Ye, rn), t);
            break;
          }
          mr(e, Ye, rn);
          break;
        case 4:
          if ((Ln(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - Lt(r);
            (o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
          }
          if (
            ((r = i),
            (r = ve() - r),
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
                : 1960 * C2(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = tc(mr.bind(null, e, Ye, rn), r);
            break;
          }
          mr(e, Ye, rn);
          break;
        case 5:
          mr(e, Ye, rn);
          break;
        default:
          throw Error(j(329));
      }
    }
  }
  return Je(e, ve()), e.callbackNode === n ? M0.bind(null, e) : null;
}
function Sc(e, t) {
  var n = So;
  return (
    e.current.memoizedState.isDehydrated && (Rr(e, t).flags |= 256),
    (e = La(e, t)),
    e !== 2 && ((t = Ye), (Ye = n), t !== null && Ec(t)),
    e
  );
}
function Ec(e) {
  Ye === null ? (Ye = e) : Ye.push.apply(Ye, e);
}
function b2(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!It(o(), i)) return !1;
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
function Ln(e, t) {
  for (
    t &= ~Gd,
      t &= ~ol,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Lt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function fp(e) {
  if (Z & 6) throw Error(j(327));
  gi();
  var t = ma(e, 0);
  if (!(t & 1)) return Je(e, ve()), null;
  var n = La(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Gu(e);
    r !== 0 && ((t = r), (n = Sc(e, r)));
  }
  if (n === 1) throw ((n = Uo), Rr(e, 0), Ln(e, t), Je(e, ve()), n);
  if (n === 6) throw Error(j(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    mr(e, Ye, rn),
    Je(e, ve()),
    null
  );
}
function Yd(e, t) {
  var n = Z;
  Z |= 1;
  try {
    return e(t);
  } finally {
    (Z = n), Z === 0 && ((Oi = ve() + 500), tl && ar());
  }
}
function Or(e) {
  zn !== null && zn.tag === 0 && !(Z & 6) && gi();
  var t = Z;
  Z |= 1;
  var n = gt.transition,
    r = te;
  try {
    if (((gt.transition = null), (te = 1), e)) return e();
  } finally {
    (te = r), (gt.transition = n), (Z = t), !(Z & 6) && ar();
  }
}
function Xd() {
  (nt = oi.current), le(oi);
}
function Rr(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), e2(n)), Se !== null))
    for (n = Se.return; n !== null; ) {
      var r = n;
      switch ((Md(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && wa();
          break;
        case 3:
          Li(), le(qe), le(_e), _d();
          break;
        case 5:
          Vd(r);
          break;
        case 4:
          Li();
          break;
        case 13:
          le(fe);
          break;
        case 19:
          le(fe);
          break;
        case 10:
          Dd(r.type._context);
          break;
        case 22:
        case 23:
          Xd();
      }
      n = n.return;
    }
  if (
    ((ke = e),
    (Se = e = Xn(e.current, null)),
    (Me = nt = t),
    (Te = 0),
    (Uo = null),
    (Gd = ol = Dr = 0),
    (Ye = So = null),
    vr !== null)
  ) {
    for (t = 0; t < vr.length; t++)
      if (((n = vr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          (o.next = i), (r.next = s);
        }
        n.pending = r;
      }
    vr = null;
  }
  return e;
}
function N0(e, t) {
  do {
    var n = Se;
    try {
      if ((Ld(), (Xs.current = Aa), Ra)) {
        for (var r = pe.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Ra = !1;
      }
      if (
        ((Lr = 0),
        (Pe = Ce = pe = null),
        (xo = !1),
        (Bo = 0),
        (Kd.current = null),
        n === null || n.return === null)
      ) {
        (Te = 1), (Uo = t), (Se = null);
        break;
      }
      e: {
        var o = e,
          s = n.return,
          a = n,
          l = t;
        if (
          ((t = Me),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = a,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var h = Jh(s);
          if (h !== null) {
            (h.flags &= -257),
              ep(h, s, a, o, t),
              h.mode & 1 && Zh(o, u, t),
              (t = h),
              (l = u);
            var v = t.updateQueue;
            if (v === null) {
              var g = new Set();
              g.add(l), (t.updateQueue = g);
            } else v.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Zh(o, u, t), qd();
              break e;
            }
            l = Error(j(426));
          }
        } else if (ce && a.mode & 1) {
          var x = Jh(s);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256),
              ep(x, s, a, o, t),
              Nd(Di(l, a));
            break e;
          }
        }
        (o = l = Di(l, a)),
          Te !== 4 && (Te = 2),
          So === null ? (So = [o]) : So.push(o),
          (o = s);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var p = p0(o, l, t);
              Kh(o, p);
              break e;
            case 1:
              a = l;
              var m = o.type,
                y = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof m.getDerivedStateFromError == "function" ||
                  (y !== null &&
                    typeof y.componentDidCatch == "function" &&
                    (Qn === null || !Qn.has(y))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var E = m0(o, a, t);
                Kh(o, E);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      D0(n);
    } catch (C) {
      (t = C), Se === n && n !== null && (Se = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function j0() {
  var e = Ma.current;
  return (Ma.current = Aa), e === null ? Aa : e;
}
function qd() {
  (Te === 0 || Te === 3 || Te === 2) && (Te = 4),
    ke === null || (!(Dr & 268435455) && !(ol & 268435455)) || Ln(ke, Me);
}
function La(e, t) {
  var n = Z;
  Z |= 2;
  var r = j0();
  (ke !== e || Me !== t) && ((rn = null), Rr(e, t));
  do
    try {
      T2();
      break;
    } catch (i) {
      N0(e, i);
    }
  while (!0);
  if ((Ld(), (Z = n), (Ma.current = r), Se !== null)) throw Error(j(261));
  return (ke = null), (Me = 0), Te;
}
function T2() {
  for (; Se !== null; ) L0(Se);
}
function P2() {
  for (; Se !== null && !q1(); ) L0(Se);
}
function L0(e) {
  var t = I0(e.alternate, e, nt);
  (e.memoizedProps = e.pendingProps),
    t === null ? D0(e) : (Se = t),
    (Kd.current = null);
}
function D0(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = x2(n, t)), n !== null)) {
        (n.flags &= 32767), (Se = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Te = 6), (Se = null);
        return;
      }
    } else if (((n = v2(n, t, nt)), n !== null)) {
      Se = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Se = t;
      return;
    }
    Se = t = e;
  } while (t !== null);
  Te === 0 && (Te = 5);
}
function mr(e, t, n) {
  var r = te,
    i = gt.transition;
  try {
    (gt.transition = null), (te = 1), k2(e, t, n, r);
  } finally {
    (gt.transition = i), (te = r);
  }
  return null;
}
function k2(e, t, n, r) {
  do gi();
  while (zn !== null);
  if (Z & 6) throw Error(j(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(j(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (aS(e, o),
    e === ke && ((Se = ke = null), (Me = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ls ||
      ((Ls = !0),
      F0(pa, function () {
        return gi(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = gt.transition), (gt.transition = null);
    var s = te;
    te = 1;
    var a = Z;
    (Z |= 4),
      (Kd.current = null),
      S2(e, n),
      R0(n, e),
      GS(Ju),
      (ga = !!Zu),
      (Ju = Zu = null),
      (e.current = n),
      E2(n),
      Z1(),
      (Z = a),
      (te = s),
      (gt.transition = o);
  } else e.current = n;
  if (
    (Ls && ((Ls = !1), (zn = e), (ja = i)),
    (o = e.pendingLanes),
    o === 0 && (Qn = null),
    tS(n.stateNode),
    Je(e, ve()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Na) throw ((Na = !1), (e = xc), (xc = null), e);
  return (
    ja & 1 && e.tag !== 0 && gi(),
    (o = e.pendingLanes),
    o & 1 ? (e === wc ? Eo++ : ((Eo = 0), (wc = e))) : (Eo = 0),
    ar(),
    null
  );
}
function gi() {
  if (zn !== null) {
    var e = py(ja),
      t = gt.transition,
      n = te;
    try {
      if (((gt.transition = null), (te = 16 > e ? 16 : e), zn === null))
        var r = !1;
      else {
        if (((e = zn), (zn = null), (ja = 0), Z & 6)) throw Error(j(331));
        var i = Z;
        for (Z |= 4, F = e.current; F !== null; ) {
          var o = F,
            s = o.child;
          if (F.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (F = u; F !== null; ) {
                  var c = F;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      wo(8, c, o);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (F = d);
                  else
                    for (; F !== null; ) {
                      c = F;
                      var f = c.sibling,
                        h = c.return;
                      if ((T0(c), c === u)) {
                        F = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = h), (F = f);
                        break;
                      }
                      F = h;
                    }
                }
              }
              var v = o.alternate;
              if (v !== null) {
                var g = v.child;
                if (g !== null) {
                  v.child = null;
                  do {
                    var x = g.sibling;
                    (g.sibling = null), (g = x);
                  } while (g !== null);
                }
              }
              F = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (F = s);
          else
            e: for (; F !== null; ) {
              if (((o = F), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    wo(9, o, o.return);
                }
              var p = o.sibling;
              if (p !== null) {
                (p.return = o.return), (F = p);
                break e;
              }
              F = o.return;
            }
        }
        var m = e.current;
        for (F = m; F !== null; ) {
          s = F;
          var y = s.child;
          if (s.subtreeFlags & 2064 && y !== null) (y.return = s), (F = y);
          else
            e: for (s = m; F !== null; ) {
              if (((a = F), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      il(9, a);
                  }
                } catch (C) {
                  ye(a, a.return, C);
                }
              if (a === s) {
                F = null;
                break e;
              }
              var E = a.sibling;
              if (E !== null) {
                (E.return = a.return), (F = E);
                break e;
              }
              F = a.return;
            }
        }
        if (
          ((Z = i), ar(), Qt && typeof Qt.onPostCommitFiberRoot == "function")
        )
          try {
            Qt.onPostCommitFiberRoot(Xa, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (te = n), (gt.transition = t);
    }
  }
  return !1;
}
function hp(e, t, n) {
  (t = Di(n, t)),
    (t = p0(e, t, 1)),
    (e = Gn(e, t, 1)),
    (t = He()),
    e !== null && (rs(e, 1, t), Je(e, t));
}
function ye(e, t, n) {
  if (e.tag === 3) hp(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        hp(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Qn === null || !Qn.has(r)))
        ) {
          (e = Di(n, e)),
            (e = m0(t, e, 1)),
            (t = Gn(t, e, 1)),
            (e = He()),
            t !== null && (rs(t, 1, e), Je(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function R2(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = He()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ke === e &&
      (Me & n) === n &&
      (Te === 4 || (Te === 3 && (Me & 130023424) === Me && 500 > ve() - Qd)
        ? Rr(e, 0)
        : (Gd |= n)),
    Je(e, t);
}
function O0(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Cs), (Cs <<= 1), !(Cs & 130023424) && (Cs = 4194304))
      : (t = 1));
  var n = He();
  (e = fn(e, t)), e !== null && (rs(e, t, n), Je(e, n));
}
function A2(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), O0(e, n);
}
function M2(e, t) {
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
      throw Error(j(314));
  }
  r !== null && r.delete(t), O0(e, n);
}
var I0;
I0 = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || qe.current) Xe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Xe = !1), y2(e, t, n);
      Xe = !!(e.flags & 131072);
    }
  else (Xe = !1), ce && t.flags & 1048576 && zy(t, Ca, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Zs(e, t), (e = t.pendingProps);
      var i = Mi(t, _e.current);
      mi(t, n), (i = Bd(null, t, r, e, i, n));
      var o = $d();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ze(r) ? ((o = !0), Sa(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Id(t),
            (i.updater = rl),
            (t.stateNode = i),
            (i._reactInternals = t),
            lc(t, r, e, n),
            (t = dc(null, t, r, !0, o, n)))
          : ((t.tag = 0), ce && o && Ad(t), Be(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Zs(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = j2(r)),
          (e = kt(r, e)),
          i)
        ) {
          case 0:
            t = cc(null, t, r, e, n);
            break e;
          case 1:
            t = rp(null, t, r, e, n);
            break e;
          case 11:
            t = tp(null, t, r, e, n);
            break e;
          case 14:
            t = np(null, t, r, kt(r.type, e), n);
            break e;
        }
        throw Error(j(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : kt(r, i)),
        cc(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : kt(r, i)),
        rp(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((x0(t), e === null)) throw Error(j(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          Ky(e, t),
          Pa(t, r, null, n);
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
            (i = Di(Error(j(423)), t)), (t = ip(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Di(Error(j(424)), t)), (t = ip(e, t, r, n, i));
            break e;
          } else
            for (
              it = Kn(t.stateNode.containerInfo.firstChild),
                ot = t,
                ce = !0,
                jt = null,
                n = Uy(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Ni(), r === i)) {
            t = hn(e, t, n);
            break e;
          }
          Be(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Gy(t),
        e === null && oc(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        ec(r, i) ? (s = null) : o !== null && ec(r, o) && (t.flags |= 32),
        v0(e, t),
        Be(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && oc(t), null;
    case 13:
      return w0(e, t, n);
    case 4:
      return (
        Fd(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = ji(t, null, r, n)) : Be(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : kt(r, i)),
        tp(e, t, r, i, n)
      );
    case 7:
      return Be(e, t, t.pendingProps, n), t.child;
    case 8:
      return Be(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Be(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (s = i.value),
          ie(ba, r._currentValue),
          (r._currentValue = s),
          o !== null)
        )
          if (It(o.value, s)) {
            if (o.children === i.children && !qe.current) {
              t = hn(e, t, n);
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
                      (l = un(-1, n & -n)), (l.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (o.lanes |= n),
                      (l = o.alternate),
                      l !== null && (l.lanes |= n),
                      sc(o.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(j(341));
                (s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  sc(s, n, t),
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
        Be(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        mi(t, n),
        (i = vt(i)),
        (r = r(i)),
        (t.flags |= 1),
        Be(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = kt(r, t.pendingProps)),
        (i = kt(r.type, i)),
        np(e, t, r, i, n)
      );
    case 15:
      return g0(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : kt(r, i)),
        Zs(e, t),
        (t.tag = 1),
        Ze(r) ? ((e = !0), Sa(t)) : (e = !1),
        mi(t, n),
        h0(t, r, i),
        lc(t, r, i, n),
        dc(null, t, r, !0, e, n)
      );
    case 19:
      return S0(e, t, n);
    case 22:
      return y0(e, t, n);
  }
  throw Error(j(156, t.tag));
};
function F0(e, t) {
  return cy(e, t);
}
function N2(e, t, n, r) {
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
function pt(e, t, n, r) {
  return new N2(e, t, n, r);
}
function Zd(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function j2(e) {
  if (typeof e == "function") return Zd(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === yd)) return 11;
    if (e === vd) return 14;
  }
  return 2;
}
function Xn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = pt(e.tag, t, e.key, e.mode)),
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
function ta(e, t, n, r, i, o) {
  var s = 2;
  if (((r = e), typeof e == "function")) Zd(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Yr:
        return Ar(n.children, i, o, t);
      case gd:
        (s = 8), (i |= 8);
        break;
      case ju:
        return (
          (e = pt(12, n, t, i | 2)), (e.elementType = ju), (e.lanes = o), e
        );
      case Lu:
        return (e = pt(13, n, t, i)), (e.elementType = Lu), (e.lanes = o), e;
      case Du:
        return (e = pt(19, n, t, i)), (e.elementType = Du), (e.lanes = o), e;
      case Gg:
        return sl(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Hg:
              s = 10;
              break e;
            case Kg:
              s = 9;
              break e;
            case yd:
              s = 11;
              break e;
            case vd:
              s = 14;
              break e;
            case Mn:
              (s = 16), (r = null);
              break e;
          }
        throw Error(j(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = pt(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Ar(e, t, n, r) {
  return (e = pt(7, e, r, t)), (e.lanes = n), e;
}
function sl(e, t, n, r) {
  return (
    (e = pt(22, e, r, t)),
    (e.elementType = Gg),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ou(e, t, n) {
  return (e = pt(6, e, null, t)), (e.lanes = n), e;
}
function su(e, t, n) {
  return (
    (t = pt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function L2(e, t, n, r, i) {
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
    (this.eventTimes = zl(0)),
    (this.expirationTimes = zl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = zl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Jd(e, t, n, r, i, o, s, a, l) {
  return (
    (e = new L2(e, t, n, a, l)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = pt(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Id(o),
    e
  );
}
function D2(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Qr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function V0(e) {
  if (!e) return Zn;
  e = e._reactInternals;
  e: {
    if (Vr(e) !== e || e.tag !== 1) throw Error(j(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ze(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(j(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ze(n)) return Vy(e, n, t);
  }
  return t;
}
function _0(e, t, n, r, i, o, s, a, l) {
  return (
    (e = Jd(n, r, !0, e, i, o, s, a, l)),
    (e.context = V0(null)),
    (n = e.current),
    (r = He()),
    (i = Yn(n)),
    (o = un(r, i)),
    (o.callback = t ?? null),
    Gn(n, o, i),
    (e.current.lanes = i),
    rs(e, i, r),
    Je(e, r),
    e
  );
}
function al(e, t, n, r) {
  var i = t.current,
    o = He(),
    s = Yn(i);
  return (
    (n = V0(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = un(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Gn(i, t, s)),
    e !== null && (Dt(e, i, s, o), Ys(e, i, s)),
    s
  );
}
function Da(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function pp(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ef(e, t) {
  pp(e, t), (e = e.alternate) && pp(e, t);
}
function O2() {
  return null;
}
var z0 =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function tf(e) {
  this._internalRoot = e;
}
ll.prototype.render = tf.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(j(409));
  al(e, t, null, null);
};
ll.prototype.unmount = tf.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Or(function () {
      al(null, e, null, null);
    }),
      (t[dn] = null);
  }
};
function ll(e) {
  this._internalRoot = e;
}
ll.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = yy();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < jn.length && t !== 0 && t < jn[n].priority; n++);
    jn.splice(n, 0, e), n === 0 && xy(e);
  }
};
function nf(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ul(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function mp() {}
function I2(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = Da(s);
        o.call(u);
      };
    }
    var s = _0(t, r, e, 0, null, !1, !1, "", mp);
    return (
      (e._reactRootContainer = s),
      (e[dn] = s.current),
      Io(e.nodeType === 8 ? e.parentNode : e),
      Or(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = Da(l);
      a.call(u);
    };
  }
  var l = Jd(e, 0, !1, null, null, !1, !1, "", mp);
  return (
    (e._reactRootContainer = l),
    (e[dn] = l.current),
    Io(e.nodeType === 8 ? e.parentNode : e),
    Or(function () {
      al(t, l, n, r);
    }),
    l
  );
}
function cl(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var l = Da(s);
        a.call(l);
      };
    }
    al(t, s, e, i);
  } else s = I2(n, t, e, i, r);
  return Da(s);
}
my = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = co(t.pendingLanes);
        n !== 0 &&
          (Sd(t, n | 1), Je(t, ve()), !(Z & 6) && ((Oi = ve() + 500), ar()));
      }
      break;
    case 13:
      Or(function () {
        var r = fn(e, 1);
        if (r !== null) {
          var i = He();
          Dt(r, e, 1, i);
        }
      }),
        ef(e, 1);
  }
};
Ed = function (e) {
  if (e.tag === 13) {
    var t = fn(e, 134217728);
    if (t !== null) {
      var n = He();
      Dt(t, e, 134217728, n);
    }
    ef(e, 134217728);
  }
};
gy = function (e) {
  if (e.tag === 13) {
    var t = Yn(e),
      n = fn(e, t);
    if (n !== null) {
      var r = He();
      Dt(n, e, t, r);
    }
    ef(e, t);
  }
};
yy = function () {
  return te;
};
vy = function (e, t) {
  var n = te;
  try {
    return (te = e), t();
  } finally {
    te = n;
  }
};
Uu = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Fu(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var i = el(r);
            if (!i) throw Error(j(90));
            Yg(r), Fu(r, i);
          }
        }
      }
      break;
    case "textarea":
      qg(e, n);
      break;
    case "select":
      (t = n.value), t != null && di(e, !!n.multiple, t, !1);
  }
};
iy = Yd;
oy = Or;
var F2 = { usingClientEntryPoint: !1, Events: [os, Jr, el, ny, ry, Yd] },
  io = {
    findFiberByHostInstance: yr,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  V2 = {
    bundleType: io.bundleType,
    version: io.version,
    rendererPackageName: io.rendererPackageName,
    rendererConfig: io.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: yn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = ly(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: io.findFiberByHostInstance || O2,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ds = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ds.isDisabled && Ds.supportsFiber)
    try {
      (Xa = Ds.inject(V2)), (Qt = Ds);
    } catch {}
}
lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = F2;
lt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!nf(t)) throw Error(j(200));
  return D2(e, t, null, n);
};
lt.createRoot = function (e, t) {
  if (!nf(e)) throw Error(j(299));
  var n = !1,
    r = "",
    i = z0;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Jd(e, 1, !1, null, null, n, !1, r, i)),
    (e[dn] = t.current),
    Io(e.nodeType === 8 ? e.parentNode : e),
    new tf(t)
  );
};
lt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(j(188))
      : ((e = Object.keys(e).join(",")), Error(j(268, e)));
  return (e = ly(t)), (e = e === null ? null : e.stateNode), e;
};
lt.flushSync = function (e) {
  return Or(e);
};
lt.hydrate = function (e, t, n) {
  if (!ul(t)) throw Error(j(200));
  return cl(null, e, t, !0, n);
};
lt.hydrateRoot = function (e, t, n) {
  if (!nf(e)) throw Error(j(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    s = z0;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = _0(t, null, e, 1, n ?? null, i, !1, o, s)),
    (e[dn] = t.current),
    Io(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new ll(t);
};
lt.render = function (e, t, n) {
  if (!ul(t)) throw Error(j(200));
  return cl(null, e, t, !1, n);
};
lt.unmountComponentAtNode = function (e) {
  if (!ul(e)) throw Error(j(40));
  return e._reactRootContainer
    ? (Or(function () {
        cl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[dn] = null);
        });
      }),
      !0)
    : !1;
};
lt.unstable_batchedUpdates = Yd;
lt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ul(n)) throw Error(j(200));
  if (e == null || e._reactInternals === void 0) throw Error(j(38));
  return cl(e, t, n, !1, r);
};
lt.version = "18.3.1-next-f1338f8080-20240426";
function B0() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(B0);
    } catch (e) {
      console.error(e);
    }
}
B0(), (Bg.exports = lt);
var as = Bg.exports;
const $0 = Rg(as);
var W0,
  gp = as;
(W0 = gp.createRoot), gp.hydrateRoot;
const _2 = 1,
  z2 = 1e6;
let au = 0;
function B2() {
  return (au = (au + 1) % Number.MAX_SAFE_INTEGER), au.toString();
}
const lu = new Map(),
  yp = (e) => {
    if (lu.has(e)) return;
    const t = setTimeout(() => {
      lu.delete(e), Co({ type: "REMOVE_TOAST", toastId: e });
    }, z2);
    lu.set(e, t);
  },
  $2 = (e, t) => {
    switch (t.type) {
      case "ADD_TOAST":
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, _2) };
      case "UPDATE_TOAST":
        return {
          ...e,
          toasts: e.toasts.map((n) =>
            n.id === t.toast.id ? { ...n, ...t.toast } : n
          ),
        };
      case "DISMISS_TOAST": {
        const { toastId: n } = t;
        return (
          n
            ? yp(n)
            : e.toasts.forEach((r) => {
                yp(r.id);
              }),
          {
            ...e,
            toasts: e.toasts.map((r) =>
              r.id === n || n === void 0 ? { ...r, open: !1 } : r
            ),
          }
        );
      }
      case "REMOVE_TOAST":
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((n) => n.id !== t.toastId) };
    }
  },
  na = [];
let ra = { toasts: [] };
function Co(e) {
  (ra = $2(ra, e)),
    na.forEach((t) => {
      t(ra);
    });
}
function W2({ ...e }) {
  const t = B2(),
    n = (i) => Co({ type: "UPDATE_TOAST", toast: { ...i, id: t } }),
    r = () => Co({ type: "DISMISS_TOAST", toastId: t });
  return (
    Co({
      type: "ADD_TOAST",
      toast: {
        ...e,
        id: t,
        open: !0,
        onOpenChange: (i) => {
          i || r();
        },
      },
    }),
    { id: t, dismiss: r, update: n }
  );
}
function U2() {
  const [e, t] = S.useState(ra);
  return (
    S.useEffect(
      () => (
        na.push(t),
        () => {
          const n = na.indexOf(t);
          n > -1 && na.splice(n, 1);
        }
      ),
      [e]
    ),
    {
      ...e,
      toast: W2,
      dismiss: (n) => Co({ type: "DISMISS_TOAST", toastId: n }),
    }
  );
}
function be(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (i) {
    if ((e == null || e(i), n === !1 || !i.defaultPrevented))
      return t == null ? void 0 : t(i);
  };
}
function vp(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function U0(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((i) => {
      const o = vp(i, t);
      return !n && typeof o == "function" && (n = !0), o;
    });
    if (n)
      return () => {
        for (let i = 0; i < r.length; i++) {
          const o = r[i];
          typeof o == "function" ? o() : vp(e[i], null);
        }
      };
  };
}
function Ft(...e) {
  return S.useCallback(U0(...e), e);
}
function dl(e, t = []) {
  let n = [];
  function r(o, s) {
    const a = S.createContext(s),
      l = n.length;
    n = [...n, s];
    const u = (d) => {
      var p;
      const { scope: f, children: h, ...v } = d,
        g = ((p = f == null ? void 0 : f[e]) == null ? void 0 : p[l]) || a,
        x = S.useMemo(() => v, Object.values(v));
      return w.jsx(g.Provider, { value: x, children: h });
    };
    u.displayName = o + "Provider";
    function c(d, f) {
      var g;
      const h = ((g = f == null ? void 0 : f[e]) == null ? void 0 : g[l]) || a,
        v = S.useContext(h);
      if (v) return v;
      if (s !== void 0) return s;
      throw new Error(`\`${d}\` must be used within \`${o}\``);
    }
    return [u, c];
  }
  const i = () => {
    const o = n.map((s) => S.createContext(s));
    return function (a) {
      const l = (a == null ? void 0 : a[e]) || o;
      return S.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: l } }), [a, l]);
    };
  };
  return (i.scopeName = e), [r, H2(i, ...t)];
}
function H2(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((i) => ({ useScope: i(), scopeName: i.scopeName }));
    return function (o) {
      const s = r.reduce((a, { useScope: l, scopeName: u }) => {
        const d = l(o)[`__scope${u}`];
        return { ...a, ...d };
      }, {});
      return S.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
function Cc(e) {
  const t = K2(e),
    n = S.forwardRef((r, i) => {
      const { children: o, ...s } = r,
        a = S.Children.toArray(o),
        l = a.find(Q2);
      if (l) {
        const u = l.props.children,
          c = a.map((d) =>
            d === l
              ? S.Children.count(u) > 1
                ? S.Children.only(null)
                : S.isValidElement(u)
                ? u.props.children
                : null
              : d
          );
        return w.jsx(t, {
          ...s,
          ref: i,
          children: S.isValidElement(u) ? S.cloneElement(u, void 0, c) : null,
        });
      }
      return w.jsx(t, { ...s, ref: i, children: o });
    });
  return (n.displayName = `${e}.Slot`), n;
}
function K2(e) {
  const t = S.forwardRef((n, r) => {
    const { children: i, ...o } = n;
    if (S.isValidElement(i)) {
      const s = X2(i),
        a = Y2(o, i.props);
      return (
        i.type !== S.Fragment && (a.ref = r ? U0(r, s) : s),
        S.cloneElement(i, a)
      );
    }
    return S.Children.count(i) > 1 ? S.Children.only(null) : null;
  });
  return (t.displayName = `${e}.SlotClone`), t;
}
var H0 = Symbol("radix.slottable");
function G2(e) {
  const t = ({ children: n }) => w.jsx(w.Fragment, { children: n });
  return (t.displayName = `${e}.Slottable`), (t.__radixId = H0), t;
}
function Q2(e) {
  return (
    S.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === H0
  );
}
function Y2(e, t) {
  const n = { ...t };
  for (const r in t) {
    const i = e[r],
      o = t[r];
    /^on[A-Z]/.test(r)
      ? i && o
        ? (n[r] = (...a) => {
            const l = o(...a);
            return i(...a), l;
          })
        : i && (n[r] = i)
      : r === "style"
      ? (n[r] = { ...i, ...o })
      : r === "className" && (n[r] = [i, o].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function X2(e) {
  var r, i;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (i = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : i.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function q2(e) {
  const t = e + "CollectionProvider",
    [n, r] = dl(t),
    [i, o] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    s = (g) => {
      const { scope: x, children: p } = g,
        m = L.useRef(null),
        y = L.useRef(new Map()).current;
      return w.jsx(i, { scope: x, itemMap: y, collectionRef: m, children: p });
    };
  s.displayName = t;
  const a = e + "CollectionSlot",
    l = Cc(a),
    u = L.forwardRef((g, x) => {
      const { scope: p, children: m } = g,
        y = o(a, p),
        E = Ft(x, y.collectionRef);
      return w.jsx(l, { ref: E, children: m });
    });
  u.displayName = a;
  const c = e + "CollectionItemSlot",
    d = "data-radix-collection-item",
    f = Cc(c),
    h = L.forwardRef((g, x) => {
      const { scope: p, children: m, ...y } = g,
        E = L.useRef(null),
        C = Ft(x, E),
        b = o(c, p);
      return (
        L.useEffect(
          () => (
            b.itemMap.set(E, { ref: E, ...y }), () => void b.itemMap.delete(E)
          )
        ),
        w.jsx(f, { [d]: "", ref: C, children: m })
      );
    });
  h.displayName = c;
  function v(g) {
    const x = o(e + "CollectionConsumer", g);
    return L.useCallback(() => {
      const m = x.collectionRef.current;
      if (!m) return [];
      const y = Array.from(m.querySelectorAll(`[${d}]`));
      return Array.from(x.itemMap.values()).sort(
        (b, T) => y.indexOf(b.ref.current) - y.indexOf(T.ref.current)
      );
    }, [x.collectionRef, x.itemMap]);
  }
  return [{ Provider: s, Slot: u, ItemSlot: h }, v, r];
}
var Z2 = [
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
    "select",
    "span",
    "svg",
    "ul",
  ],
  tt = Z2.reduce((e, t) => {
    const n = Cc(`Primitive.${t}`),
      r = S.forwardRef((i, o) => {
        const { asChild: s, ...a } = i,
          l = s ? n : t;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          w.jsx(l, { ...a, ref: o })
        );
      });
    return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
  }, {});
function K0(e, t) {
  e && as.flushSync(() => e.dispatchEvent(t));
}
function Jn(e) {
  const t = S.useRef(e);
  return (
    S.useEffect(() => {
      t.current = e;
    }),
    S.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) == null ? void 0 : r.call(t, ...n);
        },
      []
    )
  );
}
function J2(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Jn(e);
  S.useEffect(() => {
    const r = (i) => {
      i.key === "Escape" && n(i);
    };
    return (
      t.addEventListener("keydown", r, { capture: !0 }),
      () => t.removeEventListener("keydown", r, { capture: !0 })
    );
  }, [n, t]);
}
var eE = "DismissableLayer",
  bc = "dismissableLayer.update",
  tE = "dismissableLayer.pointerDownOutside",
  nE = "dismissableLayer.focusOutside",
  xp,
  G0 = S.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  rf = S.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: i,
        onFocusOutside: o,
        onInteractOutside: s,
        onDismiss: a,
        ...l
      } = e,
      u = S.useContext(G0),
      [c, d] = S.useState(null),
      f =
        (c == null ? void 0 : c.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, h] = S.useState({}),
      v = Ft(t, (T) => d(T)),
      g = Array.from(u.layers),
      [x] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
      p = g.indexOf(x),
      m = c ? g.indexOf(c) : -1,
      y = u.layersWithOutsidePointerEventsDisabled.size > 0,
      E = m >= p,
      C = iE((T) => {
        const P = T.target,
          M = [...u.branches].some((N) => N.contains(P));
        !E ||
          M ||
          (i == null || i(T),
          s == null || s(T),
          T.defaultPrevented || a == null || a());
      }, f),
      b = oE((T) => {
        const P = T.target;
        [...u.branches].some((N) => N.contains(P)) ||
          (o == null || o(T),
          s == null || s(T),
          T.defaultPrevented || a == null || a());
      }, f);
    return (
      J2((T) => {
        m === u.layers.size - 1 &&
          (r == null || r(T),
          !T.defaultPrevented && a && (T.preventDefault(), a()));
      }, f),
      S.useEffect(() => {
        if (c)
          return (
            n &&
              (u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((xp = f.body.style.pointerEvents),
                (f.body.style.pointerEvents = "none")),
              u.layersWithOutsidePointerEventsDisabled.add(c)),
            u.layers.add(c),
            wp(),
            () => {
              n &&
                u.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (f.body.style.pointerEvents = xp);
            }
          );
      }, [c, f, n, u]),
      S.useEffect(
        () => () => {
          c &&
            (u.layers.delete(c),
            u.layersWithOutsidePointerEventsDisabled.delete(c),
            wp());
        },
        [c, u]
      ),
      S.useEffect(() => {
        const T = () => h({});
        return (
          document.addEventListener(bc, T),
          () => document.removeEventListener(bc, T)
        );
      }, []),
      w.jsx(tt.div, {
        ...l,
        ref: v,
        style: {
          pointerEvents: y ? (E ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: be(e.onFocusCapture, b.onFocusCapture),
        onBlurCapture: be(e.onBlurCapture, b.onBlurCapture),
        onPointerDownCapture: be(
          e.onPointerDownCapture,
          C.onPointerDownCapture
        ),
      })
    );
  });
rf.displayName = eE;
var rE = "DismissableLayerBranch",
  Q0 = S.forwardRef((e, t) => {
    const n = S.useContext(G0),
      r = S.useRef(null),
      i = Ft(t, r);
    return (
      S.useEffect(() => {
        const o = r.current;
        if (o)
          return (
            n.branches.add(o),
            () => {
              n.branches.delete(o);
            }
          );
      }, [n.branches]),
      w.jsx(tt.div, { ...e, ref: i })
    );
  });
Q0.displayName = rE;
function iE(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Jn(e),
    r = S.useRef(!1),
    i = S.useRef(() => {});
  return (
    S.useEffect(() => {
      const o = (a) => {
          if (a.target && !r.current) {
            let l = function () {
              Y0(tE, n, u, { discrete: !0 });
            };
            const u = { originalEvent: a };
            a.pointerType === "touch"
              ? (t.removeEventListener("click", i.current),
                (i.current = l),
                t.addEventListener("click", i.current, { once: !0 }))
              : l();
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
function oE(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Jn(e),
    r = S.useRef(!1);
  return (
    S.useEffect(() => {
      const i = (o) => {
        o.target &&
          !r.current &&
          Y0(nE, n, { originalEvent: o }, { discrete: !1 });
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
function wp() {
  const e = new CustomEvent(bc);
  document.dispatchEvent(e);
}
function Y0(e, t, n, { discrete: r }) {
  const i = n.originalEvent.target,
    o = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && i.addEventListener(e, t, { once: !0 }),
    r ? K0(i, o) : i.dispatchEvent(o);
}
var sE = rf,
  aE = Q0,
  er = globalThis != null && globalThis.document ? S.useLayoutEffect : () => {},
  lE = "Portal",
  X0 = S.forwardRef((e, t) => {
    var a;
    const { container: n, ...r } = e,
      [i, o] = S.useState(!1);
    er(() => o(!0), []);
    const s =
      n ||
      (i &&
        ((a = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : a.body));
    return s ? $0.createPortal(w.jsx(tt.div, { ...r, ref: t }), s) : null;
  });
X0.displayName = lE;
function uE(e, t) {
  return S.useReducer((n, r) => t[n][r] ?? n, e);
}
var of = (e) => {
  const { present: t, children: n } = e,
    r = cE(t),
    i =
      typeof n == "function" ? n({ present: r.isPresent }) : S.Children.only(n),
    o = Ft(r.ref, dE(i));
  return typeof n == "function" || r.isPresent
    ? S.cloneElement(i, { ref: o })
    : null;
};
of.displayName = "Presence";
function cE(e) {
  const [t, n] = S.useState(),
    r = S.useRef(null),
    i = S.useRef(e),
    o = S.useRef("none"),
    s = e ? "mounted" : "unmounted",
    [a, l] = uE(s, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    S.useEffect(() => {
      const u = Os(r.current);
      o.current = a === "mounted" ? u : "none";
    }, [a]),
    er(() => {
      const u = r.current,
        c = i.current;
      if (c !== e) {
        const f = o.current,
          h = Os(u);
        e
          ? l("MOUNT")
          : h === "none" || (u == null ? void 0 : u.display) === "none"
          ? l("UNMOUNT")
          : l(c && f !== h ? "ANIMATION_OUT" : "UNMOUNT"),
          (i.current = e);
      }
    }, [e, l]),
    er(() => {
      if (t) {
        let u;
        const c = t.ownerDocument.defaultView ?? window,
          d = (h) => {
            const g = Os(r.current).includes(h.animationName);
            if (h.target === t && g && (l("ANIMATION_END"), !i.current)) {
              const x = t.style.animationFillMode;
              (t.style.animationFillMode = "forwards"),
                (u = c.setTimeout(() => {
                  t.style.animationFillMode === "forwards" &&
                    (t.style.animationFillMode = x);
                }));
            }
          },
          f = (h) => {
            h.target === t && (o.current = Os(r.current));
          };
        return (
          t.addEventListener("animationstart", f),
          t.addEventListener("animationcancel", d),
          t.addEventListener("animationend", d),
          () => {
            c.clearTimeout(u),
              t.removeEventListener("animationstart", f),
              t.removeEventListener("animationcancel", d),
              t.removeEventListener("animationend", d);
          }
        );
      } else l("ANIMATION_END");
    }, [t, l]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(a),
      ref: S.useCallback((u) => {
        (r.current = u ? getComputedStyle(u) : null), n(u);
      }, []),
    }
  );
}
function Os(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function dE(e) {
  var r, i;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (i = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : i.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var fE = _g[" useInsertionEffect ".trim().toString()] || er;
function hE({ prop: e, defaultProp: t, onChange: n = () => {}, caller: r }) {
  const [i, o, s] = pE({ defaultProp: t, onChange: n }),
    a = e !== void 0,
    l = a ? e : i;
  {
    const c = S.useRef(e !== void 0);
    S.useEffect(() => {
      const d = c.current;
      d !== a &&
        console.warn(
          `${r} is changing from ${d ? "controlled" : "uncontrolled"} to ${
            a ? "controlled" : "uncontrolled"
          }. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
        ),
        (c.current = a);
    }, [a, r]);
  }
  const u = S.useCallback(
    (c) => {
      var d;
      if (a) {
        const f = mE(c) ? c(e) : c;
        f !== e && ((d = s.current) == null || d.call(s, f));
      } else o(c);
    },
    [a, e, o, s]
  );
  return [l, u];
}
function pE({ defaultProp: e, onChange: t }) {
  const [n, r] = S.useState(e),
    i = S.useRef(n),
    o = S.useRef(t);
  return (
    fE(() => {
      o.current = t;
    }, [t]),
    S.useEffect(() => {
      var s;
      i.current !== n &&
        ((s = o.current) == null || s.call(o, n), (i.current = n));
    }, [n, i]),
    [n, r, o]
  );
}
function mE(e) {
  return typeof e == "function";
}
var gE = Object.freeze({
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
  }),
  yE = "VisuallyHidden",
  fl = S.forwardRef((e, t) =>
    w.jsx(tt.span, { ...e, ref: t, style: { ...gE, ...e.style } })
  );
fl.displayName = yE;
var vE = fl,
  sf = "ToastProvider",
  [af, xE, wE] = q2("Toast"),
  [q0, cN] = dl("Toast", [wE]),
  [SE, hl] = q0(sf),
  Z0 = (e) => {
    const {
        __scopeToast: t,
        label: n = "Notification",
        duration: r = 5e3,
        swipeDirection: i = "right",
        swipeThreshold: o = 50,
        children: s,
      } = e,
      [a, l] = S.useState(null),
      [u, c] = S.useState(0),
      d = S.useRef(!1),
      f = S.useRef(!1);
    return (
      n.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${sf}\`. Expected non-empty \`string\`.`
        ),
      w.jsx(af.Provider, {
        scope: t,
        children: w.jsx(SE, {
          scope: t,
          label: n,
          duration: r,
          swipeDirection: i,
          swipeThreshold: o,
          toastCount: u,
          viewport: a,
          onViewportChange: l,
          onToastAdd: S.useCallback(() => c((h) => h + 1), []),
          onToastRemove: S.useCallback(() => c((h) => h - 1), []),
          isFocusedToastEscapeKeyDownRef: d,
          isClosePausedRef: f,
          children: s,
        }),
      })
    );
  };
Z0.displayName = sf;
var J0 = "ToastViewport",
  EE = ["F8"],
  Tc = "toast.viewportPause",
  Pc = "toast.viewportResume",
  ev = S.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        hotkey: r = EE,
        label: i = "Notifications ({hotkey})",
        ...o
      } = e,
      s = hl(J0, n),
      a = xE(n),
      l = S.useRef(null),
      u = S.useRef(null),
      c = S.useRef(null),
      d = S.useRef(null),
      f = Ft(t, d, s.onViewportChange),
      h = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      v = s.toastCount > 0;
    S.useEffect(() => {
      const x = (p) => {
        var y;
        r.length !== 0 &&
          r.every((E) => p[E] || p.code === E) &&
          ((y = d.current) == null || y.focus());
      };
      return (
        document.addEventListener("keydown", x),
        () => document.removeEventListener("keydown", x)
      );
    }, [r]),
      S.useEffect(() => {
        const x = l.current,
          p = d.current;
        if (v && x && p) {
          const m = () => {
              if (!s.isClosePausedRef.current) {
                const b = new CustomEvent(Tc);
                p.dispatchEvent(b), (s.isClosePausedRef.current = !0);
              }
            },
            y = () => {
              if (s.isClosePausedRef.current) {
                const b = new CustomEvent(Pc);
                p.dispatchEvent(b), (s.isClosePausedRef.current = !1);
              }
            },
            E = (b) => {
              !x.contains(b.relatedTarget) && y();
            },
            C = () => {
              x.contains(document.activeElement) || y();
            };
          return (
            x.addEventListener("focusin", m),
            x.addEventListener("focusout", E),
            x.addEventListener("pointermove", m),
            x.addEventListener("pointerleave", C),
            window.addEventListener("blur", m),
            window.addEventListener("focus", y),
            () => {
              x.removeEventListener("focusin", m),
                x.removeEventListener("focusout", E),
                x.removeEventListener("pointermove", m),
                x.removeEventListener("pointerleave", C),
                window.removeEventListener("blur", m),
                window.removeEventListener("focus", y);
            }
          );
        }
      }, [v, s.isClosePausedRef]);
    const g = S.useCallback(
      ({ tabbingDirection: x }) => {
        const m = a().map((y) => {
          const E = y.ref.current,
            C = [E, ...OE(E)];
          return x === "forwards" ? C : C.reverse();
        });
        return (x === "forwards" ? m.reverse() : m).flat();
      },
      [a]
    );
    return (
      S.useEffect(() => {
        const x = d.current;
        if (x) {
          const p = (m) => {
            var C, b, T;
            const y = m.altKey || m.ctrlKey || m.metaKey;
            if (m.key === "Tab" && !y) {
              const P = document.activeElement,
                M = m.shiftKey;
              if (m.target === x && M) {
                (C = u.current) == null || C.focus();
                return;
              }
              const I = g({ tabbingDirection: M ? "backwards" : "forwards" }),
                K = I.findIndex((D) => D === P);
              uu(I.slice(K + 1))
                ? m.preventDefault()
                : M
                ? (b = u.current) == null || b.focus()
                : (T = c.current) == null || T.focus();
            }
          };
          return (
            x.addEventListener("keydown", p),
            () => x.removeEventListener("keydown", p)
          );
        }
      }, [a, g]),
      w.jsxs(aE, {
        ref: l,
        role: "region",
        "aria-label": i.replace("{hotkey}", h),
        tabIndex: -1,
        style: { pointerEvents: v ? void 0 : "none" },
        children: [
          v &&
            w.jsx(kc, {
              ref: u,
              onFocusFromOutsideViewport: () => {
                const x = g({ tabbingDirection: "forwards" });
                uu(x);
              },
            }),
          w.jsx(af.Slot, {
            scope: n,
            children: w.jsx(tt.ol, { tabIndex: -1, ...o, ref: f }),
          }),
          v &&
            w.jsx(kc, {
              ref: c,
              onFocusFromOutsideViewport: () => {
                const x = g({ tabbingDirection: "backwards" });
                uu(x);
              },
            }),
        ],
      })
    );
  });
ev.displayName = J0;
var tv = "ToastFocusProxy",
  kc = S.forwardRef((e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...i } = e,
      o = hl(tv, n);
    return w.jsx(fl, {
      "aria-hidden": !0,
      tabIndex: 0,
      ...i,
      ref: t,
      style: { position: "fixed" },
      onFocus: (s) => {
        var u;
        const a = s.relatedTarget;
        !((u = o.viewport) != null && u.contains(a)) && r();
      },
    });
  });
kc.displayName = tv;
var ls = "Toast",
  CE = "toast.swipeStart",
  bE = "toast.swipeMove",
  TE = "toast.swipeCancel",
  PE = "toast.swipeEnd",
  nv = S.forwardRef((e, t) => {
    const { forceMount: n, open: r, defaultOpen: i, onOpenChange: o, ...s } = e,
      [a, l] = hE({ prop: r, defaultProp: i ?? !0, onChange: o, caller: ls });
    return w.jsx(of, {
      present: n || a,
      children: w.jsx(AE, {
        open: a,
        ...s,
        ref: t,
        onClose: () => l(!1),
        onPause: Jn(e.onPause),
        onResume: Jn(e.onResume),
        onSwipeStart: be(e.onSwipeStart, (u) => {
          u.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: be(e.onSwipeMove, (u) => {
          const { x: c, y: d } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "move"),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-x",
              `${c}px`
            ),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-y",
              `${d}px`
            );
        }),
        onSwipeCancel: be(e.onSwipeCancel, (u) => {
          u.currentTarget.setAttribute("data-swipe", "cancel"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: be(e.onSwipeEnd, (u) => {
          const { x: c, y: d } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "end"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-x",
              `${c}px`
            ),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-y",
              `${d}px`
            ),
            l(!1);
        }),
      }),
    });
  });
nv.displayName = ls;
var [kE, RE] = q0(ls, { onClose() {} }),
  AE = S.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        type: r = "foreground",
        duration: i,
        open: o,
        onClose: s,
        onEscapeKeyDown: a,
        onPause: l,
        onResume: u,
        onSwipeStart: c,
        onSwipeMove: d,
        onSwipeCancel: f,
        onSwipeEnd: h,
        ...v
      } = e,
      g = hl(ls, n),
      [x, p] = S.useState(null),
      m = Ft(t, (D) => p(D)),
      y = S.useRef(null),
      E = S.useRef(null),
      C = i || g.duration,
      b = S.useRef(0),
      T = S.useRef(C),
      P = S.useRef(0),
      { onToastAdd: M, onToastRemove: N } = g,
      z = Jn(() => {
        var Q;
        (x == null ? void 0 : x.contains(document.activeElement)) &&
          ((Q = g.viewport) == null || Q.focus()),
          s();
      }),
      I = S.useCallback(
        (D) => {
          !D ||
            D === 1 / 0 ||
            (window.clearTimeout(P.current),
            (b.current = new Date().getTime()),
            (P.current = window.setTimeout(z, D)));
        },
        [z]
      );
    S.useEffect(() => {
      const D = g.viewport;
      if (D) {
        const Q = () => {
            I(T.current), u == null || u();
          },
          $ = () => {
            const _ = new Date().getTime() - b.current;
            (T.current = T.current - _),
              window.clearTimeout(P.current),
              l == null || l();
          };
        return (
          D.addEventListener(Tc, $),
          D.addEventListener(Pc, Q),
          () => {
            D.removeEventListener(Tc, $), D.removeEventListener(Pc, Q);
          }
        );
      }
    }, [g.viewport, C, l, u, I]),
      S.useEffect(() => {
        o && !g.isClosePausedRef.current && I(C);
      }, [o, C, g.isClosePausedRef, I]),
      S.useEffect(() => (M(), () => N()), [M, N]);
    const K = S.useMemo(() => (x ? uv(x) : null), [x]);
    return g.viewport
      ? w.jsxs(w.Fragment, {
          children: [
            K &&
              w.jsx(ME, {
                __scopeToast: n,
                role: "status",
                "aria-live": r === "foreground" ? "assertive" : "polite",
                "aria-atomic": !0,
                children: K,
              }),
            w.jsx(kE, {
              scope: n,
              onClose: z,
              children: as.createPortal(
                w.jsx(af.ItemSlot, {
                  scope: n,
                  children: w.jsx(sE, {
                    asChild: !0,
                    onEscapeKeyDown: be(a, () => {
                      g.isFocusedToastEscapeKeyDownRef.current || z(),
                        (g.isFocusedToastEscapeKeyDownRef.current = !1);
                    }),
                    children: w.jsx(tt.li, {
                      role: "status",
                      "aria-live": "off",
                      "aria-atomic": !0,
                      tabIndex: 0,
                      "data-state": o ? "open" : "closed",
                      "data-swipe-direction": g.swipeDirection,
                      ...v,
                      ref: m,
                      style: {
                        userSelect: "none",
                        touchAction: "none",
                        ...e.style,
                      },
                      onKeyDown: be(e.onKeyDown, (D) => {
                        D.key === "Escape" &&
                          (a == null || a(D.nativeEvent),
                          D.nativeEvent.defaultPrevented ||
                            ((g.isFocusedToastEscapeKeyDownRef.current = !0),
                            z()));
                      }),
                      onPointerDown: be(e.onPointerDown, (D) => {
                        D.button === 0 &&
                          (y.current = { x: D.clientX, y: D.clientY });
                      }),
                      onPointerMove: be(e.onPointerMove, (D) => {
                        if (!y.current) return;
                        const Q = D.clientX - y.current.x,
                          $ = D.clientY - y.current.y,
                          _ = !!E.current,
                          k = ["left", "right"].includes(g.swipeDirection),
                          A = ["left", "up"].includes(g.swipeDirection)
                            ? Math.min
                            : Math.max,
                          O = k ? A(0, Q) : 0,
                          W = k ? 0 : A(0, $),
                          B = D.pointerType === "touch" ? 10 : 2,
                          Y = { x: O, y: W },
                          q = { originalEvent: D, delta: Y };
                        _
                          ? ((E.current = Y), Is(bE, d, q, { discrete: !1 }))
                          : Sp(Y, g.swipeDirection, B)
                          ? ((E.current = Y),
                            Is(CE, c, q, { discrete: !1 }),
                            D.target.setPointerCapture(D.pointerId))
                          : (Math.abs(Q) > B || Math.abs($) > B) &&
                            (y.current = null);
                      }),
                      onPointerUp: be(e.onPointerUp, (D) => {
                        const Q = E.current,
                          $ = D.target;
                        if (
                          ($.hasPointerCapture(D.pointerId) &&
                            $.releasePointerCapture(D.pointerId),
                          (E.current = null),
                          (y.current = null),
                          Q)
                        ) {
                          const _ = D.currentTarget,
                            k = { originalEvent: D, delta: Q };
                          Sp(Q, g.swipeDirection, g.swipeThreshold)
                            ? Is(PE, h, k, { discrete: !0 })
                            : Is(TE, f, k, { discrete: !0 }),
                            _.addEventListener(
                              "click",
                              (A) => A.preventDefault(),
                              { once: !0 }
                            );
                        }
                      }),
                    }),
                  }),
                }),
                g.viewport
              ),
            }),
          ],
        })
      : null;
  }),
  ME = (e) => {
    const { __scopeToast: t, children: n, ...r } = e,
      i = hl(ls, t),
      [o, s] = S.useState(!1),
      [a, l] = S.useState(!1);
    return (
      LE(() => s(!0)),
      S.useEffect(() => {
        const u = window.setTimeout(() => l(!0), 1e3);
        return () => window.clearTimeout(u);
      }, []),
      a
        ? null
        : w.jsx(X0, {
            asChild: !0,
            children: w.jsx(fl, {
              ...r,
              children:
                o && w.jsxs(w.Fragment, { children: [i.label, " ", n] }),
            }),
          })
    );
  },
  NE = "ToastTitle",
  rv = S.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return w.jsx(tt.div, { ...r, ref: t });
  });
rv.displayName = NE;
var jE = "ToastDescription",
  iv = S.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return w.jsx(tt.div, { ...r, ref: t });
  });
iv.displayName = jE;
var ov = "ToastAction",
  sv = S.forwardRef((e, t) => {
    const { altText: n, ...r } = e;
    return n.trim()
      ? w.jsx(lv, {
          altText: n,
          asChild: !0,
          children: w.jsx(lf, { ...r, ref: t }),
        })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${ov}\`. Expected non-empty \`string\`.`
        ),
        null);
  });
sv.displayName = ov;
var av = "ToastClose",
  lf = S.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e,
      i = RE(av, n);
    return w.jsx(lv, {
      asChild: !0,
      children: w.jsx(tt.button, {
        type: "button",
        ...r,
        ref: t,
        onClick: be(e.onClick, i.onClose),
      }),
    });
  });
lf.displayName = av;
var lv = S.forwardRef((e, t) => {
  const { __scopeToast: n, altText: r, ...i } = e;
  return w.jsx(tt.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": r || void 0,
    ...i,
    ref: t,
  });
});
function uv(e) {
  const t = [];
  return (
    Array.from(e.childNodes).forEach((r) => {
      if (
        (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        DE(r))
      ) {
        const i = r.ariaHidden || r.hidden || r.style.display === "none",
          o = r.dataset.radixToastAnnounceExclude === "";
        if (!i)
          if (o) {
            const s = r.dataset.radixToastAnnounceAlt;
            s && t.push(s);
          } else t.push(...uv(r));
      }
    }),
    t
  );
}
function Is(e, t, n, { discrete: r }) {
  const i = n.originalEvent.currentTarget,
    o = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  t && i.addEventListener(e, t, { once: !0 }),
    r ? K0(i, o) : i.dispatchEvent(o);
}
var Sp = (e, t, n = 0) => {
  const r = Math.abs(e.x),
    i = Math.abs(e.y),
    o = r > i;
  return t === "left" || t === "right" ? o && r > n : !o && i > n;
};
function LE(e = () => {}) {
  const t = Jn(e);
  er(() => {
    let n = 0,
      r = 0;
    return (
      (n = window.requestAnimationFrame(
        () => (r = window.requestAnimationFrame(t))
      )),
      () => {
        window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
      }
    );
  }, [t]);
}
function DE(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function OE(e) {
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
function uu(e) {
  const t = document.activeElement;
  return e.some((n) =>
    n === t ? !0 : (n.focus(), document.activeElement !== t)
  );
}
var IE = Z0,
  cv = ev,
  dv = nv,
  fv = rv,
  hv = iv,
  pv = sv,
  mv = lf;
function gv(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (n = gv(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function yv() {
  for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = gv(e)) && (r && (r += " "), (r += t));
  return r;
}
const Ep = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  Cp = yv,
  FE = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return Cp(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className
      );
    const { variants: i, defaultVariants: o } = t,
      s = Object.keys(i).map((u) => {
        const c = n == null ? void 0 : n[u],
          d = o == null ? void 0 : o[u];
        if (c === null) return null;
        const f = Ep(c) || Ep(d);
        return i[u][f];
      }),
      a =
        n &&
        Object.entries(n).reduce((u, c) => {
          let [d, f] = c;
          return f === void 0 || (u[d] = f), u;
        }, {}),
      l =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((u, c) => {
              let { class: d, className: f, ...h } = c;
              return Object.entries(h).every((v) => {
                let [g, x] = v;
                return Array.isArray(x)
                  ? x.includes({ ...o, ...a }[g])
                  : { ...o, ...a }[g] === x;
              })
                ? [...u, d, f]
                : u;
            }, []);
    return Cp(
      e,
      s,
      l,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className
    );
  };
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const VE = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  vv = (...e) =>
    e
      .filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var _E = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zE = S.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: i = "",
      children: o,
      iconNode: s,
      ...a
    },
    l
  ) =>
    S.createElement(
      "svg",
      {
        ref: l,
        ..._E,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: vv("lucide", i),
        ...a,
      },
      [
        ...s.map(([u, c]) => S.createElement(u, c)),
        ...(Array.isArray(o) ? o : [o]),
      ]
    )
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const BE = (e, t) => {
  const n = S.forwardRef(({ className: r, ...i }, o) =>
    S.createElement(zE, {
      ref: o,
      iconNode: t,
      className: vv(`lucide-${VE(e)}`, r),
      ...i,
    })
  );
  return (n.displayName = `${e}`), n;
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $E = BE("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  uf = "-",
  WE = (e) => {
    const t = HE(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (s) => {
        const a = s.split(uf);
        return a[0] === "" && a.length !== 1 && a.shift(), xv(a, t) || UE(s);
      },
      getConflictingClassGroupIds: (s, a) => {
        const l = n[s] || [];
        return a && r[s] ? [...l, ...r[s]] : l;
      },
    };
  },
  xv = (e, t) => {
    var s;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      i = r ? xv(e.slice(1), r) : void 0;
    if (i) return i;
    if (t.validators.length === 0) return;
    const o = e.join(uf);
    return (s = t.validators.find(({ validator: a }) => a(o))) == null
      ? void 0
      : s.classGroupId;
  },
  bp = /^\[(.+)\]$/,
  UE = (e) => {
    if (bp.test(e)) {
      const t = bp.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  HE = (e) => {
    const { theme: t, prefix: n } = e,
      r = { nextPart: new Map(), validators: [] };
    return (
      GE(Object.entries(e.classGroups), n).forEach(([o, s]) => {
        Rc(s, r, o, t);
      }),
      r
    );
  },
  Rc = (e, t, n, r) => {
    e.forEach((i) => {
      if (typeof i == "string") {
        const o = i === "" ? t : Tp(t, i);
        o.classGroupId = n;
        return;
      }
      if (typeof i == "function") {
        if (KE(i)) {
          Rc(i(r), t, n, r);
          return;
        }
        t.validators.push({ validator: i, classGroupId: n });
        return;
      }
      Object.entries(i).forEach(([o, s]) => {
        Rc(s, Tp(t, o), n, r);
      });
    });
  },
  Tp = (e, t) => {
    let n = e;
    return (
      t.split(uf).forEach((r) => {
        n.nextPart.has(r) ||
          n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(r));
      }),
      n
    );
  },
  KE = (e) => e.isThemeGetter,
  GE = (e, t) =>
    t
      ? e.map(([n, r]) => {
          const i = r.map((o) =>
            typeof o == "string"
              ? t + o
              : typeof o == "object"
              ? Object.fromEntries(
                  Object.entries(o).map(([s, a]) => [t + s, a])
                )
              : o
          );
          return [n, i];
        })
      : e,
  QE = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      n = new Map(),
      r = new Map();
    const i = (o, s) => {
      n.set(o, s), t++, t > e && ((t = 0), (r = n), (n = new Map()));
    };
    return {
      get(o) {
        let s = n.get(o);
        if (s !== void 0) return s;
        if ((s = r.get(o)) !== void 0) return i(o, s), s;
      },
      set(o, s) {
        n.has(o) ? n.set(o, s) : i(o, s);
      },
    };
  },
  wv = "!",
  YE = (e) => {
    const { separator: t, experimentalParseClassName: n } = e,
      r = t.length === 1,
      i = t[0],
      o = t.length,
      s = (a) => {
        const l = [];
        let u = 0,
          c = 0,
          d;
        for (let x = 0; x < a.length; x++) {
          let p = a[x];
          if (u === 0) {
            if (p === i && (r || a.slice(x, x + o) === t)) {
              l.push(a.slice(c, x)), (c = x + o);
              continue;
            }
            if (p === "/") {
              d = x;
              continue;
            }
          }
          p === "[" ? u++ : p === "]" && u--;
        }
        const f = l.length === 0 ? a : a.substring(c),
          h = f.startsWith(wv),
          v = h ? f.substring(1) : f,
          g = d && d > c ? d - c : void 0;
        return {
          modifiers: l,
          hasImportantModifier: h,
          baseClassName: v,
          maybePostfixModifierPosition: g,
        };
      };
    return n ? (a) => n({ className: a, parseClassName: s }) : s;
  },
  XE = (e) => {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return (
      e.forEach((r) => {
        r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
      }),
      t.push(...n.sort()),
      t
    );
  },
  qE = (e) => ({ cache: QE(e.cacheSize), parseClassName: YE(e), ...WE(e) }),
  ZE = /\s+/,
  JE = (e, t) => {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: i,
      } = t,
      o = [],
      s = e.trim().split(ZE);
    let a = "";
    for (let l = s.length - 1; l >= 0; l -= 1) {
      const u = s[l],
        {
          modifiers: c,
          hasImportantModifier: d,
          baseClassName: f,
          maybePostfixModifierPosition: h,
        } = n(u);
      let v = !!h,
        g = r(v ? f.substring(0, h) : f);
      if (!g) {
        if (!v) {
          a = u + (a.length > 0 ? " " + a : a);
          continue;
        }
        if (((g = r(f)), !g)) {
          a = u + (a.length > 0 ? " " + a : a);
          continue;
        }
        v = !1;
      }
      const x = XE(c).join(":"),
        p = d ? x + wv : x,
        m = p + g;
      if (o.includes(m)) continue;
      o.push(m);
      const y = i(g, v);
      for (let E = 0; E < y.length; ++E) {
        const C = y[E];
        o.push(p + C);
      }
      a = u + (a.length > 0 ? " " + a : a);
    }
    return a;
  };
function eC() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Sv(t)) && (r && (r += " "), (r += n));
  return r;
}
const Sv = (e) => {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Sv(e[r])) && (n && (n += " "), (n += t));
  return n;
};
function tC(e, ...t) {
  let n,
    r,
    i,
    o = s;
  function s(l) {
    const u = t.reduce((c, d) => d(c), e());
    return (n = qE(u)), (r = n.cache.get), (i = n.cache.set), (o = a), a(l);
  }
  function a(l) {
    const u = r(l);
    if (u) return u;
    const c = JE(l, n);
    return i(l, c), c;
  }
  return function () {
    return o(eC.apply(null, arguments));
  };
}
const se = (e) => {
    const t = (n) => n[e] || [];
    return (t.isThemeGetter = !0), t;
  },
  Ev = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  nC = /^\d+\/\d+$/,
  rC = new Set(["px", "full", "screen"]),
  iC = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  oC =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  sC = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  aC = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  lC =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  tn = (e) => yi(e) || rC.has(e) || nC.test(e),
  Tn = (e) => Wi(e, "length", gC),
  yi = (e) => !!e && !Number.isNaN(Number(e)),
  cu = (e) => Wi(e, "number", yi),
  oo = (e) => !!e && Number.isInteger(Number(e)),
  uC = (e) => e.endsWith("%") && yi(e.slice(0, -1)),
  G = (e) => Ev.test(e),
  Pn = (e) => iC.test(e),
  cC = new Set(["length", "size", "percentage"]),
  dC = (e) => Wi(e, cC, Cv),
  fC = (e) => Wi(e, "position", Cv),
  hC = new Set(["image", "url"]),
  pC = (e) => Wi(e, hC, vC),
  mC = (e) => Wi(e, "", yC),
  so = () => !0,
  Wi = (e, t, n) => {
    const r = Ev.exec(e);
    return r
      ? r[1]
        ? typeof t == "string"
          ? r[1] === t
          : t.has(r[1])
        : n(r[2])
      : !1;
  },
  gC = (e) => oC.test(e) && !sC.test(e),
  Cv = () => !1,
  yC = (e) => aC.test(e),
  vC = (e) => lC.test(e),
  xC = () => {
    const e = se("colors"),
      t = se("spacing"),
      n = se("blur"),
      r = se("brightness"),
      i = se("borderColor"),
      o = se("borderRadius"),
      s = se("borderSpacing"),
      a = se("borderWidth"),
      l = se("contrast"),
      u = se("grayscale"),
      c = se("hueRotate"),
      d = se("invert"),
      f = se("gap"),
      h = se("gradientColorStops"),
      v = se("gradientColorStopPositions"),
      g = se("inset"),
      x = se("margin"),
      p = se("opacity"),
      m = se("padding"),
      y = se("saturate"),
      E = se("scale"),
      C = se("sepia"),
      b = se("skew"),
      T = se("space"),
      P = se("translate"),
      M = () => ["auto", "contain", "none"],
      N = () => ["auto", "hidden", "clip", "visible", "scroll"],
      z = () => ["auto", G, t],
      I = () => [G, t],
      K = () => ["", tn, Tn],
      D = () => ["auto", yi, G],
      Q = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      $ = () => ["solid", "dashed", "dotted", "double", "none"],
      _ = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      k = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      A = () => ["", "0", G],
      O = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      W = () => [yi, G];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [so],
        spacing: [tn, Tn],
        blur: ["none", "", Pn, G],
        brightness: W(),
        borderColor: [e],
        borderRadius: ["none", "", "full", Pn, G],
        borderSpacing: I(),
        borderWidth: K(),
        contrast: W(),
        grayscale: A(),
        hueRotate: W(),
        invert: A(),
        gap: I(),
        gradientColorStops: [e],
        gradientColorStopPositions: [uC, Tn],
        inset: z(),
        margin: z(),
        opacity: W(),
        padding: I(),
        saturate: W(),
        scale: W(),
        sepia: A(),
        skew: W(),
        space: I(),
        translate: I(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", G] }],
        container: ["container"],
        columns: [{ columns: [Pn] }],
        "break-after": [{ "break-after": O() }],
        "break-before": [{ "break-before": O() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...Q(), G] }],
        overflow: [{ overflow: N() }],
        "overflow-x": [{ "overflow-x": N() }],
        "overflow-y": [{ "overflow-y": N() }],
        overscroll: [{ overscroll: M() }],
        "overscroll-x": [{ "overscroll-x": M() }],
        "overscroll-y": [{ "overscroll-y": M() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [g] }],
        "inset-x": [{ "inset-x": [g] }],
        "inset-y": [{ "inset-y": [g] }],
        start: [{ start: [g] }],
        end: [{ end: [g] }],
        top: [{ top: [g] }],
        right: [{ right: [g] }],
        bottom: [{ bottom: [g] }],
        left: [{ left: [g] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", oo, G] }],
        basis: [{ basis: z() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", G] }],
        grow: [{ grow: A() }],
        shrink: [{ shrink: A() }],
        order: [{ order: ["first", "last", "none", oo, G] }],
        "grid-cols": [{ "grid-cols": [so] }],
        "col-start-end": [{ col: ["auto", { span: ["full", oo, G] }, G] }],
        "col-start": [{ "col-start": D() }],
        "col-end": [{ "col-end": D() }],
        "grid-rows": [{ "grid-rows": [so] }],
        "row-start-end": [{ row: ["auto", { span: [oo, G] }, G] }],
        "row-start": [{ "row-start": D() }],
        "row-end": [{ "row-end": D() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", G] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", G] }],
        gap: [{ gap: [f] }],
        "gap-x": [{ "gap-x": [f] }],
        "gap-y": [{ "gap-y": [f] }],
        "justify-content": [{ justify: ["normal", ...k()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...k(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...k(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [m] }],
        px: [{ px: [m] }],
        py: [{ py: [m] }],
        ps: [{ ps: [m] }],
        pe: [{ pe: [m] }],
        pt: [{ pt: [m] }],
        pr: [{ pr: [m] }],
        pb: [{ pb: [m] }],
        pl: [{ pl: [m] }],
        m: [{ m: [x] }],
        mx: [{ mx: [x] }],
        my: [{ my: [x] }],
        ms: [{ ms: [x] }],
        me: [{ me: [x] }],
        mt: [{ mt: [x] }],
        mr: [{ mr: [x] }],
        mb: [{ mb: [x] }],
        ml: [{ ml: [x] }],
        "space-x": [{ "space-x": [T] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [T] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", G, t] }],
        "min-w": [{ "min-w": [G, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              G,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [Pn] },
              Pn,
            ],
          },
        ],
        h: [{ h: [G, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [G, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [G, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [G, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", Pn, Tn] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              cu,
            ],
          },
        ],
        "font-family": [{ font: [so] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              G,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", yi, cu] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              tn,
              G,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", G] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", G] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [p] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [p] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...$(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", tn, Tn] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", tn, G] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: I() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              G,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", G] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [p] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...Q(), fC] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", dC] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              pC,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [v] }],
        "gradient-via-pos": [{ via: [v] }],
        "gradient-to-pos": [{ to: [v] }],
        "gradient-from": [{ from: [h] }],
        "gradient-via": [{ via: [h] }],
        "gradient-to": [{ to: [h] }],
        rounded: [{ rounded: [o] }],
        "rounded-s": [{ "rounded-s": [o] }],
        "rounded-e": [{ "rounded-e": [o] }],
        "rounded-t": [{ "rounded-t": [o] }],
        "rounded-r": [{ "rounded-r": [o] }],
        "rounded-b": [{ "rounded-b": [o] }],
        "rounded-l": [{ "rounded-l": [o] }],
        "rounded-ss": [{ "rounded-ss": [o] }],
        "rounded-se": [{ "rounded-se": [o] }],
        "rounded-ee": [{ "rounded-ee": [o] }],
        "rounded-es": [{ "rounded-es": [o] }],
        "rounded-tl": [{ "rounded-tl": [o] }],
        "rounded-tr": [{ "rounded-tr": [o] }],
        "rounded-br": [{ "rounded-br": [o] }],
        "rounded-bl": [{ "rounded-bl": [o] }],
        "border-w": [{ border: [a] }],
        "border-w-x": [{ "border-x": [a] }],
        "border-w-y": [{ "border-y": [a] }],
        "border-w-s": [{ "border-s": [a] }],
        "border-w-e": [{ "border-e": [a] }],
        "border-w-t": [{ "border-t": [a] }],
        "border-w-r": [{ "border-r": [a] }],
        "border-w-b": [{ "border-b": [a] }],
        "border-w-l": [{ "border-l": [a] }],
        "border-opacity": [{ "border-opacity": [p] }],
        "border-style": [{ border: [...$(), "hidden"] }],
        "divide-x": [{ "divide-x": [a] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [a] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [p] }],
        "divide-style": [{ divide: $() }],
        "border-color": [{ border: [i] }],
        "border-color-x": [{ "border-x": [i] }],
        "border-color-y": [{ "border-y": [i] }],
        "border-color-s": [{ "border-s": [i] }],
        "border-color-e": [{ "border-e": [i] }],
        "border-color-t": [{ "border-t": [i] }],
        "border-color-r": [{ "border-r": [i] }],
        "border-color-b": [{ "border-b": [i] }],
        "border-color-l": [{ "border-l": [i] }],
        "divide-color": [{ divide: [i] }],
        "outline-style": [{ outline: ["", ...$()] }],
        "outline-offset": [{ "outline-offset": [tn, G] }],
        "outline-w": [{ outline: [tn, Tn] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: K() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [p] }],
        "ring-offset-w": [{ "ring-offset": [tn, Tn] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", Pn, mC] }],
        "shadow-color": [{ shadow: [so] }],
        opacity: [{ opacity: [p] }],
        "mix-blend": [{ "mix-blend": [..._(), "plus-lighter", "plus-darker"] }],
        "bg-blend": [{ "bg-blend": _() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [l] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", Pn, G] }],
        grayscale: [{ grayscale: [u] }],
        "hue-rotate": [{ "hue-rotate": [c] }],
        invert: [{ invert: [d] }],
        saturate: [{ saturate: [y] }],
        sepia: [{ sepia: [C] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [n] }],
        "backdrop-brightness": [{ "backdrop-brightness": [r] }],
        "backdrop-contrast": [{ "backdrop-contrast": [l] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [c] }],
        "backdrop-invert": [{ "backdrop-invert": [d] }],
        "backdrop-opacity": [{ "backdrop-opacity": [p] }],
        "backdrop-saturate": [{ "backdrop-saturate": [y] }],
        "backdrop-sepia": [{ "backdrop-sepia": [C] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [s] }],
        "border-spacing-x": [{ "border-spacing-x": [s] }],
        "border-spacing-y": [{ "border-spacing-y": [s] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              G,
            ],
          },
        ],
        duration: [{ duration: W() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", G] }],
        delay: [{ delay: W() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", G] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [E] }],
        "scale-x": [{ "scale-x": [E] }],
        "scale-y": [{ "scale-y": [E] }],
        rotate: [{ rotate: [oo, G] }],
        "translate-x": [{ "translate-x": [P] }],
        "translate-y": [{ "translate-y": [P] }],
        "skew-x": [{ "skew-x": [b] }],
        "skew-y": [{ "skew-y": [b] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              G,
            ],
          },
        ],
        accent: [{ accent: ["auto", e] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              G,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": I() }],
        "scroll-mx": [{ "scroll-mx": I() }],
        "scroll-my": [{ "scroll-my": I() }],
        "scroll-ms": [{ "scroll-ms": I() }],
        "scroll-me": [{ "scroll-me": I() }],
        "scroll-mt": [{ "scroll-mt": I() }],
        "scroll-mr": [{ "scroll-mr": I() }],
        "scroll-mb": [{ "scroll-mb": I() }],
        "scroll-ml": [{ "scroll-ml": I() }],
        "scroll-p": [{ "scroll-p": I() }],
        "scroll-px": [{ "scroll-px": I() }],
        "scroll-py": [{ "scroll-py": I() }],
        "scroll-ps": [{ "scroll-ps": I() }],
        "scroll-pe": [{ "scroll-pe": I() }],
        "scroll-pt": [{ "scroll-pt": I() }],
        "scroll-pr": [{ "scroll-pr": I() }],
        "scroll-pb": [{ "scroll-pb": I() }],
        "scroll-pl": [{ "scroll-pl": I() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", G] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [tn, Tn, cu] }],
        stroke: [{ stroke: [e, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  wC = tC(xC);
function _r(...e) {
  return wC(yv(e));
}
const SC = IE,
  bv = S.forwardRef(({ className: e, ...t }, n) =>
    w.jsx(cv, {
      ref: n,
      className: _r(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        e
      ),
      ...t,
    })
  );
bv.displayName = cv.displayName;
const EC = FE(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    {
      variants: {
        variant: {
          default: "border bg-background text-foreground",
          destructive:
            "destructive group border-destructive bg-destructive text-destructive-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    }
  ),
  Tv = S.forwardRef(({ className: e, variant: t, ...n }, r) =>
    w.jsx(dv, { ref: r, className: _r(EC({ variant: t }), e), ...n })
  );
Tv.displayName = dv.displayName;
const CC = S.forwardRef(({ className: e, ...t }, n) =>
  w.jsx(pv, {
    ref: n,
    className: _r(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
      e
    ),
    ...t,
  })
);
CC.displayName = pv.displayName;
const Pv = S.forwardRef(({ className: e, ...t }, n) =>
  w.jsx(mv, {
    ref: n,
    className: _r(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e
    ),
    "toast-close": "",
    ...t,
    children: w.jsx($E, { className: "h-4 w-4" }),
  })
);
Pv.displayName = mv.displayName;
const kv = S.forwardRef(({ className: e, ...t }, n) =>
  w.jsx(fv, { ref: n, className: _r("text-sm font-semibold", e), ...t })
);
kv.displayName = fv.displayName;
const Rv = S.forwardRef(({ className: e, ...t }, n) =>
  w.jsx(hv, { ref: n, className: _r("text-sm opacity-90", e), ...t })
);
Rv.displayName = hv.displayName;
function bC() {
  const { toasts: e } = U2();
  return w.jsxs(SC, {
    children: [
      e.map(function ({ id: t, title: n, description: r, action: i, ...o }) {
        return w.jsxs(
          Tv,
          {
            ...o,
            children: [
              w.jsxs("div", {
                className: "grid gap-1",
                children: [
                  n && w.jsx(kv, { children: n }),
                  r && w.jsx(Rv, { children: r }),
                ],
              }),
              i,
              w.jsx(Pv, {}),
            ],
          },
          t
        );
      }),
      w.jsx(bv, {}),
    ],
  });
}
var Pp = ["light", "dark"],
  TC = "(prefers-color-scheme: dark)",
  PC = S.createContext(void 0),
  kC = { setTheme: (e) => {}, themes: [] },
  RC = () => {
    var e;
    return (e = S.useContext(PC)) != null ? e : kC;
  };
S.memo(
  ({
    forcedTheme: e,
    storageKey: t,
    attribute: n,
    enableSystem: r,
    enableColorScheme: i,
    defaultTheme: o,
    value: s,
    attrs: a,
    nonce: l,
  }) => {
    let u = o === "system",
      c =
        n === "class"
          ? `var d=document.documentElement,c=d.classList;${`c.remove(${a
              .map((v) => `'${v}'`)
              .join(",")})`};`
          : `var d=document.documentElement,n='${n}',s='setAttribute';`,
      d = i
        ? Pp.includes(o) && o
          ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${o}'`
          : "if(e==='light'||e==='dark')d.style.colorScheme=e"
        : "",
      f = (v, g = !1, x = !0) => {
        let p = s ? s[v] : v,
          m = g ? v + "|| ''" : `'${p}'`,
          y = "";
        return (
          i &&
            x &&
            !g &&
            Pp.includes(v) &&
            (y += `d.style.colorScheme = '${v}';`),
          n === "class"
            ? g || p
              ? (y += `c.add(${m})`)
              : (y += "null")
            : p && (y += `d[s](n,${m})`),
          y
        );
      },
      h = e
        ? `!function(){${c}${f(e)}}()`
        : r
        ? `!function(){try{${c}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${TC}',m=window.matchMedia(t);if(m.media!==t||m.matches){${f(
            "dark"
          )}}else{${f("light")}}}else if(e){${
            s ? `var x=${JSON.stringify(s)};` : ""
          }${f(s ? "x[e]" : "e", !0)}}${
            u ? "" : "else{" + f(o, !1, !1) + "}"
          }${d}}catch(e){}}()`
        : `!function(){try{${c}var e=localStorage.getItem('${t}');if(e){${
            s ? `var x=${JSON.stringify(s)};` : ""
          }${f(s ? "x[e]" : "e", !0)}}else{${f(
            o,
            !1,
            !1
          )};}${d}}catch(t){}}();`;
    return S.createElement("script", {
      nonce: l,
      dangerouslySetInnerHTML: { __html: h },
    });
  }
);
var AC = (e) => {
    switch (e) {
      case "success":
        return jC;
      case "info":
        return DC;
      case "warning":
        return LC;
      case "error":
        return OC;
      default:
        return null;
    }
  },
  MC = Array(12).fill(0),
  NC = ({ visible: e, className: t }) =>
    L.createElement(
      "div",
      {
        className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
        "data-visible": e,
      },
      L.createElement(
        "div",
        { className: "sonner-spinner" },
        MC.map((n, r) =>
          L.createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${r}`,
          })
        )
      )
    ),
  jC = L.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    L.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    })
  ),
  LC = L.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    L.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    })
  ),
  DC = L.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    L.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    })
  ),
  OC = L.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    L.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    })
  ),
  IC = L.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    L.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    L.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
  ),
  FC = () => {
    let [e, t] = L.useState(document.hidden);
    return (
      L.useEffect(() => {
        let n = () => {
          t(document.hidden);
        };
        return (
          document.addEventListener("visibilitychange", n),
          () => window.removeEventListener("visibilitychange", n)
        );
      }, []),
      e
    );
  },
  Ac = 1,
  VC = class {
    constructor() {
      (this.subscribe = (e) => (
        this.subscribers.push(e),
        () => {
          let t = this.subscribers.indexOf(e);
          this.subscribers.splice(t, 1);
        }
      )),
        (this.publish = (e) => {
          this.subscribers.forEach((t) => t(e));
        }),
        (this.addToast = (e) => {
          this.publish(e), (this.toasts = [...this.toasts, e]);
        }),
        (this.create = (e) => {
          var t;
          let { message: n, ...r } = e,
            i =
              typeof (e == null ? void 0 : e.id) == "number" ||
              ((t = e.id) == null ? void 0 : t.length) > 0
                ? e.id
                : Ac++,
            o = this.toasts.find((a) => a.id === i),
            s = e.dismissible === void 0 ? !0 : e.dismissible;
          return (
            this.dismissedToasts.has(i) && this.dismissedToasts.delete(i),
            o
              ? (this.toasts = this.toasts.map((a) =>
                  a.id === i
                    ? (this.publish({ ...a, ...e, id: i, title: n }),
                      { ...a, ...e, id: i, dismissible: s, title: n })
                    : a
                ))
              : this.addToast({ title: n, ...r, dismissible: s, id: i }),
            i
          );
        }),
        (this.dismiss = (e) => (
          this.dismissedToasts.add(e),
          e ||
            this.toasts.forEach((t) => {
              this.subscribers.forEach((n) => n({ id: t.id, dismiss: !0 }));
            }),
          this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })),
          e
        )),
        (this.message = (e, t) => this.create({ ...t, message: e })),
        (this.error = (e, t) =>
          this.create({ ...t, message: e, type: "error" })),
        (this.success = (e, t) =>
          this.create({ ...t, type: "success", message: e })),
        (this.info = (e, t) => this.create({ ...t, type: "info", message: e })),
        (this.warning = (e, t) =>
          this.create({ ...t, type: "warning", message: e })),
        (this.loading = (e, t) =>
          this.create({ ...t, type: "loading", message: e })),
        (this.promise = (e, t) => {
          if (!t) return;
          let n;
          t.loading !== void 0 &&
            (n = this.create({
              ...t,
              promise: e,
              type: "loading",
              message: t.loading,
              description:
                typeof t.description != "function" ? t.description : void 0,
            }));
          let r = e instanceof Promise ? e : e(),
            i = n !== void 0,
            o,
            s = r
              .then(async (l) => {
                if (((o = ["resolve", l]), L.isValidElement(l)))
                  (i = !1), this.create({ id: n, type: "default", message: l });
                else if (zC(l) && !l.ok) {
                  i = !1;
                  let u =
                      typeof t.error == "function"
                        ? await t.error(`HTTP error! status: ${l.status}`)
                        : t.error,
                    c =
                      typeof t.description == "function"
                        ? await t.description(`HTTP error! status: ${l.status}`)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: u,
                    description: c,
                  });
                } else if (t.success !== void 0) {
                  i = !1;
                  let u =
                      typeof t.success == "function"
                        ? await t.success(l)
                        : t.success,
                    c =
                      typeof t.description == "function"
                        ? await t.description(l)
                        : t.description;
                  this.create({
                    id: n,
                    type: "success",
                    message: u,
                    description: c,
                  });
                }
              })
              .catch(async (l) => {
                if (((o = ["reject", l]), t.error !== void 0)) {
                  i = !1;
                  let u =
                      typeof t.error == "function" ? await t.error(l) : t.error,
                    c =
                      typeof t.description == "function"
                        ? await t.description(l)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: u,
                    description: c,
                  });
                }
              })
              .finally(() => {
                var l;
                i && (this.dismiss(n), (n = void 0)),
                  (l = t.finally) == null || l.call(t);
              }),
            a = () =>
              new Promise((l, u) =>
                s.then(() => (o[0] === "reject" ? u(o[1]) : l(o[1]))).catch(u)
              );
          return typeof n != "string" && typeof n != "number"
            ? { unwrap: a }
            : Object.assign(n, { unwrap: a });
        }),
        (this.custom = (e, t) => {
          let n = (t == null ? void 0 : t.id) || Ac++;
          return this.create({ jsx: e(n), id: n, ...t }), n;
        }),
        (this.getActiveToasts = () =>
          this.toasts.filter((e) => !this.dismissedToasts.has(e.id))),
        (this.subscribers = []),
        (this.toasts = []),
        (this.dismissedToasts = new Set());
    }
  },
  Qe = new VC(),
  _C = (e, t) => {
    let n = (t == null ? void 0 : t.id) || Ac++;
    return Qe.addToast({ title: e, ...t, id: n }), n;
  },
  zC = (e) =>
    e &&
    typeof e == "object" &&
    "ok" in e &&
    typeof e.ok == "boolean" &&
    "status" in e &&
    typeof e.status == "number",
  BC = _C,
  $C = () => Qe.toasts,
  WC = () => Qe.getActiveToasts();
Object.assign(
  BC,
  {
    success: Qe.success,
    info: Qe.info,
    warning: Qe.warning,
    error: Qe.error,
    custom: Qe.custom,
    message: Qe.message,
    promise: Qe.promise,
    dismiss: Qe.dismiss,
    loading: Qe.loading,
  },
  { getHistory: $C, getToasts: WC }
);
function UC(e, { insertAt: t } = {}) {
  if (typeof document > "u") return;
  let n = document.head || document.getElementsByTagName("head")[0],
    r = document.createElement("style");
  (r.type = "text/css"),
    t === "top" && n.firstChild
      ? n.insertBefore(r, n.firstChild)
      : n.appendChild(r),
    r.styleSheet
      ? (r.styleSheet.cssText = e)
      : r.appendChild(document.createTextNode(e));
}
UC(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function Fs(e) {
  return e.label !== void 0;
}
var HC = 3,
  KC = "32px",
  GC = "16px",
  kp = 4e3,
  QC = 356,
  YC = 14,
  XC = 20,
  qC = 200;
function bt(...e) {
  return e.filter(Boolean).join(" ");
}
function ZC(e) {
  let [t, n] = e.split("-"),
    r = [];
  return t && r.push(t), n && r.push(n), r;
}
var JC = (e) => {
  var t, n, r, i, o, s, a, l, u, c, d;
  let {
      invert: f,
      toast: h,
      unstyled: v,
      interacting: g,
      setHeights: x,
      visibleToasts: p,
      heights: m,
      index: y,
      toasts: E,
      expanded: C,
      removeToast: b,
      defaultRichColors: T,
      closeButton: P,
      style: M,
      cancelButtonStyle: N,
      actionButtonStyle: z,
      className: I = "",
      descriptionClassName: K = "",
      duration: D,
      position: Q,
      gap: $,
      loadingIcon: _,
      expandByDefault: k,
      classNames: A,
      icons: O,
      closeButtonAriaLabel: W = "Close toast",
      pauseWhenPageIsHidden: B,
    } = e,
    [Y, q] = L.useState(null),
    [xe, je] = L.useState(null),
    [ee, zr] = L.useState(!1),
    [vn, ur] = L.useState(!1),
    [xn, Br] = L.useState(!1),
    [wn, ps] = L.useState(!1),
    [Ml, ms] = L.useState(!1),
    [Nl, Yi] = L.useState(0),
    [$r, th] = L.useState(0),
    Xi = L.useRef(h.duration || D || kp),
    nh = L.useRef(null),
    cr = L.useRef(null),
    i1 = y === 0,
    o1 = y + 1 <= p,
    ct = h.type,
    Wr = h.dismissible !== !1,
    s1 = h.className || "",
    a1 = h.descriptionClassName || "",
    gs = L.useMemo(
      () => m.findIndex((U) => U.toastId === h.id) || 0,
      [m, h.id]
    ),
    l1 = L.useMemo(() => {
      var U;
      return (U = h.closeButton) != null ? U : P;
    }, [h.closeButton, P]),
    rh = L.useMemo(() => h.duration || D || kp, [h.duration, D]),
    jl = L.useRef(0),
    Ur = L.useRef(0),
    ih = L.useRef(0),
    Hr = L.useRef(null),
    [u1, c1] = Q.split("-"),
    oh = L.useMemo(
      () => m.reduce((U, ne, ue) => (ue >= gs ? U : U + ne.height), 0),
      [m, gs]
    ),
    sh = FC(),
    d1 = h.invert || f,
    Ll = ct === "loading";
  (Ur.current = L.useMemo(() => gs * $ + oh, [gs, oh])),
    L.useEffect(() => {
      Xi.current = rh;
    }, [rh]),
    L.useEffect(() => {
      zr(!0);
    }, []),
    L.useEffect(() => {
      let U = cr.current;
      if (U) {
        let ne = U.getBoundingClientRect().height;
        return (
          th(ne),
          x((ue) => [
            { toastId: h.id, height: ne, position: h.position },
            ...ue,
          ]),
          () => x((ue) => ue.filter((wt) => wt.toastId !== h.id))
        );
      }
    }, [x, h.id]),
    L.useLayoutEffect(() => {
      if (!ee) return;
      let U = cr.current,
        ne = U.style.height;
      U.style.height = "auto";
      let ue = U.getBoundingClientRect().height;
      (U.style.height = ne),
        th(ue),
        x((wt) =>
          wt.find((St) => St.toastId === h.id)
            ? wt.map((St) => (St.toastId === h.id ? { ...St, height: ue } : St))
            : [{ toastId: h.id, height: ue, position: h.position }, ...wt]
        );
    }, [ee, h.title, h.description, x, h.id]);
  let Sn = L.useCallback(() => {
    ur(!0),
      Yi(Ur.current),
      x((U) => U.filter((ne) => ne.toastId !== h.id)),
      setTimeout(() => {
        b(h);
      }, qC);
  }, [h, b, x, Ur]);
  L.useEffect(() => {
    if (
      (h.promise && ct === "loading") ||
      h.duration === 1 / 0 ||
      h.type === "loading"
    )
      return;
    let U;
    return (
      C || g || (B && sh)
        ? (() => {
            if (ih.current < jl.current) {
              let ne = new Date().getTime() - jl.current;
              Xi.current = Xi.current - ne;
            }
            ih.current = new Date().getTime();
          })()
        : Xi.current !== 1 / 0 &&
          ((jl.current = new Date().getTime()),
          (U = setTimeout(() => {
            var ne;
            (ne = h.onAutoClose) == null || ne.call(h, h), Sn();
          }, Xi.current))),
      () => clearTimeout(U)
    );
  }, [C, g, h, ct, B, sh, Sn]),
    L.useEffect(() => {
      h.delete && Sn();
    }, [Sn, h.delete]);
  function f1() {
    var U, ne, ue;
    return O != null && O.loading
      ? L.createElement(
          "div",
          {
            className: bt(
              A == null ? void 0 : A.loader,
              (U = h == null ? void 0 : h.classNames) == null
                ? void 0
                : U.loader,
              "sonner-loader"
            ),
            "data-visible": ct === "loading",
          },
          O.loading
        )
      : _
      ? L.createElement(
          "div",
          {
            className: bt(
              A == null ? void 0 : A.loader,
              (ne = h == null ? void 0 : h.classNames) == null
                ? void 0
                : ne.loader,
              "sonner-loader"
            ),
            "data-visible": ct === "loading",
          },
          _
        )
      : L.createElement(NC, {
          className: bt(
            A == null ? void 0 : A.loader,
            (ue = h == null ? void 0 : h.classNames) == null
              ? void 0
              : ue.loader
          ),
          visible: ct === "loading",
        });
  }
  return L.createElement(
    "li",
    {
      tabIndex: 0,
      ref: cr,
      className: bt(
        I,
        s1,
        A == null ? void 0 : A.toast,
        (t = h == null ? void 0 : h.classNames) == null ? void 0 : t.toast,
        A == null ? void 0 : A.default,
        A == null ? void 0 : A[ct],
        (n = h == null ? void 0 : h.classNames) == null ? void 0 : n[ct]
      ),
      "data-sonner-toast": "",
      "data-rich-colors": (r = h.richColors) != null ? r : T,
      "data-styled": !(h.jsx || h.unstyled || v),
      "data-mounted": ee,
      "data-promise": !!h.promise,
      "data-swiped": Ml,
      "data-removed": vn,
      "data-visible": o1,
      "data-y-position": u1,
      "data-x-position": c1,
      "data-index": y,
      "data-front": i1,
      "data-swiping": xn,
      "data-dismissible": Wr,
      "data-type": ct,
      "data-invert": d1,
      "data-swipe-out": wn,
      "data-swipe-direction": xe,
      "data-expanded": !!(C || (k && ee)),
      style: {
        "--index": y,
        "--toasts-before": y,
        "--z-index": E.length - y,
        "--offset": `${vn ? Nl : Ur.current}px`,
        "--initial-height": k ? "auto" : `${$r}px`,
        ...M,
        ...h.style,
      },
      onDragEnd: () => {
        Br(!1), q(null), (Hr.current = null);
      },
      onPointerDown: (U) => {
        Ll ||
          !Wr ||
          ((nh.current = new Date()),
          Yi(Ur.current),
          U.target.setPointerCapture(U.pointerId),
          U.target.tagName !== "BUTTON" &&
            (Br(!0), (Hr.current = { x: U.clientX, y: U.clientY })));
      },
      onPointerUp: () => {
        var U, ne, ue, wt;
        if (wn || !Wr) return;
        Hr.current = null;
        let St = Number(
            ((U = cr.current) == null
              ? void 0
              : U.style
                  .getPropertyValue("--swipe-amount-x")
                  .replace("px", "")) || 0
          ),
          En = Number(
            ((ne = cr.current) == null
              ? void 0
              : ne.style
                  .getPropertyValue("--swipe-amount-y")
                  .replace("px", "")) || 0
          ),
          dr =
            new Date().getTime() -
            ((ue = nh.current) == null ? void 0 : ue.getTime()),
          Et = Y === "x" ? St : En,
          Cn = Math.abs(Et) / dr;
        if (Math.abs(Et) >= XC || Cn > 0.11) {
          Yi(Ur.current),
            (wt = h.onDismiss) == null || wt.call(h, h),
            je(
              Y === "x" ? (St > 0 ? "right" : "left") : En > 0 ? "down" : "up"
            ),
            Sn(),
            ps(!0),
            ms(!1);
          return;
        }
        Br(!1), q(null);
      },
      onPointerMove: (U) => {
        var ne, ue, wt, St;
        if (
          !Hr.current ||
          !Wr ||
          ((ne = window.getSelection()) == null
            ? void 0
            : ne.toString().length) > 0
        )
          return;
        let En = U.clientY - Hr.current.y,
          dr = U.clientX - Hr.current.x,
          Et = (ue = e.swipeDirections) != null ? ue : ZC(Q);
        !Y &&
          (Math.abs(dr) > 1 || Math.abs(En) > 1) &&
          q(Math.abs(dr) > Math.abs(En) ? "x" : "y");
        let Cn = { x: 0, y: 0 };
        Y === "y"
          ? (Et.includes("top") || Et.includes("bottom")) &&
            ((Et.includes("top") && En < 0) ||
              (Et.includes("bottom") && En > 0)) &&
            (Cn.y = En)
          : Y === "x" &&
            (Et.includes("left") || Et.includes("right")) &&
            ((Et.includes("left") && dr < 0) ||
              (Et.includes("right") && dr > 0)) &&
            (Cn.x = dr),
          (Math.abs(Cn.x) > 0 || Math.abs(Cn.y) > 0) && ms(!0),
          (wt = cr.current) == null ||
            wt.style.setProperty("--swipe-amount-x", `${Cn.x}px`),
          (St = cr.current) == null ||
            St.style.setProperty("--swipe-amount-y", `${Cn.y}px`);
      },
    },
    l1 && !h.jsx
      ? L.createElement(
          "button",
          {
            "aria-label": W,
            "data-disabled": Ll,
            "data-close-button": !0,
            onClick:
              Ll || !Wr
                ? () => {}
                : () => {
                    var U;
                    Sn(), (U = h.onDismiss) == null || U.call(h, h);
                  },
            className: bt(
              A == null ? void 0 : A.closeButton,
              (i = h == null ? void 0 : h.classNames) == null
                ? void 0
                : i.closeButton
            ),
          },
          (o = O == null ? void 0 : O.close) != null ? o : IC
        )
      : null,
    h.jsx || S.isValidElement(h.title)
      ? h.jsx
        ? h.jsx
        : typeof h.title == "function"
        ? h.title()
        : h.title
      : L.createElement(
          L.Fragment,
          null,
          ct || h.icon || h.promise
            ? L.createElement(
                "div",
                {
                  "data-icon": "",
                  className: bt(
                    A == null ? void 0 : A.icon,
                    (s = h == null ? void 0 : h.classNames) == null
                      ? void 0
                      : s.icon
                  ),
                },
                h.promise || (h.type === "loading" && !h.icon)
                  ? h.icon || f1()
                  : null,
                h.type !== "loading"
                  ? h.icon || (O == null ? void 0 : O[ct]) || AC(ct)
                  : null
              )
            : null,
          L.createElement(
            "div",
            {
              "data-content": "",
              className: bt(
                A == null ? void 0 : A.content,
                (a = h == null ? void 0 : h.classNames) == null
                  ? void 0
                  : a.content
              ),
            },
            L.createElement(
              "div",
              {
                "data-title": "",
                className: bt(
                  A == null ? void 0 : A.title,
                  (l = h == null ? void 0 : h.classNames) == null
                    ? void 0
                    : l.title
                ),
              },
              typeof h.title == "function" ? h.title() : h.title
            ),
            h.description
              ? L.createElement(
                  "div",
                  {
                    "data-description": "",
                    className: bt(
                      K,
                      a1,
                      A == null ? void 0 : A.description,
                      (u = h == null ? void 0 : h.classNames) == null
                        ? void 0
                        : u.description
                    ),
                  },
                  typeof h.description == "function"
                    ? h.description()
                    : h.description
                )
              : null
          ),
          S.isValidElement(h.cancel)
            ? h.cancel
            : h.cancel && Fs(h.cancel)
            ? L.createElement(
                "button",
                {
                  "data-button": !0,
                  "data-cancel": !0,
                  style: h.cancelButtonStyle || N,
                  onClick: (U) => {
                    var ne, ue;
                    Fs(h.cancel) &&
                      Wr &&
                      ((ue = (ne = h.cancel).onClick) == null || ue.call(ne, U),
                      Sn());
                  },
                  className: bt(
                    A == null ? void 0 : A.cancelButton,
                    (c = h == null ? void 0 : h.classNames) == null
                      ? void 0
                      : c.cancelButton
                  ),
                },
                h.cancel.label
              )
            : null,
          S.isValidElement(h.action)
            ? h.action
            : h.action && Fs(h.action)
            ? L.createElement(
                "button",
                {
                  "data-button": !0,
                  "data-action": !0,
                  style: h.actionButtonStyle || z,
                  onClick: (U) => {
                    var ne, ue;
                    Fs(h.action) &&
                      ((ue = (ne = h.action).onClick) == null || ue.call(ne, U),
                      !U.defaultPrevented && Sn());
                  },
                  className: bt(
                    A == null ? void 0 : A.actionButton,
                    (d = h == null ? void 0 : h.classNames) == null
                      ? void 0
                      : d.actionButton
                  ),
                },
                h.action.label
              )
            : null
        )
  );
};
function Rp() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e
    ? window.getComputedStyle(document.documentElement).direction
    : e;
}
function eb(e, t) {
  let n = {};
  return (
    [e, t].forEach((r, i) => {
      let o = i === 1,
        s = o ? "--mobile-offset" : "--offset",
        a = o ? GC : KC;
      function l(u) {
        ["top", "right", "bottom", "left"].forEach((c) => {
          n[`${s}-${c}`] = typeof u == "number" ? `${u}px` : u;
        });
      }
      typeof r == "number" || typeof r == "string"
        ? l(r)
        : typeof r == "object"
        ? ["top", "right", "bottom", "left"].forEach((u) => {
            r[u] === void 0
              ? (n[`${s}-${u}`] = a)
              : (n[`${s}-${u}`] = typeof r[u] == "number" ? `${r[u]}px` : r[u]);
          })
        : l(a);
    }),
    n
  );
}
var tb = S.forwardRef(function (e, t) {
  let {
      invert: n,
      position: r = "bottom-right",
      hotkey: i = ["altKey", "KeyT"],
      expand: o,
      closeButton: s,
      className: a,
      offset: l,
      mobileOffset: u,
      theme: c = "light",
      richColors: d,
      duration: f,
      style: h,
      visibleToasts: v = HC,
      toastOptions: g,
      dir: x = Rp(),
      gap: p = YC,
      loadingIcon: m,
      icons: y,
      containerAriaLabel: E = "Notifications",
      pauseWhenPageIsHidden: C,
    } = e,
    [b, T] = L.useState([]),
    P = L.useMemo(
      () =>
        Array.from(
          new Set(
            [r].concat(b.filter((B) => B.position).map((B) => B.position))
          )
        ),
      [b, r]
    ),
    [M, N] = L.useState([]),
    [z, I] = L.useState(!1),
    [K, D] = L.useState(!1),
    [Q, $] = L.useState(
      c !== "system"
        ? c
        : typeof window < "u" &&
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    ),
    _ = L.useRef(null),
    k = i.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
    A = L.useRef(null),
    O = L.useRef(!1),
    W = L.useCallback((B) => {
      T((Y) => {
        var q;
        return (
          ((q = Y.find((xe) => xe.id === B.id)) != null && q.delete) ||
            Qe.dismiss(B.id),
          Y.filter(({ id: xe }) => xe !== B.id)
        );
      });
    }, []);
  return (
    L.useEffect(
      () =>
        Qe.subscribe((B) => {
          if (B.dismiss) {
            T((Y) => Y.map((q) => (q.id === B.id ? { ...q, delete: !0 } : q)));
            return;
          }
          setTimeout(() => {
            $0.flushSync(() => {
              T((Y) => {
                let q = Y.findIndex((xe) => xe.id === B.id);
                return q !== -1
                  ? [...Y.slice(0, q), { ...Y[q], ...B }, ...Y.slice(q + 1)]
                  : [B, ...Y];
              });
            });
          });
        }),
      []
    ),
    L.useEffect(() => {
      if (c !== "system") {
        $(c);
        return;
      }
      if (
        (c === "system" &&
          (window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
            ? $("dark")
            : $("light")),
        typeof window > "u")
      )
        return;
      let B = window.matchMedia("(prefers-color-scheme: dark)");
      try {
        B.addEventListener("change", ({ matches: Y }) => {
          $(Y ? "dark" : "light");
        });
      } catch {
        B.addListener(({ matches: q }) => {
          try {
            $(q ? "dark" : "light");
          } catch (xe) {
            console.error(xe);
          }
        });
      }
    }, [c]),
    L.useEffect(() => {
      b.length <= 1 && I(!1);
    }, [b]),
    L.useEffect(() => {
      let B = (Y) => {
        var q, xe;
        i.every((je) => Y[je] || Y.code === je) &&
          (I(!0), (q = _.current) == null || q.focus()),
          Y.code === "Escape" &&
            (document.activeElement === _.current ||
              ((xe = _.current) != null &&
                xe.contains(document.activeElement))) &&
            I(!1);
      };
      return (
        document.addEventListener("keydown", B),
        () => document.removeEventListener("keydown", B)
      );
    }, [i]),
    L.useEffect(() => {
      if (_.current)
        return () => {
          A.current &&
            (A.current.focus({ preventScroll: !0 }),
            (A.current = null),
            (O.current = !1));
        };
    }, [_.current]),
    L.createElement(
      "section",
      {
        ref: t,
        "aria-label": `${E} ${k}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0,
      },
      P.map((B, Y) => {
        var q;
        let [xe, je] = B.split("-");
        return b.length
          ? L.createElement(
              "ol",
              {
                key: B,
                dir: x === "auto" ? Rp() : x,
                tabIndex: -1,
                ref: _,
                className: a,
                "data-sonner-toaster": !0,
                "data-theme": Q,
                "data-y-position": xe,
                "data-lifted": z && b.length > 1 && !o,
                "data-x-position": je,
                style: {
                  "--front-toast-height": `${
                    ((q = M[0]) == null ? void 0 : q.height) || 0
                  }px`,
                  "--width": `${QC}px`,
                  "--gap": `${p}px`,
                  ...h,
                  ...eb(l, u),
                },
                onBlur: (ee) => {
                  O.current &&
                    !ee.currentTarget.contains(ee.relatedTarget) &&
                    ((O.current = !1),
                    A.current &&
                      (A.current.focus({ preventScroll: !0 }),
                      (A.current = null)));
                },
                onFocus: (ee) => {
                  (ee.target instanceof HTMLElement &&
                    ee.target.dataset.dismissible === "false") ||
                    O.current ||
                    ((O.current = !0), (A.current = ee.relatedTarget));
                },
                onMouseEnter: () => I(!0),
                onMouseMove: () => I(!0),
                onMouseLeave: () => {
                  K || I(!1);
                },
                onDragEnd: () => I(!1),
                onPointerDown: (ee) => {
                  (ee.target instanceof HTMLElement &&
                    ee.target.dataset.dismissible === "false") ||
                    D(!0);
                },
                onPointerUp: () => D(!1),
              },
              b
                .filter((ee) => (!ee.position && Y === 0) || ee.position === B)
                .map((ee, zr) => {
                  var vn, ur;
                  return L.createElement(JC, {
                    key: ee.id,
                    icons: y,
                    index: zr,
                    toast: ee,
                    defaultRichColors: d,
                    duration:
                      (vn = g == null ? void 0 : g.duration) != null ? vn : f,
                    className: g == null ? void 0 : g.className,
                    descriptionClassName:
                      g == null ? void 0 : g.descriptionClassName,
                    invert: n,
                    visibleToasts: v,
                    closeButton:
                      (ur = g == null ? void 0 : g.closeButton) != null
                        ? ur
                        : s,
                    interacting: K,
                    position: B,
                    style: g == null ? void 0 : g.style,
                    unstyled: g == null ? void 0 : g.unstyled,
                    classNames: g == null ? void 0 : g.classNames,
                    cancelButtonStyle: g == null ? void 0 : g.cancelButtonStyle,
                    actionButtonStyle: g == null ? void 0 : g.actionButtonStyle,
                    removeToast: W,
                    toasts: b.filter((xn) => xn.position == ee.position),
                    heights: M.filter((xn) => xn.position == ee.position),
                    setHeights: N,
                    expandByDefault: o,
                    gap: p,
                    loadingIcon: m,
                    expanded: z,
                    pauseWhenPageIsHidden: C,
                    swipeDirections: e.swipeDirections,
                  });
                })
            )
          : null;
      })
    )
  );
});
const nb = ({ ...e }) => {
    const { theme: t = "system" } = RC();
    return w.jsx(tb, {
      theme: t,
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      },
      ...e,
    });
  },
  rb = ["top", "right", "bottom", "left"],
  tr = Math.min,
  rt = Math.max,
  Oa = Math.round,
  Vs = Math.floor,
  Xt = (e) => ({ x: e, y: e }),
  ib = { left: "right", right: "left", bottom: "top", top: "bottom" },
  ob = { start: "end", end: "start" };
function Mc(e, t, n) {
  return rt(e, tr(t, n));
}
function pn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function mn(e) {
  return e.split("-")[0];
}
function Ui(e) {
  return e.split("-")[1];
}
function cf(e) {
  return e === "x" ? "y" : "x";
}
function df(e) {
  return e === "y" ? "height" : "width";
}
const sb = new Set(["top", "bottom"]);
function Gt(e) {
  return sb.has(mn(e)) ? "y" : "x";
}
function ff(e) {
  return cf(Gt(e));
}
function ab(e, t, n) {
  n === void 0 && (n = !1);
  const r = Ui(e),
    i = ff(e),
    o = df(i);
  let s =
    i === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
      ? "bottom"
      : "top";
  return t.reference[o] > t.floating[o] && (s = Ia(s)), [s, Ia(s)];
}
function lb(e) {
  const t = Ia(e);
  return [Nc(e), t, Nc(t)];
}
function Nc(e) {
  return e.replace(/start|end/g, (t) => ob[t]);
}
const Ap = ["left", "right"],
  Mp = ["right", "left"],
  ub = ["top", "bottom"],
  cb = ["bottom", "top"];
function db(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? Mp : Ap) : t ? Ap : Mp;
    case "left":
    case "right":
      return t ? ub : cb;
    default:
      return [];
  }
}
function fb(e, t, n, r) {
  const i = Ui(e);
  let o = db(mn(e), n === "start", r);
  return (
    i && ((o = o.map((s) => s + "-" + i)), t && (o = o.concat(o.map(Nc)))), o
  );
}
function Ia(e) {
  return e.replace(/left|right|bottom|top/g, (t) => ib[t]);
}
function hb(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Av(e) {
  return typeof e != "number"
    ? hb(e)
    : { top: e, right: e, bottom: e, left: e };
}
function Fa(e) {
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
function Np(e, t, n) {
  let { reference: r, floating: i } = e;
  const o = Gt(t),
    s = ff(t),
    a = df(s),
    l = mn(t),
    u = o === "y",
    c = r.x + r.width / 2 - i.width / 2,
    d = r.y + r.height / 2 - i.height / 2,
    f = r[a] / 2 - i[a] / 2;
  let h;
  switch (l) {
    case "top":
      h = { x: c, y: r.y - i.height };
      break;
    case "bottom":
      h = { x: c, y: r.y + r.height };
      break;
    case "right":
      h = { x: r.x + r.width, y: d };
      break;
    case "left":
      h = { x: r.x - i.width, y: d };
      break;
    default:
      h = { x: r.x, y: r.y };
  }
  switch (Ui(t)) {
    case "start":
      h[s] -= f * (n && u ? -1 : 1);
      break;
    case "end":
      h[s] += f * (n && u ? -1 : 1);
      break;
  }
  return h;
}
const pb = async (e, t, n) => {
  const {
      placement: r = "bottom",
      strategy: i = "absolute",
      middleware: o = [],
      platform: s,
    } = n,
    a = o.filter(Boolean),
    l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let u = await s.getElementRects({ reference: e, floating: t, strategy: i }),
    { x: c, y: d } = Np(u, r, l),
    f = r,
    h = {},
    v = 0;
  for (let g = 0; g < a.length; g++) {
    const { name: x, fn: p } = a[g],
      {
        x: m,
        y,
        data: E,
        reset: C,
      } = await p({
        x: c,
        y: d,
        initialPlacement: r,
        placement: f,
        strategy: i,
        middlewareData: h,
        rects: u,
        platform: s,
        elements: { reference: e, floating: t },
      });
    (c = m ?? c),
      (d = y ?? d),
      (h = { ...h, [x]: { ...h[x], ...E } }),
      C &&
        v <= 50 &&
        (v++,
        typeof C == "object" &&
          (C.placement && (f = C.placement),
          C.rects &&
            (u =
              C.rects === !0
                ? await s.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: i,
                  })
                : C.rects),
          ({ x: c, y: d } = Np(u, f, l))),
        (g = -1));
  }
  return { x: c, y: d, placement: f, strategy: i, middlewareData: h };
};
async function Ho(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: i, platform: o, rects: s, elements: a, strategy: l } = e,
    {
      boundary: u = "clippingAncestors",
      rootBoundary: c = "viewport",
      elementContext: d = "floating",
      altBoundary: f = !1,
      padding: h = 0,
    } = pn(t, e),
    v = Av(h),
    x = a[f ? (d === "floating" ? "reference" : "floating") : d],
    p = Fa(
      await o.getClippingRect({
        element:
          (n = await (o.isElement == null ? void 0 : o.isElement(x))) == null ||
          n
            ? x
            : x.contextElement ||
              (await (o.getDocumentElement == null
                ? void 0
                : o.getDocumentElement(a.floating))),
        boundary: u,
        rootBoundary: c,
        strategy: l,
      })
    ),
    m =
      d === "floating"
        ? { x: r, y: i, width: s.floating.width, height: s.floating.height }
        : s.reference,
    y = await (o.getOffsetParent == null
      ? void 0
      : o.getOffsetParent(a.floating)),
    E = (await (o.isElement == null ? void 0 : o.isElement(y)))
      ? (await (o.getScale == null ? void 0 : o.getScale(y))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    C = Fa(
      o.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: a,
            rect: m,
            offsetParent: y,
            strategy: l,
          })
        : m
    );
  return {
    top: (p.top - C.top + v.top) / E.y,
    bottom: (C.bottom - p.bottom + v.bottom) / E.y,
    left: (p.left - C.left + v.left) / E.x,
    right: (C.right - p.right + v.right) / E.x,
  };
}
const mb = (e) => ({
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
        { element: u, padding: c = 0 } = pn(e, t) || {};
      if (u == null) return {};
      const d = Av(c),
        f = { x: n, y: r },
        h = ff(i),
        v = df(h),
        g = await s.getDimensions(u),
        x = h === "y",
        p = x ? "top" : "left",
        m = x ? "bottom" : "right",
        y = x ? "clientHeight" : "clientWidth",
        E = o.reference[v] + o.reference[h] - f[h] - o.floating[v],
        C = f[h] - o.reference[h],
        b = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
      let T = b ? b[y] : 0;
      (!T || !(await (s.isElement == null ? void 0 : s.isElement(b)))) &&
        (T = a.floating[y] || o.floating[v]);
      const P = E / 2 - C / 2,
        M = T / 2 - g[v] / 2 - 1,
        N = tr(d[p], M),
        z = tr(d[m], M),
        I = N,
        K = T - g[v] - z,
        D = T / 2 - g[v] / 2 + P,
        Q = Mc(I, D, K),
        $ =
          !l.arrow &&
          Ui(i) != null &&
          D !== Q &&
          o.reference[v] / 2 - (D < I ? N : z) - g[v] / 2 < 0,
        _ = $ ? (D < I ? D - I : D - K) : 0;
      return {
        [h]: f[h] + _,
        data: {
          [h]: Q,
          centerOffset: D - Q - _,
          ...($ && { alignmentOffset: _ }),
        },
        reset: $,
      };
    },
  }),
  gb = function (e) {
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
              elements: u,
            } = t,
            {
              mainAxis: c = !0,
              crossAxis: d = !0,
              fallbackPlacements: f,
              fallbackStrategy: h = "bestFit",
              fallbackAxisSideDirection: v = "none",
              flipAlignment: g = !0,
              ...x
            } = pn(e, t);
          if ((n = o.arrow) != null && n.alignmentOffset) return {};
          const p = mn(i),
            m = Gt(a),
            y = mn(a) === a,
            E = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)),
            C = f || (y || !g ? [Ia(a)] : lb(a)),
            b = v !== "none";
          !f && b && C.push(...fb(a, g, v, E));
          const T = [a, ...C],
            P = await Ho(t, x),
            M = [];
          let N = ((r = o.flip) == null ? void 0 : r.overflows) || [];
          if ((c && M.push(P[p]), d)) {
            const D = ab(i, s, E);
            M.push(P[D[0]], P[D[1]]);
          }
          if (
            ((N = [...N, { placement: i, overflows: M }]),
            !M.every((D) => D <= 0))
          ) {
            var z, I;
            const D = (((z = o.flip) == null ? void 0 : z.index) || 0) + 1,
              Q = T[D];
            if (
              Q &&
              (!(d === "alignment" ? m !== Gt(Q) : !1) ||
                N.every((k) => k.overflows[0] > 0 && Gt(k.placement) === m))
            )
              return {
                data: { index: D, overflows: N },
                reset: { placement: Q },
              };
            let $ =
              (I = N.filter((_) => _.overflows[0] <= 0).sort(
                (_, k) => _.overflows[1] - k.overflows[1]
              )[0]) == null
                ? void 0
                : I.placement;
            if (!$)
              switch (h) {
                case "bestFit": {
                  var K;
                  const _ =
                    (K = N.filter((k) => {
                      if (b) {
                        const A = Gt(k.placement);
                        return A === m || A === "y";
                      }
                      return !0;
                    })
                      .map((k) => [
                        k.placement,
                        k.overflows
                          .filter((A) => A > 0)
                          .reduce((A, O) => A + O, 0),
                      ])
                      .sort((k, A) => k[1] - A[1])[0]) == null
                      ? void 0
                      : K[0];
                  _ && ($ = _);
                  break;
                }
                case "initialPlacement":
                  $ = a;
                  break;
              }
            if (i !== $) return { reset: { placement: $ } };
          }
          return {};
        },
      }
    );
  };
function jp(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function Lp(e) {
  return rb.some((t) => e[t] >= 0);
}
const yb = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "hide",
        options: e,
        async fn(t) {
          const { rects: n } = t,
            { strategy: r = "referenceHidden", ...i } = pn(e, t);
          switch (r) {
            case "referenceHidden": {
              const o = await Ho(t, { ...i, elementContext: "reference" }),
                s = jp(o, n.reference);
              return {
                data: { referenceHiddenOffsets: s, referenceHidden: Lp(s) },
              };
            }
            case "escaped": {
              const o = await Ho(t, { ...i, altBoundary: !0 }),
                s = jp(o, n.floating);
              return { data: { escapedOffsets: s, escaped: Lp(s) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  Mv = new Set(["left", "top"]);
async function vb(e, t) {
  const { placement: n, platform: r, elements: i } = e,
    o = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)),
    s = mn(n),
    a = Ui(n),
    l = Gt(n) === "y",
    u = Mv.has(s) ? -1 : 1,
    c = o && l ? -1 : 1,
    d = pn(t, e);
  let {
    mainAxis: f,
    crossAxis: h,
    alignmentAxis: v,
  } = typeof d == "number"
    ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: d.mainAxis || 0,
        crossAxis: d.crossAxis || 0,
        alignmentAxis: d.alignmentAxis,
      };
  return (
    a && typeof v == "number" && (h = a === "end" ? v * -1 : v),
    l ? { x: h * c, y: f * u } : { x: f * u, y: h * c }
  );
}
const xb = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, r;
          const { x: i, y: o, placement: s, middlewareData: a } = t,
            l = await vb(t, e);
          return s === ((n = a.offset) == null ? void 0 : n.placement) &&
            (r = a.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: i + l.x, y: o + l.y, data: { ...l, placement: s } };
        },
      }
    );
  },
  wb = function (e) {
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
                fn: (x) => {
                  let { x: p, y: m } = x;
                  return { x: p, y: m };
                },
              },
              ...l
            } = pn(e, t),
            u = { x: n, y: r },
            c = await Ho(t, l),
            d = Gt(mn(i)),
            f = cf(d);
          let h = u[f],
            v = u[d];
          if (o) {
            const x = f === "y" ? "top" : "left",
              p = f === "y" ? "bottom" : "right",
              m = h + c[x],
              y = h - c[p];
            h = Mc(m, h, y);
          }
          if (s) {
            const x = d === "y" ? "top" : "left",
              p = d === "y" ? "bottom" : "right",
              m = v + c[x],
              y = v - c[p];
            v = Mc(m, v, y);
          }
          const g = a.fn({ ...t, [f]: h, [d]: v });
          return {
            ...g,
            data: { x: g.x - n, y: g.y - r, enabled: { [f]: o, [d]: s } },
          };
        },
      }
    );
  },
  Sb = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: i, rects: o, middlewareData: s } = t,
            { offset: a = 0, mainAxis: l = !0, crossAxis: u = !0 } = pn(e, t),
            c = { x: n, y: r },
            d = Gt(i),
            f = cf(d);
          let h = c[f],
            v = c[d];
          const g = pn(a, t),
            x =
              typeof g == "number"
                ? { mainAxis: g, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...g };
          if (l) {
            const y = f === "y" ? "height" : "width",
              E = o.reference[f] - o.floating[y] + x.mainAxis,
              C = o.reference[f] + o.reference[y] - x.mainAxis;
            h < E ? (h = E) : h > C && (h = C);
          }
          if (u) {
            var p, m;
            const y = f === "y" ? "width" : "height",
              E = Mv.has(mn(i)),
              C =
                o.reference[d] -
                o.floating[y] +
                ((E && ((p = s.offset) == null ? void 0 : p[d])) || 0) +
                (E ? 0 : x.crossAxis),
              b =
                o.reference[d] +
                o.reference[y] +
                (E ? 0 : ((m = s.offset) == null ? void 0 : m[d]) || 0) -
                (E ? x.crossAxis : 0);
            v < C ? (v = C) : v > b && (v = b);
          }
          return { [f]: h, [d]: v };
        },
      }
    );
  },
  Eb = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          var n, r;
          const { placement: i, rects: o, platform: s, elements: a } = t,
            { apply: l = () => {}, ...u } = pn(e, t),
            c = await Ho(t, u),
            d = mn(i),
            f = Ui(i),
            h = Gt(i) === "y",
            { width: v, height: g } = o.floating;
          let x, p;
          d === "top" || d === "bottom"
            ? ((x = d),
              (p =
                f ===
                ((await (s.isRTL == null ? void 0 : s.isRTL(a.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((p = d), (x = f === "end" ? "top" : "bottom"));
          const m = g - c.top - c.bottom,
            y = v - c.left - c.right,
            E = tr(g - c[x], m),
            C = tr(v - c[p], y),
            b = !t.middlewareData.shift;
          let T = E,
            P = C;
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (P = y),
            (r = t.middlewareData.shift) != null && r.enabled.y && (T = m),
            b && !f)
          ) {
            const N = rt(c.left, 0),
              z = rt(c.right, 0),
              I = rt(c.top, 0),
              K = rt(c.bottom, 0);
            h
              ? (P = v - 2 * (N !== 0 || z !== 0 ? N + z : rt(c.left, c.right)))
              : (T =
                  g - 2 * (I !== 0 || K !== 0 ? I + K : rt(c.top, c.bottom)));
          }
          await l({ ...t, availableWidth: P, availableHeight: T });
          const M = await s.getDimensions(a.floating);
          return v !== M.width || g !== M.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function pl() {
  return typeof window < "u";
}
function Hi(e) {
  return Nv(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function st(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function en(e) {
  var t;
  return (t = (Nv(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function Nv(e) {
  return pl() ? e instanceof Node || e instanceof st(e).Node : !1;
}
function Vt(e) {
  return pl() ? e instanceof Element || e instanceof st(e).Element : !1;
}
function Zt(e) {
  return pl() ? e instanceof HTMLElement || e instanceof st(e).HTMLElement : !1;
}
function Dp(e) {
  return !pl() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof st(e).ShadowRoot;
}
const Cb = new Set(["inline", "contents"]);
function us(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: i } = _t(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !Cb.has(i);
}
const bb = new Set(["table", "td", "th"]);
function Tb(e) {
  return bb.has(Hi(e));
}
const Pb = [":popover-open", ":modal"];
function ml(e) {
  return Pb.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const kb = ["transform", "translate", "scale", "rotate", "perspective"],
  Rb = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
  Ab = ["paint", "layout", "strict", "content"];
function hf(e) {
  const t = pf(),
    n = Vt(e) ? _t(e) : e;
  return (
    kb.some((r) => (n[r] ? n[r] !== "none" : !1)) ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    Rb.some((r) => (n.willChange || "").includes(r)) ||
    Ab.some((r) => (n.contain || "").includes(r))
  );
}
function Mb(e) {
  let t = nr(e);
  for (; Zt(t) && !Ii(t); ) {
    if (hf(t)) return t;
    if (ml(t)) return null;
    t = nr(t);
  }
  return null;
}
function pf() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
const Nb = new Set(["html", "body", "#document"]);
function Ii(e) {
  return Nb.has(Hi(e));
}
function _t(e) {
  return st(e).getComputedStyle(e);
}
function gl(e) {
  return Vt(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function nr(e) {
  if (Hi(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (Dp(e) && e.host) || en(e);
  return Dp(t) ? t.host : t;
}
function jv(e) {
  const t = nr(e);
  return Ii(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : Zt(t) && us(t)
    ? t
    : jv(t);
}
function Ko(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const i = jv(e),
    o = i === ((r = e.ownerDocument) == null ? void 0 : r.body),
    s = st(i);
  if (o) {
    const a = jc(s);
    return t.concat(
      s,
      s.visualViewport || [],
      us(i) ? i : [],
      a && n ? Ko(a) : []
    );
  }
  return t.concat(i, Ko(i, [], n));
}
function jc(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Lv(e) {
  const t = _t(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const i = Zt(e),
    o = i ? e.offsetWidth : n,
    s = i ? e.offsetHeight : r,
    a = Oa(n) !== o || Oa(r) !== s;
  return a && ((n = o), (r = s)), { width: n, height: r, $: a };
}
function mf(e) {
  return Vt(e) ? e : e.contextElement;
}
function vi(e) {
  const t = mf(e);
  if (!Zt(t)) return Xt(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: i, $: o } = Lv(t);
  let s = (o ? Oa(n.width) : n.width) / r,
    a = (o ? Oa(n.height) : n.height) / i;
  return (
    (!s || !Number.isFinite(s)) && (s = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    { x: s, y: a }
  );
}
const jb = Xt(0);
function Dv(e) {
  const t = st(e);
  return !pf() || !t.visualViewport
    ? jb
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function Lb(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== st(e)) ? !1 : t;
}
function Ir(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const i = e.getBoundingClientRect(),
    o = mf(e);
  let s = Xt(1);
  t && (r ? Vt(r) && (s = vi(r)) : (s = vi(e)));
  const a = Lb(o, n, r) ? Dv(o) : Xt(0);
  let l = (i.left + a.x) / s.x,
    u = (i.top + a.y) / s.y,
    c = i.width / s.x,
    d = i.height / s.y;
  if (o) {
    const f = st(o),
      h = r && Vt(r) ? st(r) : r;
    let v = f,
      g = jc(v);
    for (; g && r && h !== v; ) {
      const x = vi(g),
        p = g.getBoundingClientRect(),
        m = _t(g),
        y = p.left + (g.clientLeft + parseFloat(m.paddingLeft)) * x.x,
        E = p.top + (g.clientTop + parseFloat(m.paddingTop)) * x.y;
      (l *= x.x),
        (u *= x.y),
        (c *= x.x),
        (d *= x.y),
        (l += y),
        (u += E),
        (v = st(g)),
        (g = jc(v));
    }
  }
  return Fa({ width: c, height: d, x: l, y: u });
}
function gf(e, t) {
  const n = gl(e).scrollLeft;
  return t ? t.left + n : Ir(en(e)).left + n;
}
function Ov(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(),
    i = r.left + t.scrollLeft - (n ? 0 : gf(e, r)),
    o = r.top + t.scrollTop;
  return { x: i, y: o };
}
function Db(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: i } = e;
  const o = i === "fixed",
    s = en(r),
    a = t ? ml(t.floating) : !1;
  if (r === s || (a && o)) return n;
  let l = { scrollLeft: 0, scrollTop: 0 },
    u = Xt(1);
  const c = Xt(0),
    d = Zt(r);
  if (
    (d || (!d && !o)) &&
    ((Hi(r) !== "body" || us(s)) && (l = gl(r)), Zt(r))
  ) {
    const h = Ir(r);
    (u = vi(r)), (c.x = h.x + r.clientLeft), (c.y = h.y + r.clientTop);
  }
  const f = s && !d && !o ? Ov(s, l, !0) : Xt(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + c.x + f.x,
    y: n.y * u.y - l.scrollTop * u.y + c.y + f.y,
  };
}
function Ob(e) {
  return Array.from(e.getClientRects());
}
function Ib(e) {
  const t = en(e),
    n = gl(e),
    r = e.ownerDocument.body,
    i = rt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    o = rt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + gf(e);
  const a = -n.scrollTop;
  return (
    _t(r).direction === "rtl" && (s += rt(t.clientWidth, r.clientWidth) - i),
    { width: i, height: o, x: s, y: a }
  );
}
function Fb(e, t) {
  const n = st(e),
    r = en(e),
    i = n.visualViewport;
  let o = r.clientWidth,
    s = r.clientHeight,
    a = 0,
    l = 0;
  if (i) {
    (o = i.width), (s = i.height);
    const u = pf();
    (!u || (u && t === "fixed")) && ((a = i.offsetLeft), (l = i.offsetTop));
  }
  return { width: o, height: s, x: a, y: l };
}
const Vb = new Set(["absolute", "fixed"]);
function _b(e, t) {
  const n = Ir(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    i = n.left + e.clientLeft,
    o = Zt(e) ? vi(e) : Xt(1),
    s = e.clientWidth * o.x,
    a = e.clientHeight * o.y,
    l = i * o.x,
    u = r * o.y;
  return { width: s, height: a, x: l, y: u };
}
function Op(e, t, n) {
  let r;
  if (t === "viewport") r = Fb(e, n);
  else if (t === "document") r = Ib(en(e));
  else if (Vt(t)) r = _b(t, n);
  else {
    const i = Dv(e);
    r = { x: t.x - i.x, y: t.y - i.y, width: t.width, height: t.height };
  }
  return Fa(r);
}
function Iv(e, t) {
  const n = nr(e);
  return n === t || !Vt(n) || Ii(n)
    ? !1
    : _t(n).position === "fixed" || Iv(n, t);
}
function zb(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = Ko(e, [], !1).filter((a) => Vt(a) && Hi(a) !== "body"),
    i = null;
  const o = _t(e).position === "fixed";
  let s = o ? nr(e) : e;
  for (; Vt(s) && !Ii(s); ) {
    const a = _t(s),
      l = hf(s);
    !l && a.position === "fixed" && (i = null),
      (
        o
          ? !l && !i
          : (!l && a.position === "static" && !!i && Vb.has(i.position)) ||
            (us(s) && !l && Iv(e, s))
      )
        ? (r = r.filter((c) => c !== s))
        : (i = a),
      (s = nr(s));
  }
  return t.set(e, r), r;
}
function Bb(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: i } = e;
  const s = [
      ...(n === "clippingAncestors"
        ? ml(t)
          ? []
          : zb(t, this._c)
        : [].concat(n)),
      r,
    ],
    a = s[0],
    l = s.reduce((u, c) => {
      const d = Op(t, c, i);
      return (
        (u.top = rt(d.top, u.top)),
        (u.right = tr(d.right, u.right)),
        (u.bottom = tr(d.bottom, u.bottom)),
        (u.left = rt(d.left, u.left)),
        u
      );
    }, Op(t, a, i));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top,
  };
}
function $b(e) {
  const { width: t, height: n } = Lv(e);
  return { width: t, height: n };
}
function Wb(e, t, n) {
  const r = Zt(t),
    i = en(t),
    o = n === "fixed",
    s = Ir(e, !0, o, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const l = Xt(0);
  function u() {
    l.x = gf(i);
  }
  if (r || (!r && !o))
    if (((Hi(t) !== "body" || us(i)) && (a = gl(t)), r)) {
      const h = Ir(t, !0, o, t);
      (l.x = h.x + t.clientLeft), (l.y = h.y + t.clientTop);
    } else i && u();
  o && !r && i && u();
  const c = i && !r && !o ? Ov(i, a) : Xt(0),
    d = s.left + a.scrollLeft - l.x - c.x,
    f = s.top + a.scrollTop - l.y - c.y;
  return { x: d, y: f, width: s.width, height: s.height };
}
function du(e) {
  return _t(e).position === "static";
}
function Ip(e, t) {
  if (!Zt(e) || _t(e).position === "fixed") return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return en(e) === n && (n = n.ownerDocument.body), n;
}
function Fv(e, t) {
  const n = st(e);
  if (ml(e)) return n;
  if (!Zt(e)) {
    let i = nr(e);
    for (; i && !Ii(i); ) {
      if (Vt(i) && !du(i)) return i;
      i = nr(i);
    }
    return n;
  }
  let r = Ip(e, t);
  for (; r && Tb(r) && du(r); ) r = Ip(r, t);
  return r && Ii(r) && du(r) && !hf(r) ? n : r || Mb(e) || n;
}
const Ub = async function (e) {
  const t = this.getOffsetParent || Fv,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: Wb(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function Hb(e) {
  return _t(e).direction === "rtl";
}
const Kb = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Db,
  getDocumentElement: en,
  getClippingRect: Bb,
  getOffsetParent: Fv,
  getElementRects: Ub,
  getClientRects: Ob,
  getDimensions: $b,
  getScale: vi,
  isElement: Vt,
  isRTL: Hb,
};
function Vv(e, t) {
  return (
    e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
  );
}
function Gb(e, t) {
  let n = null,
    r;
  const i = en(e);
  function o() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), (n = null);
  }
  function s(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), o();
    const u = e.getBoundingClientRect(),
      { left: c, top: d, width: f, height: h } = u;
    if ((a || t(), !f || !h)) return;
    const v = Vs(d),
      g = Vs(i.clientWidth - (c + f)),
      x = Vs(i.clientHeight - (d + h)),
      p = Vs(c),
      y = {
        rootMargin: -v + "px " + -g + "px " + -x + "px " + -p + "px",
        threshold: rt(0, tr(1, l)) || 1,
      };
    let E = !0;
    function C(b) {
      const T = b[0].intersectionRatio;
      if (T !== l) {
        if (!E) return s();
        T
          ? s(!1, T)
          : (r = setTimeout(() => {
              s(!1, 1e-7);
            }, 1e3));
      }
      T === 1 && !Vv(u, e.getBoundingClientRect()) && s(), (E = !1);
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
function Qb(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: i = !0,
      ancestorResize: o = !0,
      elementResize: s = typeof ResizeObserver == "function",
      layoutShift: a = typeof IntersectionObserver == "function",
      animationFrame: l = !1,
    } = r,
    u = mf(e),
    c = i || o ? [...(u ? Ko(u) : []), ...Ko(t)] : [];
  c.forEach((p) => {
    i && p.addEventListener("scroll", n, { passive: !0 }),
      o && p.addEventListener("resize", n);
  });
  const d = u && a ? Gb(u, n) : null;
  let f = -1,
    h = null;
  s &&
    ((h = new ResizeObserver((p) => {
      let [m] = p;
      m &&
        m.target === u &&
        h &&
        (h.unobserve(t),
        cancelAnimationFrame(f),
        (f = requestAnimationFrame(() => {
          var y;
          (y = h) == null || y.observe(t);
        }))),
        n();
    })),
    u && !l && h.observe(u),
    h.observe(t));
  let v,
    g = l ? Ir(e) : null;
  l && x();
  function x() {
    const p = Ir(e);
    g && !Vv(g, p) && n(), (g = p), (v = requestAnimationFrame(x));
  }
  return (
    n(),
    () => {
      var p;
      c.forEach((m) => {
        i && m.removeEventListener("scroll", n),
          o && m.removeEventListener("resize", n);
      }),
        d == null || d(),
        (p = h) == null || p.disconnect(),
        (h = null),
        l && cancelAnimationFrame(v);
    }
  );
}
const Yb = xb,
  Xb = wb,
  qb = gb,
  Zb = Eb,
  Jb = yb,
  Fp = mb,
  eT = Sb,
  tT = (e, t, n) => {
    const r = new Map(),
      i = { platform: Kb, ...n },
      o = { ...i.platform, _c: r };
    return pb(e, t, { ...i, platform: o });
  };
var nT = typeof document < "u",
  rT = function () {},
  ia = nT ? S.useLayoutEffect : rT;
function Va(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, i;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!Va(e[r], t[r])) return !1;
      return !0;
    }
    if (((i = Object.keys(e)), (n = i.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, i[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const o = i[r];
      if (!(o === "_owner" && e.$$typeof) && !Va(e[o], t[o])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function _v(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Vp(e, t) {
  const n = _v(e);
  return Math.round(t * n) / n;
}
function fu(e) {
  const t = S.useRef(e);
  return (
    ia(() => {
      t.current = e;
    }),
    t
  );
}
function iT(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: r = [],
      platform: i,
      elements: { reference: o, floating: s } = {},
      transform: a = !0,
      whileElementsMounted: l,
      open: u,
    } = e,
    [c, d] = S.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [f, h] = S.useState(r);
  Va(f, r) || h(r);
  const [v, g] = S.useState(null),
    [x, p] = S.useState(null),
    m = S.useCallback((k) => {
      k !== b.current && ((b.current = k), g(k));
    }, []),
    y = S.useCallback((k) => {
      k !== T.current && ((T.current = k), p(k));
    }, []),
    E = o || v,
    C = s || x,
    b = S.useRef(null),
    T = S.useRef(null),
    P = S.useRef(c),
    M = l != null,
    N = fu(l),
    z = fu(i),
    I = fu(u),
    K = S.useCallback(() => {
      if (!b.current || !T.current) return;
      const k = { placement: t, strategy: n, middleware: f };
      z.current && (k.platform = z.current),
        tT(b.current, T.current, k).then((A) => {
          const O = { ...A, isPositioned: I.current !== !1 };
          D.current &&
            !Va(P.current, O) &&
            ((P.current = O),
            as.flushSync(() => {
              d(O);
            }));
        });
    }, [f, t, n, z, I]);
  ia(() => {
    u === !1 &&
      P.current.isPositioned &&
      ((P.current.isPositioned = !1), d((k) => ({ ...k, isPositioned: !1 })));
  }, [u]);
  const D = S.useRef(!1);
  ia(
    () => (
      (D.current = !0),
      () => {
        D.current = !1;
      }
    ),
    []
  ),
    ia(() => {
      if ((E && (b.current = E), C && (T.current = C), E && C)) {
        if (N.current) return N.current(E, C, K);
        K();
      }
    }, [E, C, K, N, M]);
  const Q = S.useMemo(
      () => ({ reference: b, floating: T, setReference: m, setFloating: y }),
      [m, y]
    ),
    $ = S.useMemo(() => ({ reference: E, floating: C }), [E, C]),
    _ = S.useMemo(() => {
      const k = { position: n, left: 0, top: 0 };
      if (!$.floating) return k;
      const A = Vp($.floating, c.x),
        O = Vp($.floating, c.y);
      return a
        ? {
            ...k,
            transform: "translate(" + A + "px, " + O + "px)",
            ...(_v($.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: A, top: O };
    }, [n, a, $.floating, c.x, c.y]);
  return S.useMemo(
    () => ({ ...c, update: K, refs: Q, elements: $, floatingStyles: _ }),
    [c, K, Q, $, _]
  );
}
const oT = (e) => {
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
            ? Fp({ element: r.current, padding: i }).fn(n)
            : {}
          : r
          ? Fp({ element: r, padding: i }).fn(n)
          : {};
      },
    };
  },
  sT = (e, t) => ({ ...Yb(e), options: [e, t] }),
  aT = (e, t) => ({ ...Xb(e), options: [e, t] }),
  lT = (e, t) => ({ ...eT(e), options: [e, t] }),
  uT = (e, t) => ({ ...qb(e), options: [e, t] }),
  cT = (e, t) => ({ ...Zb(e), options: [e, t] }),
  dT = (e, t) => ({ ...Jb(e), options: [e, t] }),
  fT = (e, t) => ({ ...oT(e), options: [e, t] });
var hT = "Arrow",
  zv = S.forwardRef((e, t) => {
    const { children: n, width: r = 10, height: i = 5, ...o } = e;
    return w.jsx(tt.svg, {
      ...o,
      ref: t,
      width: r,
      height: i,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : w.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
zv.displayName = hT;
var pT = zv;
function mT(e) {
  const [t, n] = S.useState(void 0);
  return (
    er(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((i) => {
          if (!Array.isArray(i) || !i.length) return;
          const o = i[0];
          let s, a;
          if ("borderBoxSize" in o) {
            const l = o.borderBoxSize,
              u = Array.isArray(l) ? l[0] : l;
            (s = u.inlineSize), (a = u.blockSize);
          } else (s = e.offsetWidth), (a = e.offsetHeight);
          n({ width: s, height: a });
        });
        return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
      } else n(void 0);
    }, [e]),
    t
  );
}
var Bv = "Popper",
  [$v, Wv] = dl(Bv),
  [dN, Uv] = $v(Bv),
  Hv = "PopperAnchor",
  Kv = S.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...i } = e,
      o = Uv(Hv, n),
      s = S.useRef(null),
      a = Ft(t, s);
    return (
      S.useEffect(() => {
        o.onAnchorChange((r == null ? void 0 : r.current) || s.current);
      }),
      r ? null : w.jsx(tt.div, { ...i, ref: a })
    );
  });
Kv.displayName = Hv;
var yf = "PopperContent",
  [gT, yT] = $v(yf),
  Gv = S.forwardRef((e, t) => {
    var ee, zr, vn, ur, xn, Br;
    const {
        __scopePopper: n,
        side: r = "bottom",
        sideOffset: i = 0,
        align: o = "center",
        alignOffset: s = 0,
        arrowPadding: a = 0,
        avoidCollisions: l = !0,
        collisionBoundary: u = [],
        collisionPadding: c = 0,
        sticky: d = "partial",
        hideWhenDetached: f = !1,
        updatePositionStrategy: h = "optimized",
        onPlaced: v,
        ...g
      } = e,
      x = Uv(yf, n),
      [p, m] = S.useState(null),
      y = Ft(t, (wn) => m(wn)),
      [E, C] = S.useState(null),
      b = mT(E),
      T = (b == null ? void 0 : b.width) ?? 0,
      P = (b == null ? void 0 : b.height) ?? 0,
      M = r + (o !== "center" ? "-" + o : ""),
      N =
        typeof c == "number"
          ? c
          : { top: 0, right: 0, bottom: 0, left: 0, ...c },
      z = Array.isArray(u) ? u : [u],
      I = z.length > 0,
      K = { padding: N, boundary: z.filter(xT), altBoundary: I },
      {
        refs: D,
        floatingStyles: Q,
        placement: $,
        isPositioned: _,
        middlewareData: k,
      } = iT({
        strategy: "fixed",
        placement: M,
        whileElementsMounted: (...wn) =>
          Qb(...wn, { animationFrame: h === "always" }),
        elements: { reference: x.anchor },
        middleware: [
          sT({ mainAxis: i + P, alignmentAxis: s }),
          l &&
            aT({
              mainAxis: !0,
              crossAxis: !1,
              limiter: d === "partial" ? lT() : void 0,
              ...K,
            }),
          l && uT({ ...K }),
          cT({
            ...K,
            apply: ({
              elements: wn,
              rects: ps,
              availableWidth: Ml,
              availableHeight: ms,
            }) => {
              const { width: Nl, height: Yi } = ps.reference,
                $r = wn.floating.style;
              $r.setProperty("--radix-popper-available-width", `${Ml}px`),
                $r.setProperty("--radix-popper-available-height", `${ms}px`),
                $r.setProperty("--radix-popper-anchor-width", `${Nl}px`),
                $r.setProperty("--radix-popper-anchor-height", `${Yi}px`);
            },
          }),
          E && fT({ element: E, padding: a }),
          wT({ arrowWidth: T, arrowHeight: P }),
          f && dT({ strategy: "referenceHidden", ...K }),
        ],
      }),
      [A, O] = Xv($),
      W = Jn(v);
    er(() => {
      _ && (W == null || W());
    }, [_, W]);
    const B = (ee = k.arrow) == null ? void 0 : ee.x,
      Y = (zr = k.arrow) == null ? void 0 : zr.y,
      q = ((vn = k.arrow) == null ? void 0 : vn.centerOffset) !== 0,
      [xe, je] = S.useState();
    return (
      er(() => {
        p && je(window.getComputedStyle(p).zIndex);
      }, [p]),
      w.jsx("div", {
        ref: D.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...Q,
          transform: _ ? Q.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: xe,
          "--radix-popper-transform-origin": [
            (ur = k.transformOrigin) == null ? void 0 : ur.x,
            (xn = k.transformOrigin) == null ? void 0 : xn.y,
          ].join(" "),
          ...(((Br = k.hide) == null ? void 0 : Br.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: w.jsx(gT, {
          scope: n,
          placedSide: A,
          onArrowChange: C,
          arrowX: B,
          arrowY: Y,
          shouldHideArrow: q,
          children: w.jsx(tt.div, {
            "data-side": A,
            "data-align": O,
            ...g,
            ref: y,
            style: { ...g.style, animation: _ ? void 0 : "none" },
          }),
        }),
      })
    );
  });
Gv.displayName = yf;
var Qv = "PopperArrow",
  vT = { top: "bottom", right: "left", bottom: "top", left: "right" },
  Yv = S.forwardRef(function (t, n) {
    const { __scopePopper: r, ...i } = t,
      o = yT(Qv, r),
      s = vT[o.placedSide];
    return w.jsx("span", {
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
      children: w.jsx(pT, {
        ...i,
        ref: n,
        style: { ...i.style, display: "block" },
      }),
    });
  });
Yv.displayName = Qv;
function xT(e) {
  return e !== null;
}
var wT = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var x, p, m;
    const { placement: n, rects: r, middlewareData: i } = t,
      s = ((x = i.arrow) == null ? void 0 : x.centerOffset) !== 0,
      a = s ? 0 : e.arrowWidth,
      l = s ? 0 : e.arrowHeight,
      [u, c] = Xv(n),
      d = { start: "0%", center: "50%", end: "100%" }[c],
      f = (((p = i.arrow) == null ? void 0 : p.x) ?? 0) + a / 2,
      h = (((m = i.arrow) == null ? void 0 : m.y) ?? 0) + l / 2;
    let v = "",
      g = "";
    return (
      u === "bottom"
        ? ((v = s ? d : `${f}px`), (g = `${-l}px`))
        : u === "top"
        ? ((v = s ? d : `${f}px`), (g = `${r.floating.height + l}px`))
        : u === "right"
        ? ((v = `${-l}px`), (g = s ? d : `${h}px`))
        : u === "left" &&
          ((v = `${r.floating.width + l}px`), (g = s ? d : `${h}px`)),
      { data: { x: v, y: g } }
    );
  },
});
function Xv(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var ST = Kv,
  ET = Gv,
  CT = Yv,
  [yl, fN] = dl("Tooltip", [Wv]),
  vf = Wv(),
  qv = "TooltipProvider",
  bT = 700,
  _p = "tooltip.open",
  [TT, Zv] = yl(qv),
  Jv = (e) => {
    const {
        __scopeTooltip: t,
        delayDuration: n = bT,
        skipDelayDuration: r = 300,
        disableHoverableContent: i = !1,
        children: o,
      } = e,
      s = S.useRef(!0),
      a = S.useRef(!1),
      l = S.useRef(0);
    return (
      S.useEffect(() => {
        const u = l.current;
        return () => window.clearTimeout(u);
      }, []),
      w.jsx(TT, {
        scope: t,
        isOpenDelayedRef: s,
        delayDuration: n,
        onOpen: S.useCallback(() => {
          window.clearTimeout(l.current), (s.current = !1);
        }, []),
        onClose: S.useCallback(() => {
          window.clearTimeout(l.current),
            (l.current = window.setTimeout(() => (s.current = !0), r));
        }, [r]),
        isPointerInTransitRef: a,
        onPointerInTransitChange: S.useCallback((u) => {
          a.current = u;
        }, []),
        disableHoverableContent: i,
        children: o,
      })
    );
  };
Jv.displayName = qv;
var ex = "Tooltip",
  [hN, vl] = yl(ex),
  Lc = "TooltipTrigger",
  PT = S.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      i = vl(Lc, n),
      o = Zv(Lc, n),
      s = vf(n),
      a = S.useRef(null),
      l = Ft(t, a, i.onTriggerChange),
      u = S.useRef(!1),
      c = S.useRef(!1),
      d = S.useCallback(() => (u.current = !1), []);
    return (
      S.useEffect(
        () => () => document.removeEventListener("pointerup", d),
        [d]
      ),
      w.jsx(ST, {
        asChild: !0,
        ...s,
        children: w.jsx(tt.button, {
          "aria-describedby": i.open ? i.contentId : void 0,
          "data-state": i.stateAttribute,
          ...r,
          ref: l,
          onPointerMove: be(e.onPointerMove, (f) => {
            f.pointerType !== "touch" &&
              !c.current &&
              !o.isPointerInTransitRef.current &&
              (i.onTriggerEnter(), (c.current = !0));
          }),
          onPointerLeave: be(e.onPointerLeave, () => {
            i.onTriggerLeave(), (c.current = !1);
          }),
          onPointerDown: be(e.onPointerDown, () => {
            i.open && i.onClose(),
              (u.current = !0),
              document.addEventListener("pointerup", d, { once: !0 });
          }),
          onFocus: be(e.onFocus, () => {
            u.current || i.onOpen();
          }),
          onBlur: be(e.onBlur, i.onClose),
          onClick: be(e.onClick, i.onClose),
        }),
      })
    );
  });
PT.displayName = Lc;
var kT = "TooltipPortal",
  [pN, RT] = yl(kT, { forceMount: void 0 }),
  Fi = "TooltipContent",
  tx = S.forwardRef((e, t) => {
    const n = RT(Fi, e.__scopeTooltip),
      { forceMount: r = n.forceMount, side: i = "top", ...o } = e,
      s = vl(Fi, e.__scopeTooltip);
    return w.jsx(of, {
      present: r || s.open,
      children: s.disableHoverableContent
        ? w.jsx(nx, { side: i, ...o, ref: t })
        : w.jsx(AT, { side: i, ...o, ref: t }),
    });
  }),
  AT = S.forwardRef((e, t) => {
    const n = vl(Fi, e.__scopeTooltip),
      r = Zv(Fi, e.__scopeTooltip),
      i = S.useRef(null),
      o = Ft(t, i),
      [s, a] = S.useState(null),
      { trigger: l, onClose: u } = n,
      c = i.current,
      { onPointerInTransitChange: d } = r,
      f = S.useCallback(() => {
        a(null), d(!1);
      }, [d]),
      h = S.useCallback(
        (v, g) => {
          const x = v.currentTarget,
            p = { x: v.clientX, y: v.clientY },
            m = DT(p, x.getBoundingClientRect()),
            y = OT(p, m),
            E = IT(g.getBoundingClientRect()),
            C = VT([...y, ...E]);
          a(C), d(!0);
        },
        [d]
      );
    return (
      S.useEffect(() => () => f(), [f]),
      S.useEffect(() => {
        if (l && c) {
          const v = (x) => h(x, c),
            g = (x) => h(x, l);
          return (
            l.addEventListener("pointerleave", v),
            c.addEventListener("pointerleave", g),
            () => {
              l.removeEventListener("pointerleave", v),
                c.removeEventListener("pointerleave", g);
            }
          );
        }
      }, [l, c, h, f]),
      S.useEffect(() => {
        if (s) {
          const v = (g) => {
            const x = g.target,
              p = { x: g.clientX, y: g.clientY },
              m =
                (l == null ? void 0 : l.contains(x)) ||
                (c == null ? void 0 : c.contains(x)),
              y = !FT(p, s);
            m ? f() : y && (f(), u());
          };
          return (
            document.addEventListener("pointermove", v),
            () => document.removeEventListener("pointermove", v)
          );
        }
      }, [l, c, s, u, f]),
      w.jsx(nx, { ...e, ref: o })
    );
  }),
  [MT, NT] = yl(ex, { isInside: !1 }),
  jT = G2("TooltipContent"),
  nx = S.forwardRef((e, t) => {
    const {
        __scopeTooltip: n,
        children: r,
        "aria-label": i,
        onEscapeKeyDown: o,
        onPointerDownOutside: s,
        ...a
      } = e,
      l = vl(Fi, n),
      u = vf(n),
      { onClose: c } = l;
    return (
      S.useEffect(
        () => (
          document.addEventListener(_p, c),
          () => document.removeEventListener(_p, c)
        ),
        [c]
      ),
      S.useEffect(() => {
        if (l.trigger) {
          const d = (f) => {
            const h = f.target;
            h != null && h.contains(l.trigger) && c();
          };
          return (
            window.addEventListener("scroll", d, { capture: !0 }),
            () => window.removeEventListener("scroll", d, { capture: !0 })
          );
        }
      }, [l.trigger, c]),
      w.jsx(rf, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: o,
        onPointerDownOutside: s,
        onFocusOutside: (d) => d.preventDefault(),
        onDismiss: c,
        children: w.jsxs(ET, {
          "data-state": l.stateAttribute,
          ...u,
          ...a,
          ref: t,
          style: {
            ...a.style,
            "--radix-tooltip-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-tooltip-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-tooltip-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-tooltip-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
          children: [
            w.jsx(jT, { children: r }),
            w.jsx(MT, {
              scope: n,
              isInside: !0,
              children: w.jsx(vE, {
                id: l.contentId,
                role: "tooltip",
                children: i || r,
              }),
            }),
          ],
        }),
      })
    );
  });
tx.displayName = Fi;
var rx = "TooltipArrow",
  LT = S.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      i = vf(n);
    return NT(rx, n).isInside ? null : w.jsx(CT, { ...i, ...r, ref: t });
  });
LT.displayName = rx;
function DT(e, t) {
  const n = Math.abs(t.top - e.y),
    r = Math.abs(t.bottom - e.y),
    i = Math.abs(t.right - e.x),
    o = Math.abs(t.left - e.x);
  switch (Math.min(n, r, i, o)) {
    case o:
      return "left";
    case i:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function OT(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
      break;
    case "bottom":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
      break;
    case "left":
      r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
      break;
    case "right":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
      break;
  }
  return r;
}
function IT(e) {
  const { top: t, right: n, bottom: r, left: i } = e;
  return [
    { x: i, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: i, y: r },
  ];
}
function FT(e, t) {
  const { x: n, y: r } = e;
  let i = !1;
  for (let o = 0, s = t.length - 1; o < t.length; s = o++) {
    const a = t[o],
      l = t[s],
      u = a.x,
      c = a.y,
      d = l.x,
      f = l.y;
    c > r != f > r && n < ((d - u) * (r - c)) / (f - c) + u && (i = !i);
  }
  return i;
}
function VT(e) {
  const t = e.slice();
  return (
    t.sort((n, r) =>
      n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0
    ),
    _T(t)
  );
}
function _T(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const i = e[r];
    for (; t.length >= 2; ) {
      const o = t[t.length - 1],
        s = t[t.length - 2];
      if ((o.x - s.x) * (i.y - s.y) >= (o.y - s.y) * (i.x - s.x)) t.pop();
      else break;
    }
    t.push(i);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const i = e[r];
    for (; n.length >= 2; ) {
      const o = n[n.length - 1],
        s = n[n.length - 2];
      if ((o.x - s.x) * (i.y - s.y) >= (o.y - s.y) * (i.x - s.x)) n.pop();
      else break;
    }
    n.push(i);
  }
  return (
    n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y
      ? t
      : t.concat(n)
  );
}
var zT = Jv,
  ix = tx;
const BT = zT,
  $T = S.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
    w.jsx(ix, {
      ref: r,
      sideOffset: t,
      className: _r(
        "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e
      ),
      ...n,
    })
  );
$T.displayName = ix.displayName;
var xl = class {
    constructor() {
      (this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          this.listeners.delete(e), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  wl = typeof window > "u" || "Deno" in globalThis;
function Rt() {}
function WT(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function UT(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function HT(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Dc(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function KT(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function zp(e, t) {
  const {
    type: n = "all",
    exact: r,
    fetchStatus: i,
    predicate: o,
    queryKey: s,
    stale: a,
  } = e;
  if (s) {
    if (r) {
      if (t.queryHash !== xf(s, t.options)) return !1;
    } else if (!Qo(t.queryKey, s)) return !1;
  }
  if (n !== "all") {
    const l = t.isActive();
    if ((n === "active" && !l) || (n === "inactive" && l)) return !1;
  }
  return !(
    (typeof a == "boolean" && t.isStale() !== a) ||
    (i && i !== t.state.fetchStatus) ||
    (o && !o(t))
  );
}
function Bp(e, t) {
  const { exact: n, status: r, predicate: i, mutationKey: o } = e;
  if (o) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (Go(t.options.mutationKey) !== Go(o)) return !1;
    } else if (!Qo(t.options.mutationKey, o)) return !1;
  }
  return !((r && t.state.status !== r) || (i && !i(t)));
}
function xf(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || Go)(e);
}
function Go(e) {
  return JSON.stringify(e, (t, n) =>
    Oc(n)
      ? Object.keys(n)
          .sort()
          .reduce((r, i) => ((r[i] = n[i]), r), {})
      : n
  );
}
function Qo(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
    ? !1
    : e && t && typeof e == "object" && typeof t == "object"
    ? Object.keys(t).every((n) => Qo(e[n], t[n]))
    : !1;
}
function ox(e, t) {
  if (e === t) return e;
  const n = $p(e) && $p(t);
  if (n || (Oc(e) && Oc(t))) {
    const r = n ? e : Object.keys(e),
      i = r.length,
      o = n ? t : Object.keys(t),
      s = o.length,
      a = n ? [] : {},
      l = new Set(r);
    let u = 0;
    for (let c = 0; c < s; c++) {
      const d = n ? c : o[c];
      ((!n && l.has(d)) || n) && e[d] === void 0 && t[d] === void 0
        ? ((a[d] = void 0), u++)
        : ((a[d] = ox(e[d], t[d])), a[d] === e[d] && e[d] !== void 0 && u++);
    }
    return i === s && u === i ? e : a;
  }
  return t;
}
function $p(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Oc(e) {
  if (!Wp(e)) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const n = t.prototype;
  return !(
    !Wp(n) ||
    !n.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function Wp(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function GT(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function QT(e, t, n) {
  return typeof n.structuralSharing == "function"
    ? n.structuralSharing(e, t)
    : n.structuralSharing !== !1
    ? ox(e, t)
    : t;
}
function YT(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function XT(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var wf = Symbol();
function sx(e, t) {
  return !e.queryFn && t != null && t.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === wf
    ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
    : e.queryFn;
}
var Er,
  Dn,
  Si,
  wg,
  qT =
    ((wg = class extends xl {
      constructor() {
        super();
        J(this, Er);
        J(this, Dn);
        J(this, Si);
        H(this, Si, (t) => {
          if (!wl && window.addEventListener) {
            const n = () => t();
            return (
              window.addEventListener("visibilitychange", n, !1),
              () => {
                window.removeEventListener("visibilitychange", n);
              }
            );
          }
        });
      }
      onSubscribe() {
        R(this, Dn) || this.setEventListener(R(this, Si));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = R(this, Dn)) == null || t.call(this), H(this, Dn, void 0));
      }
      setEventListener(t) {
        var n;
        H(this, Si, t),
          (n = R(this, Dn)) == null || n.call(this),
          H(
            this,
            Dn,
            t((r) => {
              typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
            })
          );
      }
      setFocused(t) {
        R(this, Er) !== t && (H(this, Er, t), this.onFocus());
      }
      onFocus() {
        const t = this.isFocused();
        this.listeners.forEach((n) => {
          n(t);
        });
      }
      isFocused() {
        var t;
        return typeof R(this, Er) == "boolean"
          ? R(this, Er)
          : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !==
              "hidden";
      }
    }),
    (Er = new WeakMap()),
    (Dn = new WeakMap()),
    (Si = new WeakMap()),
    wg),
  ax = new qT(),
  Ei,
  On,
  Ci,
  Sg,
  ZT =
    ((Sg = class extends xl {
      constructor() {
        super();
        J(this, Ei, !0);
        J(this, On);
        J(this, Ci);
        H(this, Ci, (t) => {
          if (!wl && window.addEventListener) {
            const n = () => t(!0),
              r = () => t(!1);
            return (
              window.addEventListener("online", n, !1),
              window.addEventListener("offline", r, !1),
              () => {
                window.removeEventListener("online", n),
                  window.removeEventListener("offline", r);
              }
            );
          }
        });
      }
      onSubscribe() {
        R(this, On) || this.setEventListener(R(this, Ci));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = R(this, On)) == null || t.call(this), H(this, On, void 0));
      }
      setEventListener(t) {
        var n;
        H(this, Ci, t),
          (n = R(this, On)) == null || n.call(this),
          H(this, On, t(this.setOnline.bind(this)));
      }
      setOnline(t) {
        R(this, Ei) !== t &&
          (H(this, Ei, t),
          this.listeners.forEach((r) => {
            r(t);
          }));
      }
      isOnline() {
        return R(this, Ei);
      }
    }),
    (Ei = new WeakMap()),
    (On = new WeakMap()),
    (Ci = new WeakMap()),
    Sg),
  _a = new ZT();
function JT() {
  let e, t;
  const n = new Promise((i, o) => {
    (e = i), (t = o);
  });
  (n.status = "pending"), n.catch(() => {});
  function r(i) {
    Object.assign(n, i), delete n.resolve, delete n.reject;
  }
  return (
    (n.resolve = (i) => {
      r({ status: "fulfilled", value: i }), e(i);
    }),
    (n.reject = (i) => {
      r({ status: "rejected", reason: i }), t(i);
    }),
    n
  );
}
function eP(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function lx(e) {
  return (e ?? "online") === "online" ? _a.isOnline() : !0;
}
var ux = class extends Error {
  constructor(e) {
    super("CancelledError"),
      (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent);
  }
};
function hu(e) {
  return e instanceof ux;
}
function cx(e) {
  let t = !1,
    n = 0,
    r = !1,
    i;
  const o = JT(),
    s = (g) => {
      var x;
      r || (f(new ux(g)), (x = e.abort) == null || x.call(e));
    },
    a = () => {
      t = !0;
    },
    l = () => {
      t = !1;
    },
    u = () =>
      ax.isFocused() &&
      (e.networkMode === "always" || _a.isOnline()) &&
      e.canRun(),
    c = () => lx(e.networkMode) && e.canRun(),
    d = (g) => {
      var x;
      r ||
        ((r = !0),
        (x = e.onSuccess) == null || x.call(e, g),
        i == null || i(),
        o.resolve(g));
    },
    f = (g) => {
      var x;
      r ||
        ((r = !0),
        (x = e.onError) == null || x.call(e, g),
        i == null || i(),
        o.reject(g));
    },
    h = () =>
      new Promise((g) => {
        var x;
        (i = (p) => {
          (r || u()) && g(p);
        }),
          (x = e.onPause) == null || x.call(e);
      }).then(() => {
        var g;
        (i = void 0), r || (g = e.onContinue) == null || g.call(e);
      }),
    v = () => {
      if (r) return;
      let g;
      const x = n === 0 ? e.initialPromise : void 0;
      try {
        g = x ?? e.fn();
      } catch (p) {
        g = Promise.reject(p);
      }
      Promise.resolve(g)
        .then(d)
        .catch((p) => {
          var b;
          if (r) return;
          const m = e.retry ?? (wl ? 0 : 3),
            y = e.retryDelay ?? eP,
            E = typeof y == "function" ? y(n, p) : y,
            C =
              m === !0 ||
              (typeof m == "number" && n < m) ||
              (typeof m == "function" && m(n, p));
          if (t || !C) {
            f(p);
            return;
          }
          n++,
            (b = e.onFail) == null || b.call(e, n, p),
            GT(E)
              .then(() => (u() ? void 0 : h()))
              .then(() => {
                t ? f(p) : v();
              });
        });
    };
  return {
    promise: o,
    cancel: s,
    continue: () => (i == null || i(), o),
    cancelRetry: a,
    continueRetry: l,
    canStart: c,
    start: () => (c() ? v() : h().then(v), o),
  };
}
var tP = (e) => setTimeout(e, 0);
function nP() {
  let e = [],
    t = 0,
    n = (a) => {
      a();
    },
    r = (a) => {
      a();
    },
    i = tP;
  const o = (a) => {
      t
        ? e.push(a)
        : i(() => {
            n(a);
          });
    },
    s = () => {
      const a = e;
      (e = []),
        a.length &&
          i(() => {
            r(() => {
              a.forEach((l) => {
                n(l);
              });
            });
          });
    };
  return {
    batch: (a) => {
      let l;
      t++;
      try {
        l = a();
      } finally {
        t--, t || s();
      }
      return l;
    },
    batchCalls:
      (a) =>
      (...l) => {
        o(() => {
          a(...l);
        });
      },
    schedule: o,
    setNotifyFunction: (a) => {
      n = a;
    },
    setBatchNotifyFunction: (a) => {
      r = a;
    },
    setScheduler: (a) => {
      i = a;
    },
  };
}
var $e = nP(),
  Cr,
  Eg,
  dx =
    ((Eg = class {
      constructor() {
        J(this, Cr);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        this.clearGcTimeout(),
          UT(this.gcTime) &&
            H(
              this,
              Cr,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime)
            );
      }
      updateGcTime(e) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          e ?? (wl ? 1 / 0 : 5 * 60 * 1e3)
        );
      }
      clearGcTimeout() {
        R(this, Cr) && (clearTimeout(R(this, Cr)), H(this, Cr, void 0));
      }
    }),
    (Cr = new WeakMap()),
    Eg),
  bi,
  br,
  dt,
  Tr,
  Ie,
  es,
  Pr,
  At,
  nn,
  Cg,
  rP =
    ((Cg = class extends dx {
      constructor(t) {
        super();
        J(this, At);
        J(this, bi);
        J(this, br);
        J(this, dt);
        J(this, Tr);
        J(this, Ie);
        J(this, es);
        J(this, Pr);
        H(this, Pr, !1),
          H(this, es, t.defaultOptions),
          this.setOptions(t.options),
          (this.observers = []),
          H(this, Tr, t.client),
          H(this, dt, R(this, Tr).getQueryCache()),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          H(this, bi, oP(this.options)),
          (this.state = t.state ?? R(this, bi)),
          this.scheduleGc();
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var t;
        return (t = R(this, Ie)) == null ? void 0 : t.promise;
      }
      setOptions(t) {
        (this.options = { ...R(this, es), ...t }),
          this.updateGcTime(this.options.gcTime);
      }
      optionalRemove() {
        !this.observers.length &&
          this.state.fetchStatus === "idle" &&
          R(this, dt).remove(this);
      }
      setData(t, n) {
        const r = QT(this.state.data, t, this.options);
        return (
          Le(this, At, nn).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual,
          }),
          r
        );
      }
      setState(t, n) {
        Le(this, At, nn).call(this, {
          type: "setState",
          state: t,
          setStateOptions: n,
        });
      }
      cancel(t) {
        var r, i;
        const n = (r = R(this, Ie)) == null ? void 0 : r.promise;
        return (
          (i = R(this, Ie)) == null || i.cancel(t),
          n ? n.then(Rt).catch(Rt) : Promise.resolve()
        );
      }
      destroy() {
        super.destroy(), this.cancel({ silent: !0 });
      }
      reset() {
        this.destroy(), this.setState(R(this, bi));
      }
      isActive() {
        return this.observers.some((t) => KT(t.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === wf ||
              this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
      }
      isStatic() {
        return this.getObserversCount() > 0
          ? this.observers.some(
              (t) => Dc(t.options.staleTime, this) === "static"
            )
          : !1;
      }
      isStale() {
        return this.getObserversCount() > 0
          ? this.observers.some((t) => t.getCurrentResult().isStale)
          : this.state.data === void 0 || this.state.isInvalidated;
      }
      isStaleByTime(t = 0) {
        return this.state.data === void 0
          ? !0
          : t === "static"
          ? !1
          : this.state.isInvalidated
          ? !0
          : !HT(this.state.dataUpdatedAt, t);
      }
      onFocus() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (n = R(this, Ie)) == null || n.continue();
      }
      onOnline() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnReconnect());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (n = R(this, Ie)) == null || n.continue();
      }
      addObserver(t) {
        this.observers.includes(t) ||
          (this.observers.push(t),
          this.clearGcTimeout(),
          R(this, dt).notify({
            type: "observerAdded",
            query: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        this.observers.includes(t) &&
          ((this.observers = this.observers.filter((n) => n !== t)),
          this.observers.length ||
            (R(this, Ie) &&
              (R(this, Pr)
                ? R(this, Ie).cancel({ revert: !0 })
                : R(this, Ie).cancelRetry()),
            this.scheduleGc()),
          R(this, dt).notify({
            type: "observerRemoved",
            query: this,
            observer: t,
          }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated ||
          Le(this, At, nn).call(this, { type: "invalidate" });
      }
      fetch(t, n) {
        var u, c, d;
        if (this.state.fetchStatus !== "idle") {
          if (this.state.data !== void 0 && n != null && n.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (R(this, Ie))
            return R(this, Ie).continueRetry(), R(this, Ie).promise;
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const f = this.observers.find((h) => h.options.queryFn);
          f && this.setOptions(f.options);
        }
        const r = new AbortController(),
          i = (f) => {
            Object.defineProperty(f, "signal", {
              enumerable: !0,
              get: () => (H(this, Pr, !0), r.signal),
            });
          },
          o = () => {
            const f = sx(this.options, n),
              v = (() => {
                const g = {
                  client: R(this, Tr),
                  queryKey: this.queryKey,
                  meta: this.meta,
                };
                return i(g), g;
              })();
            return (
              H(this, Pr, !1),
              this.options.persister ? this.options.persister(f, v, this) : f(v)
            );
          },
          a = (() => {
            const f = {
              fetchOptions: n,
              options: this.options,
              queryKey: this.queryKey,
              client: R(this, Tr),
              state: this.state,
              fetchFn: o,
            };
            return i(f), f;
          })();
        (u = this.options.behavior) == null || u.onFetch(a, this),
          H(this, br, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
              ((c = a.fetchOptions) == null ? void 0 : c.meta)) &&
            Le(this, At, nn).call(this, {
              type: "fetch",
              meta: (d = a.fetchOptions) == null ? void 0 : d.meta,
            });
        const l = (f) => {
          var h, v, g, x;
          (hu(f) && f.silent) ||
            Le(this, At, nn).call(this, { type: "error", error: f }),
            hu(f) ||
              ((v = (h = R(this, dt).config).onError) == null ||
                v.call(h, f, this),
              (x = (g = R(this, dt).config).onSettled) == null ||
                x.call(g, this.state.data, f, this)),
            this.scheduleGc();
        };
        return (
          H(
            this,
            Ie,
            cx({
              initialPromise: n == null ? void 0 : n.initialPromise,
              fn: a.fetchFn,
              abort: r.abort.bind(r),
              onSuccess: (f) => {
                var h, v, g, x;
                if (f === void 0) {
                  l(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                try {
                  this.setData(f);
                } catch (p) {
                  l(p);
                  return;
                }
                (v = (h = R(this, dt).config).onSuccess) == null ||
                  v.call(h, f, this),
                  (x = (g = R(this, dt).config).onSettled) == null ||
                    x.call(g, f, this.state.error, this),
                  this.scheduleGc();
              },
              onError: l,
              onFail: (f, h) => {
                Le(this, At, nn).call(this, {
                  type: "failed",
                  failureCount: f,
                  error: h,
                });
              },
              onPause: () => {
                Le(this, At, nn).call(this, { type: "pause" });
              },
              onContinue: () => {
                Le(this, At, nn).call(this, { type: "continue" });
              },
              retry: a.options.retry,
              retryDelay: a.options.retryDelay,
              networkMode: a.options.networkMode,
              canRun: () => !0,
            })
          ),
          R(this, Ie).start()
        );
      }
    }),
    (bi = new WeakMap()),
    (br = new WeakMap()),
    (dt = new WeakMap()),
    (Tr = new WeakMap()),
    (Ie = new WeakMap()),
    (es = new WeakMap()),
    (Pr = new WeakMap()),
    (At = new WeakSet()),
    (nn = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              fetchFailureCount: t.failureCount,
              fetchFailureReason: t.error,
            };
          case "pause":
            return { ...r, fetchStatus: "paused" };
          case "continue":
            return { ...r, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...r,
              ...iP(r.data, this.options),
              fetchMeta: t.meta ?? null,
            };
          case "success":
            return (
              H(this, br, void 0),
              {
                ...r,
                data: t.data,
                dataUpdateCount: r.dataUpdateCount + 1,
                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...(!t.manual && {
                  fetchStatus: "idle",
                  fetchFailureCount: 0,
                  fetchFailureReason: null,
                }),
              }
            );
          case "error":
            const i = t.error;
            return hu(i) && i.revert && R(this, br)
              ? { ...R(this, br), fetchStatus: "idle" }
              : {
                  ...r,
                  error: i,
                  errorUpdateCount: r.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: r.fetchFailureCount + 1,
                  fetchFailureReason: i,
                  fetchStatus: "idle",
                  status: "error",
                };
          case "invalidate":
            return { ...r, isInvalidated: !0 };
          case "setState":
            return { ...r, ...t.state };
        }
      };
      (this.state = n(this.state)),
        $e.batch(() => {
          this.observers.forEach((r) => {
            r.onQueryUpdate();
          }),
            R(this, dt).notify({ query: this, type: "updated", action: t });
        });
    }),
    Cg);
function iP(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: lx(t.networkMode) ? "fetching" : "paused",
    ...(e === void 0 && { error: null, status: "pending" }),
  };
}
function oP(e) {
  const t =
      typeof e.initialData == "function" ? e.initialData() : e.initialData,
    n = t !== void 0,
    r = n
      ? typeof e.initialDataUpdatedAt == "function"
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? r ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var Wt,
  bg,
  sP =
    ((bg = class extends xl {
      constructor(t = {}) {
        super();
        J(this, Wt);
        (this.config = t), H(this, Wt, new Map());
      }
      build(t, n, r) {
        const i = n.queryKey,
          o = n.queryHash ?? xf(i, n);
        let s = this.get(o);
        return (
          s ||
            ((s = new rP({
              client: t,
              queryKey: i,
              queryHash: o,
              options: t.defaultQueryOptions(n),
              state: r,
              defaultOptions: t.getQueryDefaults(i),
            })),
            this.add(s)),
          s
        );
      }
      add(t) {
        R(this, Wt).has(t.queryHash) ||
          (R(this, Wt).set(t.queryHash, t),
          this.notify({ type: "added", query: t }));
      }
      remove(t) {
        const n = R(this, Wt).get(t.queryHash);
        n &&
          (t.destroy(),
          n === t && R(this, Wt).delete(t.queryHash),
          this.notify({ type: "removed", query: t }));
      }
      clear() {
        $e.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      get(t) {
        return R(this, Wt).get(t);
      }
      getAll() {
        return [...R(this, Wt).values()];
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => zp(n, r));
      }
      findAll(t = {}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter((r) => zp(t, r)) : n;
      }
      notify(t) {
        $e.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      onFocus() {
        $e.batch(() => {
          this.getAll().forEach((t) => {
            t.onFocus();
          });
        });
      }
      onOnline() {
        $e.batch(() => {
          this.getAll().forEach((t) => {
            t.onOnline();
          });
        });
      }
    }),
    (Wt = new WeakMap()),
    bg),
  Ut,
  ze,
  kr,
  Ht,
  kn,
  Tg,
  aP =
    ((Tg = class extends dx {
      constructor(t) {
        super();
        J(this, Ht);
        J(this, Ut);
        J(this, ze);
        J(this, kr);
        (this.mutationId = t.mutationId),
          H(this, ze, t.mutationCache),
          H(this, Ut, []),
          (this.state = t.state || lP()),
          this.setOptions(t.options),
          this.scheduleGc();
      }
      setOptions(t) {
        (this.options = t), this.updateGcTime(this.options.gcTime);
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(t) {
        R(this, Ut).includes(t) ||
          (R(this, Ut).push(t),
          this.clearGcTimeout(),
          R(this, ze).notify({
            type: "observerAdded",
            mutation: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        H(
          this,
          Ut,
          R(this, Ut).filter((n) => n !== t)
        ),
          this.scheduleGc(),
          R(this, ze).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t,
          });
      }
      optionalRemove() {
        R(this, Ut).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : R(this, ze).remove(this));
      }
      continue() {
        var t;
        return (
          ((t = R(this, kr)) == null ? void 0 : t.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(t) {
        var o, s, a, l, u, c, d, f, h, v, g, x, p, m, y, E, C, b, T, P;
        const n = () => {
          Le(this, Ht, kn).call(this, { type: "continue" });
        };
        H(
          this,
          kr,
          cx({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(t)
                : Promise.reject(new Error("No mutationFn found")),
            onFail: (M, N) => {
              Le(this, Ht, kn).call(this, {
                type: "failed",
                failureCount: M,
                error: N,
              });
            },
            onPause: () => {
              Le(this, Ht, kn).call(this, { type: "pause" });
            },
            onContinue: n,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => R(this, ze).canRun(this),
          })
        );
        const r = this.state.status === "pending",
          i = !R(this, kr).canStart();
        try {
          if (r) n();
          else {
            Le(this, Ht, kn).call(this, {
              type: "pending",
              variables: t,
              isPaused: i,
            }),
              await ((s = (o = R(this, ze).config).onMutate) == null
                ? void 0
                : s.call(o, t, this));
            const N = await ((l = (a = this.options).onMutate) == null
              ? void 0
              : l.call(a, t));
            N !== this.state.context &&
              Le(this, Ht, kn).call(this, {
                type: "pending",
                context: N,
                variables: t,
                isPaused: i,
              });
          }
          const M = await R(this, kr).start();
          return (
            await ((c = (u = R(this, ze).config).onSuccess) == null
              ? void 0
              : c.call(u, M, t, this.state.context, this)),
            await ((f = (d = this.options).onSuccess) == null
              ? void 0
              : f.call(d, M, t, this.state.context)),
            await ((v = (h = R(this, ze).config).onSettled) == null
              ? void 0
              : v.call(
                  h,
                  M,
                  null,
                  this.state.variables,
                  this.state.context,
                  this
                )),
            await ((x = (g = this.options).onSettled) == null
              ? void 0
              : x.call(g, M, null, t, this.state.context)),
            Le(this, Ht, kn).call(this, { type: "success", data: M }),
            M
          );
        } catch (M) {
          try {
            throw (
              (await ((m = (p = R(this, ze).config).onError) == null
                ? void 0
                : m.call(p, M, t, this.state.context, this)),
              await ((E = (y = this.options).onError) == null
                ? void 0
                : E.call(y, M, t, this.state.context)),
              await ((b = (C = R(this, ze).config).onSettled) == null
                ? void 0
                : b.call(
                    C,
                    void 0,
                    M,
                    this.state.variables,
                    this.state.context,
                    this
                  )),
              await ((P = (T = this.options).onSettled) == null
                ? void 0
                : P.call(T, void 0, M, t, this.state.context)),
              M)
            );
          } finally {
            Le(this, Ht, kn).call(this, { type: "error", error: M });
          }
        } finally {
          R(this, ze).runNext(this);
        }
      }
    }),
    (Ut = new WeakMap()),
    (ze = new WeakMap()),
    (kr = new WeakMap()),
    (Ht = new WeakSet()),
    (kn = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              failureCount: t.failureCount,
              failureReason: t.error,
            };
          case "pause":
            return { ...r, isPaused: !0 };
          case "continue":
            return { ...r, isPaused: !1 };
          case "pending":
            return {
              ...r,
              context: t.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: t.isPaused,
              status: "pending",
              variables: t.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...r,
              data: t.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...r,
              data: void 0,
              error: t.error,
              failureCount: r.failureCount + 1,
              failureReason: t.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      (this.state = n(this.state)),
        $e.batch(() => {
          R(this, Ut).forEach((r) => {
            r.onMutationUpdate(t);
          }),
            R(this, ze).notify({ mutation: this, type: "updated", action: t });
        });
    }),
    Tg);
function lP() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var sn,
  Mt,
  ts,
  Pg,
  uP =
    ((Pg = class extends xl {
      constructor(t = {}) {
        super();
        J(this, sn);
        J(this, Mt);
        J(this, ts);
        (this.config = t),
          H(this, sn, new Set()),
          H(this, Mt, new Map()),
          H(this, ts, 0);
      }
      build(t, n, r) {
        const i = new aP({
          mutationCache: this,
          mutationId: ++ys(this, ts)._,
          options: t.defaultMutationOptions(n),
          state: r,
        });
        return this.add(i), i;
      }
      add(t) {
        R(this, sn).add(t);
        const n = _s(t);
        if (typeof n == "string") {
          const r = R(this, Mt).get(n);
          r ? r.push(t) : R(this, Mt).set(n, [t]);
        }
        this.notify({ type: "added", mutation: t });
      }
      remove(t) {
        if (R(this, sn).delete(t)) {
          const n = _s(t);
          if (typeof n == "string") {
            const r = R(this, Mt).get(n);
            if (r)
              if (r.length > 1) {
                const i = r.indexOf(t);
                i !== -1 && r.splice(i, 1);
              } else r[0] === t && R(this, Mt).delete(n);
          }
        }
        this.notify({ type: "removed", mutation: t });
      }
      canRun(t) {
        const n = _s(t);
        if (typeof n == "string") {
          const r = R(this, Mt).get(n),
            i =
              r == null ? void 0 : r.find((o) => o.state.status === "pending");
          return !i || i === t;
        } else return !0;
      }
      runNext(t) {
        var r;
        const n = _s(t);
        if (typeof n == "string") {
          const i =
            (r = R(this, Mt).get(n)) == null
              ? void 0
              : r.find((o) => o !== t && o.state.isPaused);
          return (i == null ? void 0 : i.continue()) ?? Promise.resolve();
        } else return Promise.resolve();
      }
      clear() {
        $e.batch(() => {
          R(this, sn).forEach((t) => {
            this.notify({ type: "removed", mutation: t });
          }),
            R(this, sn).clear(),
            R(this, Mt).clear();
        });
      }
      getAll() {
        return Array.from(R(this, sn));
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => Bp(n, r));
      }
      findAll(t = {}) {
        return this.getAll().filter((n) => Bp(t, n));
      }
      notify(t) {
        $e.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      resumePausedMutations() {
        const t = this.getAll().filter((n) => n.state.isPaused);
        return $e.batch(() =>
          Promise.all(t.map((n) => n.continue().catch(Rt)))
        );
      }
    }),
    (sn = new WeakMap()),
    (Mt = new WeakMap()),
    (ts = new WeakMap()),
    Pg);
function _s(e) {
  var t;
  return (t = e.options.scope) == null ? void 0 : t.id;
}
function Up(e) {
  return {
    onFetch: (t, n) => {
      var c, d, f, h, v;
      const r = t.options,
        i =
          (f =
            (d = (c = t.fetchOptions) == null ? void 0 : c.meta) == null
              ? void 0
              : d.fetchMore) == null
            ? void 0
            : f.direction,
        o = ((h = t.state.data) == null ? void 0 : h.pages) || [],
        s = ((v = t.state.data) == null ? void 0 : v.pageParams) || [];
      let a = { pages: [], pageParams: [] },
        l = 0;
      const u = async () => {
        let g = !1;
        const x = (y) => {
            Object.defineProperty(y, "signal", {
              enumerable: !0,
              get: () => (
                t.signal.aborted
                  ? (g = !0)
                  : t.signal.addEventListener("abort", () => {
                      g = !0;
                    }),
                t.signal
              ),
            });
          },
          p = sx(t.options, t.fetchOptions),
          m = async (y, E, C) => {
            if (g) return Promise.reject();
            if (E == null && y.pages.length) return Promise.resolve(y);
            const T = (() => {
                const z = {
                  client: t.client,
                  queryKey: t.queryKey,
                  pageParam: E,
                  direction: C ? "backward" : "forward",
                  meta: t.options.meta,
                };
                return x(z), z;
              })(),
              P = await p(T),
              { maxPages: M } = t.options,
              N = C ? XT : YT;
            return {
              pages: N(y.pages, P, M),
              pageParams: N(y.pageParams, E, M),
            };
          };
        if (i && o.length) {
          const y = i === "backward",
            E = y ? cP : Hp,
            C = { pages: o, pageParams: s },
            b = E(r, C);
          a = await m(C, b, y);
        } else {
          const y = e ?? o.length;
          do {
            const E = l === 0 ? s[0] ?? r.initialPageParam : Hp(r, a);
            if (l > 0 && E == null) break;
            (a = await m(a, E)), l++;
          } while (l < y);
        }
        return a;
      };
      t.options.persister
        ? (t.fetchFn = () => {
            var g, x;
            return (x = (g = t.options).persister) == null
              ? void 0
              : x.call(
                  g,
                  u,
                  {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal,
                  },
                  n
                );
          })
        : (t.fetchFn = u);
    },
  };
}
function Hp(e, { pages: t, pageParams: n }) {
  const r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function cP(e, { pages: t, pageParams: n }) {
  var r;
  return t.length > 0
    ? (r = e.getPreviousPageParam) == null
      ? void 0
      : r.call(e, t[0], t, n[0], n)
    : void 0;
}
var ge,
  In,
  Fn,
  Ti,
  Pi,
  Vn,
  ki,
  Ri,
  kg,
  dP =
    ((kg = class {
      constructor(e = {}) {
        J(this, ge);
        J(this, In);
        J(this, Fn);
        J(this, Ti);
        J(this, Pi);
        J(this, Vn);
        J(this, ki);
        J(this, Ri);
        H(this, ge, e.queryCache || new sP()),
          H(this, In, e.mutationCache || new uP()),
          H(this, Fn, e.defaultOptions || {}),
          H(this, Ti, new Map()),
          H(this, Pi, new Map()),
          H(this, Vn, 0);
      }
      mount() {
        ys(this, Vn)._++,
          R(this, Vn) === 1 &&
            (H(
              this,
              ki,
              ax.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), R(this, ge).onFocus());
              })
            ),
            H(
              this,
              Ri,
              _a.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), R(this, ge).onOnline());
              })
            ));
      }
      unmount() {
        var e, t;
        ys(this, Vn)._--,
          R(this, Vn) === 0 &&
            ((e = R(this, ki)) == null || e.call(this),
            H(this, ki, void 0),
            (t = R(this, Ri)) == null || t.call(this),
            H(this, Ri, void 0));
      }
      isFetching(e) {
        return R(this, ge).findAll({ ...e, fetchStatus: "fetching" }).length;
      }
      isMutating(e) {
        return R(this, In).findAll({ ...e, status: "pending" }).length;
      }
      getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = R(this, ge).get(t.queryHash)) == null
          ? void 0
          : n.state.data;
      }
      ensureQueryData(e) {
        const t = this.defaultQueryOptions(e),
          n = R(this, ge).build(this, t),
          r = n.state.data;
        return r === void 0
          ? this.fetchQuery(e)
          : (e.revalidateIfStale &&
              n.isStaleByTime(Dc(t.staleTime, n)) &&
              this.prefetchQuery(t),
            Promise.resolve(r));
      }
      getQueriesData(e) {
        return R(this, ge)
          .findAll(e)
          .map(({ queryKey: t, state: n }) => {
            const r = n.data;
            return [t, r];
          });
      }
      setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({ queryKey: e }),
          i = R(this, ge).get(r.queryHash),
          o = i == null ? void 0 : i.state.data,
          s = WT(t, o);
        if (s !== void 0)
          return R(this, ge)
            .build(this, r)
            .setData(s, { ...n, manual: !0 });
      }
      setQueriesData(e, t, n) {
        return $e.batch(() =>
          R(this, ge)
            .findAll(e)
            .map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)])
        );
      }
      getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = R(this, ge).get(t.queryHash)) == null ? void 0 : n.state;
      }
      removeQueries(e) {
        const t = R(this, ge);
        $e.batch(() => {
          t.findAll(e).forEach((n) => {
            t.remove(n);
          });
        });
      }
      resetQueries(e, t) {
        const n = R(this, ge);
        return $e.batch(
          () => (
            n.findAll(e).forEach((r) => {
              r.reset();
            }),
            this.refetchQueries({ type: "active", ...e }, t)
          )
        );
      }
      cancelQueries(e, t = {}) {
        const n = { revert: !0, ...t },
          r = $e.batch(() =>
            R(this, ge)
              .findAll(e)
              .map((i) => i.cancel(n))
          );
        return Promise.all(r).then(Rt).catch(Rt);
      }
      invalidateQueries(e, t = {}) {
        return $e.batch(
          () => (
            R(this, ge)
              .findAll(e)
              .forEach((n) => {
                n.invalidate();
              }),
            (e == null ? void 0 : e.refetchType) === "none"
              ? Promise.resolve()
              : this.refetchQueries(
                  {
                    ...e,
                    type:
                      (e == null ? void 0 : e.refetchType) ??
                      (e == null ? void 0 : e.type) ??
                      "active",
                  },
                  t
                )
          )
        );
      }
      refetchQueries(e, t = {}) {
        const n = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
          r = $e.batch(() =>
            R(this, ge)
              .findAll(e)
              .filter((i) => !i.isDisabled() && !i.isStatic())
              .map((i) => {
                let o = i.fetch(void 0, n);
                return (
                  n.throwOnError || (o = o.catch(Rt)),
                  i.state.fetchStatus === "paused" ? Promise.resolve() : o
                );
              })
          );
        return Promise.all(r).then(Rt);
      }
      fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = R(this, ge).build(this, t);
        return n.isStaleByTime(Dc(t.staleTime, n))
          ? n.fetch(t)
          : Promise.resolve(n.state.data);
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(Rt).catch(Rt);
      }
      fetchInfiniteQuery(e) {
        return (e.behavior = Up(e.pages)), this.fetchQuery(e);
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(Rt).catch(Rt);
      }
      ensureInfiniteQueryData(e) {
        return (e.behavior = Up(e.pages)), this.ensureQueryData(e);
      }
      resumePausedMutations() {
        return _a.isOnline()
          ? R(this, In).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return R(this, ge);
      }
      getMutationCache() {
        return R(this, In);
      }
      getDefaultOptions() {
        return R(this, Fn);
      }
      setDefaultOptions(e) {
        H(this, Fn, e);
      }
      setQueryDefaults(e, t) {
        R(this, Ti).set(Go(e), { queryKey: e, defaultOptions: t });
      }
      getQueryDefaults(e) {
        const t = [...R(this, Ti).values()],
          n = {};
        return (
          t.forEach((r) => {
            Qo(e, r.queryKey) && Object.assign(n, r.defaultOptions);
          }),
          n
        );
      }
      setMutationDefaults(e, t) {
        R(this, Pi).set(Go(e), { mutationKey: e, defaultOptions: t });
      }
      getMutationDefaults(e) {
        const t = [...R(this, Pi).values()],
          n = {};
        return (
          t.forEach((r) => {
            Qo(e, r.mutationKey) && Object.assign(n, r.defaultOptions);
          }),
          n
        );
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e;
        const t = {
          ...R(this, Fn).queries,
          ...this.getQueryDefaults(e.queryKey),
          ...e,
          _defaulted: !0,
        };
        return (
          t.queryHash || (t.queryHash = xf(t.queryKey, t)),
          t.refetchOnReconnect === void 0 &&
            (t.refetchOnReconnect = t.networkMode !== "always"),
          t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
          t.queryFn === wf && (t.enabled = !1),
          t
        );
      }
      defaultMutationOptions(e) {
        return e != null && e._defaulted
          ? e
          : {
              ...R(this, Fn).mutations,
              ...((e == null ? void 0 : e.mutationKey) &&
                this.getMutationDefaults(e.mutationKey)),
              ...e,
              _defaulted: !0,
            };
      }
      clear() {
        R(this, ge).clear(), R(this, In).clear();
      }
    }),
    (ge = new WeakMap()),
    (In = new WeakMap()),
    (Fn = new WeakMap()),
    (Ti = new WeakMap()),
    (Pi = new WeakMap()),
    (Vn = new WeakMap()),
    (ki = new WeakMap()),
    (Ri = new WeakMap()),
    kg),
  fP = S.createContext(void 0),
  hP = ({ client: e, children: t }) => (
    S.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e]
    ),
    w.jsx(fP.Provider, { value: e, children: t })
  );
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function za() {
  return (
    (za = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    za.apply(this, arguments)
  );
}
var Bn;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Bn || (Bn = {}));
const Kp = "popstate";
function pP(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: o, search: s, hash: a } = r.location;
    return Ic(
      "",
      { pathname: o, search: s, hash: a },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : hx(i);
  }
  return gP(t, n, null, e);
}
function et(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function fx(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function mP() {
  return Math.random().toString(36).substr(2, 8);
}
function Gp(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Ic(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    za(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Sl(t) : t,
      { state: n, key: (t && t.key) || r || mP() }
    )
  );
}
function hx(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Sl(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function gP(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: o = !1 } = r,
    s = i.history,
    a = Bn.Pop,
    l = null,
    u = c();
  u == null && ((u = 0), s.replaceState(za({}, s.state, { idx: u }), ""));
  function c() {
    return (s.state || { idx: null }).idx;
  }
  function d() {
    a = Bn.Pop;
    let x = c(),
      p = x == null ? null : x - u;
    (u = x), l && l({ action: a, location: g.location, delta: p });
  }
  function f(x, p) {
    a = Bn.Push;
    let m = Ic(g.location, x, p);
    u = c() + 1;
    let y = Gp(m, u),
      E = g.createHref(m);
    try {
      s.pushState(y, "", E);
    } catch (C) {
      if (C instanceof DOMException && C.name === "DataCloneError") throw C;
      i.location.assign(E);
    }
    o && l && l({ action: a, location: g.location, delta: 1 });
  }
  function h(x, p) {
    a = Bn.Replace;
    let m = Ic(g.location, x, p);
    u = c();
    let y = Gp(m, u),
      E = g.createHref(m);
    s.replaceState(y, "", E),
      o && l && l({ action: a, location: g.location, delta: 0 });
  }
  function v(x) {
    let p = i.location.origin !== "null" ? i.location.origin : i.location.href,
      m = typeof x == "string" ? x : hx(x);
    return (
      (m = m.replace(/ $/, "%20")),
      et(
        p,
        "No window.location.(origin|href) available to create URL for href: " +
          m
      ),
      new URL(m, p)
    );
  }
  let g = {
    get action() {
      return a;
    },
    get location() {
      return e(i, s);
    },
    listen(x) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(Kp, d),
        (l = x),
        () => {
          i.removeEventListener(Kp, d), (l = null);
        }
      );
    },
    createHref(x) {
      return t(i, x);
    },
    createURL: v,
    encodeLocation(x) {
      let p = v(x);
      return { pathname: p.pathname, search: p.search, hash: p.hash };
    },
    push: f,
    replace: h,
    go(x) {
      return s.go(x);
    },
  };
  return g;
}
var Qp;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Qp || (Qp = {}));
function yP(e, t, n) {
  return n === void 0 && (n = "/"), vP(e, t, n, !1);
}
function vP(e, t, n, r) {
  let i = typeof t == "string" ? Sl(t) : t,
    o = gx(i.pathname || "/", n);
  if (o == null) return null;
  let s = px(e);
  xP(s);
  let a = null;
  for (let l = 0; a == null && l < s.length; ++l) {
    let u = MP(o);
    a = RP(s[l], u, r);
  }
  return a;
}
function px(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (o, s, a) => {
    let l = {
      relativePath: a === void 0 ? o.path || "" : a,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: s,
      route: o,
    };
    l.relativePath.startsWith("/") &&
      (et(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let u = xi([r, l.relativePath]),
      c = n.concat(l);
    o.children &&
      o.children.length > 0 &&
      (et(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      px(o.children, t, c, u)),
      !(o.path == null && !o.index) &&
        t.push({ path: u, score: PP(u, o.index), routesMeta: c });
  };
  return (
    e.forEach((o, s) => {
      var a;
      if (o.path === "" || !((a = o.path) != null && a.includes("?"))) i(o, s);
      else for (let l of mx(o.path)) i(o, s, l);
    }),
    t
  );
}
function mx(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [o, ""] : [o];
  let s = mx(r.join("/")),
    a = [];
  return (
    a.push(...s.map((l) => (l === "" ? o : [o, l].join("/")))),
    i && a.push(...s),
    a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function xP(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : kP(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const wP = /^:[\w-]+$/,
  SP = 3,
  EP = 2,
  CP = 1,
  bP = 10,
  TP = -2,
  Yp = (e) => e === "*";
function PP(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Yp) && (r += TP),
    t && (r += EP),
    n
      .filter((i) => !Yp(i))
      .reduce((i, o) => i + (wP.test(o) ? SP : o === "" ? CP : bP), r)
  );
}
function kP(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function RP(e, t, n) {
  let { routesMeta: r } = e,
    i = {},
    o = "/",
    s = [];
  for (let a = 0; a < r.length; ++a) {
    let l = r[a],
      u = a === r.length - 1,
      c = o === "/" ? t : t.slice(o.length) || "/",
      d = Xp(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
        c
      ),
      f = l.route;
    if (
      (!d &&
        u &&
        n &&
        !r[r.length - 1].route.index &&
        (d = Xp(
          { path: l.relativePath, caseSensitive: l.caseSensitive, end: !1 },
          c
        )),
      !d)
    )
      return null;
    Object.assign(i, d.params),
      s.push({
        params: i,
        pathname: xi([o, d.pathname]),
        pathnameBase: NP(xi([o, d.pathnameBase])),
        route: f,
      }),
      d.pathnameBase !== "/" && (o = xi([o, d.pathnameBase]));
  }
  return s;
}
function Xp(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = AP(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let o = i[0],
    s = o.replace(/(.)\/+$/, "$1"),
    a = i.slice(1);
  return {
    params: r.reduce((u, c, d) => {
      let { paramName: f, isOptional: h } = c;
      if (f === "*") {
        let g = a[d] || "";
        s = o.slice(0, o.length - g.length).replace(/(.)\/+$/, "$1");
      }
      const v = a[d];
      return (
        h && !v ? (u[f] = void 0) : (u[f] = (v || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: o,
    pathnameBase: s,
    pattern: e,
  };
}
function AP(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    fx(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (s, a, l) => (
            r.push({ paramName: a, isOptional: l != null }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function MP(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      fx(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function gx(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
const xi = (e) => e.join("/").replace(/\/\/+/g, "/"),
  NP = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/");
function jP(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const yx = ["post", "put", "patch", "delete"];
new Set(yx);
const LP = ["get", ...yx];
new Set(LP);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ba() {
  return (
    (Ba = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ba.apply(this, arguments)
  );
}
const DP = S.createContext(null),
  OP = S.createContext(null),
  vx = S.createContext(null),
  El = S.createContext(null),
  Cl = S.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  xx = S.createContext(null);
function Sf() {
  return S.useContext(El) != null;
}
function wx() {
  return Sf() || et(!1), S.useContext(El).location;
}
function IP(e, t) {
  return FP(e, t);
}
function FP(e, t, n, r) {
  Sf() || et(!1);
  let { navigator: i } = S.useContext(vx),
    { matches: o } = S.useContext(Cl),
    s = o[o.length - 1],
    a = s ? s.params : {};
  s && s.pathname;
  let l = s ? s.pathnameBase : "/";
  s && s.route;
  let u = wx(),
    c;
  if (t) {
    var d;
    let x = typeof t == "string" ? Sl(t) : t;
    l === "/" || ((d = x.pathname) != null && d.startsWith(l)) || et(!1),
      (c = x);
  } else c = u;
  let f = c.pathname || "/",
    h = f;
  if (l !== "/") {
    let x = l.replace(/^\//, "").split("/");
    h = "/" + f.replace(/^\//, "").split("/").slice(x.length).join("/");
  }
  let v = yP(e, { pathname: h }),
    g = $P(
      v &&
        v.map((x) =>
          Object.assign({}, x, {
            params: Object.assign({}, a, x.params),
            pathname: xi([
              l,
              i.encodeLocation
                ? i.encodeLocation(x.pathname).pathname
                : x.pathname,
            ]),
            pathnameBase:
              x.pathnameBase === "/"
                ? l
                : xi([
                    l,
                    i.encodeLocation
                      ? i.encodeLocation(x.pathnameBase).pathname
                      : x.pathnameBase,
                  ]),
          })
        ),
      o,
      n,
      r
    );
  return t && g
    ? S.createElement(
        El.Provider,
        {
          value: {
            location: Ba(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              c
            ),
            navigationType: Bn.Pop,
          },
        },
        g
      )
    : g;
}
function VP() {
  let e = KP(),
    t = jP(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return S.createElement(
    S.Fragment,
    null,
    S.createElement("h2", null, "Unexpected Application Error!"),
    S.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? S.createElement("pre", { style: i }, n) : null,
    null
  );
}
const _P = S.createElement(VP, null);
class zP extends S.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? S.createElement(
          Cl.Provider,
          { value: this.props.routeContext },
          S.createElement(xx.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function BP(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = S.useContext(DP);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    S.createElement(Cl.Provider, { value: t }, r)
  );
}
function $P(e, t, n, r) {
  var i;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var o;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (o = r) != null &&
      o.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let s = e,
    a = (i = n) == null ? void 0 : i.errors;
  if (a != null) {
    let c = s.findIndex(
      (d) => d.route.id && (a == null ? void 0 : a[d.route.id]) !== void 0
    );
    c >= 0 || et(!1), (s = s.slice(0, Math.min(s.length, c + 1)));
  }
  let l = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < s.length; c++) {
      let d = s[c];
      if (
        ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = c),
        d.route.id)
      ) {
        let { loaderData: f, errors: h } = n,
          v =
            d.route.loader &&
            f[d.route.id] === void 0 &&
            (!h || h[d.route.id] === void 0);
        if (d.route.lazy || v) {
          (l = !0), u >= 0 ? (s = s.slice(0, u + 1)) : (s = [s[0]]);
          break;
        }
      }
    }
  return s.reduceRight((c, d, f) => {
    let h,
      v = !1,
      g = null,
      x = null;
    n &&
      ((h = a && d.route.id ? a[d.route.id] : void 0),
      (g = d.route.errorElement || _P),
      l &&
        (u < 0 && f === 0
          ? ((v = !0), (x = null))
          : u === f &&
            ((v = !0), (x = d.route.hydrateFallbackElement || null))));
    let p = t.concat(s.slice(0, f + 1)),
      m = () => {
        let y;
        return (
          h
            ? (y = g)
            : v
            ? (y = x)
            : d.route.Component
            ? (y = S.createElement(d.route.Component, null))
            : d.route.element
            ? (y = d.route.element)
            : (y = c),
          S.createElement(BP, {
            match: d,
            routeContext: { outlet: c, matches: p, isDataRoute: n != null },
            children: y,
          })
        );
      };
    return n && (d.route.ErrorBoundary || d.route.errorElement || f === 0)
      ? S.createElement(zP, {
          location: n.location,
          revalidation: n.revalidation,
          component: g,
          error: h,
          children: m(),
          routeContext: { outlet: null, matches: p, isDataRoute: !0 },
        })
      : m();
  }, null);
}
var Fc = (function (e) {
  return (
    (e.UseBlocker = "useBlocker"),
    (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator"),
    (e.UseNavigateStable = "useNavigate"),
    (e.UseRouteId = "useRouteId"),
    e
  );
})(Fc || {});
function WP(e) {
  let t = S.useContext(OP);
  return t || et(!1), t;
}
function UP(e) {
  let t = S.useContext(Cl);
  return t || et(!1), t;
}
function HP(e) {
  let t = UP(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || et(!1), n.route.id;
}
function KP() {
  var e;
  let t = S.useContext(xx),
    n = WP(Fc.UseRouteError),
    r = HP(Fc.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function GP(e, t) {
  e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath;
}
function Vc(e) {
  et(!1);
}
function QP(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = Bn.Pop,
    navigator: o,
    static: s = !1,
    future: a,
  } = e;
  Sf() && et(!1);
  let l = t.replace(/^\/*/, "/"),
    u = S.useMemo(
      () => ({
        basename: l,
        navigator: o,
        static: s,
        future: Ba({ v7_relativeSplatPath: !1 }, a),
      }),
      [l, a, o, s]
    );
  typeof r == "string" && (r = Sl(r));
  let {
      pathname: c = "/",
      search: d = "",
      hash: f = "",
      state: h = null,
      key: v = "default",
    } = r,
    g = S.useMemo(() => {
      let x = gx(c, l);
      return x == null
        ? null
        : {
            location: { pathname: x, search: d, hash: f, state: h, key: v },
            navigationType: i,
          };
    }, [l, c, d, f, h, v, i]);
  return g == null
    ? null
    : S.createElement(
        vx.Provider,
        { value: u },
        S.createElement(El.Provider, { children: n, value: g })
      );
}
function YP(e) {
  let { children: t, location: n } = e;
  return IP(_c(t), n);
}
new Promise(() => {});
function _c(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    S.Children.forEach(e, (r, i) => {
      if (!S.isValidElement(r)) return;
      let o = [...t, i];
      if (r.type === S.Fragment) {
        n.push.apply(n, _c(r.props.children, o));
        return;
      }
      r.type !== Vc && et(!1), !r.props.index || !r.props.children || et(!1);
      let s = {
        id: r.props.id || o.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (s.children = _c(r.props.children, o)), n.push(s);
    }),
    n
  );
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const XP = "6";
try {
  window.__reactRouterVersion = XP;
} catch {}
const qP = "startTransition",
  qp = _g[qP];
function ZP(e) {
  let { basename: t, children: n, future: r, window: i } = e,
    o = S.useRef();
  o.current == null && (o.current = pP({ window: i, v5Compat: !0 }));
  let s = o.current,
    [a, l] = S.useState({ action: s.action, location: s.location }),
    { v7_startTransition: u } = r || {},
    c = S.useCallback(
      (d) => {
        u && qp ? qp(() => l(d)) : l(d);
      },
      [l, u]
    );
  return (
    S.useLayoutEffect(() => s.listen(c), [s, c]),
    S.useEffect(() => GP(r), [r]),
    S.createElement(QP, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: s,
      future: r,
    })
  );
}
var Zp;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Zp || (Zp = {}));
var Jp;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Jp || (Jp = {}));
const JP = () => {
    const e = S.useRef(null);
    return (
      S.useEffect(() => {
        const t = e.current;
        if (!t) return;
        const n = t.getContext("2d");
        if (!n) return;
        let r,
          i = [];
        const o = () => {
            (t.width = window.innerWidth), (t.height = window.innerHeight);
          },
          s = () => {
            const l = Math.floor(
              (window.innerWidth * window.innerHeight) / 8e3
            );
            i = Array.from({ length: l }, () => ({
              x: Math.random() * t.width,
              y: Math.random() * t.height,
              radius: Math.random() * 2.5 + 0.5,
              speed: Math.random() * 1.2 + 0.3,
              wind: Math.random() * 0.5 - 0.25,
              opacity: Math.random() * 0.6 + 0.2,
            }));
          },
          a = () => {
            n.clearRect(0, 0, t.width, t.height),
              i.forEach((l) => {
                n.beginPath(),
                  n.arc(l.x, l.y, l.radius, 0, Math.PI * 2),
                  (n.fillStyle = `rgba(255, 255, 255, ${l.opacity})`),
                  n.fill(),
                  (l.y += l.speed),
                  (l.x += l.wind + Math.sin(l.y * 0.01) * 0.3),
                  l.y > t.height &&
                    ((l.y = -5), (l.x = Math.random() * t.width)),
                  l.x > t.width && (l.x = 0),
                  l.x < 0 && (l.x = t.width);
              }),
              (r = requestAnimationFrame(a));
          };
        return (
          o(),
          s(),
          a(),
          window.addEventListener("resize", () => {
            o(), s();
          }),
          () => {
            cancelAnimationFrame(r), window.removeEventListener("resize", o);
          }
        );
      }, []),
      w.jsx("canvas", {
        ref: e,
        className: "fixed inset-0 pointer-events-none",
        style: { zIndex: 50 },
        "aria-hidden": "true",
      })
    );
  },
  Ef = S.createContext({});
function Cf(e) {
  const t = S.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const Sx = typeof window < "u",
  Ex = Sx ? S.useLayoutEffect : S.useEffect,
  bl = S.createContext(null);
function bf(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Tf(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
const Jt = (e, t, n) => (n > t ? t : n < e ? e : n);
let Tl = () => {},
  Vi = () => {};
const gn = {},
  Cx = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function bx(e) {
  return typeof e == "object" && e !== null;
}
const Tx = (e) => /^0[^.\s]+$/u.test(e);
function Pf(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const yt = (e) => e,
  ek = (e, t) => (n) => t(e(n)),
  cs = (...e) => e.reduce(ek),
  Yo = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  };
class kf {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return bf(this.subscriptions, t), () => Tf(this.subscriptions, t);
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
const Ot = (e) => e * 1e3,
  mt = (e) => e / 1e3;
function Px(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const kx = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  tk = 1e-7,
  nk = 12;
function rk(e, t, n, r, i) {
  let o,
    s,
    a = 0;
  do (s = t + (n - t) / 2), (o = kx(s, r, i) - e), o > 0 ? (n = s) : (t = s);
  while (Math.abs(o) > tk && ++a < nk);
  return s;
}
function ds(e, t, n, r) {
  if (e === t && n === r) return yt;
  const i = (o) => rk(o, 0, 1, e, n);
  return (o) => (o === 0 || o === 1 ? o : kx(i(o), t, r));
}
const Rx = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  Ax = (e) => (t) => 1 - e(1 - t),
  Mx = ds(0.33, 1.53, 0.69, 0.99),
  Rf = Ax(Mx),
  Nx = Rx(Rf),
  jx = (e) =>
    (e *= 2) < 1 ? 0.5 * Rf(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  Af = (e) => 1 - Math.sin(Math.acos(e)),
  Lx = Ax(Af),
  Dx = Rx(Af),
  ik = ds(0.42, 0, 1, 1),
  ok = ds(0, 0, 0.58, 1),
  Ox = ds(0.42, 0, 0.58, 1),
  sk = (e) => Array.isArray(e) && typeof e[0] != "number",
  Ix = (e) => Array.isArray(e) && typeof e[0] == "number",
  em = {
    linear: yt,
    easeIn: ik,
    easeInOut: Ox,
    easeOut: ok,
    circIn: Af,
    circInOut: Dx,
    circOut: Lx,
    backIn: Rf,
    backInOut: Nx,
    backOut: Mx,
    anticipate: jx,
  },
  ak = (e) => typeof e == "string",
  tm = (e) => {
    if (Ix(e)) {
      Vi(
        e.length === 4,
        "Cubic bezier arrays must contain four numerical values.",
        "cubic-bezier-length"
      );
      const [t, n, r, i] = e;
      return ds(t, n, r, i);
    } else if (ak(e))
      return (
        Vi(
          em[e] !== void 0,
          `Invalid easing type '${e}'`,
          "invalid-easing-type"
        ),
        em[e]
      );
    return e;
  },
  zs = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  nm = { value: null, addProjectionMetrics: null };
function lk(e, t) {
  let n = new Set(),
    r = new Set(),
    i = !1,
    o = !1;
  const s = new WeakSet();
  let a = { delta: 0, timestamp: 0, isProcessing: !1 },
    l = 0;
  function u(d) {
    s.has(d) && (c.schedule(d), e()), l++, d(a);
  }
  const c = {
    schedule: (d, f = !1, h = !1) => {
      const g = h && i ? n : r;
      return f && s.add(d), g.has(d) || g.add(d), d;
    },
    cancel: (d) => {
      r.delete(d), s.delete(d);
    },
    process: (d) => {
      if (((a = d), i)) {
        o = !0;
        return;
      }
      (i = !0),
        ([n, r] = [r, n]),
        n.forEach(u),
        t && nm.value && nm.value.frameloop[t].push(l),
        (l = 0),
        n.clear(),
        (i = !1),
        o && ((o = !1), c.process(d));
    },
  };
  return c;
}
const uk = 40;
function Fx(e, t) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    o = () => (n = !0),
    s = zs.reduce((y, E) => ((y[E] = lk(o, t ? E : void 0)), y), {}),
    {
      setup: a,
      read: l,
      resolveKeyframes: u,
      preUpdate: c,
      update: d,
      preRender: f,
      render: h,
      postRender: v,
    } = s,
    g = () => {
      const y = gn.useManualTiming ? i.timestamp : performance.now();
      (n = !1),
        gn.useManualTiming ||
          (i.delta = r ? 1e3 / 60 : Math.max(Math.min(y - i.timestamp, uk), 1)),
        (i.timestamp = y),
        (i.isProcessing = !0),
        a.process(i),
        l.process(i),
        u.process(i),
        c.process(i),
        d.process(i),
        f.process(i),
        h.process(i),
        v.process(i),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(g));
    },
    x = () => {
      (n = !0), (r = !0), i.isProcessing || e(g);
    };
  return {
    schedule: zs.reduce((y, E) => {
      const C = s[E];
      return (y[E] = (b, T = !1, P = !1) => (n || x(), C.schedule(b, T, P))), y;
    }, {}),
    cancel: (y) => {
      for (let E = 0; E < zs.length; E++) s[zs[E]].cancel(y);
    },
    state: i,
    steps: s,
  };
}
const {
  schedule: oe,
  cancel: rr,
  state: Ae,
  steps: pu,
} = Fx(typeof requestAnimationFrame < "u" ? requestAnimationFrame : yt, !0);
let oa;
function ck() {
  oa = void 0;
}
const We = {
    now: () => (
      oa === void 0 &&
        We.set(
          Ae.isProcessing || gn.useManualTiming
            ? Ae.timestamp
            : performance.now()
        ),
      oa
    ),
    set: (e) => {
      (oa = e), queueMicrotask(ck);
    },
  },
  Vx = (e) => (t) => typeof t == "string" && t.startsWith(e),
  _x = Vx("--"),
  dk = Vx("var(--"),
  Mf = (e) => (dk(e) ? fk.test(e.split("/*")[0].trim()) : !1),
  fk =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function rm(e) {
  return typeof e != "string" ? !1 : e.split("/*")[0].includes("var(--");
}
const Ki = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  Xo = { ...Ki, transform: (e) => Jt(0, 1, e) },
  Bs = { ...Ki, default: 1 },
  bo = (e) => Math.round(e * 1e5) / 1e5,
  Nf = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function hk(e) {
  return e == null;
}
const pk =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  jf = (e, t) => (n) =>
    !!(
      (typeof n == "string" && pk.test(n) && n.startsWith(e)) ||
      (t && !hk(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  zx = (e, t, n) => (r) => {
    if (typeof r != "string") return r;
    const [i, o, s, a] = r.match(Nf);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(o),
      [n]: parseFloat(s),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  mk = (e) => Jt(0, 255, e),
  mu = { ...Ki, transform: (e) => Math.round(mk(e)) },
  wr = {
    test: jf("rgb", "red"),
    parse: zx("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      mu.transform(e) +
      ", " +
      mu.transform(t) +
      ", " +
      mu.transform(n) +
      ", " +
      bo(Xo.transform(r)) +
      ")",
  };
function gk(e) {
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
const zc = { test: jf("#"), parse: gk, transform: wr.transform },
  fs = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Rn = fs("deg"),
  qt = fs("%"),
  V = fs("px"),
  yk = fs("vh"),
  vk = fs("vw"),
  im = {
    ...qt,
    parse: (e) => qt.parse(e) / 100,
    transform: (e) => qt.transform(e * 100),
  },
  si = {
    test: jf("hsl", "hue"),
    parse: zx("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      qt.transform(bo(t)) +
      ", " +
      qt.transform(bo(n)) +
      ", " +
      bo(Xo.transform(r)) +
      ")",
  },
  we = {
    test: (e) => wr.test(e) || zc.test(e) || si.test(e),
    parse: (e) =>
      wr.test(e) ? wr.parse(e) : si.test(e) ? si.parse(e) : zc.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
        ? wr.transform(e)
        : si.transform(e),
    getAnimatableNone: (e) => {
      const t = we.parse(e);
      return (t.alpha = 0), we.transform(t);
    },
  },
  xk =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function wk(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(Nf)) == null ? void 0 : t.length) || 0) +
      (((n = e.match(xk)) == null ? void 0 : n.length) || 0) >
      0
  );
}
const Bx = "number",
  $x = "color",
  Sk = "var",
  Ek = "var(",
  om = "${}",
  Ck =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function qo(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [];
  let o = 0;
  const a = t
    .replace(
      Ck,
      (l) => (
        we.test(l)
          ? (r.color.push(o), i.push($x), n.push(we.parse(l)))
          : l.startsWith(Ek)
          ? (r.var.push(o), i.push(Sk), n.push(l))
          : (r.number.push(o), i.push(Bx), n.push(parseFloat(l))),
        ++o,
        om
      )
    )
    .split(om);
  return { values: n, split: a, indexes: r, types: i };
}
function Wx(e) {
  return qo(e).values;
}
function Ux(e) {
  const { split: t, types: n } = qo(e),
    r = t.length;
  return (i) => {
    let o = "";
    for (let s = 0; s < r; s++)
      if (((o += t[s]), i[s] !== void 0)) {
        const a = n[s];
        a === Bx
          ? (o += bo(i[s]))
          : a === $x
          ? (o += we.transform(i[s]))
          : (o += i[s]);
      }
    return o;
  };
}
const bk = (e) =>
  typeof e == "number" ? 0 : we.test(e) ? we.getAnimatableNone(e) : e;
function Tk(e) {
  const t = Wx(e);
  return Ux(e)(t.map(bk));
}
const ir = {
  test: wk,
  parse: Wx,
  createTransformer: Ux,
  getAnimatableNone: Tk,
};
function gu(e, t, n) {
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
function Pk({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let i = 0,
    o = 0,
    s = 0;
  if (!t) i = o = s = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    (i = gu(l, a, e + 1 / 3)), (o = gu(l, a, e)), (s = gu(l, a, e - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(s * 255),
    alpha: r,
  };
}
function $a(e, t) {
  return (n) => (n > 0 ? t : e);
}
const he = (e, t, n) => e + (t - e) * n,
  yu = (e, t, n) => {
    const r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  kk = [zc, wr, si],
  Rk = (e) => kk.find((t) => t.test(e));
function sm(e) {
  const t = Rk(e);
  if (
    (Tl(
      !!t,
      `'${e}' is not an animatable color. Use the equivalent color code instead.`,
      "color-not-animatable"
    ),
    !t)
  )
    return !1;
  let n = t.parse(e);
  return t === si && (n = Pk(n)), n;
}
const am = (e, t) => {
    const n = sm(e),
      r = sm(t);
    if (!n || !r) return $a(e, t);
    const i = { ...n };
    return (o) => (
      (i.red = yu(n.red, r.red, o)),
      (i.green = yu(n.green, r.green, o)),
      (i.blue = yu(n.blue, r.blue, o)),
      (i.alpha = he(n.alpha, r.alpha, o)),
      wr.transform(i)
    );
  },
  Bc = new Set(["none", "hidden"]);
function Ak(e, t) {
  return Bc.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function Mk(e, t) {
  return (n) => he(e, t, n);
}
function Lf(e) {
  return typeof e == "number"
    ? Mk
    : typeof e == "string"
    ? Mf(e)
      ? $a
      : we.test(e)
      ? am
      : Lk
    : Array.isArray(e)
    ? Hx
    : typeof e == "object"
    ? we.test(e)
      ? am
      : Nk
    : $a;
}
function Hx(e, t) {
  const n = [...e],
    r = n.length,
    i = e.map((o, s) => Lf(o)(o, t[s]));
  return (o) => {
    for (let s = 0; s < r; s++) n[s] = i[s](o);
    return n;
  };
}
function Nk(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = Lf(e[i])(e[i], t[i]));
  return (i) => {
    for (const o in r) n[o] = r[o](i);
    return n;
  };
}
function jk(e, t) {
  const n = [],
    r = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    const o = t.types[i],
      s = e.indexes[o][r[o]],
      a = e.values[s] ?? 0;
    (n[i] = a), r[o]++;
  }
  return n;
}
const Lk = (e, t) => {
  const n = ir.createTransformer(t),
    r = qo(e),
    i = qo(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (Bc.has(e) && !i.values.length) || (Bc.has(t) && !r.values.length)
      ? Ak(e, t)
      : cs(Hx(jk(r, i), i.values), n)
    : (Tl(
        !0,
        `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,
        "complex-values-different"
      ),
      $a(e, t));
};
function Kx(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? he(e, t, n)
    : Lf(e)(e, t);
}
const Dk = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: (n = !0) => oe.update(t, n),
      stop: () => rr(t),
      now: () => (Ae.isProcessing ? Ae.timestamp : We.now()),
    };
  },
  Gx = (e, t, n = 10) => {
    let r = "";
    const i = Math.max(Math.round(t / n), 2);
    for (let o = 0; o < i; o++)
      r += Math.round(e(o / (i - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  },
  Wa = 2e4;
function Df(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Wa; ) (t += n), (r = e.next(t));
  return t >= Wa ? 1 / 0 : t;
}
function Ok(e, t = 100, n) {
  const r = n({ ...e, keyframes: [0, t] }),
    i = Math.min(Df(r), Wa);
  return {
    type: "keyframes",
    ease: (o) => r.next(i * o).value / t,
    duration: mt(i),
  };
}
const Ik = 5;
function Qx(e, t, n) {
  const r = Math.max(t - Ik, 0);
  return Px(n - e(r), t - r);
}
const de = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  vu = 0.001;
function Fk({
  duration: e = de.duration,
  bounce: t = de.bounce,
  velocity: n = de.velocity,
  mass: r = de.mass,
}) {
  let i, o;
  Tl(
    e <= Ot(de.maxDuration),
    "Spring duration must be 10 seconds or less",
    "spring-duration-limit"
  );
  let s = 1 - t;
  (s = Jt(de.minDamping, de.maxDamping, s)),
    (e = Jt(de.minDuration, de.maxDuration, mt(e))),
    s < 1
      ? ((i = (u) => {
          const c = u * s,
            d = c * e,
            f = c - n,
            h = $c(u, s),
            v = Math.exp(-d);
          return vu - (f / h) * v;
        }),
        (o = (u) => {
          const d = u * s * e,
            f = d * n + n,
            h = Math.pow(s, 2) * Math.pow(u, 2) * e,
            v = Math.exp(-d),
            g = $c(Math.pow(u, 2), s);
          return ((-i(u) + vu > 0 ? -1 : 1) * ((f - h) * v)) / g;
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * e),
            d = (u - n) * e + 1;
          return -vu + c * d;
        }),
        (o = (u) => {
          const c = Math.exp(-u * e),
            d = (n - u) * (e * e);
          return c * d;
        }));
  const a = 5 / e,
    l = _k(i, o, a);
  if (((e = Ot(e)), isNaN(l)))
    return { stiffness: de.stiffness, damping: de.damping, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: s * 2 * Math.sqrt(r * u), duration: e };
  }
}
const Vk = 12;
function _k(e, t, n) {
  let r = n;
  for (let i = 1; i < Vk; i++) r = r - e(r) / t(r);
  return r;
}
function $c(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const zk = ["duration", "bounce"],
  Bk = ["stiffness", "damping", "mass"];
function lm(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function $k(e) {
  let t = {
    velocity: de.velocity,
    stiffness: de.stiffness,
    damping: de.damping,
    mass: de.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!lm(e, Bk) && lm(e, zk))
    if (e.visualDuration) {
      const n = e.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        i = r * r,
        o = 2 * Jt(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
      t = { ...t, mass: de.mass, stiffness: i, damping: o };
    } else {
      const n = Fk(e);
      (t = { ...t, ...n, mass: de.mass }), (t.isResolvedFromDuration = !0);
    }
  return t;
}
function Ua(e = de.visualDuration, t = de.bounce) {
  const n =
    typeof e != "object"
      ? { visualDuration: e, keyframes: [0, 1], bounce: t }
      : e;
  let { restSpeed: r, restDelta: i } = n;
  const o = n.keyframes[0],
    s = n.keyframes[n.keyframes.length - 1],
    a = { done: !1, value: o },
    {
      stiffness: l,
      damping: u,
      mass: c,
      duration: d,
      velocity: f,
      isResolvedFromDuration: h,
    } = $k({ ...n, velocity: -mt(n.velocity || 0) }),
    v = f || 0,
    g = u / (2 * Math.sqrt(l * c)),
    x = s - o,
    p = mt(Math.sqrt(l / c)),
    m = Math.abs(x) < 5;
  r || (r = m ? de.restSpeed.granular : de.restSpeed.default),
    i || (i = m ? de.restDelta.granular : de.restDelta.default);
  let y;
  if (g < 1) {
    const C = $c(p, g);
    y = (b) => {
      const T = Math.exp(-g * p * b);
      return (
        s - T * (((v + g * p * x) / C) * Math.sin(C * b) + x * Math.cos(C * b))
      );
    };
  } else if (g === 1) y = (C) => s - Math.exp(-p * C) * (x + (v + p * x) * C);
  else {
    const C = p * Math.sqrt(g * g - 1);
    y = (b) => {
      const T = Math.exp(-g * p * b),
        P = Math.min(C * b, 300);
      return (
        s - (T * ((v + g * p * x) * Math.sinh(P) + C * x * Math.cosh(P))) / C
      );
    };
  }
  const E = {
    calculatedDuration: (h && d) || null,
    next: (C) => {
      const b = y(C);
      if (h) a.done = C >= d;
      else {
        let T = C === 0 ? v : 0;
        g < 1 && (T = C === 0 ? Ot(v) : Qx(y, C, b));
        const P = Math.abs(T) <= r,
          M = Math.abs(s - b) <= i;
        a.done = P && M;
      }
      return (a.value = a.done ? s : b), a;
    },
    toString: () => {
      const C = Math.min(Df(E), Wa),
        b = Gx((T) => E.next(C * T).value, C, 30);
      return C + "ms " + b;
    },
    toTransition: () => {},
  };
  return E;
}
Ua.applyToOptions = (e) => {
  const t = Ok(e, 100, Ua);
  return (
    (e.ease = t.ease), (e.duration = Ot(t.duration)), (e.type = "keyframes"), e
  );
};
function Wc({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: o = 500,
  modifyTarget: s,
  min: a,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const d = e[0],
    f = { done: !1, value: d },
    h = (P) => (a !== void 0 && P < a) || (l !== void 0 && P > l),
    v = (P) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - P) < Math.abs(l - P)
        ? a
        : l;
  let g = n * t;
  const x = d + g,
    p = s === void 0 ? x : s(x);
  p !== x && (g = p - d);
  const m = (P) => -g * Math.exp(-P / r),
    y = (P) => p + m(P),
    E = (P) => {
      const M = m(P),
        N = y(P);
      (f.done = Math.abs(M) <= u), (f.value = f.done ? p : N);
    };
  let C, b;
  const T = (P) => {
    h(f.value) &&
      ((C = P),
      (b = Ua({
        keyframes: [f.value, v(f.value)],
        velocity: Qx(y, P, f.value),
        damping: i,
        stiffness: o,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    T(0),
    {
      calculatedDuration: null,
      next: (P) => {
        let M = !1;
        return (
          !b && C === void 0 && ((M = !0), E(P), T(P)),
          C !== void 0 && P >= C ? b.next(P - C) : (!M && E(P), f)
        );
      },
    }
  );
}
function Wk(e, t, n) {
  const r = [],
    i = n || gn.mix || Kx,
    o = e.length - 1;
  for (let s = 0; s < o; s++) {
    let a = i(e[s], e[s + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[s] || yt : t;
      a = cs(l, a);
    }
    r.push(a);
  }
  return r;
}
function Uk(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const o = e.length;
  if (
    (Vi(
      o === t.length,
      "Both input and output ranges must be the same length",
      "range-length"
    ),
    o === 1)
  )
    return () => t[0];
  if (o === 2 && t[0] === t[1]) return () => t[1];
  const s = e[0] === e[1];
  e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const a = Wk(t, r, i),
    l = a.length,
    u = (c) => {
      if (s && c < e[0]) return t[0];
      let d = 0;
      if (l > 1) for (; d < e.length - 2 && !(c < e[d + 1]); d++);
      const f = Yo(e[d], e[d + 1], c);
      return a[d](f);
    };
  return n ? (c) => u(Jt(e[0], e[o - 1], c)) : u;
}
function Hk(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = Yo(0, t, r);
    e.push(he(n, 1, i));
  }
}
function Kk(e) {
  const t = [0];
  return Hk(t, e.length - 1), t;
}
function Gk(e, t) {
  return e.map((n) => n * t);
}
function Qk(e, t) {
  return e.map(() => t || Ox).splice(0, e.length - 1);
}
function To({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = sk(r) ? r.map(tm) : tm(r),
    o = { done: !1, value: t[0] },
    s = Gk(n && n.length === t.length ? n : Kk(t), e),
    a = Uk(s, t, { ease: Array.isArray(i) ? i : Qk(t, i) });
  return {
    calculatedDuration: e,
    next: (l) => ((o.value = a(l)), (o.done = l >= e), o),
  };
}
const Yk = (e) => e !== null;
function Of(e, { repeat: t, repeatType: n = "loop" }, r, i = 1) {
  const o = e.filter(Yk),
    a = i < 0 || (t && n !== "loop" && t % 2 === 1) ? 0 : o.length - 1;
  return !a || r === void 0 ? o[a] : r;
}
const Xk = { decay: Wc, inertia: Wc, tween: To, keyframes: To, spring: Ua };
function Yx(e) {
  typeof e.type == "string" && (e.type = Xk[e.type]);
}
class If {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((t) => {
      this.resolve = t;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(t, n) {
    return this.finished.then(t, n);
  }
}
const qk = (e) => e / 100;
class Ff extends If {
  constructor(t) {
    super(),
      (this.state = "idle"),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.stop = () => {
        var r, i;
        const { motionValue: n } = this.options;
        n && n.updatedAt !== We.now() && this.tick(We.now()),
          (this.isStopped = !0),
          this.state !== "idle" &&
            (this.teardown(),
            (i = (r = this.options).onStop) == null || i.call(r));
      }),
      (this.options = t),
      this.initAnimation(),
      this.play(),
      t.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: t } = this;
    Yx(t);
    const {
      type: n = To,
      repeat: r = 0,
      repeatDelay: i = 0,
      repeatType: o,
      velocity: s = 0,
    } = t;
    let { keyframes: a } = t;
    const l = n || To;
    l !== To &&
      typeof a[0] != "number" &&
      ((this.mixKeyframes = cs(qk, Kx(a[0], a[1]))), (a = [0, 100]));
    const u = l({ ...t, keyframes: a });
    o === "mirror" &&
      (this.mirroredGenerator = l({
        ...t,
        keyframes: [...a].reverse(),
        velocity: -s,
      })),
      u.calculatedDuration === null && (u.calculatedDuration = Df(u));
    const { calculatedDuration: c } = u;
    (this.calculatedDuration = c),
      (this.resolvedDuration = c + i),
      (this.totalDuration = this.resolvedDuration * (r + 1) - i),
      (this.generator = u);
  }
  updateTime(t) {
    const n = Math.round(t - this.startTime) * this.playbackSpeed;
    this.holdTime !== null
      ? (this.currentTime = this.holdTime)
      : (this.currentTime = n);
  }
  tick(t, n = !1) {
    const {
      generator: r,
      totalDuration: i,
      mixKeyframes: o,
      mirroredGenerator: s,
      resolvedDuration: a,
      calculatedDuration: l,
    } = this;
    if (this.startTime === null) return r.next(0);
    const {
      delay: u = 0,
      keyframes: c,
      repeat: d,
      repeatType: f,
      repeatDelay: h,
      type: v,
      onUpdate: g,
      finalKeyframe: x,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - i / this.speed, this.startTime)),
      n ? (this.currentTime = t) : this.updateTime(t);
    const p = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1),
      m = this.playbackSpeed >= 0 ? p < 0 : p > i;
    (this.currentTime = Math.max(p, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = i);
    let y = this.currentTime,
      E = r;
    if (d) {
      const P = Math.min(this.currentTime, i) / a;
      let M = Math.floor(P),
        N = P % 1;
      !N && P >= 1 && (N = 1),
        N === 1 && M--,
        (M = Math.min(M, d + 1)),
        !!(M % 2) &&
          (f === "reverse"
            ? ((N = 1 - N), h && (N -= h / a))
            : f === "mirror" && (E = s)),
        (y = Jt(0, 1, N) * a);
    }
    const C = m ? { done: !1, value: c[0] } : E.next(y);
    o && (C.value = o(C.value));
    let { done: b } = C;
    !m &&
      l !== null &&
      (b =
        this.playbackSpeed >= 0
          ? this.currentTime >= i
          : this.currentTime <= 0);
    const T =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && b));
    return (
      T && v !== Wc && (C.value = Of(c, this.options, x, this.speed)),
      g && g(C.value),
      T && this.finish(),
      C
    );
  }
  then(t, n) {
    return this.finished.then(t, n);
  }
  get duration() {
    return mt(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + mt(t);
  }
  get time() {
    return mt(this.currentTime);
  }
  set time(t) {
    var n;
    (t = Ot(t)),
      (this.currentTime = t),
      this.startTime === null ||
      this.holdTime !== null ||
      this.playbackSpeed === 0
        ? (this.holdTime = t)
        : this.driver &&
          (this.startTime = this.driver.now() - t / this.playbackSpeed),
      (n = this.driver) == null || n.start(!1);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    this.updateTime(We.now());
    const n = this.playbackSpeed !== t;
    (this.playbackSpeed = t), n && (this.time = mt(this.currentTime));
  }
  play() {
    var i, o;
    if (this.isStopped) return;
    const { driver: t = Dk, startTime: n } = this.options;
    this.driver || (this.driver = t((s) => this.tick(s))),
      (o = (i = this.options).onPlay) == null || o.call(i);
    const r = this.driver.now();
    this.state === "finished"
      ? (this.updateFinished(), (this.startTime = r))
      : this.holdTime !== null
      ? (this.startTime = r - this.holdTime)
      : this.startTime || (this.startTime = n ?? r),
      this.state === "finished" &&
        this.speed < 0 &&
        (this.startTime += this.calculatedDuration),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    (this.state = "paused"),
      this.updateTime(We.now()),
      (this.holdTime = this.currentTime);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    var t, n;
    this.notifyFinished(),
      this.teardown(),
      (this.state = "finished"),
      (n = (t = this.options).onComplete) == null || n.call(t);
  }
  cancel() {
    var t, n;
    (this.holdTime = null),
      (this.startTime = 0),
      this.tick(0),
      this.teardown(),
      (n = (t = this.options).onCancel) == null || n.call(t);
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      (this.startTime = this.holdTime = null);
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return (this.startTime = 0), this.tick(t, !0);
  }
  attachTimeline(t) {
    var n;
    return (
      this.options.allowFlatten &&
        ((this.options.type = "keyframes"),
        (this.options.ease = "linear"),
        this.initAnimation()),
      (n = this.driver) == null || n.stop(),
      t.observe(this)
    );
  }
}
function Zk(e) {
  for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1]);
}
const Sr = (e) => (e * 180) / Math.PI,
  Uc = (e) => {
    const t = Sr(Math.atan2(e[1], e[0]));
    return Hc(t);
  },
  Jk = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
    rotate: Uc,
    rotateZ: Uc,
    skewX: (e) => Sr(Math.atan(e[1])),
    skewY: (e) => Sr(Math.atan(e[2])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2,
  },
  Hc = (e) => ((e = e % 360), e < 0 && (e += 360), e),
  um = Uc,
  cm = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
  dm = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
  eR = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: cm,
    scaleY: dm,
    scale: (e) => (cm(e) + dm(e)) / 2,
    rotateX: (e) => Hc(Sr(Math.atan2(e[6], e[5]))),
    rotateY: (e) => Hc(Sr(Math.atan2(-e[2], e[0]))),
    rotateZ: um,
    rotate: um,
    skewX: (e) => Sr(Math.atan(e[4])),
    skewY: (e) => Sr(Math.atan(e[1])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2,
  };
function Kc(e) {
  return e.includes("scale") ? 1 : 0;
}
function Gc(e, t) {
  if (!e || e === "none") return Kc(t);
  const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, i;
  if (n) (r = eR), (i = n);
  else {
    const a = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    (r = Jk), (i = a);
  }
  if (!i) return Kc(t);
  const o = r[t],
    s = i[1].split(",").map(nR);
  return typeof o == "function" ? o(s) : s[o];
}
const tR = (e, t) => {
  const { transform: n = "none" } = getComputedStyle(e);
  return Gc(n, t);
};
function nR(e) {
  return parseFloat(e.trim());
}
const Gi = [
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
  Qi = new Set(Gi),
  fm = (e) => e === Ki || e === V,
  rR = new Set(["x", "y", "z"]),
  iR = Gi.filter((e) => !rR.has(e));
function oR(e) {
  const t = [];
  return (
    iR.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const $n = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: (e, { transform: t }) => Gc(t, "x"),
  y: (e, { transform: t }) => Gc(t, "y"),
};
$n.translateX = $n.x;
$n.translateY = $n.y;
const Mr = new Set();
let Qc = !1,
  Yc = !1,
  Xc = !1;
function Xx() {
  if (Yc) {
    const e = Array.from(Mr).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    t.forEach((r) => {
      const i = oR(r);
      i.length && (n.set(r, i), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const i = n.get(r);
        i &&
          i.forEach(([o, s]) => {
            var a;
            (a = r.getValue(o)) == null || a.set(s);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  (Yc = !1), (Qc = !1), Mr.forEach((e) => e.complete(Xc)), Mr.clear();
}
function qx() {
  Mr.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Yc = !0);
  });
}
function sR() {
  (Xc = !0), qx(), Xx(), (Xc = !1);
}
class Vf {
  constructor(t, n, r, i, o, s = !1) {
    (this.state = "pending"),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = i),
      (this.element = o),
      (this.isAsync = s);
  }
  scheduleResolve() {
    (this.state = "scheduled"),
      this.isAsync
        ? (Mr.add(this),
          Qc || ((Qc = !0), oe.read(qx), oe.resolveKeyframes(Xx)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: i,
    } = this;
    if (t[0] === null) {
      const o = i == null ? void 0 : i.get(),
        s = t[t.length - 1];
      if (o !== void 0) t[0] = o;
      else if (r && n) {
        const a = r.readValue(n, s);
        a != null && (t[0] = a);
      }
      t[0] === void 0 && (t[0] = s), i && o === void 0 && i.set(t[0]);
    }
    Zk(t);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(t = !1) {
    (this.state = "complete"),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t),
      Mr.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (Mr.delete(this), (this.state = "pending"));
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const aR = (e) => e.startsWith("--");
function lR(e, t, n) {
  aR(t) ? e.style.setProperty(t, n) : (e.style[t] = n);
}
const uR = Pf(() => window.ScrollTimeline !== void 0),
  cR = {};
function dR(e, t) {
  const n = Pf(e);
  return () => cR[t] ?? n();
}
const Zx = dR(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  ho = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  hm = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: ho([0, 0.65, 0.55, 1]),
    circOut: ho([0.55, 0, 1, 0.45]),
    backIn: ho([0.31, 0.01, 0.66, -0.59]),
    backOut: ho([0.33, 1.53, 0.69, 0.99]),
  };
function Jx(e, t) {
  if (e)
    return typeof e == "function"
      ? Zx()
        ? Gx(e, t)
        : "ease-out"
      : Ix(e)
      ? ho(e)
      : Array.isArray(e)
      ? e.map((n) => Jx(n, t) || hm.easeOut)
      : hm[e];
}
function fR(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: o = 0,
    repeatType: s = "loop",
    ease: a = "easeOut",
    times: l,
  } = {},
  u = void 0
) {
  const c = { [t]: n };
  l && (c.offset = l);
  const d = Jx(a, i);
  Array.isArray(d) && (c.easing = d);
  const f = {
    delay: r,
    duration: i,
    easing: Array.isArray(d) ? "linear" : d,
    fill: "both",
    iterations: o + 1,
    direction: s === "reverse" ? "alternate" : "normal",
  };
  return u && (f.pseudoElement = u), e.animate(c, f);
}
function ew(e) {
  return typeof e == "function" && "applyToOptions" in e;
}
function hR({ type: e, ...t }) {
  return ew(e) && Zx()
    ? e.applyToOptions(t)
    : (t.duration ?? (t.duration = 300), t.ease ?? (t.ease = "easeOut"), t);
}
class pR extends If {
  constructor(t) {
    if (
      (super(),
      (this.finishedTime = null),
      (this.isStopped = !1),
      (this.manualStartTime = null),
      !t)
    )
      return;
    const {
      element: n,
      name: r,
      keyframes: i,
      pseudoElement: o,
      allowFlatten: s = !1,
      finalKeyframe: a,
      onComplete: l,
    } = t;
    (this.isPseudoElement = !!o),
      (this.allowFlatten = s),
      (this.options = t),
      Vi(
        typeof t.type != "string",
        `Mini animate() doesn't support "type" as a string.`,
        "mini-spring"
      );
    const u = hR(t);
    (this.animation = fR(n, r, i, u, o)),
      u.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !o)) {
          const c = Of(i, this.options, a, this.speed);
          this.updateMotionValue ? this.updateMotionValue(c) : lR(n, r, c),
            this.animation.cancel();
        }
        l == null || l(), this.notifyFinished();
      });
  }
  play() {
    this.isStopped ||
      ((this.manualStartTime = null),
      this.animation.play(),
      this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    var t, n;
    (n = (t = this.animation).finish) == null || n.call(t);
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const { state: t } = this;
    t === "idle" ||
      t === "finished" ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    var n, r, i;
    const t = (n = this.options) == null ? void 0 : n.element;
    !this.isPseudoElement &&
      t != null &&
      t.isConnected &&
      ((i = (r = this.animation).commitStyles) == null || i.call(r));
  }
  get duration() {
    var n, r;
    const t =
      ((r =
        (n = this.animation.effect) == null ? void 0 : n.getComputedTiming) ==
      null
        ? void 0
        : r.call(n).duration) || 0;
    return mt(Number(t));
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + mt(t);
  }
  get time() {
    return mt(Number(this.animation.currentTime) || 0);
  }
  set time(t) {
    (this.manualStartTime = null),
      (this.finishedTime = null),
      (this.animation.currentTime = Ot(t));
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(t) {
    t < 0 && (this.finishedTime = null), (this.animation.playbackRate = t);
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(t) {
    this.manualStartTime = this.animation.startTime = t;
  }
  attachTimeline({ timeline: t, observe: n }) {
    var r;
    return (
      this.allowFlatten &&
        ((r = this.animation.effect) == null ||
          r.updateTiming({ easing: "linear" })),
      (this.animation.onfinish = null),
      t && uR() ? ((this.animation.timeline = t), yt) : n(this)
    );
  }
}
const tw = { anticipate: jx, backInOut: Nx, circInOut: Dx };
function mR(e) {
  return e in tw;
}
function gR(e) {
  typeof e.ease == "string" && mR(e.ease) && (e.ease = tw[e.ease]);
}
const xu = 10;
class yR extends pR {
  constructor(t) {
    gR(t),
      Yx(t),
      super(t),
      t.startTime !== void 0 && (this.startTime = t.startTime),
      (this.options = t);
  }
  updateMotionValue(t) {
    const {
      motionValue: n,
      onUpdate: r,
      onComplete: i,
      element: o,
      ...s
    } = this.options;
    if (!n) return;
    if (t !== void 0) {
      n.set(t);
      return;
    }
    const a = new Ff({ ...s, autoplay: !1 }),
      l = Math.max(xu, We.now() - this.startTime),
      u = Jt(0, xu, l - xu);
    n.setWithVelocity(a.sample(Math.max(0, l - u)).value, a.sample(l).value, u),
      a.stop();
  }
}
const pm = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          (ir.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
function vR(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function xR(e, t, n, r) {
  const i = e[0];
  if (i === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const o = e[e.length - 1],
    s = pm(i, t),
    a = pm(o, t);
  return (
    Tl(
      s === a,
      `You are trying to animate ${t} from "${i}" to "${o}". "${
        s ? o : i
      }" is not an animatable value.`,
      "value-not-animatable"
    ),
    !s || !a ? !1 : vR(e) || ((n === "spring" || ew(n)) && r)
  );
}
function qc(e) {
  (e.duration = 0), (e.type = "keyframes");
}
const wR = new Set(["opacity", "clipPath", "filter", "transform"]),
  SR = Pf(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function ER(e) {
  var c;
  const {
    motionValue: t,
    name: n,
    repeatDelay: r,
    repeatType: i,
    damping: o,
    type: s,
  } = e;
  if (
    !(
      ((c = t == null ? void 0 : t.owner) == null
        ? void 0
        : c.current) instanceof HTMLElement
    )
  )
    return !1;
  const { onUpdate: l, transformTemplate: u } = t.owner.getProps();
  return (
    SR() &&
    n &&
    wR.has(n) &&
    (n !== "transform" || !u) &&
    !l &&
    !r &&
    i !== "mirror" &&
    o !== 0 &&
    s !== "inertia"
  );
}
const CR = 40;
class bR extends If {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: i = 0,
    repeatDelay: o = 0,
    repeatType: s = "loop",
    keyframes: a,
    name: l,
    motionValue: u,
    element: c,
    ...d
  }) {
    var v;
    super(),
      (this.stop = () => {
        var g, x;
        this._animation &&
          (this._animation.stop(),
          (g = this.stopTimeline) == null || g.call(this)),
          (x = this.keyframeResolver) == null || x.cancel();
      }),
      (this.createdAt = We.now());
    const f = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: i,
        repeatDelay: o,
        repeatType: s,
        name: l,
        motionValue: u,
        element: c,
        ...d,
      },
      h = (c == null ? void 0 : c.KeyframeResolver) || Vf;
    (this.keyframeResolver = new h(
      a,
      (g, x, p) => this.onKeyframesResolved(g, x, f, !p),
      l,
      u,
      c
    )),
      (v = this.keyframeResolver) == null || v.scheduleResolve();
  }
  onKeyframesResolved(t, n, r, i) {
    var x, p;
    this.keyframeResolver = void 0;
    const {
      name: o,
      type: s,
      velocity: a,
      delay: l,
      isHandoff: u,
      onUpdate: c,
    } = r;
    (this.resolvedAt = We.now()),
      xR(t, o, s, a) ||
        ((gn.instantAnimations || !l) && (c == null || c(Of(t, r, n))),
        (t[0] = t[t.length - 1]),
        qc(r),
        (r.repeat = 0));
    const f = {
        startTime: i
          ? this.resolvedAt
            ? this.resolvedAt - this.createdAt > CR
              ? this.resolvedAt
              : this.createdAt
            : this.createdAt
          : void 0,
        finalKeyframe: n,
        ...r,
        keyframes: t,
      },
      h = !u && ER(f),
      v =
        (p = (x = f.motionValue) == null ? void 0 : x.owner) == null
          ? void 0
          : p.current,
      g = h ? new yR({ ...f, element: v }) : new Ff(f);
    g.finished
      .then(() => {
        this.notifyFinished();
      })
      .catch(yt),
      this.pendingTimeline &&
        ((this.stopTimeline = g.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = g);
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(t, n) {
    return this.finished.finally(t).then(() => {});
  }
  get animation() {
    var t;
    return (
      this._animation ||
        ((t = this.keyframeResolver) == null || t.resume(), sR()),
      this._animation
    );
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(t) {
    this.animation.time = t;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(t) {
    this.animation.speed = t;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(t) {
    return (
      this._animation
        ? (this.stopTimeline = this.animation.attachTimeline(t))
        : (this.pendingTimeline = t),
      () => this.stop()
    );
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    var t;
    this._animation && this.animation.cancel(),
      (t = this.keyframeResolver) == null || t.cancel();
  }
}
function nw(e, t, n, r = 0, i = 1) {
  const o = Array.from(e)
      .sort((u, c) => u.sortNodePosition(c))
      .indexOf(t),
    s = e.size,
    a = (s - 1) * r;
  return typeof n == "function" ? n(o, s) : i === 1 ? o * r : a - o * r;
}
const TR = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function PR(e) {
  const t = TR.exec(e);
  if (!t) return [,];
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
const kR = 4;
function rw(e, t, n = 1) {
  Vi(
    n <= kR,
    `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`,
    "max-css-var-depth"
  );
  const [r, i] = PR(e);
  if (!r) return;
  const o = window.getComputedStyle(t).getPropertyValue(r);
  if (o) {
    const s = o.trim();
    return Cx(s) ? parseFloat(s) : s;
  }
  return Mf(i) ? rw(i, t, n + 1) : i;
}
const RR = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  AR = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  MR = { type: "keyframes", duration: 0.8 },
  NR = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  jR = (e, { keyframes: t }) =>
    t.length > 2
      ? MR
      : Qi.has(e)
      ? e.startsWith("scale")
        ? AR(t[1])
        : RR
      : NR,
  LR = (e) => e !== null;
function DR(e, { repeat: t, repeatType: n = "loop" }, r) {
  const i = e.filter(LR),
    o = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !o || r === void 0 ? i[o] : r;
}
function iw(e, t) {
  if (e != null && e.inherit && t) {
    const { inherit: n, ...r } = e;
    return { ...t, ...r };
  }
  return e;
}
function _f(e, t) {
  const n =
    (e == null ? void 0 : e[t]) ?? (e == null ? void 0 : e.default) ?? e;
  return n !== e ? iw(n, e) : n;
}
function OR({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: o,
  repeatType: s,
  repeatDelay: a,
  from: l,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
const zf =
  (e, t, n, r = {}, i, o) =>
  (s) => {
    const a = _f(r, e) || {},
      l = a.delay || r.delay || 0;
    let { elapsed: u = 0 } = r;
    u = u - Ot(l);
    const c = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: "easeOut",
      velocity: t.getVelocity(),
      ...a,
      delay: -u,
      onUpdate: (f) => {
        t.set(f), a.onUpdate && a.onUpdate(f);
      },
      onComplete: () => {
        s(), a.onComplete && a.onComplete();
      },
      name: e,
      motionValue: t,
      element: o ? void 0 : i,
    };
    OR(a) || Object.assign(c, jR(e, c)),
      c.duration && (c.duration = Ot(c.duration)),
      c.repeatDelay && (c.repeatDelay = Ot(c.repeatDelay)),
      c.from !== void 0 && (c.keyframes[0] = c.from);
    let d = !1;
    if (
      ((c.type === !1 || (c.duration === 0 && !c.repeatDelay)) &&
        (qc(c), c.delay === 0 && (d = !0)),
      (gn.instantAnimations ||
        gn.skipAnimations ||
        (i != null && i.shouldSkipAnimations)) &&
        ((d = !0), qc(c), (c.delay = 0)),
      (c.allowFlatten = !a.type && !a.ease),
      d && !o && t.get() !== void 0)
    ) {
      const f = DR(c.keyframes, a);
      if (f !== void 0) {
        oe.update(() => {
          c.onUpdate(f), c.onComplete();
        });
        return;
      }
    }
    return a.isSync ? new Ff(c) : new bR(c);
  };
function mm(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        (t[0][r] = n.get()), (t[1][r] = n.getVelocity());
      }),
    t
  );
}
function Bf(e, t, n, r) {
  if (typeof t == "function") {
    const [i, o] = mm(r);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [i, o] = mm(r);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  return t;
}
function wi(e, t, n) {
  const r = e.getProps();
  return Bf(r, t, n !== void 0 ? n : r.custom, e);
}
const ow = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...Gi,
  ]),
  gm = 30,
  IR = (e) => !isNaN(parseFloat(e));
class FR {
  constructor(t, n = {}) {
    (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r) => {
        var o;
        const i = We.now();
        if (
          (this.updatedAt !== i && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            ((o = this.events.change) == null || o.notify(this.current),
            this.dependents))
        )
          for (const s of this.dependents) s.dirty();
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner);
  }
  setCurrent(t) {
    (this.current = t),
      (this.updatedAt = We.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = IR(this.current));
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new kf());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            oe.read(() => {
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
  set(t) {
    this.passiveEffect
      ? this.passiveEffect(t, this.updateAndNotify)
      : this.updateAndNotify(t);
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
  dirty() {
    var t;
    (t = this.events.change) == null || t.notify(this.current);
  }
  addDependent(t) {
    this.dependents || (this.dependents = new Set()), this.dependents.add(t);
  }
  removeDependent(t) {
    this.dependents && this.dependents.delete(t);
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = We.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > gm
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, gm);
    return Px(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
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
    var t, n;
    (t = this.dependents) == null || t.clear(),
      (n = this.events.destroy) == null || n.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function _i(e, t) {
  return new FR(e, t);
}
const Zc = (e) => Array.isArray(e);
function VR(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, _i(n));
}
function _R(e) {
  return Zc(e) ? e[e.length - 1] || 0 : e;
}
function zR(e, t) {
  const n = wi(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...o } = n || {};
  o = { ...o, ...r };
  for (const s in o) {
    const a = _R(o[s]);
    VR(e, s, a);
  }
}
const Ve = (e) => !!(e && e.getVelocity);
function BR(e) {
  return !!(Ve(e) && e.add);
}
function Jc(e, t) {
  const n = e.getValue("willChange");
  if (BR(n)) return n.add(t);
  if (!n && gn.WillChange) {
    const r = new gn.WillChange("auto");
    e.addValue("willChange", r), r.add(t);
  }
}
function $f(e) {
  return e.replace(/([A-Z])/g, (t) => `-${t.toLowerCase()}`);
}
const $R = "framerAppearId",
  sw = "data-" + $f($R);
function aw(e) {
  return e.props[sw];
}
function WR({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function lw(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let { transition: o, transitionEnd: s, ...a } = t;
  const l = e.getDefaultTransition();
  o = o ? iw(o, l) : l;
  const u = o == null ? void 0 : o.reduceMotion;
  r && (o = r);
  const c = [],
    d = i && e.animationState && e.animationState.getState()[i];
  for (const f in a) {
    const h = e.getValue(f, e.latestValues[f] ?? null),
      v = a[f];
    if (v === void 0 || (d && WR(d, f))) continue;
    const g = { delay: n, ..._f(o || {}, f) },
      x = h.get();
    if (
      x !== void 0 &&
      !h.isAnimating &&
      !Array.isArray(v) &&
      v === x &&
      !g.velocity
    )
      continue;
    let p = !1;
    if (window.MotionHandoffAnimation) {
      const E = aw(e);
      if (E) {
        const C = window.MotionHandoffAnimation(E, f, oe);
        C !== null && ((g.startTime = C), (p = !0));
      }
    }
    Jc(e, f);
    const m = u ?? e.shouldReduceMotion;
    h.start(zf(f, h, v, m && ow.has(f) ? { type: !1 } : g, e, p));
    const y = h.animation;
    y && c.push(y);
  }
  if (s) {
    const f = () =>
      oe.update(() => {
        s && zR(e, s);
      });
    c.length ? Promise.all(c).then(f) : f();
  }
  return c;
}
function ed(e, t, n = {}) {
  var l;
  const r = wi(
    e,
    t,
    n.type === "exit"
      ? (l = e.presenceContext) == null
        ? void 0
        : l.custom
      : void 0
  );
  let { transition: i = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (i = n.transitionOverride);
  const o = r ? () => Promise.all(lw(e, r, n)) : () => Promise.resolve(),
    s =
      e.variantChildren && e.variantChildren.size
        ? (u = 0) => {
            const {
              delayChildren: c = 0,
              staggerChildren: d,
              staggerDirection: f,
            } = i;
            return UR(e, t, u, c, d, f, n);
          }
        : () => Promise.resolve(),
    { when: a } = i;
  if (a) {
    const [u, c] = a === "beforeChildren" ? [o, s] : [s, o];
    return u().then(() => c());
  } else return Promise.all([o(), s(n.delay)]);
}
function UR(e, t, n = 0, r = 0, i = 0, o = 1, s) {
  const a = [];
  for (const l of e.variantChildren)
    l.notify("AnimationStart", t),
      a.push(
        ed(l, t, {
          ...s,
          delay:
            n +
            (typeof r == "function" ? 0 : r) +
            nw(e.variantChildren, l, r, i, o),
        }).then(() => l.notify("AnimationComplete", t))
      );
  return Promise.all(a);
}
function HR(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((o) => ed(e, o, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = ed(e, t, n);
  else {
    const i = typeof t == "function" ? wi(e, t, n.custom) : t;
    r = Promise.all(lw(e, i, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const KR = { test: (e) => e === "auto", parse: (e) => e },
  uw = (e) => (t) => t.test(e),
  cw = [Ki, V, qt, Rn, vk, yk, KR],
  ym = (e) => cw.find(uw(e));
function GR(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
    ? e === "none" || e === "0" || Tx(e)
    : !0;
}
const QR = new Set(["brightness", "contrast", "saturate", "opacity"]);
function YR(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(Nf) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let o = QR.has(t) ? 1 : 0;
  return r !== n && (o *= 100), t + "(" + o + i + ")";
}
const XR = /\b([a-z-]*)\(.*?\)/gu,
  td = {
    ...ir,
    getAnimatableNone: (e) => {
      const t = e.match(XR);
      return t ? t.map(YR).join(" ") : e;
    },
  },
  vm = { ...Ki, transform: Math.round },
  qR = {
    rotate: Rn,
    rotateX: Rn,
    rotateY: Rn,
    rotateZ: Rn,
    scale: Bs,
    scaleX: Bs,
    scaleY: Bs,
    scaleZ: Bs,
    skew: Rn,
    skewX: Rn,
    skewY: Rn,
    distance: V,
    translateX: V,
    translateY: V,
    translateZ: V,
    x: V,
    y: V,
    z: V,
    perspective: V,
    transformPerspective: V,
    opacity: Xo,
    originX: im,
    originY: im,
    originZ: V,
  },
  Wf = {
    borderWidth: V,
    borderTopWidth: V,
    borderRightWidth: V,
    borderBottomWidth: V,
    borderLeftWidth: V,
    borderRadius: V,
    borderTopLeftRadius: V,
    borderTopRightRadius: V,
    borderBottomRightRadius: V,
    borderBottomLeftRadius: V,
    width: V,
    maxWidth: V,
    height: V,
    maxHeight: V,
    top: V,
    right: V,
    bottom: V,
    left: V,
    inset: V,
    insetBlock: V,
    insetBlockStart: V,
    insetBlockEnd: V,
    insetInline: V,
    insetInlineStart: V,
    insetInlineEnd: V,
    padding: V,
    paddingTop: V,
    paddingRight: V,
    paddingBottom: V,
    paddingLeft: V,
    paddingBlock: V,
    paddingBlockStart: V,
    paddingBlockEnd: V,
    paddingInline: V,
    paddingInlineStart: V,
    paddingInlineEnd: V,
    margin: V,
    marginTop: V,
    marginRight: V,
    marginBottom: V,
    marginLeft: V,
    marginBlock: V,
    marginBlockStart: V,
    marginBlockEnd: V,
    marginInline: V,
    marginInlineStart: V,
    marginInlineEnd: V,
    fontSize: V,
    backgroundPositionX: V,
    backgroundPositionY: V,
    ...qR,
    zIndex: vm,
    fillOpacity: Xo,
    strokeOpacity: Xo,
    numOctaves: vm,
  },
  ZR = {
    ...Wf,
    color: we,
    backgroundColor: we,
    outlineColor: we,
    fill: we,
    stroke: we,
    borderColor: we,
    borderTopColor: we,
    borderRightColor: we,
    borderBottomColor: we,
    borderLeftColor: we,
    filter: td,
    WebkitFilter: td,
  },
  dw = (e) => ZR[e];
function fw(e, t) {
  let n = dw(e);
  return (
    n !== td && (n = ir), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const JR = new Set(["auto", "none", "0"]);
function eA(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i; ) {
    const o = e[r];
    typeof o == "string" && !JR.has(o) && qo(o).values.length && (i = e[r]),
      r++;
  }
  if (i && n) for (const o of t) e[o] = fw(n, i);
}
class tA extends Vf {
  constructor(t, n, r, i, o) {
    super(t, n, r, i, o, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let c = 0; c < t.length; c++) {
      let d = t[c];
      if (typeof d == "string" && ((d = d.trim()), Mf(d))) {
        const f = rw(d, n.current);
        f !== void 0 && (t[c] = f),
          c === t.length - 1 && (this.finalKeyframe = d);
      }
    }
    if ((this.resolveNoneKeyframes(), !ow.has(r) || t.length !== 2)) return;
    const [i, o] = t,
      s = ym(i),
      a = ym(o),
      l = rm(i),
      u = rm(o);
    if (l !== u && $n[r]) {
      this.needsMeasurement = !0;
      return;
    }
    if (s !== a)
      if (fm(s) && fm(a))
        for (let c = 0; c < t.length; c++) {
          const d = t[c];
          typeof d == "string" && (t[c] = parseFloat(d));
        }
      else $n[r] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let i = 0; i < t.length; i++) (t[i] === null || GR(t[i])) && r.push(i);
    r.length && eA(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = $n[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current)
      )),
      (n[0] = this.measuredOrigin);
    const i = n[n.length - 1];
    i !== void 0 && t.getValue(r, i).jump(i, !1);
  }
  measureEndState() {
    var a;
    const { element: t, name: n, unresolvedKeyframes: r } = this;
    if (!t || !t.current) return;
    const i = t.getValue(n);
    i && i.jump(this.measuredOrigin, !1);
    const o = r.length - 1,
      s = r[o];
    (r[o] = $n[n](t.measureViewportBox(), window.getComputedStyle(t.current))),
      s !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = s),
      (a = this.removedTransforms) != null &&
        a.length &&
        this.removedTransforms.forEach(([l, u]) => {
          t.getValue(l).set(u);
        }),
      this.resolveNoneKeyframes();
  }
}
function Uf(e, t, n) {
  if (e == null) return [];
  if (e instanceof EventTarget) return [e];
  if (typeof e == "string") {
    const i = document.querySelectorAll(e);
    return i ? Array.from(i) : [];
  }
  return Array.from(e).filter((r) => r != null);
}
const hw = (e, t) => (t && typeof e == "number" ? t.transform(e) : e);
function nd(e) {
  return bx(e) && "offsetHeight" in e;
}
const { schedule: Hf, cancel: mN } = Fx(queueMicrotask, !1),
  Pt = { x: !1, y: !1 };
function pw() {
  return Pt.x || Pt.y;
}
function nA(e) {
  return e === "x" || e === "y"
    ? Pt[e]
      ? null
      : ((Pt[e] = !0),
        () => {
          Pt[e] = !1;
        })
    : Pt.x || Pt.y
    ? null
    : ((Pt.x = Pt.y = !0),
      () => {
        Pt.x = Pt.y = !1;
      });
}
function mw(e, t) {
  const n = Uf(e),
    r = new AbortController(),
    i = { passive: !0, ...t, signal: r.signal };
  return [n, i, () => r.abort()];
}
function rA(e) {
  return !(e.pointerType === "touch" || pw());
}
function iA(e, t, n = {}) {
  const [r, i, o] = mw(e, n);
  return (
    r.forEach((s) => {
      let a = !1,
        l = !1,
        u;
      const c = () => {
          s.removeEventListener("pointerleave", v);
        },
        d = (x) => {
          u && (u(x), (u = void 0)), c();
        },
        f = (x) => {
          (a = !1),
            window.removeEventListener("pointerup", f),
            window.removeEventListener("pointercancel", f),
            l && ((l = !1), d(x));
        },
        h = () => {
          (a = !0),
            window.addEventListener("pointerup", f, i),
            window.addEventListener("pointercancel", f, i);
        },
        v = (x) => {
          if (x.pointerType !== "touch") {
            if (a) {
              l = !0;
              return;
            }
            d(x);
          }
        },
        g = (x) => {
          if (!rA(x)) return;
          l = !1;
          const p = t(s, x);
          typeof p == "function" &&
            ((u = p), s.addEventListener("pointerleave", v, i));
        };
      s.addEventListener("pointerenter", g, i),
        s.addEventListener("pointerdown", h, i);
    }),
    o
  );
}
const gw = (e, t) => (t ? (e === t ? !0 : gw(e, t.parentElement)) : !1),
  Kf = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1,
  oA = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function sA(e) {
  return oA.has(e.tagName) || e.isContentEditable === !0;
}
const aA = new Set(["INPUT", "SELECT", "TEXTAREA"]);
function lA(e) {
  return aA.has(e.tagName) || e.isContentEditable === !0;
}
const sa = new WeakSet();
function xm(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function wu(e, t) {
  e.dispatchEvent(
    new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 })
  );
}
const uA = (e, t) => {
  const n = e.currentTarget;
  if (!n) return;
  const r = xm(() => {
    if (sa.has(n)) return;
    wu(n, "down");
    const i = xm(() => {
        wu(n, "up");
      }),
      o = () => wu(n, "cancel");
    n.addEventListener("keyup", i, t), n.addEventListener("blur", o, t);
  });
  n.addEventListener("keydown", r, t),
    n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
function wm(e) {
  return Kf(e) && !pw();
}
const Sm = new WeakSet();
function cA(e, t, n = {}) {
  const [r, i, o] = mw(e, n),
    s = (a) => {
      const l = a.currentTarget;
      if (!wm(a) || Sm.has(a)) return;
      sa.add(l), n.stopPropagation && Sm.add(a);
      const u = t(l, a),
        c = (h, v) => {
          window.removeEventListener("pointerup", d),
            window.removeEventListener("pointercancel", f),
            sa.has(l) && sa.delete(l),
            wm(h) && typeof u == "function" && u(h, { success: v });
        },
        d = (h) => {
          c(
            h,
            l === window ||
              l === document ||
              n.useGlobalTarget ||
              gw(l, h.target)
          );
        },
        f = (h) => {
          c(h, !1);
        };
      window.addEventListener("pointerup", d, i),
        window.addEventListener("pointercancel", f, i);
    };
  return (
    r.forEach((a) => {
      (n.useGlobalTarget ? window : a).addEventListener("pointerdown", s, i),
        nd(a) &&
          (a.addEventListener("focus", (u) => uA(u, i)),
          !sA(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0));
    }),
    o
  );
}
function Gf(e) {
  return bx(e) && "ownerSVGElement" in e;
}
const aa = new WeakMap();
let An;
const yw = (e, t, n) => (r, i) =>
    i && i[0]
      ? i[0][e + "Size"]
      : Gf(r) && "getBBox" in r
      ? r.getBBox()[t]
      : r[n],
  dA = yw("inline", "width", "offsetWidth"),
  fA = yw("block", "height", "offsetHeight");
function hA({ target: e, borderBoxSize: t }) {
  var n;
  (n = aa.get(e)) == null ||
    n.forEach((r) => {
      r(e, {
        get width() {
          return dA(e, t);
        },
        get height() {
          return fA(e, t);
        },
      });
    });
}
function pA(e) {
  e.forEach(hA);
}
function mA() {
  typeof ResizeObserver > "u" || (An = new ResizeObserver(pA));
}
function gA(e, t) {
  An || mA();
  const n = Uf(e);
  return (
    n.forEach((r) => {
      let i = aa.get(r);
      i || ((i = new Set()), aa.set(r, i)),
        i.add(t),
        An == null || An.observe(r);
    }),
    () => {
      n.forEach((r) => {
        const i = aa.get(r);
        i == null || i.delete(t),
          (i != null && i.size) || An == null || An.unobserve(r);
      });
    }
  );
}
const la = new Set();
let ai;
function yA() {
  (ai = () => {
    const e = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      },
    };
    la.forEach((t) => t(e));
  }),
    window.addEventListener("resize", ai);
}
function vA(e) {
  return (
    la.add(e),
    ai || yA(),
    () => {
      la.delete(e),
        !la.size &&
          typeof ai == "function" &&
          (window.removeEventListener("resize", ai), (ai = void 0));
    }
  );
}
function Em(e, t) {
  return typeof e == "function" ? vA(e) : gA(e, t);
}
function xA(e) {
  return Gf(e) && e.tagName === "svg";
}
const wA = [...cw, we, ir],
  SA = (e) => wA.find(uw(e)),
  Cm = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  li = () => ({ x: Cm(), y: Cm() }),
  bm = () => ({ min: 0, max: 0 }),
  Ee = () => ({ x: bm(), y: bm() }),
  rd = { current: null },
  vw = { current: !1 },
  EA = typeof window < "u";
function CA() {
  if (((vw.current = !0), !!EA))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (rd.current = e.matches);
      e.addEventListener("change", t), t();
    } else rd.current = !1;
}
const bA = new WeakMap();
function Pl(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
function Zo(e) {
  return typeof e == "string" || Array.isArray(e);
}
const Qf = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Yf = ["initial", ...Qf];
function kl(e) {
  return Pl(e.animate) || Yf.some((t) => Zo(e[t]));
}
function xw(e) {
  return !!(kl(e) || e.variants);
}
function TA(e, t, n) {
  for (const r in t) {
    const i = t[r],
      o = n[r];
    if (Ve(i)) e.addValue(r, i);
    else if (Ve(o)) e.addValue(r, _i(i, { owner: e }));
    else if (o !== i)
      if (e.hasValue(r)) {
        const s = e.getValue(r);
        s.liveStyle === !0 ? s.jump(i) : s.hasAnimated || s.set(i);
      } else {
        const s = e.getStaticValue(r);
        e.addValue(r, _i(s !== void 0 ? s : i, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const Tm = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
let Ha = {};
function ww(e) {
  Ha = e;
}
function PA() {
  return Ha;
}
class kA {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      skipAnimations: o,
      blockInitialAnimation: s,
      visualState: a,
    },
    l = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.shouldSkipAnimations = !1),
      (this.values = new Map()),
      (this.KeyframeResolver = Vf),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.hasBeenMounted = !1),
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
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const h = We.now();
        this.renderScheduledAt < h &&
          ((this.renderScheduledAt = h), oe.render(this.render, !1, !0));
      });
    const { latestValues: u, renderState: c } = a;
    (this.latestValues = u),
      (this.baseTarget = { ...u }),
      (this.initialValues = n.initial ? { ...u } : {}),
      (this.renderState = c),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.skipAnimationsConfig = o),
      (this.options = l),
      (this.blockInitialAnimation = !!s),
      (this.isControllingVariants = kl(n)),
      (this.isVariantNode = xw(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: d, ...f } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this
    );
    for (const h in f) {
      const v = f[h];
      u[h] !== void 0 && Ve(v) && v.set(u[h]);
    }
  }
  mount(t) {
    var n, r;
    if (this.hasBeenMounted)
      for (const i in this.initialValues)
        (n = this.values.get(i)) == null || n.jump(this.initialValues[i]),
          (this.latestValues[i] = this.initialValues[i]);
    (this.current = t),
      bA.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((i, o) => this.bindToMotionValue(o, i)),
      this.reducedMotionConfig === "never"
        ? (this.shouldReduceMotion = !1)
        : this.reducedMotionConfig === "always"
        ? (this.shouldReduceMotion = !0)
        : (vw.current || CA(), (this.shouldReduceMotion = rd.current)),
      (this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1),
      (r = this.parent) == null || r.addChild(this),
      this.update(this.props, this.presenceContext),
      (this.hasBeenMounted = !0);
  }
  unmount() {
    var t;
    this.projection && this.projection.unmount(),
      rr(this.notifyUpdate),
      rr(this.render),
      this.valueSubscriptions.forEach((n) => n()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      (t = this.parent) == null || t.removeChild(this);
    for (const n in this.events) this.events[n].clear();
    for (const n in this.features) {
      const r = this.features[n];
      r && (r.unmount(), (r.isMounted = !1));
    }
    this.current = null;
  }
  addChild(t) {
    this.children.add(t),
      this.enteringChildren ?? (this.enteringChildren = new Set()),
      this.enteringChildren.add(t);
  }
  removeChild(t) {
    this.children.delete(t),
      this.enteringChildren && this.enteringChildren.delete(t);
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = Qi.has(t);
    r && this.onBindTransform && this.onBindTransform();
    const i = n.on("change", (s) => {
      (this.latestValues[t] = s),
        this.props.onUpdate && oe.preRender(this.notifyUpdate),
        r && this.projection && (this.projection.isTransformDirty = !0),
        this.scheduleRender();
    });
    let o;
    typeof window < "u" &&
      window.MotionCheckAppearSync &&
      (o = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        i(), o && o(), n.owner && n.stop();
      });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in Ha) {
      const n = Ha[t];
      if (!n) continue;
      const { isEnabled: r, Feature: i } = n;
      if (
        (!this.features[t] &&
          i &&
          r(this.props) &&
          (this.features[t] = new i(this)),
        this.features[t])
      ) {
        const o = this.features[t];
        o.isMounted ? o.update() : (o.mount(), (o.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : Ee();
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
    for (let r = 0; r < Tm.length; r++) {
      const i = Tm[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const o = "on" + i,
        s = t[o];
      s && (this.propEventSubscriptions[i] = this.on(i, s));
    }
    (this.prevMotionValues = TA(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps || {}, this),
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
        ((r = _i(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    let r =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : this.getBaseTargetFromProps(this.props, t) ??
          this.readValueFromInstance(this.current, t, this.options);
    return (
      r != null &&
        (typeof r == "string" && (Cx(r) || Tx(r))
          ? (r = parseFloat(r))
          : !SA(r) && ir.test(n) && (r = fw(t, n)),
        this.setBaseTarget(t, Ve(r) ? r.get() : r)),
      Ve(r) ? r.get() : r
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var o;
    const { initial: n } = this.props;
    let r;
    if (typeof n == "string" || typeof n == "object") {
      const s = Bf(
        this.props,
        n,
        (o = this.presenceContext) == null ? void 0 : o.custom
      );
      s && (r = s[t]);
    }
    if (n && r !== void 0) return r;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !Ve(i)
      ? i
      : this.initialValues[t] !== void 0 && r === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new kf()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
  scheduleRenderMicrotask() {
    Hf.render(this.render);
  }
}
class Sw extends kA {
  constructor() {
    super(...arguments), (this.KeyframeResolver = tA);
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    const r = t.style;
    return r ? r[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Ve(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
class lr {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
function Ew({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function RA({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function AA(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Su(e) {
  return e === void 0 || e === 1;
}
function id({ scale: e, scaleX: t, scaleY: n }) {
  return !Su(e) || !Su(t) || !Su(n);
}
function gr(e) {
  return (
    id(e) ||
    Cw(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function Cw(e) {
  return Pm(e.x) || Pm(e.y);
}
function Pm(e) {
  return e && e !== "0%";
}
function Ka(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function km(e, t, n, r, i) {
  return i !== void 0 && (e = Ka(e, i, r)), Ka(e, n, r) + t;
}
function od(e, t = 0, n = 1, r, i) {
  (e.min = km(e.min, t, n, r, i)), (e.max = km(e.max, t, n, r, i));
}
function bw(e, { x: t, y: n }) {
  od(e.x, t.translate, t.scale, t.originPoint),
    od(e.y, n.translate, n.scale, n.originPoint);
}
const Rm = 0.999999999999,
  Am = 1.0000000000001;
function MA(e, t, n, r = !1) {
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let o, s;
  for (let a = 0; a < i; a++) {
    (o = n[a]), (s = o.projectionDelta);
    const { visualElement: l } = o.options;
    (l && l.props.style && l.props.style.display === "contents") ||
      (r &&
        o.options.layoutScroll &&
        o.scroll &&
        o !== o.root &&
        ci(e, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), bw(e, s)),
      r && gr(o.latestValues) && ci(e, o.latestValues));
  }
  t.x < Am && t.x > Rm && (t.x = 1), t.y < Am && t.y > Rm && (t.y = 1);
}
function ui(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function Mm(e, t, n, r, i = 0.5) {
  const o = he(e.min, e.max, i);
  od(e, t, n, o, r);
}
function ci(e, t) {
  Mm(e.x, t.x, t.scaleX, t.scale, t.originX),
    Mm(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function Tw(e, t) {
  return Ew(AA(e.getBoundingClientRect(), t));
}
function NA(e, t, n) {
  const r = Tw(e, n),
    { scroll: i } = t;
  return i && (ui(r.x, i.offset.x), ui(r.y, i.offset.y)), r;
}
const jA = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  LA = Gi.length;
function DA(e, t, n) {
  let r = "",
    i = !0;
  for (let o = 0; o < LA; o++) {
    const s = Gi[o],
      a = e[s];
    if (a === void 0) continue;
    let l = !0;
    if (typeof a == "number") l = a === (s.startsWith("scale") ? 1 : 0);
    else {
      const u = parseFloat(a);
      l = s.startsWith("scale") ? u === 1 : u === 0;
    }
    if (!l || n) {
      const u = hw(a, Wf[s]);
      if (!l) {
        i = !1;
        const c = jA[s] || s;
        r += `${c}(${u}) `;
      }
      n && (t[s] = u);
    }
  }
  return (r = r.trim()), n ? (r = n(t, i ? "" : r)) : i && (r = "none"), r;
}
function Xf(e, t, n) {
  const { style: r, vars: i, transformOrigin: o } = e;
  let s = !1,
    a = !1;
  for (const l in t) {
    const u = t[l];
    if (Qi.has(l)) {
      s = !0;
      continue;
    } else if (_x(l)) {
      i[l] = u;
      continue;
    } else {
      const c = hw(u, Wf[l]);
      l.startsWith("origin") ? ((a = !0), (o[l] = c)) : (r[l] = c);
    }
  }
  if (
    (t.transform ||
      (s || n
        ? (r.transform = DA(t, e.transform, n))
        : r.transform && (r.transform = "none")),
    a)
  ) {
    const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = o;
    r.transformOrigin = `${l} ${u} ${c}`;
  }
}
function Pw(e, { style: t, vars: n }, r, i) {
  const o = e.style;
  let s;
  for (s in t) o[s] = t[s];
  i == null || i.applyProjectionStyles(o, r);
  for (s in n) o.setProperty(s, n[s]);
}
function Nm(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const ao = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (V.test(e)) e = parseFloat(e);
        else return e;
      const n = Nm(e, t.target.x),
        r = Nm(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  OA = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = ir.parse(e);
      if (i.length > 5) return r;
      const o = ir.createTransformer(e),
        s = typeof i[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      (i[0 + s] /= a), (i[1 + s] /= l);
      const u = he(a, l, 0.5);
      return (
        typeof i[2 + s] == "number" && (i[2 + s] /= u),
        typeof i[3 + s] == "number" && (i[3 + s] /= u),
        o(i)
      );
    },
  },
  sd = {
    borderRadius: {
      ...ao,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: ao,
    borderTopRightRadius: ao,
    borderBottomLeftRadius: ao,
    borderBottomRightRadius: ao,
    boxShadow: OA,
  };
function kw(e, { layout: t, layoutId: n }) {
  return (
    Qi.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!sd[e] || e === "opacity"))
  );
}
function qf(e, t, n) {
  var s;
  const r = e.style,
    i = t == null ? void 0 : t.style,
    o = {};
  if (!r) return o;
  for (const a in r)
    (Ve(r[a]) ||
      (i && Ve(i[a])) ||
      kw(a, e) ||
      ((s = n == null ? void 0 : n.getValue(a)) == null
        ? void 0
        : s.liveStyle) !== void 0) &&
      (o[a] = r[a]);
  return o;
}
function IA(e) {
  return window.getComputedStyle(e);
}
class FA extends Sw {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = Pw);
  }
  readValueFromInstance(t, n) {
    var r;
    if (Qi.has(n))
      return (r = this.projection) != null && r.isProjecting ? Kc(n) : tR(t, n);
    {
      const i = IA(t),
        o = (_x(n) ? i.getPropertyValue(n) : i[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Tw(t, n);
  }
  build(t, n, r) {
    Xf(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return qf(t, n, r);
  }
}
const VA = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  _A = { offset: "strokeDashoffset", array: "strokeDasharray" };
function zA(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const o = i ? VA : _A;
  (e[o.offset] = `${-r}`), (e[o.array] = `${t} ${n}`);
}
const BA = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
function Rw(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    pathLength: i,
    pathSpacing: o = 1,
    pathOffset: s = 0,
    ...a
  },
  l,
  u,
  c
) {
  if ((Xf(e, a, u), l)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: d, style: f } = e;
  d.transform && ((f.transform = d.transform), delete d.transform),
    (f.transform || d.transformOrigin) &&
      ((f.transformOrigin = d.transformOrigin ?? "50% 50%"),
      delete d.transformOrigin),
    f.transform &&
      ((f.transformBox = (c == null ? void 0 : c.transformBox) ?? "fill-box"),
      delete d.transformBox);
  for (const h of BA) d[h] !== void 0 && ((f[h] = d[h]), delete d[h]);
  t !== void 0 && (d.x = t),
    n !== void 0 && (d.y = n),
    r !== void 0 && (d.scale = r),
    i !== void 0 && zA(d, i, o, s, !1);
}
const Aw = new Set([
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
  ]),
  Mw = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function $A(e, t, n, r) {
  Pw(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(Aw.has(i) ? i : $f(i), t.attrs[i]);
}
function Nw(e, t, n) {
  const r = qf(e, t, n);
  for (const i in e)
    if (Ve(e[i]) || Ve(t[i])) {
      const o =
        Gi.indexOf(i) !== -1
          ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
          : i;
      r[o] = e[i];
    }
  return r;
}
class WA extends Sw {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = Ee);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Qi.has(n)) {
      const r = dw(n);
      return (r && r.default) || 0;
    }
    return (n = Aw.has(n) ? n : $f(n)), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Nw(t, n, r);
  }
  build(t, n, r) {
    Rw(t, n, this.isSVGTag, r.transformTemplate, r.style);
  }
  renderInstance(t, n, r, i) {
    $A(t, n, r, i);
  }
  mount(t) {
    (this.isSVGTag = Mw(t.tagName)), super.mount(t);
  }
}
const UA = Yf.length;
function jw(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const n = e.parent ? jw(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < UA; n++) {
    const r = Yf[n],
      i = e.props[r];
    (Zo(i) || i === !1) && (t[r] = i);
  }
  return t;
}
function Lw(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
const HA = [...Qf].reverse(),
  KA = Qf.length;
function GA(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => HR(e, n, r)));
}
function QA(e) {
  let t = GA(e),
    n = jm(),
    r = !0;
  const i = (l) => (u, c) => {
    var f;
    const d = wi(
      e,
      c,
      l === "exit"
        ? (f = e.presenceContext) == null
          ? void 0
          : f.custom
        : void 0
    );
    if (d) {
      const { transition: h, transitionEnd: v, ...g } = d;
      u = { ...u, ...g, ...v };
    }
    return u;
  };
  function o(l) {
    t = l(e);
  }
  function s(l) {
    const { props: u } = e,
      c = jw(e.parent) || {},
      d = [],
      f = new Set();
    let h = {},
      v = 1 / 0;
    for (let x = 0; x < KA; x++) {
      const p = HA[x],
        m = n[p],
        y = u[p] !== void 0 ? u[p] : c[p],
        E = Zo(y),
        C = p === l ? m.isActive : null;
      C === !1 && (v = x);
      let b = y === c[p] && y !== u[p] && E;
      if (
        (b && r && e.manuallyAnimateOnMount && (b = !1),
        (m.protectedKeys = { ...h }),
        (!m.isActive && C === null) ||
          (!y && !m.prevProp) ||
          Pl(y) ||
          typeof y == "boolean")
      )
        continue;
      const T = YA(m.prevProp, y);
      let P = T || (p === l && m.isActive && !b && E) || (x > v && E),
        M = !1;
      const N = Array.isArray(y) ? y : [y];
      let z = N.reduce(i(p), {});
      C === !1 && (z = {});
      const { prevResolvedValues: I = {} } = m,
        K = { ...I, ...z },
        D = (_) => {
          (P = !0),
            f.has(_) && ((M = !0), f.delete(_)),
            (m.needsAnimating[_] = !0);
          const k = e.getValue(_);
          k && (k.liveStyle = !1);
        };
      for (const _ in K) {
        const k = z[_],
          A = I[_];
        if (h.hasOwnProperty(_)) continue;
        let O = !1;
        Zc(k) && Zc(A) ? (O = !Lw(k, A)) : (O = k !== A),
          O
            ? k != null
              ? D(_)
              : f.add(_)
            : k !== void 0 && f.has(_)
            ? D(_)
            : (m.protectedKeys[_] = !0);
      }
      (m.prevProp = y),
        (m.prevResolvedValues = z),
        m.isActive && (h = { ...h, ...z }),
        r && e.blockInitialAnimation && (P = !1);
      const Q = b && T;
      P &&
        (!Q || M) &&
        d.push(
          ...N.map((_) => {
            const k = { type: p };
            if (
              typeof _ == "string" &&
              r &&
              !Q &&
              e.manuallyAnimateOnMount &&
              e.parent
            ) {
              const { parent: A } = e,
                O = wi(A, _);
              if (A.enteringChildren && O) {
                const { delayChildren: W } = O.transition || {};
                k.delay = nw(A.enteringChildren, e, W);
              }
            }
            return { animation: _, options: k };
          })
        );
    }
    if (f.size) {
      const x = {};
      if (typeof u.initial != "boolean") {
        const p = wi(e, Array.isArray(u.initial) ? u.initial[0] : u.initial);
        p && p.transition && (x.transition = p.transition);
      }
      f.forEach((p) => {
        const m = e.getBaseTarget(p),
          y = e.getValue(p);
        y && (y.liveStyle = !0), (x[p] = m ?? null);
      }),
        d.push({ animation: x });
    }
    let g = !!d.length;
    return (
      r &&
        (u.initial === !1 || u.initial === u.animate) &&
        !e.manuallyAnimateOnMount &&
        (g = !1),
      (r = !1),
      g ? t(d) : Promise.resolve()
    );
  }
  function a(l, u) {
    var d;
    if (n[l].isActive === u) return Promise.resolve();
    (d = e.variantChildren) == null ||
      d.forEach((f) => {
        var h;
        return (h = f.animationState) == null ? void 0 : h.setActive(l, u);
      }),
      (n[l].isActive = u);
    const c = s(l);
    for (const f in n) n[f].protectedKeys = {};
    return c;
  }
  return {
    animateChanges: s,
    setActive: a,
    setAnimateFunction: o,
    getState: () => n,
    reset: () => {
      n = jm();
    },
  };
}
function YA(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Lw(t, e) : !1;
}
function fr(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function jm() {
  return {
    animate: fr(!0),
    whileInView: fr(),
    whileHover: fr(),
    whileTap: fr(),
    whileDrag: fr(),
    whileFocus: fr(),
    exit: fr(),
  };
}
function Lm(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function Tt(e, t) {
  Lm(e.x, t.x), Lm(e.y, t.y);
}
function Dm(e, t) {
  (e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin);
}
const Dw = 1e-4,
  XA = 1 - Dw,
  qA = 1 + Dw,
  Ow = 0.01,
  ZA = 0 - Ow,
  JA = 0 + Ow;
function Ue(e) {
  return e.max - e.min;
}
function e4(e, t, n) {
  return Math.abs(e - t) <= n;
}
function Om(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = he(t.min, t.max, e.origin)),
    (e.scale = Ue(n) / Ue(t)),
    (e.translate = he(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= XA && e.scale <= qA) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= ZA && e.translate <= JA) || isNaN(e.translate)) &&
      (e.translate = 0);
}
function Po(e, t, n, r) {
  Om(e.x, t.x, n.x, r ? r.originX : void 0),
    Om(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Im(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + Ue(t));
}
function t4(e, t, n) {
  Im(e.x, t.x, n.x), Im(e.y, t.y, n.y);
}
function Fm(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + Ue(t));
}
function Ga(e, t, n) {
  Fm(e.x, t.x, n.x), Fm(e.y, t.y, n.y);
}
function Vm(e, t, n, r, i) {
  return (
    (e -= t), (e = Ka(e, 1 / n, r)), i !== void 0 && (e = Ka(e, 1 / i, r)), e
  );
}
function n4(e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
  if (
    (qt.test(t) &&
      ((t = parseFloat(t)), (t = he(s.min, s.max, t / 100) - s.min)),
    typeof t != "number")
  )
    return;
  let a = he(o.min, o.max, r);
  e === o && (a -= t),
    (e.min = Vm(e.min, t, n, a, i)),
    (e.max = Vm(e.max, t, n, a, i));
}
function _m(e, t, [n, r, i], o, s) {
  n4(e, t[n], t[r], t[i], t.scale, o, s);
}
const r4 = ["x", "scaleX", "originX"],
  i4 = ["y", "scaleY", "originY"];
function zm(e, t, n, r) {
  _m(e.x, t, r4, n ? n.x : void 0, r ? r.x : void 0),
    _m(e.y, t, i4, n ? n.y : void 0, r ? r.y : void 0);
}
function Bm(e) {
  return e.translate === 0 && e.scale === 1;
}
function Iw(e) {
  return Bm(e.x) && Bm(e.y);
}
function $m(e, t) {
  return e.min === t.min && e.max === t.max;
}
function o4(e, t) {
  return $m(e.x, t.x) && $m(e.y, t.y);
}
function Wm(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function Fw(e, t) {
  return Wm(e.x, t.x) && Wm(e.y, t.y);
}
function Um(e) {
  return Ue(e.x) / Ue(e.y);
}
function Hm(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
function $t(e) {
  return [e("x"), e("y")];
}
function s4(e, t, n) {
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
      transformPerspective: u,
      rotate: c,
      rotateX: d,
      rotateY: f,
      skewX: h,
      skewY: v,
    } = n;
    u && (r = `perspective(${u}px) ${r}`),
      c && (r += `rotate(${c}deg) `),
      d && (r += `rotateX(${d}deg) `),
      f && (r += `rotateY(${f}deg) `),
      h && (r += `skewX(${h}deg) `),
      v && (r += `skewY(${v}deg) `);
  }
  const a = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none";
}
const Vw = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  a4 = Vw.length,
  Km = (e) => (typeof e == "string" ? parseFloat(e) : e),
  Gm = (e) => typeof e == "number" || V.test(e);
function l4(e, t, n, r, i, o) {
  i
    ? ((e.opacity = he(0, n.opacity ?? 1, u4(r))),
      (e.opacityExit = he(t.opacity ?? 1, 0, c4(r))))
    : o && (e.opacity = he(t.opacity ?? 1, n.opacity ?? 1, r));
  for (let s = 0; s < a4; s++) {
    const a = `border${Vw[s]}Radius`;
    let l = Qm(t, a),
      u = Qm(n, a);
    if (l === void 0 && u === void 0) continue;
    l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || Gm(l) === Gm(u)
        ? ((e[a] = Math.max(he(Km(l), Km(u), r), 0)),
          (qt.test(u) || qt.test(l)) && (e[a] += "%"))
        : (e[a] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = he(t.rotate || 0, n.rotate || 0, r));
}
function Qm(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const u4 = _w(0, 0.5, Lx),
  c4 = _w(0.5, 0.95, yt);
function _w(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Yo(e, t, r)));
}
function d4(e, t, n) {
  const r = Ve(e) ? e : _i(e);
  return r.start(zf("", r, t, n)), r.animation;
}
function Jo(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const f4 = (e, t) => e.depth - t.depth;
class h4 {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    bf(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    Tf(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(f4),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function p4(e, t) {
  const n = We.now(),
    r = ({ timestamp: i }) => {
      const o = i - n;
      o >= t && (rr(r), e(o - t));
    };
  return oe.setup(r, !0), () => rr(r);
}
function ua(e) {
  return Ve(e) ? e.get() : e;
}
class m4 {
  constructor() {
    this.members = [];
  }
  add(t) {
    bf(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (Tf(this.members, t),
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
      r.instance && r.scheduleRender(), t.scheduleRender();
      const i = r.options.layoutDependency,
        o = t.options.layoutDependency;
      (i !== void 0 && o !== void 0 && i === o) ||
        ((t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0));
      const { crossfade: a } = t.options;
      a === !1 && r.hide();
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
const ca = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
  Eu = ["", "X", "Y", "Z"],
  g4 = 1e3;
let y4 = 0;
function Cu(e, t, n, r) {
  const { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function zw(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = aw(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: o } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", oe, !(i || o));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && zw(r);
}
function Bw({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(s = {}, a = t == null ? void 0 : t()) {
      (this.id = y4++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
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
        (this.layoutVersion = 0),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            this.nodes.forEach(w4),
            this.nodes.forEach(b4),
            this.nodes.forEach(T4),
            this.nodes.forEach(S4);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.linkedParentVersion = 0),
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
      this.root === this && (this.nodes = new h4());
    }
    addEventListener(s, a) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new kf()),
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
    mount(s) {
      if (this.instance) return;
      (this.isSVG = Gf(s) && !xA(s)), (this.instance = s);
      const { layoutId: a, layout: l, visualElement: u } = this.options;
      if (
        (u && !u.current && u.mount(s),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (l || a) && (this.isLayoutDirty = !0),
        e)
      ) {
        let c,
          d = 0;
        const f = () => (this.root.updateBlockedByResize = !1);
        oe.read(() => {
          d = window.innerWidth;
        }),
          e(s, () => {
            const h = window.innerWidth;
            h !== d &&
              ((d = h),
              (this.root.updateBlockedByResize = !0),
              c && c(),
              (c = p4(f, 250)),
              ca.hasAnimatedSinceResize &&
                ((ca.hasAnimatedSinceResize = !1), this.nodes.forEach(qm)));
          });
      }
      a && this.root.registerSharedNode(a, this),
        this.options.animate !== !1 &&
          u &&
          (a || l) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: c,
              hasLayoutChanged: d,
              hasRelativeLayoutChanged: f,
              layout: h,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const v =
                  this.options.transition || u.getDefaultTransition() || M4,
                { onLayoutAnimationStart: g, onLayoutAnimationComplete: x } =
                  u.getProps(),
                p = !this.targetLayout || !Fw(this.targetLayout, h),
                m = !d && f;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                m ||
                (d && (p || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                const y = { ..._f(v, "layout"), onPlay: g, onComplete: x };
                (u.shouldReduceMotion || this.options.layoutRoot) &&
                  ((y.delay = 0), (y.type = !1)),
                  this.startAnimation(y),
                  this.setAnimationOrigin(c, m);
              } else
                d || qm(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = h;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        rr(this.updateProjection);
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
        this.nodes && this.nodes.forEach(P4),
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
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          zw(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        (d.shouldResetTransform = !0),
          d.updateScroll("snapshot"),
          d.options.layoutRoot && d.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        s && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Ym);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(Xm);
        return;
      }
      (this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(C4),
            this.nodes.forEach(v4),
            this.nodes.forEach(x4))
          : this.nodes.forEach(Xm),
        this.clearAllSnapshots();
      const a = We.now();
      (Ae.delta = Jt(0, 1e3 / 60, a - Ae.timestamp)),
        (Ae.timestamp = a),
        (Ae.isProcessing = !0),
        pu.update.process(Ae),
        pu.preRender.process(Ae),
        pu.render.process(Ae),
        (Ae.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Hf.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(E4), this.sharedNodes.forEach(k4);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        oe.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      oe.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !Ue(this.snapshot.measuredBox.x) &&
          !Ue(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
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
        this.layoutVersion++,
        (this.layoutCorrected = Ee()),
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
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === s &&
          (a = !1),
        a && this.instance)
      ) {
        const l = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: s,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      const s =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !Iw(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      s &&
        this.instance &&
        (a || gr(this.latestValues) || c) &&
        (i(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(s = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        s && (l = this.removeTransform(l)),
        N4(l),
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
      var u;
      const { visualElement: s } = this.options;
      if (!s) return Ee();
      const a = s.measureViewportBox();
      if (
        !(
          ((u = this.scroll) == null ? void 0 : u.wasRoot) || this.path.some(j4)
        )
      ) {
        const { scroll: c } = this.root;
        c && (ui(a.x, c.offset.x), ui(a.y, c.offset.y));
      }
      return a;
    }
    removeElementScroll(s) {
      var l;
      const a = Ee();
      if ((Tt(a, s), (l = this.scroll) != null && l.wasRoot)) return a;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u],
          { scroll: d, options: f } = c;
        c !== this.root &&
          d &&
          f.layoutScroll &&
          (d.wasRoot && Tt(a, s), ui(a.x, d.offset.x), ui(a.y, d.offset.y));
      }
      return a;
    }
    applyTransform(s, a = !1) {
      const l = Ee();
      Tt(l, s);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !a &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          ci(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          gr(c.latestValues) && ci(l, c.latestValues);
      }
      return gr(this.latestValues) && ci(l, this.latestValues), l;
    }
    removeTransform(s) {
      const a = Ee();
      Tt(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !gr(u.latestValues)) continue;
        id(u.latestValues) && u.updateSnapshot();
        const c = Ee(),
          d = u.measurePageBox();
        Tt(c, d),
          zm(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return gr(this.latestValues) && zm(a, this.latestValues), a;
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
        this.relativeParent.resolvedRelativeTargetAt !== Ae.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var h;
      const a = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
      const l = !!this.resumingFrom || this !== a;
      if (
        !(
          s ||
          (l && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          ((h = this.parent) != null && h.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: c, layoutId: d } = this.options;
      if (!this.layout || !(c || d)) return;
      this.resolvedRelativeTargetAt = Ae.timestamp;
      const f = this.getClosestProjectingParent();
      f &&
        this.linkedParentVersion !== f.layoutVersion &&
        !f.options.layoutRoot &&
        this.removeRelativeTarget(),
        !this.targetDelta &&
          !this.relativeTarget &&
          (f && f.layout
            ? this.createRelativeTarget(
                f,
                this.layout.layoutBox,
                f.layout.layoutBox
              )
            : this.removeRelativeTarget()),
        !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = Ee()), (this.targetWithTransforms = Ee())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              t4(this.target, this.relativeTarget, this.relativeParent.target))
            : this.targetDelta
            ? (this.resumingFrom
                ? (this.target = this.applyTransform(this.layout.layoutBox))
                : Tt(this.target, this.layout.layoutBox),
              bw(this.target, this.targetDelta))
            : Tt(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget &&
            ((this.attemptToResolveRelativeTarget = !1),
            f &&
            !!f.resumingFrom == !!this.resumingFrom &&
            !f.options.layoutScroll &&
            f.target &&
            this.animationProgress !== 1
              ? this.createRelativeTarget(f, this.target, f.target)
              : (this.relativeParent = this.relativeTarget = void 0)));
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          id(this.parent.latestValues) ||
          Cw(this.parent.latestValues)
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
    createRelativeTarget(s, a, l) {
      (this.relativeParent = s),
        (this.linkedParentVersion = s.layoutVersion),
        this.forceRelativeParentToResolveTarget(),
        (this.relativeTarget = Ee()),
        (this.relativeTargetOrigin = Ee()),
        Ga(this.relativeTargetOrigin, a, l),
        Tt(this.relativeTarget, this.relativeTargetOrigin);
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      var v;
      const s = this.getLead(),
        a = !!this.resumingFrom || this !== s;
      let l = !0;
      if (
        ((this.isProjectionDirty ||
          ((v = this.parent) != null && v.isProjectionDirty)) &&
          (l = !1),
        a &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (l = !1),
        this.resolvedRelativeTargetAt === Ae.timestamp && (l = !1),
        l)
      )
        return;
      const { layout: u, layoutId: c } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(u || c))
      )
        return;
      Tt(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x,
        f = this.treeScale.y;
      MA(this.layoutCorrected, this.treeScale, this.path, a),
        s.layout &&
          !s.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((s.target = s.layout.layoutBox), (s.targetWithTransforms = Ee()));
      const { target: h } = s;
      if (!h) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Dm(this.prevProjectionDelta.x, this.projectionDelta.x),
          Dm(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Po(this.projectionDelta, this.layoutCorrected, h, this.latestValues),
        (this.treeScale.x !== d ||
          this.treeScale.y !== f ||
          !Hm(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Hm(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", h));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      var a;
      if (((a = this.options.visualElement) == null || a.scheduleRender(), s)) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = li()),
        (this.projectionDelta = li()),
        (this.projectionDeltaWithTransform = li());
    }
    setAnimationOrigin(s, a = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        d = li();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      const f = Ee(),
        h = l ? l.source : void 0,
        v = this.layout ? this.layout.source : void 0,
        g = h !== v,
        x = this.getStack(),
        p = !x || x.members.length <= 1,
        m = !!(g && !p && this.options.crossfade === !0 && !this.path.some(A4));
      this.animationProgress = 0;
      let y;
      (this.mixTargetDelta = (E) => {
        const C = E / 1e3;
        Zm(d.x, s.x, C),
          Zm(d.y, s.y, C),
          this.setTargetDelta(d),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Ga(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            R4(this.relativeTarget, this.relativeTargetOrigin, f, C),
            y && o4(this.relativeTarget, y) && (this.isProjectionDirty = !1),
            y || (y = Ee()),
            Tt(y, this.relativeTarget)),
          g &&
            ((this.animationValues = c), l4(c, u, this.latestValues, C, m, p)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = C);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      var a, l, u;
      this.notifyListeners("animationStart"),
        (a = this.currentAnimation) == null || a.stop(),
        (u = (l = this.resumingFrom) == null ? void 0 : l.currentAnimation) ==
          null || u.stop(),
        this.pendingAnimation &&
          (rr(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = oe.update(() => {
          (ca.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = _i(0)),
            (this.currentAnimation = d4(this.motionValue, [0, 1e3], {
              ...s,
              velocity: 0,
              isSync: !0,
              onUpdate: (c) => {
                this.mixTargetDelta(c), s.onUpdate && s.onUpdate(c);
              },
              onStop: () => {},
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
        (this.mixTargetDelta && this.mixTargetDelta(g4),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: u,
        latestValues: c,
      } = s;
      if (!(!a || !l || !u)) {
        if (
          this !== s &&
          this.layout &&
          u &&
          $w(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || Ee();
          const d = Ue(this.layout.layoutBox.x);
          (l.x.min = s.target.x.min), (l.x.max = l.x.min + d);
          const f = Ue(this.layout.layoutBox.y);
          (l.y.min = s.target.y.min), (l.y.max = l.y.min + f);
        }
        Tt(a, l),
          ci(a, c),
          Po(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(s, a) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new m4()),
        this.sharedNodes.get(s).add(a);
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var a;
      const { layoutId: s } = this.options;
      return s
        ? ((a = this.getStack()) == null ? void 0 : a.lead) || this
        : this;
    }
    getPrevLead() {
      var a;
      const { layoutId: s } = this.options;
      return s ? ((a = this.getStack()) == null ? void 0 : a.prevLead) : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l),
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
      const u = {};
      l.z && Cu("z", s, u, this.animationValues);
      for (let c = 0; c < Eu.length; c++)
        Cu(`rotate${Eu[c]}`, s, u, this.animationValues),
          Cu(`skew${Eu[c]}`, s, u, this.animationValues);
      s.render();
      for (const c in u)
        s.setStaticValue(c, u[c]),
          this.animationValues && (this.animationValues[c] = u[c]);
      s.scheduleRender();
    }
    applyProjectionStyles(s, a) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        s.visibility = "hidden";
        return;
      }
      const l = this.getTransformTemplate();
      if (this.needsReset) {
        (this.needsReset = !1),
          (s.visibility = ""),
          (s.opacity = ""),
          (s.pointerEvents = ua(a == null ? void 0 : a.pointerEvents) || ""),
          (s.transform = l ? l(this.latestValues, "") : "none");
        return;
      }
      const u = this.getLead();
      if (!this.projectionDelta || !this.layout || !u.target) {
        this.options.layoutId &&
          ((s.opacity =
            this.latestValues.opacity !== void 0
              ? this.latestValues.opacity
              : 1),
          (s.pointerEvents = ua(a == null ? void 0 : a.pointerEvents) || "")),
          this.hasProjected &&
            !gr(this.latestValues) &&
            ((s.transform = l ? l({}, "") : "none"), (this.hasProjected = !1));
        return;
      }
      s.visibility = "";
      const c = u.animationValues || u.latestValues;
      this.applyTransformsToTarget();
      let d = s4(this.projectionDeltaWithTransform, this.treeScale, c);
      l && (d = l(c, d)), (s.transform = d);
      const { x: f, y: h } = this.projectionDelta;
      (s.transformOrigin = `${f.origin * 100}% ${h.origin * 100}% 0`),
        u.animationValues
          ? (s.opacity =
              u === this
                ? c.opacity ?? this.latestValues.opacity ?? 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : c.opacityExit)
          : (s.opacity =
              u === this
                ? c.opacity !== void 0
                  ? c.opacity
                  : ""
                : c.opacityExit !== void 0
                ? c.opacityExit
                : 0);
      for (const v in sd) {
        if (c[v] === void 0) continue;
        const { correct: g, applyTo: x, isCSSVariable: p } = sd[v],
          m = d === "none" ? c[v] : g(c[v], u);
        if (x) {
          const y = x.length;
          for (let E = 0; E < y; E++) s[x[E]] = m;
        } else
          p ? (this.options.visualElement.renderState.vars[v] = m) : (s[v] = m);
      }
      this.options.layoutId &&
        (s.pointerEvents =
          u === this ? ua(a == null ? void 0 : a.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((s) => {
        var a;
        return (a = s.currentAnimation) == null ? void 0 : a.stop();
      }),
        this.root.nodes.forEach(Ym),
        this.root.sharedNodes.clear();
    }
  };
}
function v4(e) {
  e.updateLayout();
}
function x4(e) {
  var n;
  const t = ((n = e.resumeFrom) == null ? void 0 : n.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: o } = e.options,
      s = t.source !== e.layout.source;
    o === "size"
      ? $t((d) => {
          const f = s ? t.measuredBox[d] : t.layoutBox[d],
            h = Ue(f);
          (f.min = r[d].min), (f.max = f.min + h);
        })
      : $w(o, t.layoutBox, r) &&
        $t((d) => {
          const f = s ? t.measuredBox[d] : t.layoutBox[d],
            h = Ue(r[d]);
          (f.max = f.min + h),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[d].max = e.relativeTarget[d].min + h));
        });
    const a = li();
    Po(a, r, t.layoutBox);
    const l = li();
    s ? Po(l, e.applyTransform(i, !0), t.measuredBox) : Po(l, r, t.layoutBox);
    const u = !Iw(a);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: h } = d;
        if (f && h) {
          const v = Ee();
          Ga(v, t.layoutBox, f.layoutBox);
          const g = Ee();
          Ga(g, r, h.layoutBox),
            Fw(v, g) || (c = !0),
            d.options.layoutRoot &&
              ((e.relativeTarget = g),
              (e.relativeTargetOrigin = v),
              (e.relativeParent = d));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: t,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeLayoutChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function w4(e) {
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
function S4(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function E4(e) {
  e.clearSnapshot();
}
function Ym(e) {
  e.clearMeasurements();
}
function Xm(e) {
  e.isLayoutDirty = !1;
}
function C4(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function qm(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function b4(e) {
  e.resolveTargetDelta();
}
function T4(e) {
  e.calcProjection();
}
function P4(e) {
  e.resetSkewAndRotation();
}
function k4(e) {
  e.removeLeadSnapshot();
}
function Zm(e, t, n) {
  (e.translate = he(t.translate, 0, n)),
    (e.scale = he(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function Jm(e, t, n, r) {
  (e.min = he(t.min, n.min, r)), (e.max = he(t.max, n.max, r));
}
function R4(e, t, n, r) {
  Jm(e.x, t.x, n.x, r), Jm(e.y, t.y, n.y, r);
}
function A4(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const M4 = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  eg = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  tg = eg("applewebkit/") && !eg("chrome/") ? Math.round : yt;
function ng(e) {
  (e.min = tg(e.min)), (e.max = tg(e.max));
}
function N4(e) {
  ng(e.x), ng(e.y);
}
function $w(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !e4(Um(t), Um(n), 0.2))
  );
}
function j4(e) {
  var t;
  return e !== e.root && ((t = e.scroll) == null ? void 0 : t.wasRoot);
}
const L4 = Bw({
    attachResizeListener: (e, t) => Jo(e, "resize", t),
    measureScroll: () => {
      var e, t;
      return {
        x:
          document.documentElement.scrollLeft ||
          ((e = document.body) == null ? void 0 : e.scrollLeft) ||
          0,
        y:
          document.documentElement.scrollTop ||
          ((t = document.body) == null ? void 0 : t.scrollTop) ||
          0,
      };
    },
    checkIsScrollRoot: () => !0,
  }),
  bu = { current: void 0 },
  Ww = Bw({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!bu.current) {
        const e = new L4({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (bu.current = e);
      }
      return bu.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  Zf = S.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  });
function rg(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function D4(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((i) => {
      const o = rg(i, t);
      return !n && typeof o == "function" && (n = !0), o;
    });
    if (n)
      return () => {
        for (let i = 0; i < r.length; i++) {
          const o = r[i];
          typeof o == "function" ? o() : rg(e[i], null);
        }
      };
  };
}
function O4(...e) {
  return S.useCallback(D4(...e), e);
}
class I4 extends S.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent && this.props.pop !== !1) {
      const r = n.offsetParent,
        i = (nd(r) && r.offsetWidth) || 0,
        o = (nd(r) && r.offsetHeight) || 0,
        s = this.props.sizeRef.current;
      (s.height = n.offsetHeight || 0),
        (s.width = n.offsetWidth || 0),
        (s.top = n.offsetTop),
        (s.left = n.offsetLeft),
        (s.right = i - s.width - s.left),
        (s.bottom = o - s.height - s.top);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function F4({
  children: e,
  isPresent: t,
  anchorX: n,
  anchorY: r,
  root: i,
  pop: o,
}) {
  var f;
  const s = S.useId(),
    a = S.useRef(null),
    l = S.useRef({ width: 0, height: 0, top: 0, left: 0, right: 0, bottom: 0 }),
    { nonce: u } = S.useContext(Zf),
    c =
      ((f = e.props) == null ? void 0 : f.ref) ?? (e == null ? void 0 : e.ref),
    d = O4(a, c);
  return (
    S.useInsertionEffect(() => {
      const {
        width: h,
        height: v,
        top: g,
        left: x,
        right: p,
        bottom: m,
      } = l.current;
      if (t || o === !1 || !a.current || !h || !v) return;
      const y = n === "left" ? `left: ${x}` : `right: ${p}`,
        E = r === "bottom" ? `bottom: ${m}` : `top: ${g}`;
      a.current.dataset.motionPopId = s;
      const C = document.createElement("style");
      u && (C.nonce = u);
      const b = i ?? document.head;
      return (
        b.appendChild(C),
        C.sheet &&
          C.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${h}px !important;
            height: ${v}px !important;
            ${y}px !important;
            ${E}px !important;
          }
        `),
        () => {
          b.contains(C) && b.removeChild(C);
        }
      );
    }, [t]),
    w.jsx(I4, {
      isPresent: t,
      childRef: a,
      sizeRef: l,
      pop: o,
      children: o === !1 ? e : S.cloneElement(e, { ref: d }),
    })
  );
}
const V4 = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: i,
  presenceAffectsLayout: o,
  mode: s,
  anchorX: a,
  anchorY: l,
  root: u,
}) => {
  const c = Cf(_4),
    d = S.useId();
  let f = !0,
    h = S.useMemo(
      () => (
        (f = !1),
        {
          id: d,
          initial: t,
          isPresent: n,
          custom: i,
          onExitComplete: (v) => {
            c.set(v, !0);
            for (const g of c.values()) if (!g) return;
            r && r();
          },
          register: (v) => (c.set(v, !1), () => c.delete(v)),
        }
      ),
      [n, c, r]
    );
  return (
    o && f && (h = { ...h }),
    S.useMemo(() => {
      c.forEach((v, g) => c.set(g, !1));
    }, [n]),
    S.useEffect(() => {
      !n && !c.size && r && r();
    }, [n]),
    (e = w.jsx(F4, {
      pop: s === "popLayout",
      isPresent: n,
      anchorX: a,
      anchorY: l,
      root: u,
      children: e,
    })),
    w.jsx(bl.Provider, { value: h, children: e })
  );
};
function _4() {
  return new Map();
}
function Uw(e = !0) {
  const t = S.useContext(bl);
  if (t === null) return [!0, null];
  const { isPresent: n, onExitComplete: r, register: i } = t,
    o = S.useId();
  S.useEffect(() => {
    if (e) return i(o);
  }, [e]);
  const s = S.useCallback(() => e && r && r(o), [o, r, e]);
  return !n && r ? [!1, s] : [!0];
}
const $s = (e) => e.key || "";
function ig(e) {
  const t = [];
  return (
    S.Children.forEach(e, (n) => {
      S.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const Hw = ({
    children: e,
    custom: t,
    initial: n = !0,
    onExitComplete: r,
    presenceAffectsLayout: i = !0,
    mode: o = "sync",
    propagate: s = !1,
    anchorX: a = "left",
    anchorY: l = "top",
    root: u,
  }) => {
    const [c, d] = Uw(s),
      f = S.useMemo(() => ig(e), [e]),
      h = s && !c ? [] : f.map($s),
      v = S.useRef(!0),
      g = S.useRef(f),
      x = Cf(() => new Map()),
      p = S.useRef(new Set()),
      [m, y] = S.useState(f),
      [E, C] = S.useState(f);
    Ex(() => {
      (v.current = !1), (g.current = f);
      for (let P = 0; P < E.length; P++) {
        const M = $s(E[P]);
        h.includes(M)
          ? (x.delete(M), p.current.delete(M))
          : x.get(M) !== !0 && x.set(M, !1);
      }
    }, [E, h.length, h.join("-")]);
    const b = [];
    if (f !== m) {
      let P = [...f];
      for (let M = 0; M < E.length; M++) {
        const N = E[M],
          z = $s(N);
        h.includes(z) || (P.splice(M, 0, N), b.push(N));
      }
      return o === "wait" && b.length && (P = b), C(ig(P)), y(f), null;
    }
    const { forceRender: T } = S.useContext(Ef);
    return w.jsx(w.Fragment, {
      children: E.map((P) => {
        const M = $s(P),
          N = s && !c ? !1 : f === E || h.includes(M),
          z = () => {
            if (p.current.has(M)) return;
            if ((p.current.add(M), x.has(M))) x.set(M, !0);
            else return;
            let I = !0;
            x.forEach((K) => {
              K || (I = !1);
            }),
              I &&
                (T == null || T(),
                C(g.current),
                s && (d == null || d()),
                r && r());
          };
        return w.jsx(
          V4,
          {
            isPresent: N,
            initial: !v.current || n ? void 0 : !1,
            custom: t,
            presenceAffectsLayout: i,
            mode: o,
            root: u,
            onExitComplete: N ? void 0 : z,
            anchorX: a,
            anchorY: l,
            children: P,
          },
          M
        );
      }),
    });
  },
  Kw = S.createContext({ strict: !1 }),
  og = {
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
  };
let sg = !1;
function z4() {
  if (sg) return;
  const e = {};
  for (const t in og) e[t] = { isEnabled: (n) => og[t].some((r) => !!n[r]) };
  ww(e), (sg = !0);
}
function Gw() {
  return z4(), PA();
}
function B4(e) {
  const t = Gw();
  for (const n in e) t[n] = { ...t[n], ...e[n] };
  ww(t);
}
const $4 = new Set([
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
  "propagate",
  "ignoreStrict",
  "viewport",
]);
function Qa(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    $4.has(e)
  );
}
let Qw = (e) => !Qa(e);
function W4(e) {
  typeof e == "function" && (Qw = (t) => (t.startsWith("on") ? !Qa(t) : e(t)));
}
try {
  W4(require("@emotion/is-prop-valid").default);
} catch {}
function U4(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      ((Qw(i) ||
        (n === !0 && Qa(i)) ||
        (!t && !Qa(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
const Rl = S.createContext({});
function H4(e, t) {
  if (kl(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Zo(n) ? n : void 0,
      animate: Zo(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function K4(e) {
  const { initial: t, animate: n } = H4(e, S.useContext(Rl));
  return S.useMemo(() => ({ initial: t, animate: n }), [ag(t), ag(n)]);
}
function ag(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Jf = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Yw(e, t, n) {
  for (const r in t) !Ve(t[r]) && !kw(r, n) && (e[r] = t[r]);
}
function G4({ transformTemplate: e }, t) {
  return S.useMemo(() => {
    const n = Jf();
    return Xf(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function Q4(e, t) {
  const n = e.style || {},
    r = {};
  return Yw(r, n, e), Object.assign(r, G4(e, t)), r;
}
function Y4(e, t) {
  const n = {},
    r = Q4(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
const Xw = () => ({ ...Jf(), attrs: {} });
function X4(e, t, n, r) {
  const i = S.useMemo(() => {
    const o = Xw();
    return (
      Rw(o, t, Mw(r), e.transformTemplate, e.style),
      { ...o.attrs, style: { ...o.style } }
    );
  }, [t]);
  if (e.style) {
    const o = {};
    Yw(o, e.style, e), (i.style = { ...o, ...i.style });
  }
  return i;
}
const q4 = [
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
function eh(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(q4.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function Z4(e, t, n, { latestValues: r }, i, o = !1, s) {
  const l = (s ?? eh(e) ? X4 : Y4)(t, r, i, e),
    u = U4(t, typeof e == "string", o),
    c = e !== S.Fragment ? { ...u, ...l, ref: n } : {},
    { children: d } = t,
    f = S.useMemo(() => (Ve(d) ? d.get() : d), [d]);
  return S.createElement(e, { ...c, children: f });
}
function J4({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, i) {
  return { latestValues: eM(n, r, i, e), renderState: t() };
}
function eM(e, t, n, r) {
  const i = {},
    o = r(e, {});
  for (const f in o) i[f] = ua(o[f]);
  let { initial: s, animate: a } = e;
  const l = kl(e),
    u = xw(e);
  t &&
    u &&
    !l &&
    e.inherit !== !1 &&
    (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || s === !1;
  const d = c ? a : s;
  if (d && typeof d != "boolean" && !Pl(d)) {
    const f = Array.isArray(d) ? d : [d];
    for (let h = 0; h < f.length; h++) {
      const v = Bf(e, f[h]);
      if (v) {
        const { transitionEnd: g, transition: x, ...p } = v;
        for (const m in p) {
          let y = p[m];
          if (Array.isArray(y)) {
            const E = c ? y.length - 1 : 0;
            y = y[E];
          }
          y !== null && (i[m] = y);
        }
        for (const m in g) i[m] = g[m];
      }
    }
  }
  return i;
}
const qw = (e) => (t, n) => {
    const r = S.useContext(Rl),
      i = S.useContext(bl),
      o = () => J4(e, t, r, i);
    return n ? o() : Cf(o);
  },
  tM = qw({ scrapeMotionValuesFromProps: qf, createRenderState: Jf }),
  nM = qw({ scrapeMotionValuesFromProps: Nw, createRenderState: Xw }),
  rM = Symbol.for("motionComponentSymbol");
function iM(e, t, n) {
  const r = S.useRef(n);
  S.useInsertionEffect(() => {
    r.current = n;
  });
  const i = S.useRef(null);
  return S.useCallback(
    (o) => {
      var a;
      o && ((a = e.onMount) == null || a.call(e, o)),
        t && (o ? t.mount(o) : t.unmount());
      const s = r.current;
      if (typeof s == "function")
        if (o) {
          const l = s(o);
          typeof l == "function" && (i.current = l);
        } else i.current ? (i.current(), (i.current = null)) : s(o);
      else s && (s.current = o);
    },
    [t]
  );
}
const Zw = S.createContext({});
function Gr(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function oM(e, t, n, r, i, o) {
  var y, E;
  const { visualElement: s } = S.useContext(Rl),
    a = S.useContext(Kw),
    l = S.useContext(bl),
    u = S.useContext(Zf),
    c = u.reducedMotion,
    d = u.skipAnimations,
    f = S.useRef(null),
    h = S.useRef(!1);
  (r = r || a.renderer),
    !f.current &&
      r &&
      ((f.current = r(e, {
        visualState: t,
        parent: s,
        props: n,
        presenceContext: l,
        blockInitialAnimation: l ? l.initial === !1 : !1,
        reducedMotionConfig: c,
        skipAnimations: d,
        isSVG: o,
      })),
      h.current && f.current && (f.current.manuallyAnimateOnMount = !0));
  const v = f.current,
    g = S.useContext(Zw);
  v &&
    !v.projection &&
    i &&
    (v.type === "html" || v.type === "svg") &&
    sM(f.current, n, i, g);
  const x = S.useRef(!1);
  S.useInsertionEffect(() => {
    v && x.current && v.update(n, l);
  });
  const p = n[sw],
    m = S.useRef(
      !!p &&
        !((y = window.MotionHandoffIsComplete) != null && y.call(window, p)) &&
        ((E = window.MotionHasOptimisedAnimation) == null
          ? void 0
          : E.call(window, p))
    );
  return (
    Ex(() => {
      (h.current = !0),
        v &&
          ((x.current = !0),
          (window.MotionIsMounted = !0),
          v.updateFeatures(),
          v.scheduleRenderMicrotask(),
          m.current && v.animationState && v.animationState.animateChanges());
    }),
    S.useEffect(() => {
      v &&
        (!m.current && v.animationState && v.animationState.animateChanges(),
        m.current &&
          (queueMicrotask(() => {
            var C;
            (C = window.MotionHandoffMarkAsComplete) == null ||
              C.call(window, p);
          }),
          (m.current = !1)),
        (v.enteringChildren = void 0));
    }),
    v
  );
}
function sM(e, t, n, r) {
  const {
    layoutId: i,
    layout: o,
    drag: s,
    dragConstraints: a,
    layoutScroll: l,
    layoutRoot: u,
    layoutCrossfade: c,
  } = t;
  (e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : Jw(e.parent)
  )),
    e.projection.setOptions({
      layoutId: i,
      layout: o,
      alwaysMeasureLayout: !!s || (a && Gr(a)),
      visualElement: e,
      animationType: typeof o == "string" ? o : "both",
      initialPromotionConfig: r,
      crossfade: c,
      layoutScroll: l,
      layoutRoot: u,
    });
}
function Jw(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : Jw(e.parent);
}
function Tu(e, { forwardMotionProps: t = !1, type: n } = {}, r, i) {
  r && B4(r);
  const o = n ? n === "svg" : eh(e),
    s = o ? nM : tM;
  function a(u, c) {
    let d;
    const f = { ...S.useContext(Zf), ...u, layoutId: aM(u) },
      { isStatic: h } = f,
      v = K4(u),
      g = s(u, h);
    if (!h && Sx) {
      lM();
      const x = uM(f);
      (d = x.MeasureLayout),
        (v.visualElement = oM(e, g, f, i, x.ProjectionNode, o));
    }
    return w.jsxs(Rl.Provider, {
      value: v,
      children: [
        d && v.visualElement
          ? w.jsx(d, { visualElement: v.visualElement, ...f })
          : null,
        Z4(e, u, iM(g, v.visualElement, c), g, h, t, o),
      ],
    });
  }
  a.displayName = `motion.${
    typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`
  }`;
  const l = S.forwardRef(a);
  return (l[rM] = e), l;
}
function aM({ layoutId: e }) {
  const t = S.useContext(Ef).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function lM(e, t) {
  S.useContext(Kw).strict;
}
function uM(e) {
  const t = Gw(),
    { drag: n, layout: r } = t;
  if (!n && !r) return {};
  const i = { ...n, ...r };
  return {
    MeasureLayout:
      (n != null && n.isEnabled(e)) || (r != null && r.isEnabled(e))
        ? i.MeasureLayout
        : void 0,
    ProjectionNode: i.ProjectionNode,
  };
}
function cM(e, t) {
  if (typeof Proxy > "u") return Tu;
  const n = new Map(),
    r = (o, s) => Tu(o, s, e, t),
    i = (o, s) => r(o, s);
  return new Proxy(i, {
    get: (o, s) =>
      s === "create"
        ? r
        : (n.has(s) || n.set(s, Tu(s, void 0, e, t)), n.get(s)),
  });
}
const dM = (e, t) =>
  t.isSVG ?? eh(e)
    ? new WA(t)
    : new FA(t, { allowProjection: e !== S.Fragment });
class fM extends lr {
  constructor(t) {
    super(t), t.animationState || (t.animationState = QA(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Pl(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(),
      (t = this.unmountControls) == null || t.call(this);
  }
}
let hM = 0;
class pM extends lr {
  constructor() {
    super(...arguments), (this.id = hM++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const i = this.node.animationState.setActive("exit", !t);
    n &&
      !t &&
      i.then(() => {
        n(this.id);
      });
  }
  mount() {
    const { register: t, onExitComplete: n } = this.node.presenceContext || {};
    n && n(this.id), t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const mM = { animation: { Feature: fM }, exit: { Feature: pM } };
function hs(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
const gM = (e) => (t) => Kf(t) && e(t, hs(t));
function ko(e, t, n, r) {
  return Jo(e, t, gM(n), r);
}
const e1 = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  lg = (e, t) => Math.abs(e - t);
function yM(e, t) {
  const n = lg(e.x, t.x),
    r = lg(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
const ug = new Set(["auto", "scroll"]);
class t1 {
  constructor(
    t,
    n,
    {
      transformPagePoint: r,
      contextWindow: i = window,
      dragSnapToOrigin: o = !1,
      distanceThreshold: s = 3,
      element: a,
    } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.scrollPositions = new Map()),
      (this.removeScrollListeners = null),
      (this.onElementScroll = (h) => {
        this.handleScroll(h.target);
      }),
      (this.onWindowScroll = () => {
        this.handleScroll(window);
      }),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const h = ku(this.lastMoveEventInfo, this.history),
          v = this.startEvent !== null,
          g = yM(h.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!v && !g) return;
        const { point: x } = h,
          { timestamp: p } = Ae;
        this.history.push({ ...x, timestamp: p });
        const { onStart: m, onMove: y } = this.handlers;
        v ||
          (m && m(this.lastMoveEvent, h),
          (this.startEvent = this.lastMoveEvent)),
          y && y(this.lastMoveEvent, h);
      }),
      (this.handlePointerMove = (h, v) => {
        (this.lastMoveEvent = h),
          (this.lastMoveEventInfo = Pu(v, this.transformPagePoint)),
          oe.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (h, v) => {
        this.end();
        const { onEnd: g, onSessionEnd: x, resumeAnimation: p } = this.handlers;
        if (
          ((this.dragSnapToOrigin || !this.startEvent) && p && p(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const m = ku(
          h.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Pu(v, this.transformPagePoint),
          this.history
        );
        this.startEvent && g && g(h, m), x && x(h, m);
      }),
      !Kf(t))
    )
      return;
    (this.dragSnapToOrigin = o),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.distanceThreshold = s),
      (this.contextWindow = i || window);
    const l = hs(t),
      u = Pu(l, this.transformPagePoint),
      { point: c } = u,
      { timestamp: d } = Ae;
    this.history = [{ ...c, timestamp: d }];
    const { onSessionStart: f } = n;
    f && f(t, ku(u, this.history)),
      (this.removeListeners = cs(
        ko(this.contextWindow, "pointermove", this.handlePointerMove),
        ko(this.contextWindow, "pointerup", this.handlePointerUp),
        ko(this.contextWindow, "pointercancel", this.handlePointerUp)
      )),
      a && this.startScrollTracking(a);
  }
  startScrollTracking(t) {
    let n = t.parentElement;
    for (; n; ) {
      const r = getComputedStyle(n);
      (ug.has(r.overflowX) || ug.has(r.overflowY)) &&
        this.scrollPositions.set(n, { x: n.scrollLeft, y: n.scrollTop }),
        (n = n.parentElement);
    }
    this.scrollPositions.set(window, { x: window.scrollX, y: window.scrollY }),
      window.addEventListener("scroll", this.onElementScroll, {
        capture: !0,
        passive: !0,
      }),
      window.addEventListener("scroll", this.onWindowScroll, { passive: !0 }),
      (this.removeScrollListeners = () => {
        window.removeEventListener("scroll", this.onElementScroll, {
          capture: !0,
        }),
          window.removeEventListener("scroll", this.onWindowScroll);
      });
  }
  handleScroll(t) {
    const n = this.scrollPositions.get(t);
    if (!n) return;
    const r = t === window,
      i = r
        ? { x: window.scrollX, y: window.scrollY }
        : { x: t.scrollLeft, y: t.scrollTop },
      o = { x: i.x - n.x, y: i.y - n.y };
    (o.x === 0 && o.y === 0) ||
      (r
        ? this.lastMoveEventInfo &&
          ((this.lastMoveEventInfo.point.x += o.x),
          (this.lastMoveEventInfo.point.y += o.y))
        : this.history.length > 0 &&
          ((this.history[0].x -= o.x), (this.history[0].y -= o.y)),
      this.scrollPositions.set(t, i),
      oe.update(this.updatePoint, !0));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(),
      this.removeScrollListeners && this.removeScrollListeners(),
      this.scrollPositions.clear(),
      rr(this.updatePoint);
  }
}
function Pu(e, t) {
  return t ? { point: t(e.point) } : e;
}
function cg(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function ku({ point: e }, t) {
  return {
    point: e,
    delta: cg(e, n1(t)),
    offset: cg(e, vM(t)),
    velocity: xM(t, 0.1),
  };
}
function vM(e) {
  return e[0];
}
function n1(e) {
  return e[e.length - 1];
}
function xM(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = n1(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > Ot(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  r === e[0] &&
    e.length > 2 &&
    i.timestamp - r.timestamp > Ot(t) * 2 &&
    (r = e[1]);
  const o = mt(i.timestamp - r.timestamp);
  if (o === 0) return { x: 0, y: 0 };
  const s = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function wM(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? he(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? he(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function dg(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function SM(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: dg(e.x, n, i), y: dg(e.y, t, r) };
}
function fg(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function EM(e, t) {
  return { x: fg(e.x, t.x), y: fg(e.y, t.y) };
}
function CM(e, t) {
  let n = 0.5;
  const r = Ue(e),
    i = Ue(t);
  return (
    i > r
      ? (n = Yo(t.min, t.max - r, e.min))
      : r > i && (n = Yo(e.min, e.max - i, t.min)),
    Jt(0, 1, n)
  );
}
function bM(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const ad = 0.35;
function TM(e = ad) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = ad),
    { x: hg(e, "left", "right"), y: hg(e, "top", "bottom") }
  );
}
function hg(e, t, n) {
  return { min: pg(e, t), max: pg(e, n) };
}
function pg(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const PM = new WeakMap();
class kM {
  constructor(t) {
    (this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Ee()),
      (this.latestPointerEvent = null),
      (this.latestPanInfo = null),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1, distanceThreshold: r } = {}) {
    const { presenceContext: i } = this.visualElement;
    if (i && i.isPresent === !1) return;
    const o = (d) => {
        n && this.snapToCursor(hs(d).point), this.stopAnimation();
      },
      s = (d, f) => {
        const { drag: h, dragPropagation: v, onDragStart: g } = this.getProps();
        if (
          h &&
          !v &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = nA(h)),
          !this.openDragLock)
        )
          return;
        (this.latestPointerEvent = d),
          (this.latestPanInfo = f),
          (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          $t((p) => {
            let m = this.getAxisMotionValue(p).get() || 0;
            if (qt.test(m)) {
              const { projection: y } = this.visualElement;
              if (y && y.layout) {
                const E = y.layout.layoutBox[p];
                E && (m = Ue(E) * (parseFloat(m) / 100));
              }
            }
            this.originPoint[p] = m;
          }),
          g && oe.update(() => g(d, f), !1, !0),
          Jc(this.visualElement, "transform");
        const { animationState: x } = this.visualElement;
        x && x.setActive("whileDrag", !0);
      },
      a = (d, f) => {
        (this.latestPointerEvent = d), (this.latestPanInfo = f);
        const {
          dragPropagation: h,
          dragDirectionLock: v,
          onDirectionLock: g,
          onDrag: x,
        } = this.getProps();
        if (!h && !this.openDragLock) return;
        const { offset: p } = f;
        if (v && this.currentDirection === null) {
          (this.currentDirection = AM(p)),
            this.currentDirection !== null && g && g(this.currentDirection);
          return;
        }
        this.updateAxis("x", f.point, p),
          this.updateAxis("y", f.point, p),
          this.visualElement.render(),
          x && oe.update(() => x(d, f), !1, !0);
      },
      l = (d, f) => {
        (this.latestPointerEvent = d),
          (this.latestPanInfo = f),
          this.stop(d, f),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null);
      },
      u = () => {
        const { dragSnapToOrigin: d } = this.getProps();
        (d || this.constraints) && this.startAnimation({ x: 0, y: 0 });
      },
      { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new t1(
      t,
      {
        onSessionStart: o,
        onStart: s,
        onMove: a,
        onSessionEnd: l,
        resumeAnimation: u,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: c,
        distanceThreshold: r,
        contextWindow: e1(this.visualElement),
        element: this.visualElement.current,
      }
    );
  }
  stop(t, n) {
    const r = t || this.latestPointerEvent,
      i = n || this.latestPanInfo,
      o = this.isDragging;
    if ((this.cancel(), !o || !i || !r)) return;
    const { velocity: s } = i;
    this.startAnimation(s);
    const { onDragEnd: a } = this.getProps();
    a && oe.postRender(() => a(r, i));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1), this.endPanSession();
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  endPanSession() {
    this.panSession && this.panSession.end(), (this.panSession = void 0);
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !Ws(t, i, this.currentDirection)) return;
    const o = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (s = wM(s, this.constraints[t], this.elastic[t])),
      o.set(s);
  }
  resolveConstraints() {
    var o;
    const { dragConstraints: t, dragElastic: n } = this.getProps(),
      r =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (o = this.visualElement.projection) == null
          ? void 0
          : o.layout,
      i = this.constraints;
    t && Gr(t)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : t && r
      ? (this.constraints = SM(r.layoutBox, t))
      : (this.constraints = !1),
      (this.elastic = TM(n)),
      i !== this.constraints &&
        !Gr(t) &&
        r &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        $t((s) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(s) &&
            (this.constraints[s] = bM(r.layoutBox[s], this.constraints[s]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Gr(t)) return !1;
    const r = t.current;
    Vi(
      r !== null,
      "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.",
      "drag-constraints-ref"
    );
    const { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const o = NA(r, i.root, this.visualElement.getTransformPagePoint());
    let s = EM(i.layout.layoutBox, o);
    if (n) {
      const a = n(RA(s));
      (this.hasMutatedConstraints = !!a), a && (s = Ew(a));
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
      u = $t((c) => {
        if (!Ws(c, n, this.currentDirection)) return;
        let d = (l && l[c]) || {};
        s && (d = { min: 0, max: 0 });
        const f = i ? 200 : 1e6,
          h = i ? 40 : 1e7,
          v = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: f,
            bounceDamping: h,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...o,
            ...d,
          };
        return this.startAxisValueAnimation(c, v);
      });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return (
      Jc(this.visualElement, t), r.start(zf(t, r, 0, n, this.visualElement, !1))
    );
  }
  stopAnimation() {
    $t((t) => this.getAxisMotionValue(t).stop());
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
    $t((n) => {
      const { drag: r } = this.getProps();
      if (!Ws(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: s, max: a } = i.layout.layoutBox[n],
          l = o.get() || 0;
        o.set(t[n] - he(s, a, 0.5) + l);
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!Gr(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    $t((s) => {
      const a = this.getAxisMotionValue(s);
      if (a && this.constraints !== !1) {
        const l = a.get();
        i[s] = CM({ min: l, max: l }, this.constraints[s]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = o ? o({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      (this.constraints = !1),
      this.resolveConstraints(),
      $t((s) => {
        if (!Ws(s, t, null)) return;
        const a = this.getAxisMotionValue(s),
          { min: l, max: u } = this.constraints[s];
        a.set(he(l, u, i[s]));
      }),
      this.visualElement.render();
  }
  addListeners() {
    if (!this.visualElement.current) return;
    PM.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = ko(t, "pointerdown", (u) => {
        const { drag: c, dragListener: d = !0 } = this.getProps(),
          f = u.target,
          h = f !== t && lA(f);
        c && d && !h && this.start(u);
      });
    let r;
    const i = () => {
        const { dragConstraints: u } = this.getProps();
        Gr(u) &&
          u.current &&
          ((this.constraints = this.resolveRefConstraints()),
          r ||
            (r = RM(t, u.current, () =>
              this.scalePositionWithinConstraints()
            )));
      },
      { projection: o } = this.visualElement,
      s = o.addEventListener("measure", i);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()),
      oe.read(i);
    const a = Jo(window, "resize", () => this.scalePositionWithinConstraints()),
      l = o.addEventListener(
        "didUpdate",
        ({ delta: u, hasLayoutChanged: c }) => {
          this.isDragging &&
            c &&
            ($t((d) => {
              const f = this.getAxisMotionValue(d);
              f &&
                ((this.originPoint[d] += u[d].translate),
                f.set(f.get() + u[d].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      a(), n(), s(), l && l(), r && r();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: o = !1,
        dragElastic: s = ad,
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
function mg(e) {
  let t = !0;
  return () => {
    if (t) {
      t = !1;
      return;
    }
    e();
  };
}
function RM(e, t, n) {
  const r = Em(e, mg(n)),
    i = Em(t, mg(n));
  return () => {
    r(), i();
  };
}
function Ws(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function AM(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class MM extends lr {
  constructor(t) {
    super(t),
      (this.removeGroupControls = yt),
      (this.removeListeners = yt),
      (this.controls = new kM(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || yt);
  }
  update() {
    const { dragControls: t } = this.node.getProps(),
      { dragControls: n } = this.node.prevProps || {};
    t !== n &&
      (this.removeGroupControls(),
      t && (this.removeGroupControls = t.subscribe(this.controls)));
  }
  unmount() {
    this.removeGroupControls(),
      this.removeListeners(),
      this.controls.isDragging || this.controls.endPanSession();
  }
}
const Ru = (e) => (t, n) => {
  e && oe.update(() => e(t, n), !1, !0);
};
class NM extends lr {
  constructor() {
    super(...arguments), (this.removePointerDownListener = yt);
  }
  onPointerDown(t) {
    this.session = new t1(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: e1(this.node),
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
      onSessionStart: Ru(t),
      onStart: Ru(n),
      onMove: Ru(r),
      onEnd: (o, s) => {
        delete this.session, i && oe.postRender(() => i(o, s));
      },
    };
  }
  mount() {
    this.removePointerDownListener = ko(this.node.current, "pointerdown", (t) =>
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
let Au = !1;
class jM extends S.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: o } = t;
    o &&
      (n.group && n.group.add(o),
      r && r.register && i && r.register(o),
      Au && o.root.didUpdate(),
      o.addEventListener("animationComplete", () => {
        this.safeToRemove();
      }),
      o.setOptions({
        ...o.options,
        layoutDependency: this.props.layoutDependency,
        onExitComplete: () => this.safeToRemove(),
      })),
      (ca.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: o,
      } = this.props,
      { projection: s } = r;
    return (
      s &&
        ((s.isPresent = o),
        t.layoutDependency !== n &&
          s.setOptions({ ...s.options, layoutDependency: n }),
        (Au = !0),
        i || t.layoutDependency !== n || n === void 0 || t.isPresent !== o
          ? s.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== o &&
          (o
            ? s.promote()
            : s.relegate() ||
              oe.postRender(() => {
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
      Hf.postRender(() => {
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
    (Au = !0),
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
function r1(e) {
  const [t, n] = Uw(),
    r = S.useContext(Ef);
  return w.jsx(jM, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: S.useContext(Zw),
    isPresent: t,
    safeToRemove: n,
  });
}
const LM = {
  pan: { Feature: NM },
  drag: { Feature: MM, ProjectionNode: Ww, MeasureLayout: r1 },
};
function gg(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileHover &&
    e.animationState.setActive("whileHover", n === "Start");
  const i = "onHover" + n,
    o = r[i];
  o && oe.postRender(() => o(t, hs(t)));
}
class DM extends lr {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = iA(
        t,
        (n, r) => (gg(this.node, r, "Start"), (i) => gg(this.node, i, "End"))
      ));
  }
  unmount() {}
}
class OM extends lr {
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
    this.unmount = cs(
      Jo(this.node.current, "focus", () => this.onFocus()),
      Jo(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
function yg(e, t, n) {
  const { props: r } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
  e.animationState &&
    r.whileTap &&
    e.animationState.setActive("whileTap", n === "Start");
  const i = "onTap" + (n === "End" ? "" : n),
    o = r[i];
  o && oe.postRender(() => o(t, hs(t)));
}
class IM extends lr {
  mount() {
    const { current: t } = this.node;
    if (!t) return;
    const { globalTapTarget: n, propagate: r } = this.node.props;
    this.unmount = cA(
      t,
      (i, o) => (
        yg(this.node, o, "Start"),
        (s, { success: a }) => yg(this.node, s, a ? "End" : "Cancel")
      ),
      {
        useGlobalTarget: n,
        stopPropagation: (r == null ? void 0 : r.tap) === !1,
      }
    );
  }
  unmount() {}
}
const ld = new WeakMap(),
  Mu = new WeakMap(),
  FM = (e) => {
    const t = ld.get(e.target);
    t && t(e);
  },
  VM = (e) => {
    e.forEach(FM);
  };
function _M({ root: e, ...t }) {
  const n = e || document;
  Mu.has(n) || Mu.set(n, {});
  const r = Mu.get(n),
    i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(VM, { root: e, ...t })), r[i];
}
function zM(e, t, n) {
  const r = _M(t);
  return (
    ld.set(e, n),
    r.observe(e),
    () => {
      ld.delete(e), r.unobserve(e);
    }
  );
}
const BM = { some: 0, all: 1 };
class $M extends lr {
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
        threshold: typeof i == "number" ? i : BM[i],
      },
      a = (l) => {
        const { isIntersecting: u } = l;
        if (
          this.isInView === u ||
          ((this.isInView = u), o && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(),
          f = u ? c : d;
        f && f(l);
      };
    return zM(this.node.current, s, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(WM(t, n)) && this.startObserver();
  }
  unmount() {}
}
function WM({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const UM = {
    inView: { Feature: $M },
    tap: { Feature: IM },
    focus: { Feature: OM },
    hover: { Feature: DM },
  },
  HM = { layout: { ProjectionNode: Ww, MeasureLayout: r1 } },
  KM = { ...mM, ...UM, ...LM, ...HM },
  re = cM(KM, dM),
  GM = { some: 0, all: 1 };
function QM(e, t, { root: n, margin: r, amount: i = "some" } = {}) {
  const o = Uf(e),
    s = new WeakMap(),
    a = (u) => {
      u.forEach((c) => {
        const d = s.get(c.target);
        if (c.isIntersecting !== !!d)
          if (c.isIntersecting) {
            const f = t(c.target, c);
            typeof f == "function" ? s.set(c.target, f) : l.unobserve(c.target);
          } else typeof d == "function" && (d(c), s.delete(c.target));
      });
    },
    l = new IntersectionObserver(a, {
      root: n,
      rootMargin: r,
      threshold: typeof i == "number" ? i : GM[i],
    });
  return o.forEach((u) => l.observe(u)), () => l.disconnect();
}
function Al(
  e,
  { root: t, margin: n, amount: r, once: i = !1, initial: o = !1 } = {}
) {
  const [s, a] = S.useState(o);
  return (
    S.useEffect(() => {
      if (!e.current || (i && s)) return;
      const l = () => (a(!0), i ? void 0 : () => a(!1)),
        u = { root: (t && t.current) || void 0, margin: n, amount: r };
      return QM(e.current, l, u);
    }, [t, e, n, i, r]),
    s
  );
}
const vg = [
    { label: "About", href: "#about" },
    { label: "How to Buy", href: "#how-to-buy" },
    { label: "Tokenomics", href: "#tokenomics" },
    { label: "Gallery", href: "#gallery" },
  ],
  xg = [
    {
      label: "Telegram",
      href: "https://t.me/DogeusMaximusa",
      icon: w.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        children: w.jsx("path", {
          d: "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z",
        }),
      }),
    },
    {
      label: "X",
      href: "https://x.com/DogeusMaximusa",
      icon: w.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        children: w.jsx("path", {
          d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
        }),
      }),
    },
  ],
  YM = () => {
    const [e, t] = S.useState(!1),
      [n, r] = S.useState(!1);
    S.useEffect(() => {
      const u = () => t(window.scrollY > 50);
      return (
        window.addEventListener("scroll", u),
        () => window.removeEventListener("scroll", u)
      );
    }, []);
    const i = (u) => {
        r(!1);
        const c = document.querySelector(u);
        c && c.scrollIntoView({ behavior: "smooth" });
      },
      o = e ? "text-steel" : "text-snow",
      s = e ? "text-steel/80" : "text-snow/80",
      a = e ? "text-steel/60" : "text-snow/60",
      l = e ? "bg-steel" : "bg-snow";
    return w.jsxs(re.nav, {
      initial: { y: -100 },
      animate: { y: 0 },
      transition: { duration: 0.6, ease: "easeOut" },
      className: `fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        e ? "glass-strong shadow-lg shadow-ice/10" : "bg-transparent"
      }`,
      children: [
        w.jsx("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          children: w.jsxs("div", {
            className: "flex items-center justify-between h-16 md:h-20",
            children: [
              w.jsxs("a", {
                href: "#",
                onClick: (u) => {
                  u.preventDefault(),
                    window.scrollTo({ top: 0, behavior: "smooth" });
                },
                className: `flex items-center gap-3 font-cinzel text-lg md:text-xl tracking-wider ${o} hover:text-primary transition-colors`,
                children: [
                  w.jsx("img", {
                    src: "/images/logo.png",
                    alt: "White Wolf Logo",
                    className: "h-8 md:h-10 w-auto",
                  }),
                  w.jsx("span", { children: "DOGEUS" }),
                ],
              }),
              w.jsxs("div", {
                className: "hidden md:flex items-center gap-8",
                children: [
                  vg.map((u) =>
                    w.jsxs(
                      "button",
                      {
                        onClick: () => i(u.href),
                        className: `font-norse text-sm tracking-[0.2em] uppercase ${s} hover:text-primary transition-colors relative group`,
                        children: [
                          u.label,
                          w.jsx("span", {
                            className:
                              "absolute -bottom-1 left-0 w-0 h-[1px] bg-ice transition-all duration-300 group-hover:w-full",
                          }),
                        ],
                      },
                      u.label
                    )
                  ),
                  w.jsx("div", {
                    className: "flex items-center gap-3 ml-4",
                    children: xg.map((u) =>
                      w.jsx(
                        "a",
                        {
                          href: u.href,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: `${a} hover:text-primary transition-colors`,
                          "aria-label": u.label,
                          children: u.icon,
                        },
                        u.label
                      )
                    ),
                  }),
                ],
              }),
              w.jsxs("button", {
                className: "md:hidden flex flex-col gap-1.5 p-2",
                onClick: () => r(!n),
                "aria-label": "Toggle menu",
                children: [
                  w.jsx(re.span, {
                    animate: n ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 },
                    className: `block w-6 h-[2px] ${l}`,
                  }),
                  w.jsx(re.span, {
                    animate: n ? { opacity: 0 } : { opacity: 1 },
                    className: `block w-6 h-[2px] ${l}`,
                  }),
                  w.jsx(re.span, {
                    animate: n ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 },
                    className: `block w-6 h-[2px] ${l}`,
                  }),
                ],
              }),
            ],
          }),
        }),
        w.jsx(Hw, {
          children:
            n &&
            w.jsx(re.div, {
              initial: { opacity: 0, height: 0 },
              animate: { opacity: 1, height: "auto" },
              exit: { opacity: 0, height: 0 },
              className: "md:hidden glass-strong overflow-hidden",
              children: w.jsxs("div", {
                className: "px-4 py-6 flex flex-col gap-4",
                children: [
                  vg.map((u) =>
                    w.jsx(
                      "button",
                      {
                        onClick: () => i(u.href),
                        className:
                          "font-norse text-left text-base tracking-[0.15em] uppercase text-steel/80 hover:text-primary transition-colors py-2",
                        children: u.label,
                      },
                      u.label
                    )
                  ),
                  w.jsx("div", {
                    className:
                      "flex items-center gap-4 pt-2 border-t border-border",
                    children: xg.map((u) =>
                      w.jsx(
                        "a",
                        {
                          href: u.href,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className:
                            "text-steel/60 hover:text-primary transition-colors",
                          "aria-label": u.label,
                          children: u.icon,
                        },
                        u.label
                      )
                    ),
                  }),
                ],
              }),
            }),
        }),
      ],
    });
  },
  XM = () => {
    const [e, t] = S.useState("static"),
      n = S.useRef(null),
      r = S.useRef(null);
    return (
      S.useEffect(() => {
        const i = new Image();
        (i.src = "/images/hero-animated.webp"),
          (i.onload = () => {
            t((s) => (s === "video" ? "video" : "animated-webp"));
          });
        const o = n.current;
        o &&
          (o.oncanplaythrough = () => {
            t("video"), o.play().catch(() => {});
          });
      }, []),
      w.jsxs("section", {
        className: "relative h-screen w-full overflow-hidden",
        children: [
          w.jsx("div", {
            className: "absolute inset-0",
            children: w.jsx("img", {
              src: "/images/hero.png",
              alt: "Dogeus Maximusa - Arctic landscape",
              className: "w-full h-full object-cover",
            }),
          }),
          w.jsx(re.div, {
            className: "absolute inset-0",
            initial: { opacity: 0 },
            animate: {
              opacity: e === "animated-webp" || e === "video" ? 1 : 0,
            },
            transition: { duration: 1.5 },
            children: w.jsx("img", {
              ref: r,
              src: "/images/hero-animated.webp",
              alt: "",
              className: "w-full h-full object-cover",
              "aria-hidden": "true",
            }),
          }),
          w.jsx(re.div, {
            className: "absolute inset-0",
            initial: { opacity: 0 },
            animate: { opacity: e === "video" ? 1 : 0 },
            transition: { duration: 1.5 },
            children: w.jsx("video", {
              ref: n,
              src: "/images/hero-animated.mp4",
              muted: !0,
              loop: !0,
              playsInline: !0,
              preload: "auto",
              className: "w-full h-full object-cover",
            }),
          }),
          w.jsx("div", {
            className:
              "absolute inset-0 bg-gradient-to-b from-steel/30 via-steel/10 to-steel/50",
          }),
          w.jsxs("div", {
            className:
              "relative z-10 flex flex-col items-center justify-center h-full text-center px-4",
            children: [
              w.jsx(re.h1, {
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 1, delay: 0.3 },
                className:
                  "font-cinzel text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-snow tracking-wider text-shadow-glow leading-tight",
                children: "Dogeus Maximusa",
              }),
              w.jsx(re.p, {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 1, delay: 0.6 },
                className:
                  "font-norse text-lg sm:text-xl md:text-2xl text-snow/80 mt-4 md:mt-6 tracking-[0.15em] uppercase",
                children: "The X Empire belongs to Dogeus Maximusa. Much crown. Very throne.",
              }),
              w.jsxs(re.div, {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 1, delay: 0.9 },
                className:
                  "flex flex-col sm:flex-row items-center gap-4 mt-8 md:mt-12",
                children: [
                  w.jsx("a", {
                    href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0xd9713db550525e1f8d6b4b27b246b028793409c0",
                    className:
                      "ice-shimmer relative px-8 py-3 md:px-10 md:py-4 rounded-lg font-norse text-sm md:text-base tracking-[0.2em] uppercase bg-ice/20 text-snow border border-ice/40 hover:bg-ice/30 hover:border-ice/60 transition-all duration-300 animate-pulse-glow",
                    children: "Buy Now",
                  }),
                  w.jsxs("div", {
                    className: "flex items-center gap-4",
                    children: [
                      w.jsx("a", {
                        href: "https://t.me/DogeusMaximusa",
                        className:
                          "p-3 rounded-full glass text-snow/80 hover:text-snow hover:bg-ice/20 transition-all",
                        "aria-label": "Telegram",
                        children: w.jsx("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "22",
                          height: "22",
                          viewBox: "0 0 24 24",
                          fill: "currentColor",
                          children: w.jsx("path", {
                            d: "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z",
                          }),
                        }),
                      }),
                      w.jsx("a", {
                        href: "https://x.com/DogeusMaximusa",
                        className:
                          "p-3 rounded-full glass text-snow/80 hover:text-snow hover:bg-ice/20 transition-all",
                        "aria-label": "X / Twitter",
                        children: w.jsx("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "22",
                          height: "22",
                          viewBox: "0 0 24 24",
                          fill: "currentColor",
                          children: w.jsx("path", {
                            d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              w.jsx(re.div, {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { delay: 1.5 },
                className: "absolute bottom-8 left-1/2 -translate-x-1/2",
                children: w.jsx(re.div, {
                  animate: { y: [0, 8, 0] },
                  transition: { duration: 2, repeat: 1 / 0 },
                  className:
                    "w-6 h-10 rounded-full border-2 border-snow/40 flex justify-center pt-2",
                  children: w.jsx("div", {
                    className: "w-1 h-2 rounded-full bg-snow/60",
                  }),
                }),
              }),
            ],
          }),
        ],
      })
    );
  },
  qM = () => {
    const e = S.useRef(null),
      t = Al(e, { once: !0, margin: "-100px" });
    return w.jsxs("section", {
      id: "about",
      className: "relative py-20 md:py-32 overflow-hidden",
      children: [
        w.jsxs("div", {
          className: "absolute inset-0",
          children: [
            w.jsx("img", {
              src: "/images/about.png",
              alt: "",
              className: "w-full h-full object-cover",
              "aria-hidden": "true",
            }),
            w.jsx("div", {
              className:
                "absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background/80",
            }),
          ],
        }),
        w.jsxs("div", {
          ref: e,
          className: "relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8",
          children: [
            w.jsxs(re.div, {
              initial: { opacity: 0, y: 40 },
              animate: t ? { opacity: 1, y: 0 } : {},
              transition: { duration: 0.8 },
              className: "text-center mb-12",
              children: [
                w.jsx("h2", {
                  className:
                    "font-cinzel text-3xl sm:text-4xl md:text-5xl text-steel tracking-wide mb-2",
                  children: "The Legend",
                }),
                w.jsx("div", { className: "w-24 h-[1px] bg-ice mx-auto mt-4" }),
              ],
            }),
            w.jsxs(re.div, {
              initial: { opacity: 0, y: 30 },
              animate: t ? { opacity: 1, y: 0 } : {},
              transition: { duration: 0.8, delay: 0.2 },
              className:
                "glass-strong rounded-2xl p-6 md:p-10 max-w-3xl mx-auto",
              children: [
                w.jsx("p", {
                  className:
                    "font-norse text-base md:text-lg text-steel/90 leading-relaxed tracking-wide mb-6",
                  children:
                    "Long ago, beyond the Meme Seas and the Mountains of Infinite Wow, there rose a mighty kingdom known as the X Empire. At its heart ruled the legendary Dogeus Maximusa, a noble Shiba king whose wisdom was matched only by his memes. Upon his head rested the Much Crown, forged from golden stardust and the hopes of loyal citizens. Beneath him stood the Very Throne, an ancient seat said to amplify courage, loyalty, and exceptionally good vibes.",
                }),
                w.jsx("p", {
                  className:
                    "font-norse text-base md:text-lg text-steel/90 leading-relaxed tracking-wide mb-6",
                  children:
                    "Under Dogeus Maximusa’s reign, the Empire prospered. Traders crossed distant lands carrying tales of his greatness, while scholars filled libraries with stories of his deeds. When chaos threatened from the Shadow Realm of Doubt, Dogeus raised the Much Crown high. Its radiant glow united the people, and the Very Throne unleashed a wave of determination that drove darkness away.",
                }),
                w.jsx("p", {
                  className:
                    "font-norse text-base md:text-lg text-steel/90 leading-relaxed tracking-wide mb-8",
                  children:
                    "From that day forward, the X Empire flourished. Generations passed, yet the legend endured: Dogeus Maximusa, ruler of Much Crown and Very Throne, the eternal king whose spirit inspired endless wow across the stars.",
                }),
                w.jsxs("div", {
                  className: "glass rounded-xl p-4 md:p-6 text-center",
                  children: [
                    w.jsx("p", {
                      className:
                        "font-norse text-xs md:text-sm tracking-[0.2em] uppercase text-muted-foreground mb-2",
                      children: "Contract Address",
                    }),
                    w.jsx("p", {
                      className:
                        "font-cinzel text-xs md:text-lg text-primary tracking-wider break-all",
                      children: "0xd9713db550525e1f8d6b4b27b246b028793409c0",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  ZM = [
    {
      step: "I",
      title: "Create a EVM Wallet",
      description:
        "Download Metamask. Guard your seed phrase like the Night's Watch guards the Wall.",
      icon: w.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "32",
        height: "32",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
          w.jsx("path", {
            d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",
          }),
          w.jsx("path", { d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" }),
        ],
      }),
    },
    {
      step: "II",
      title: "Acquire ETH",
      description:
        "Purchase ETH from any exchange and send it to your wallet. You'll need it to trade on Uniswap.",
      icon: w.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "32",
        height: "32",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
          w.jsx("circle", { cx: "12", cy: "12", r: "10" }),
          w.jsx("path", { d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" }),
          w.jsx("path", { d: "M12 18V6" }),
        ],
      }),
    },
    {
      step: "III",
      title: "Go to Uniswap",
      description:
        "Navigate to Uniswap and connect your wallet. Search for $DOGEUS or paste the contract address.",
      icon: w.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "32",
        height: "32",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
          w.jsx("circle", { cx: "11", cy: "11", r: "8" }),
          w.jsx("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" }),
        ],
      }),
    },
    {
      step: "IV",
      title: "Buy $DOGEUS",
      description:
        "Swap your ETH for $DOGEUS. Set your slippage. Join the pack. The hunt begins.",
      icon: w.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "32",
        height: "32",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
          w.jsx("path", { d: "m3 16 4 4 4-4" }),
          w.jsx("path", { d: "M7 20V4" }),
          w.jsx("path", { d: "m21 8-4-4-4 4" }),
          w.jsx("path", { d: "M17 4v16" }),
        ],
      }),
    },
  ],
  JM = () => {
    const e = S.useRef(null),
      t = Al(e, { once: !0, margin: "-100px" });
    return w.jsxs("section", {
      id: "how-to-buy",
      className: "relative py-20 md:py-32 overflow-hidden",
      children: [
        w.jsxs("div", {
          className: "absolute inset-0",
          children: [
            w.jsx("img", {
              src: "/images/how-to-buy.png",
              alt: "",
              className: "w-full h-full object-cover",
              "aria-hidden": "true",
            }),
            w.jsx("div", {
              className:
                "absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80",
            }),
          ],
        }),
        w.jsxs("div", {
          ref: e,
          className: "relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
          children: [
            w.jsxs(re.div, {
              initial: { opacity: 0, y: 40 },
              animate: t ? { opacity: 1, y: 0 } : {},
              transition: { duration: 0.8 },
              className: "text-center mb-16",
              children: [
                w.jsx("h2", {
                  className:
                    "font-cinzel text-3xl sm:text-4xl md:text-5xl text-steel tracking-wide",
                  children: "How to Buy",
                }),
                w.jsx("div", { className: "w-24 h-[1px] bg-ice mx-auto mt-4" }),
              ],
            }),
            w.jsx("div", {
              className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
              children: ZM.map((n, r) =>
                w.jsxs(
                  re.div,
                  {
                    initial: { opacity: 0, y: 30 },
                    animate: t ? { opacity: 1, y: 0 } : {},
                    transition: { duration: 0.6, delay: r * 0.15 },
                    className:
                      "glass-strong rounded-2xl p-6 md:p-8 text-center group hover:scale-[1.02] transition-transform duration-300",
                    children: [
                      w.jsx("div", {
                        className:
                          "inline-flex items-center justify-center w-16 h-16 rounded-full bg-ice/10 text-primary mb-4 group-hover:bg-ice/20 transition-colors",
                        children: n.icon,
                      }),
                      w.jsxs("p", {
                        className:
                          "font-cinzel text-xs tracking-[0.3em] text-muted-foreground mb-2",
                        children: ["Step ", n.step],
                      }),
                      w.jsx("h3", {
                        className:
                          "font-cinzel text-lg md:text-xl text-steel mb-3",
                        children: n.title,
                      }),
                      w.jsx("p", {
                        className:
                          "font-norse text-sm md:text-base text-steel/70 leading-relaxed tracking-wide",
                        children: n.description,
                      }),
                    ],
                  },
                  n.step
                )
              ),
            }),
            w.jsx(re.div, {
              initial: { opacity: 0, y: 20 },
              animate: t ? { opacity: 1, y: 0 } : {},
              transition: { duration: 0.8, delay: 0.8 },
              className: "text-center mt-12",
              children: w.jsx("a", {
                href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0xd9713db550525e1f8d6b4b27b246b028793409c0",
                className:
                  "ice-shimmer relative inline-block px-10 py-4 rounded-lg font-norse text-sm tracking-[0.2em] uppercase bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 hover:border-primary/50 transition-all duration-300",
                children: "Buy Now on Pump.fun",
              }),
            }),
          ],
        }),
      ],
    });
  },
  eN = [
    { label: "Total Supply", value: "1,000,000,000", sublabel: "$DOGEUS" },
    { label: "Ownership", value: "Renounced", sublabel: "Fully Renounced" },
    { label: "Tax", value: "0%", sublabel: "Buy & Sell" },
    { label: "Liquidity", value: "Burned", sublabel: "LP Tokens" },
  ],
  tN = () => {
    const e = S.useRef(null),
      t = Al(e, { once: !0, margin: "-100px" });
    return w.jsxs("section", {
      id: "tokenomics",
      className: "relative py-20 md:py-32 overflow-hidden",
      children: [
        w.jsxs("div", {
          className: "absolute inset-0",
          children: [
            w.jsx("img", {
              src: "/images/tokenomics.png",
              alt: "",
              className: "w-full h-full object-cover",
              "aria-hidden": "true",
            }),
            w.jsx("div", {
              className:
                "absolute inset-0 bg-gradient-to-b from-background/85 via-background/70 to-background/85",
            }),
          ],
        }),
        w.jsxs("div", {
          ref: e,
          className: "relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
          children: [
            w.jsxs(re.div, {
              initial: { opacity: 0, y: 40 },
              animate: t ? { opacity: 1, y: 0 } : {},
              transition: { duration: 0.8 },
              className: "text-center mb-16",
              children: [
                w.jsx("h2", {
                  className:
                    "font-cinzel text-3xl sm:text-4xl md:text-5xl text-steel tracking-wide",
                  children: "Tokenomics",
                }),
                w.jsx("div", { className: "w-24 h-[1px] bg-ice mx-auto mt-4" }),
              ],
            }),
            w.jsx("div", {
              className: "grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10",
              children: eN.map((n, r) =>
                w.jsxs(
                  re.div,
                  {
                    initial: { opacity: 0, scale: 0.9 },
                    animate: t ? { opacity: 1, scale: 1 } : {},
                    transition: { duration: 0.5, delay: r * 0.1 },
                    className:
                      "glass-strong rounded-2xl p-5 md:p-8 text-center group hover:scale-[1.03] transition-transform duration-300",
                    children: [
                      w.jsx("p", {
                        className:
                          "font-norse text-xs md:text-sm tracking-[0.2em] uppercase text-muted-foreground mb-2",
                        children: n.label,
                      }),
                      w.jsx("p", {
                        className:
                          "font-cinzel text-xl md:text-2xl lg:text-3xl text-steel mb-1",
                        children: n.value,
                      }),
                      w.jsx("p", {
                        className:
                          "font-norse text-xs md:text-sm text-muted-foreground tracking-wide",
                        children: n.sublabel,
                      }),
                    ],
                  },
                  n.label
                )
              ),
            }),
            w.jsxs(re.div, {
              initial: { opacity: 0, y: 20 },
              animate: t ? { opacity: 1, y: 0 } : {},
              transition: { duration: 0.8, delay: 0.5 },
              className:
                "glass-strong rounded-2xl p-6 md:p-8 text-center max-w-2xl mx-auto mb-10",
              children: [
                w.jsx("p", {
                  className:
                    "font-norse text-xs md:text-sm tracking-[0.2em] uppercase text-muted-foreground mb-2",
                  children: "Contract Address",
                }),
                w.jsx("p", {
                  className:
                    "font-cinzel text-xs md:text-lg text-primary tracking-wider break-all",
                  children: "0xd9713db550525e1f8d6b4b27b246b028793409c0",
                }),
              ],
            }),
            w.jsxs(re.div, {
              initial: { opacity: 0, y: 20 },
              animate: t ? { opacity: 1, y: 0 } : {},
              transition: { duration: 0.8, delay: 0.7 },
              className:
                "flex flex-col sm:flex-row items-center justify-center gap-4",
              children: [
                w.jsx("a", {
                  href: "https://www.dextools.io/app/en/ether/pair-explorer/0xd9713db550525e1f8d6b4b27b246b028793409c0",
                  className:
                    "ice-shimmer relative px-8 py-3 rounded-lg font-norse text-sm tracking-[0.2em] uppercase bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 hover:border-primary/50 transition-all duration-300",
                  children: "View Chart",
                }),
                w.jsx("a", {
                  href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0xd9713db550525e1f8d6b4b27b246b028793409c0",
                  className:
                    "ice-shimmer relative px-8 py-3 rounded-lg font-norse text-sm tracking-[0.2em] uppercase bg-ice/20 text-steel border border-ice/40 hover:bg-ice/30 hover:border-ice/60 transition-all duration-300 animate-pulse-glow",
                  children: "Buy $DOGEUS",
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  hr = [
    {
      src: "/images/gallery/gallery-1.png",
      alt: "White Wolf holding Ethereum coin",
    },
    { src: "/images/gallery/gallery-2.png", alt: "White Wolf by the campfire" },
    {
      src: "/images/gallery/gallery-3.png",
      alt: "White Wolf with ice rune sword",
    },
    {
      src: "/images/gallery/gallery-4.png",
      alt: "White Wolf close-up in snow",
    },
    {
      src: "/images/gallery/gallery-5.png",
      alt: "White Wolf at sunset battlefield",
    },
    {
      src: "/images/gallery/gallery-6.png",
      alt: "White Wolf charging through snow",
    },
    {
      src: "/images/gallery/gallery-7.png",
      alt: "White Wolf making snow angel",
    },
  ],
  nN = () => {
    const [e, t] = S.useState(null),
      n = Math.ceil(hr.length / 2),
      r = hr.slice(0, n),
      i = hr.slice(n),
      o = (u) => t(u),
      s = () => t(null),
      a = () => {
        e !== null && t(e === 0 ? hr.length - 1 : e - 1);
      },
      l = () => {
        e !== null && t(e === hr.length - 1 ? 0 : e + 1);
      };
    return w.jsxs("section", {
      id: "gallery",
      className: "relative py-20 md:py-32 overflow-hidden bg-frost",
      children: [
        w.jsx("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12",
          children: w.jsxs("div", {
            className: "text-center",
            children: [
              w.jsx("h2", {
                className:
                  "font-cinzel text-3xl sm:text-4xl md:text-5xl text-steel tracking-wide",
                children: "The Pack's Gallery",
              }),
              w.jsx("div", { className: "w-24 h-[1px] bg-ice mx-auto mt-4" }),
            ],
          }),
        }),
        w.jsx("div", {
          className: "overflow-hidden mb-4",
          children: w.jsx("div", {
            className: "flex animate-marquee-left w-max",
            children: [...r, ...r].map((u, c) =>
              w.jsx(
                "button",
                {
                  onClick: () => o(c % r.length),
                  className:
                    "flex-shrink-0 mx-2 rounded-xl overflow-hidden group",
                  children: w.jsx("img", {
                    src: u.src,
                    alt: u.alt,
                    className:
                      "h-40 sm:h-48 md:h-56 w-auto object-cover rounded-xl group-hover:scale-105 transition-transform duration-300",
                    loading: "lazy",
                  }),
                },
                `r1-${c}`
              )
            ),
          }),
        }),
        w.jsx("div", {
          className: "overflow-hidden",
          children: w.jsx("div", {
            className: "flex animate-marquee-right w-max",
            children: [...i, ...i].map((u, c) =>
              w.jsx(
                "button",
                {
                  onClick: () => o(r.length + (c % i.length)),
                  className:
                    "flex-shrink-0 mx-2 rounded-xl overflow-hidden group",
                  children: w.jsx("img", {
                    src: u.src,
                    alt: u.alt,
                    className:
                      "h-40 sm:h-48 md:h-56 w-auto object-cover rounded-xl group-hover:scale-105 transition-transform duration-300",
                    loading: "lazy",
                  }),
                },
                `r2-${c}`
              )
            ),
          }),
        }),
        w.jsx(Hw, {
          children:
            e !== null &&
            w.jsx(re.div, {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              className:
                "fixed inset-0 z-[60] flex items-center justify-center bg-deep-north/90 backdrop-blur-sm",
              onClick: s,
              children: w.jsxs(re.div, {
                initial: { scale: 0.9, opacity: 0 },
                animate: { scale: 1, opacity: 1 },
                exit: { scale: 0.9, opacity: 0 },
                className: "relative max-w-4xl max-h-[85vh] mx-4",
                onClick: (u) => u.stopPropagation(),
                children: [
                  w.jsx("img", {
                    src: hr[e].src,
                    alt: hr[e].alt,
                    className:
                      "max-w-full max-h-[80vh] object-contain rounded-xl",
                  }),
                  w.jsx("button", {
                    onClick: s,
                    className:
                      "absolute -top-4 -right-4 w-10 h-10 rounded-full glass flex items-center justify-center text-snow hover:bg-ice/20 transition-colors",
                    "aria-label": "Close",
                    children: w.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "20",
                      height: "20",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: "2",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      children: [
                        w.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
                        w.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
                      ],
                    }),
                  }),
                  w.jsx("button", {
                    onClick: a,
                    className:
                      "absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass flex items-center justify-center text-snow hover:bg-ice/20 transition-colors",
                    "aria-label": "Previous",
                    children: w.jsx("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "20",
                      height: "20",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: "2",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      children: w.jsx("polyline", {
                        points: "15 18 9 12 15 6",
                      }),
                    }),
                  }),
                  w.jsx("button", {
                    onClick: l,
                    className:
                      "absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass flex items-center justify-center text-snow hover:bg-ice/20 transition-colors",
                    "aria-label": "Next",
                    children: w.jsx("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "20",
                      height: "20",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: "2",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      children: w.jsx("polyline", { points: "9 18 15 12 9 6" }),
                    }),
                  }),
                ],
              }),
            }),
        }),
      ],
    });
  },
  rN = () => {
    const e = S.useRef(null),
      t = Al(e, { once: !0, margin: "-100px" });
    return w.jsxs("section", {
      className: "relative py-24 md:py-36 overflow-hidden",
      children: [
        w.jsxs("div", {
          className: "absolute inset-0",
          children: [
            w.jsx("img", {
              src: "/images/cta.png",
              alt: "",
              className: "w-full h-full object-cover",
              "aria-hidden": "true",
            }),
            w.jsx("div", {
              className:
                "absolute inset-0 bg-gradient-to-b from-steel/60 via-steel/40 to-steel/70",
            }),
          ],
        }),
        w.jsxs("div", {
          ref: e,
          className:
            "relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
          children: [
            w.jsx(re.h2, {
              initial: { opacity: 0, y: 40 },
              animate: t ? { opacity: 1, y: 0 } : {},
              transition: { duration: 0.8 },
              className:
                "font-cinzel text-3xl sm:text-4xl md:text-6xl text-snow tracking-wider text-shadow-glow mb-4",
              children: "Join the Pack",
            }),
            w.jsx(re.p, {
              initial: { opacity: 0, y: 20 },
              animate: t ? { opacity: 1, y: 0 } : {},
              transition: { duration: 0.8, delay: 0.2 },
              className:
                "font-norse text-lg md:text-xl text-snow/80 tracking-[0.15em] uppercase mb-10",
              children: "The lone wolf dies, but the pack survives",
            }),
            w.jsx(re.div, {
              initial: { opacity: 0, y: 20 },
              animate: t ? { opacity: 1, y: 0 } : {},
              transition: { duration: 0.8, delay: 0.4 },
              className:
                "flex flex-col sm:flex-row items-center justify-center gap-4 mb-10",
              children: w.jsx("a", {
                href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0xd9713db550525e1f8d6b4b27b246b028793409c0",
                className:
                  "ice-shimmer relative px-10 py-4 rounded-lg font-norse text-sm md:text-base tracking-[0.2em] uppercase bg-ice/20 text-snow border border-ice/40 hover:bg-ice/30 hover:border-ice/60 transition-all duration-300 animate-pulse-glow",
                children: "Buy $DOGEUS",
              }),
            }),
            w.jsxs(re.div, {
              initial: { opacity: 0 },
              animate: t ? { opacity: 1 } : {},
              transition: { duration: 0.8, delay: 0.6 },
              className: "flex items-center justify-center gap-6",
              children: [
                w.jsx("a", {
                  href: "https://t.me/DogeusMaximusa",
                  className:
                    "p-3 rounded-full glass text-snow/70 hover:text-snow hover:bg-ice/20 transition-all",
                  "aria-label": "Telegram",
                  children: w.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    children: w.jsx("path", {
                      d: "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z",
                    }),
                  }),
                }),
                w.jsx("a", {
                  href: "https://x.com/DogeusMaximusa",
                  className:
                    "p-3 rounded-full glass text-snow/70 hover:text-snow hover:bg-ice/20 transition-all",
                  "aria-label": "X / Twitter",
                  children: w.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    children: w.jsx("path", {
                      d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
                    }),
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  iN = () =>
    w.jsxs("footer", {
      className: "relative overflow-hidden",
      children: [
        w.jsxs("div", {
          className: "absolute inset-0",
          children: [
            w.jsx("img", {
              src: "/images/footer.png",
              alt: "",
              className: "w-full h-full object-cover",
              "aria-hidden": "true",
            }),
            w.jsx("div", {
              className:
                "absolute inset-0 bg-gradient-to-t from-deep-north via-deep-north/90 to-deep-north/60",
            }),
          ],
        }),
        w.jsxs("div", {
          className:
            "relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20",
          children: [
            w.jsxs("div", {
              className: "text-center mb-8",
              children: [
                w.jsx("h3", {
                  className:
                    "font-cinzel text-2xl md:text-3xl text-snow/90 tracking-wider mb-4",
                  children: "Dogeus Maximusa",
                }),
                w.jsx("p", {
                  className:
                    "font-norse text-sm md:text-base text-snow/50 tracking-[0.1em] max-w-md mx-auto",
                  children: "$DOGEUS on Ethereum",
                }),
              ],
            }),
            w.jsxs("div", {
              className: "flex items-center justify-center gap-6 mb-10",
              children: [
                w.jsx("a", {
                  href: "https://t.me/DogeusMaximusa",
                  className:
                    "p-3 rounded-full text-snow/40 hover:text-snow/80 hover:bg-snow/5 transition-all",
                  "aria-label": "Telegram",
                  children: w.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "20",
                    height: "20",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    children: w.jsx("path", {
                      d: "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z",
                    }),
                  }),
                }),
                w.jsx("a", {
                  href: "https://x.com/DogeusMaximusa",
                  className:
                    "p-3 rounded-full text-snow/40 hover:text-snow/80 hover:bg-snow/5 transition-all",
                  "aria-label": "X / Twitter",
                  children: w.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "20",
                    height: "20",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    children: w.jsx("path", {
                      d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
                    }),
                  }),
                }),
              ],
            }),
            w.jsxs("div", {
              className: "border-t border-snow/10 pt-8",
              children: [
                w.jsx("p", {
                  className:
                    "font-norse text-xs md:text-sm text-snow/30 text-center leading-relaxed max-w-2xl mx-auto tracking-wide",
                  children:
                    "This is not financial advice. $DOGEUS is a meme coin with no intrinsic value or expectation of financial return. There is no formal team or roadmap. The coin is for entertainment purposes only. Do your own research before making any investment decisions.",
                }),
                w.jsxs("p", {
                  className:
                    "font-norse text-xs text-snow/20 text-center mt-4 tracking-wider",
                  children: [
                    "© ",
                    new Date().getFullYear(),
                    " Dogeus Maximusa. All rights reserved.",
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  oN = () =>
    w.jsxs("div", {
      className: "relative min-h-screen bg-background overflow-x-hidden",
      children: [
        w.jsx(JP, {}),
        w.jsx(YM, {}),
        w.jsxs("main", {
          children: [
            w.jsx(XM, {}),
            w.jsx(qM, {}),
            w.jsx(JM, {}),
            w.jsx(tN, {}),
            w.jsx(nN, {}),
            w.jsx(rN, {}),
          ],
        }),
        w.jsx(iN, {}),
      ],
    }),
  sN = () => {
    const e = wx();
    return (
      S.useEffect(() => {
        console.error(
          "404 Error: User attempted to access non-existent route:",
          e.pathname
        );
      }, [e.pathname]),
      w.jsx("div", {
        className: "flex min-h-screen items-center justify-center bg-muted",
        children: w.jsxs("div", {
          className: "text-center",
          children: [
            w.jsx("h1", {
              className: "mb-4 text-4xl font-bold",
              children: "404",
            }),
            w.jsx("p", {
              className: "mb-4 text-xl text-muted-foreground",
              children: "Oops! Page not found",
            }),
            w.jsx("a", {
              href: "/",
              className: "text-primary underline hover:text-primary/90",
              children: "Return to Home",
            }),
          ],
        }),
      })
    );
  },
  aN = new dP(),
  lN = () =>
    w.jsx(hP, {
      client: aN,
      children: w.jsxs(BT, {
        children: [
          w.jsx(bC, {}),
          w.jsx(nb, {}),
          w.jsx(ZP, {
            children: w.jsxs(YP, {
              children: [
                w.jsx(Vc, { path: "/", element: w.jsx(oN, {}) }),
                w.jsx(Vc, { path: "*", element: w.jsx(sN, {}) }),
              ],
            }),
          }),
        ],
      }),
    });
W0(document.getElementById("root")).render(w.jsx(lN, {}));
