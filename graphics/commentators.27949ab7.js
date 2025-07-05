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
})({"iTT7o":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Commentators", ()=>Commentators);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _styledComponents = require("styled-components");
var _styledComponentsDefault = parcelHelpers.interopDefault(_styledComponents);
var _client = require("react-dom/client");
var _nameplate = require("./components/Nameplate");
var _reactHooks = require("@nodecg/react-hooks");
var LoadState;
(function(LoadState) {
    LoadState[LoadState["LS_NotLoaded"] = 0] = "LS_NotLoaded";
    LoadState[LoadState["LS_Loaded"] = 1] = "LS_Loaded";
    LoadState[LoadState["LS_Done"] = 2] = "LS_Done";
})(LoadState || (LoadState = {}));
const AnimationDuration = 1000;
function Commentators() {
    const [show, setShow] = (0, _react.useState)(false);
    const [loaded, setLoaded] = (0, _react.useState)(0);
    const [commentatorList] = (0, _reactHooks.useReplicant)("commentatorList", {
        bundle: "squidwest-layout-controls",
        defaultValue: []
    });
    const [settings] = (0, _reactHooks.useReplicant)("commentatorSettings", {
        bundle: "squidwest-layout-controls",
        defaultValue: {
            autoShow: true,
            delay: 3000,
            autoHide: true,
            lifetime: 5000
        }
    });
    const [showSponsor, setShowSponsor] = (0, _react.useState)(false);
    (0, _react.useEffect)(()=>{
        if (!commentatorList) return;
        if (!settings) return;
        if (loaded === 0) setLoaded(1);
    }, [
        commentatorList,
        settings
    ]);
    const onAutoHide = (0, _react.useCallback)(()=>{
        setShow(false);
    }, [
        setShow
    ]);
    const setCurrentShow = (0, _react.useCallback)((newShow)=>{
        if (!settings) return;
        if (newShow && settings.autoHide) window.setTimeout(onAutoHide, Math.max(AnimationDuration + settings.lifetime, AnimationDuration));
        setShow(newShow);
    }, [
        setShow,
        onAutoHide,
        settings
    ]);
    const onAutoShow = (0, _react.useCallback)(()=>{
        setCurrentShow(true);
    }, [
        setCurrentShow
    ]);
    const onCommsControl = (0, _react.useCallback)((value)=>{
        setCurrentShow(value);
    }, [
        setCurrentShow
    ]);
    const onIpgControl = (0, _react.useCallback)((value)=>{
        setShowSponsor(value);
    }, [
        setShowSponsor
    ]);
    (0, _reactHooks.useListenFor)("commsControl", onCommsControl, {
        bundle: "squidwest-layout-controls"
    });
    (0, _reactHooks.useListenFor)("ipgControl", onIpgControl, {
        bundle: "chishoals-layouts"
    });
    (0, _react.useEffect)(()=>{
        if (settings && loaded === 1) {
            if (settings.autoShow) window.setTimeout(onAutoShow, Math.max(settings.delay, 0));
            setLoaded(2);
        }
    }, [
        loaded,
        settings,
        onAutoShow
    ]);
    return /*#__PURE__*/ (0, _reactDefault.default).createElement(StyledCommentators, {
        __source: {
            fileName: "src/graphics/Commentators.tsx",
            lineNumber: 73,
            columnNumber: 10
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(Content, {
        __source: {
            fileName: "src/graphics/Commentators.tsx",
            lineNumber: 74,
            columnNumber: 4
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(IpgLogo, {
        $show: showSponsor,
        src: "/bundles/chishoals-layouts/images/I_Play_Games.png",
        alt: "I Play Games Logo",
        __source: {
            fileName: "src/graphics/Commentators.tsx",
            lineNumber: 75,
            columnNumber: 5
        },
        __self: this
    }), /*#__PURE__*/ (0, _reactDefault.default).createElement(LowerThirds, {
        __source: {
            fileName: "src/graphics/Commentators.tsx",
            lineNumber: 76,
            columnNumber: 5
        },
        __self: this
    }, commentatorList && commentatorList.map((commentator, index)=>/*#__PURE__*/ (0, _reactDefault.default).createElement(NameplateWrapper, {
            key: index,
            __source: {
                fileName: "src/graphics/Commentators.tsx",
                lineNumber: 77,
                columnNumber: 70
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _nameplate.Nameplate), {
            show: show,
            name: commentator.name,
            pronouns: commentator.pronouns,
            tag: commentator.tag,
            animationLength: AnimationDuration,
            __source: {
                fileName: "src/graphics/Commentators.tsx",
                lineNumber: 78,
                columnNumber: 8
            },
            __self: this
        }))))));
}
const StyledCommentators = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "Commentators__StyledCommentators",
    componentId: "sc-1jwennl-0"
})([
    "position:relative;width:1920px;height:1080px;background-color:transparent;"
]);
const Content = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "Commentators__Content",
    componentId: "sc-1jwennl-1"
})([
    "position:relative;width:100%;height:100%;display:flex;flex-direction:column-reverse;"
]);
const LowerThirds = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "Commentators__LowerThirds",
    componentId: "sc-1jwennl-2"
})([
    "position:relative;margin-bottom:50px;display:flex;justify-content:space-evenly;"
]);
const NameplateWrapper = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "Commentators__NameplateWrapper",
    componentId: "sc-1jwennl-3"
})([
    "margin:20px 0;"
]);
const IpgLogo = (0, _styledComponentsDefault.default).img.withConfig({
    displayName: "Commentators__IpgLogo",
    componentId: "sc-1jwennl-4"
})([
    "position:absolute;margin-bottom:25px;margin-left:25px;width:700px;object-fit:contain;opacity:",
    ";transition:opacity 1s linear;"
], ({ $show })=>$show ? 1 : 0);
const root = (0, _client.createRoot)(document.getElementById("root"));
root.render(/*#__PURE__*/ (0, _reactDefault.default).createElement(Commentators, {
    __source: {
        fileName: "src/graphics/Commentators.tsx",
        lineNumber: 107,
        columnNumber: 13
    },
    __self: undefined
}));

},{"react":"bH1AQ","styled-components":"9xpRL","react-dom/client":"i5cPj","./components/Nameplate":"cxLMe","@nodecg/react-hooks":"audz3","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"cxLMe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Nameplate", ()=>Nameplate);
var _styledComponents = require("styled-components");
var _styledComponentsDefault = parcelHelpers.interopDefault(_styledComponents);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _fittedText = require("./FittedText");
const Nameplate = ({ show, name, pronouns, tag, animationLength })=>{
    const [visible, setVisible] = (0, _react.useState)(false);
    const [active, setActive] = (0, _react.useState)(false);
    let onAnimEnd = (0, _react.useCallback)((animName)=>{
        if (animName === ShowNameplate.getName()) {
            if (!show) {
                setActive(true);
                return;
            }
        } else if (animName === HideNameplate.getName()) setVisible(false);
        setActive(false);
    }, [
        show
    ]);
    (0, _react.useEffect)(()=>{
        if (show && !visible) {
            setVisible(true);
            setActive(true);
        }
        if (!show && visible) setActive(true);
    }, [
        show,
        visible
    ]);
    const pronounsSplit = (0, _react.useMemo)(()=>{
        if (!pronouns) return [];
        let split = pronouns.split("/");
        split = split.map((item, index)=>{
            return index === split.length - 1 ? item : item + "/";
        });
        return split;
    }, [
        pronouns
    ]);
    return /*#__PURE__*/ (0, _reactDefault.default).createElement(NameplateBox, {
        $show: show,
        $visible: visible,
        $active: active,
        $animLength: animationLength || 1000,
        onAnimationEnd: (event)=>{
            onAnimEnd(event.animationName);
        },
        __source: {
            fileName: "src/graphics/components/Nameplate.tsx",
            lineNumber: 48,
            columnNumber: 10
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(Name, {
        __source: {
            fileName: "src/graphics/components/Nameplate.tsx",
            lineNumber: 51,
            columnNumber: 4
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _fittedText.FittedText), {
        text: name,
        font: "Splatoon",
        align: "center",
        maxWidth: 580,
        __source: {
            fileName: "src/graphics/components/Nameplate.tsx",
            lineNumber: 52,
            columnNumber: 5
        },
        __self: undefined
    })), /*#__PURE__*/ (0, _reactDefault.default).createElement(Tag, {
        __source: {
            fileName: "src/graphics/components/Nameplate.tsx",
            lineNumber: 54,
            columnNumber: 4
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _fittedText.FittedText), {
        text: tag,
        font: "Splatoon",
        align: "left",
        maxWidth: 500,
        __source: {
            fileName: "src/graphics/components/Nameplate.tsx",
            lineNumber: 55,
            columnNumber: 5
        },
        __self: undefined
    })), pronouns !== "" && /*#__PURE__*/ (0, _reactDefault.default).createElement(Pronouns, {
        __source: {
            fileName: "src/graphics/components/Nameplate.tsx",
            lineNumber: 57,
            columnNumber: 24
        },
        __self: undefined
    }, pronounsSplit.map((item, index)=>{
        return /*#__PURE__*/ (0, _reactDefault.default).createElement(PronounsText, {
            key: index,
            __source: {
                fileName: "src/graphics/components/Nameplate.tsx",
                lineNumber: 59,
                columnNumber: 16
            },
            __self: undefined
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _fittedText.FittedText), {
            text: item,
            font: "Splatoon",
            align: "center",
            maxWidth: 75,
            __source: {
                fileName: "src/graphics/components/Nameplate.tsx",
                lineNumber: 60,
                columnNumber: 7
            },
            __self: undefined
        }));
    })));
};
const ShowNameplate = (0, _styledComponents.keyframes)([
    "0%{opacity:1;clip-path:polygon( 50% -40%,50% -40%,50% 140%,50% 140% );}100%{opacity:1;clip-path:polygon( -40% -40%,140% -40%,140% 140%,-40% 140% )}"
]);
const HideNameplate = (0, _styledComponents.keyframes)([
    "0%{opacity:1;clip-path:polygon( -40% -40%,140% -40%,140% 140%,-40% 140% )}100%{opacity:1;clip-path:polygon( 50% -40%,50% -40%,50% 140%,50% 140% );}"
]);
const NameplateBox = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "Nameplate__NameplateBox",
    componentId: "sc-1l2zzje-0"
})([
    "position:relative;display:flex;flex-direction:column;padding:10px;height:160px;width:600px;align-items:center;justify-content:space-evenly;text-align:center;background-image:url('/bundles/chishoals-layouts/images/Chi_Banner.png');background-size:contain;background-repeat:no-repeat;color:var(--commentary-text);",
    ";",
    ""
], ({ $visible })=>$visible ? (0, _styledComponents.css)([
        "opacity:1;"
    ]) : (0, _styledComponents.css)([
        "opacity:0;"
    ]), (props)=>{
    if (props.$active) return (0, _styledComponents.css)([
        "animation:",
        "ms linear 0s ",
        " forwards;"
    ], props.$animLength, props.$show ? ShowNameplate : HideNameplate);
    else return (0, _styledComponents.css)([
        "animation:none;"
    ]);
});
const Name = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "Nameplate__Name",
    componentId: "sc-1l2zzje-1"
})([
    "position:relative;width:100%;font-size:3rem;"
]);
const Pronouns = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "Nameplate__Pronouns",
    componentId: "sc-1l2zzje-2"
})([
    "position:absolute;display:flex;flex-direction:column;padding:5px;bottom:-50px;right:-80px;justify-content:center;align-items:center;width:167px;height:135px;background-image:url('/bundles/chishoals-layouts/images/Splatter.png');background-size:contain;background-repeat:no-repeat;color:var(--commentary-pronouns);font-size:1.6rem;"
]);
const Tag = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "Nameplate__Tag",
    componentId: "sc-1l2zzje-3"
})([
    "position:relative;width:100%;text-align:left;font-size:2.25rem;height:2.25rem;color:var(--commentary-tag);"
]);
const PronounsText = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "Nameplate__PronounsText",
    componentId: "sc-1l2zzje-4"
})([
    ""
]);

},{"styled-components":"9xpRL","react":"bH1AQ","./FittedText":"f5NVk","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"f5NVk":[function(require,module,exports) {
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

},{}]},["iTT7o"], "iTT7o", "parcelRequired251")

//# sourceMappingURL=commentators.27949ab7.js.map
