// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"e81nl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ScoresOnly", ()=>ScoresOnly);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _reactHooks = require("@nodecg/react-hooks");
var _styledComponents = require("styled-components");
var _styledComponentsDefault = parcelHelpers.interopDefault(_styledComponents);
var _client = require("react-dom/client");
var _teamScoreBox = require("./components/TeamScoreBox");
function ScoresOnly() {
    const [matchData, setMatchData] = (0, _reactHooks.useReplicant)("match", {
        bundle: "squidwest-layout-controls",
        defaultValue: {
            matchInfo: "Round 1",
            teamA: "Team A",
            teamB: "Team B",
            scoreA: 0,
            scoreB: 0,
            matchColor: {
                index: -1,
                name: "Unknown",
                teamA: "#ffffff",
                teamB: "#ffffff"
            },
            swapColor: false
        }
    });
    return /*#__PURE__*/ (0, _reactDefault.default).createElement(StyledOmnibarOnly, {
        __source: {
            fileName: "src/graphics/ScoresOnly.tsx",
            lineNumber: 25,
            columnNumber: 10
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(Content, {
        __source: {
            fileName: "src/graphics/ScoresOnly.tsx",
            lineNumber: 26,
            columnNumber: 4
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(ScoreRow, {
        __source: {
            fileName: "src/graphics/ScoresOnly.tsx",
            lineNumber: 27,
            columnNumber: 5
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _teamScoreBox.TeamScoreBox), {
        team: matchData?.teamA || "",
        score: matchData?.scoreA || 0,
        left: true,
        __source: {
            fileName: "src/graphics/ScoresOnly.tsx",
            lineNumber: 28,
            columnNumber: 6
        },
        __self: this
    }), /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _teamScoreBox.TeamScoreBox), {
        team: matchData?.teamB || "",
        score: matchData?.scoreB || 0,
        left: false,
        __source: {
            fileName: "src/graphics/ScoresOnly.tsx",
            lineNumber: 29,
            columnNumber: 6
        },
        __self: this
    }))));
}
const StyledOmnibarOnly = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "ScoresOnly__StyledOmnibarOnly",
    componentId: "sc-c4dl64-0"
})([
    "position:relative;width:1920px;height:1080px;background-color:transparent;"
]);
const Content = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "ScoresOnly__Content",
    componentId: "sc-c4dl64-1"
})([
    "padding:0 350px 50px 350px;position:relative;display:flex;flex-direction:column;justify-content:flex-end;width:100%;height:100%;"
]);
const ScoreRow = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "ScoresOnly__ScoreRow",
    componentId: "sc-c4dl64-2"
})([
    "position:relative;display:flex;flex-direction:row;align-items:center;justify-content:space-between;"
]);
const root = (0, _client.createRoot)(document.getElementById("root"));
root.render(/*#__PURE__*/ (0, _reactDefault.default).createElement(ScoresOnly, {
    __source: {
        fileName: "src/graphics/ScoresOnly.tsx",
        lineNumber: 47,
        columnNumber: 13
    },
    __self: undefined
}));

},{"react":"bH1AQ","styled-components":"9xpRL","react-dom/client":"i5cPj","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG","@nodecg/react-hooks":"audz3","./components/TeamScoreBox":"6sL9p"}],"6sL9p":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TeamScoreBox", ()=>TeamScoreBox);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _styledComponents = require("styled-components");
var _styledComponentsDefault = parcelHelpers.interopDefault(_styledComponents);
var _fittedText = require("./FittedText");
const TeamScoreBox = ({ team, score, left })=>{
    return /*#__PURE__*/ (0, _reactDefault.default).createElement(TeamAndScore, {
        $left: left,
        __source: {
            fileName: "src/graphics/components/TeamScoreBox.tsx",
            lineNumber: 14,
            columnNumber: 10
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(TeamBox, {
        __source: {
            fileName: "src/graphics/components/TeamScoreBox.tsx",
            lineNumber: 15,
            columnNumber: 4
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _fittedText.FittedText), {
        text: team,
        font: "Splatoon",
        align: left ? "left" : "right",
        maxWidth: 470,
        __source: {
            fileName: "src/graphics/components/TeamScoreBox.tsx",
            lineNumber: 16,
            columnNumber: 5
        },
        __self: undefined
    })), /*#__PURE__*/ (0, _reactDefault.default).createElement(ScoreBox, {
        __source: {
            fileName: "src/graphics/components/TeamScoreBox.tsx",
            lineNumber: 18,
            columnNumber: 4
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _fittedText.FittedText), {
        text: `${score}`,
        font: "Splatoon",
        align: "center",
        maxWidth: 95,
        __source: {
            fileName: "src/graphics/components/TeamScoreBox.tsx",
            lineNumber: 19,
            columnNumber: 5
        },
        __self: undefined
    })));
};
const TeamAndScore = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "TeamScoreBox__TeamAndScore",
    componentId: "sc-1lgj0ls-0"
})([
    "display:flex;align-items:center;justify-content:flex-end;flex-direction:",
    ";",
    " height:5rem;width:100%;font-size:3rem;color:var(--teams-text);background-color:var(--teams-inner);border:8px solid var(--teams-border);box-sizing:content-box;"
], ({ $left })=>$left ? "row" : "row-reverse", ({ $left })=>$left ? (0, _styledComponents.css)([
        "margin-right:10px;"
    ]) : (0, _styledComponents.css)([
        "margin-left:10px;"
    ]));
const TeamBox = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "TeamScoreBox__TeamBox",
    componentId: "sc-1lgj0ls-1"
})([
    "padding:5px;box-sizing:border-box;"
]);
const ScoreBox = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "TeamScoreBox__ScoreBox",
    componentId: "sc-1lgj0ls-2"
})([
    "display:flex;align-items:center;justify-content:center;width:100px;height:100%;font-size:5rem;color:var(--teams-score-text);background-color:var(--teams-score-inner);"
]);

},{"react":"bH1AQ","styled-components":"9xpRL","./FittedText":"f5NVk","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"f5NVk":[function(require,module,exports) {
/**
 * Horizontally squishes text within a max width
 * 
 * A React version of:
 * fitted-text -  https://github.com/inkfarer/fitted-text
 * sc-fitted-text - https://github.com/SupportClass/sc-fitted-text
 * 
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FittedText", ()=>FittedText);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _fontfaceobserver = require("fontfaceobserver");
var _fontfaceobserverDefault = parcelHelpers.interopDefault(_fontfaceobserver);
var _styledComponents = require("styled-components");
var _styledComponentsDefault = parcelHelpers.interopDefault(_styledComponents);
const justifyAlign = (align)=>{
    switch(align){
        case "center":
            return "center";
        case "right":
            return "flex-end";
        case "left":
            return "unset";
    }
};
const FittedText = ({ text, maxWidth, align, font })=>{
    const textFit = (0, _react.useRef)(null);
    const [textScale, setTextScale] = (0, _react.useState)(0);
    (0, _react.useEffect)(()=>{
        const observer = new (0, _fontfaceobserverDefault.default)(font).load().then(()=>{
            if (!textFit.current) return;
            const width = textFit.current.scrollWidth;
            if (width > maxWidth) setTextScale(maxWidth / width);
            else setTextScale(1);
        }).catch(()=>{
            setTextScale(1);
        });
    }, [
        text,
        maxWidth,
        align,
        font,
        setTextScale
    ]);
    return /*#__PURE__*/ (0, _reactDefault.default).createElement(TextSpace, {
        $maxWidth: maxWidth,
        $align: align,
        __source: {
            fileName: "src/graphics/components/FittedText.tsx",
            lineNumber: 50,
            columnNumber: 10
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(TextFit, {
        ref: textFit,
        $scale: textScale,
        $font: font,
        $align: align,
        __source: {
            fileName: "src/graphics/components/FittedText.tsx",
            lineNumber: 51,
            columnNumber: 4
        },
        __self: undefined
    }, text));
};
const TextSpace = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "FittedText__TextSpace",
    componentId: "sc-te1i8m-0"
})([
    "position:relative;display:flex;justify-content:",
    ";white-space:nowrap;max-width:",
    ";"
], ({ $align })=>justifyAlign($align), ({ $maxWidth })=>$maxWidth > 0 ? `${$maxWidth}px` : `unset`);
const TextFit = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "FittedText__TextFit",
    componentId: "sc-te1i8m-1"
})([
    "text-align:",
    ";transform-origin:",
    ";width:max-content;transform:scaleX(",
    ");font-family:",
    ";"
], ({ $align })=>$align, ({ $align })=>`${$align} center`, ({ $scale })=>$scale, ({ $font })=>$font);

},{"react":"bH1AQ","fontfaceobserver":"6uSsZ","styled-components":"9xpRL","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"6uSsZ":[function(require,module,exports) {
/* Font Face Observer v2.3.0 - © Bram Stein. License: BSD-3-Clause */ (function() {
    function p(a, c) {
        document.addEventListener ? a.addEventListener("scroll", c, !1) : a.attachEvent("scroll", c);
    }
    function u(a) {
        document.body ? a() : document.addEventListener ? document.addEventListener("DOMContentLoaded", function b() {
            document.removeEventListener("DOMContentLoaded", b);
            a();
        }) : document.attachEvent("onreadystatechange", function g() {
            if ("interactive" == document.readyState || "complete" == document.readyState) document.detachEvent("onreadystatechange", g), a();
        });
    }
    function w(a) {
        this.g = document.createElement("div");
        this.g.setAttribute("aria-hidden", "true");
        this.g.appendChild(document.createTextNode(a));
        this.h = document.createElement("span");
        this.i = document.createElement("span");
        this.m = document.createElement("span");
        this.j = document.createElement("span");
        this.l = -1;
        this.h.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
        this.i.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
        this.j.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
        this.m.style.cssText = "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";
        this.h.appendChild(this.m);
        this.i.appendChild(this.j);
        this.g.appendChild(this.h);
        this.g.appendChild(this.i);
    }
    function x(a, c) {
        a.g.style.cssText = "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" + c + ";";
    }
    function B(a) {
        var c = a.g.offsetWidth, b = c + 100;
        a.j.style.width = b + "px";
        a.i.scrollLeft = b;
        a.h.scrollLeft = a.h.scrollWidth + 100;
        return a.l !== c ? (a.l = c, !0) : !1;
    }
    function C(a, c) {
        function b() {
            var e = g;
            B(e) && null !== e.g.parentNode && c(e.l);
        }
        var g = a;
        p(a.h, b);
        p(a.i, b);
        B(a);
    }
    function D(a, c, b) {
        c = c || {};
        b = b || window;
        this.family = a;
        this.style = c.style || "normal";
        this.weight = c.weight || "normal";
        this.stretch = c.stretch || "normal";
        this.context = b;
    }
    var E = null, F = null, G = null, H = null;
    function I(a) {
        null === F && (M(a) && /Apple/.test(window.navigator.vendor) ? (a = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent), F = !!a && 603 > parseInt(a[1], 10)) : F = !1);
        return F;
    }
    function M(a) {
        null === H && (H = !!a.document.fonts);
        return H;
    }
    function N(a, c) {
        var b = a.style, g = a.weight;
        if (null === G) {
            var e = document.createElement("div");
            try {
                e.style.font = "condensed 100px sans-serif";
            } catch (q) {}
            G = "" !== e.style.font;
        }
        return [
            b,
            g,
            G ? a.stretch : "",
            "100px",
            c
        ].join(" ");
    }
    D.prototype.load = function(a, c) {
        var b = this, g = a || "BESbswy", e = 0, q = c || 3E3, J = (new Date).getTime();
        return new Promise(function(K, L) {
            if (M(b.context) && !I(b.context)) {
                var O = new Promise(function(r, t) {
                    function h() {
                        (new Date).getTime() - J >= q ? t(Error("" + q + "ms timeout exceeded")) : b.context.document.fonts.load(N(b, '"' + b.family + '"'), g).then(function(n) {
                            1 <= n.length ? r() : setTimeout(h, 25);
                        }, t);
                    }
                    h();
                }), P = new Promise(function(r, t) {
                    e = setTimeout(function() {
                        t(Error("" + q + "ms timeout exceeded"));
                    }, q);
                });
                Promise.race([
                    P,
                    O
                ]).then(function() {
                    clearTimeout(e);
                    K(b);
                }, L);
            } else u(function() {
                function r() {
                    var d;
                    if (d = -1 != k && -1 != l || -1 != k && -1 != m || -1 != l && -1 != m) (d = k != l && k != m && l != m) || (null === E && (d = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent), E = !!d && (536 > parseInt(d[1], 10) || 536 === parseInt(d[1], 10) && 11 >= parseInt(d[2], 10))), d = E && (k == y && l == y && m == y || k == z && l == z && m == z || k == A && l == A && m == A)), d = !d;
                    d && (null !== f.parentNode && f.parentNode.removeChild(f), clearTimeout(e), K(b));
                }
                function t() {
                    if ((new Date).getTime() - J >= q) null !== f.parentNode && f.parentNode.removeChild(f), L(Error("" + q + "ms timeout exceeded"));
                    else {
                        var d = b.context.document.hidden;
                        if (!0 === d || void 0 === d) k = h.g.offsetWidth, l = n.g.offsetWidth, m = v.g.offsetWidth, r();
                        e = setTimeout(t, 50);
                    }
                }
                var h = new w(g), n = new w(g), v = new w(g), k = -1, l = -1, m = -1, y = -1, z = -1, A = -1, f = document.createElement("div");
                f.dir = "ltr";
                x(h, N(b, "sans-serif"));
                x(n, N(b, "serif"));
                x(v, N(b, "monospace"));
                f.appendChild(h.g);
                f.appendChild(n.g);
                f.appendChild(v.g);
                b.context.document.body.appendChild(f);
                y = h.g.offsetWidth;
                z = n.g.offsetWidth;
                A = v.g.offsetWidth;
                t();
                C(h, function(d) {
                    k = d;
                    r();
                });
                x(h, N(b, '"' + b.family + '",sans-serif'));
                C(n, function(d) {
                    l = d;
                    r();
                });
                x(n, N(b, '"' + b.family + '",serif'));
                C(v, function(d) {
                    m = d;
                    r();
                });
                x(v, N(b, '"' + b.family + '",monospace'));
            });
        });
    };
    module.exports = D;
})();

},{}]},["e81nl"], "e81nl", "parcelRequired251")

//# sourceMappingURL=scoresonly.6fdc09b4.js.map
