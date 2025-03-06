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
})({"dynfa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Game", ()=>Game);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _styledComponents = require("styled-components");
var _styledComponentsDefault = parcelHelpers.interopDefault(_styledComponents);
var _reactHooks = require("@nodecg/react-hooks");
var _hooks = require("../helpers/hooks");
var _client = require("react-dom/client");
var _gameScoreInfoBox = require("./components/GameScoreInfoBox");
var _fittedText = require("./components/FittedText");
var _gameCommentatorInfoBox = require("./components/GameCommentatorInfoBox");
const defaultMatchData = {
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
};
const defaultCommentator = {
    name: "Commentator Name",
    pronouns: "any/all",
    tag: "@TagName"
};
const FullWidth = 340;
const TeamWidth = 300;
const ScoreWidth = 50;
const CommentatorWidth = 235;
const PronounsWidth = 95;
function Game() {
    const [eventData] = (0, _reactHooks.useReplicant)("eventData", {
        bundle: "squidwest-layout-controls"
    });
    const [matchData] = (0, _hooks.useWrappedReplicant)("match", defaultMatchData, "squidwest-layout-controls");
    const [comms] = (0, _reactHooks.useReplicant)("commentators", {
        bundle: "squidwest-layout-controls",
        defaultValue: {
            commentatorOne: defaultCommentator,
            commentatorTwo: defaultCommentator,
            autoShow: true,
            delay: 3000,
            autoHide: true,
            lifetime: 5000
        }
    });
    const [currentEvent, setCurrentEvent] = (0, _react.useState)({
        name: "Current Event Name",
        location: "Event Location",
        number: 1,
        date: "Today"
    });
    const [commentatorOne, setCommentatorOne] = (0, _react.useState)(defaultCommentator);
    const [commentatorTwo, setCommentatorTwo] = (0, _react.useState)(defaultCommentator);
    (0, _react.useEffect)(()=>{
        if (!comms) return;
        setCommentatorOne(comms.commentatorOne);
        setCommentatorTwo(comms.commentatorTwo);
    }, [
        comms
    ]);
    (0, _react.useEffect)(()=>{
        if (!eventData) return;
        setCurrentEvent(eventData.currentEvent);
    }, [
        eventData
    ]);
    const [showScoreboard, setShowScoreboard] = (0, _react.useState)(false);
    const [showCommentary, setShowCommentary] = (0, _react.useState)(false);
    (0, _reactHooks.useListenFor)("scoresControl", (value)=>{
        setShowScoreboard(value);
    }, {
        bundle: "squidwest-layout-controls"
    });
    (0, _reactHooks.useListenFor)("commsControl", (value)=>{
        setShowCommentary(value);
    }, {
        bundle: "squidwest-layout-controls"
    });
    return /*#__PURE__*/ (0, _reactDefault.default).createElement(StyledOmnibarOnly, {
        __source: {
            fileName: "src/graphics/Game.tsx",
            lineNumber: 77,
            columnNumber: 3
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(Content, {
        __source: {
            fileName: "src/graphics/Game.tsx",
            lineNumber: 78,
            columnNumber: 4
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(Scoreboard, {
        $show: showScoreboard,
        __source: {
            fileName: "src/graphics/Game.tsx",
            lineNumber: 79,
            columnNumber: 5
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(InfoBox, {
        __source: {
            fileName: "src/graphics/Game.tsx",
            lineNumber: 80,
            columnNumber: 6
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _fittedText.FittedText), {
        text: `${currentEvent.name} ${currentEvent.number > 0 ? "#" + currentEvent.number : ""}${matchData.matchInfo !== "" ? " - " + matchData.matchInfo : ""}`,
        font: "Splatoon",
        align: "left",
        maxWidth: FullWidth,
        __source: {
            fileName: "src/graphics/Game.tsx",
            lineNumber: 81,
            columnNumber: 7
        },
        __self: this
    })), /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _gameScoreInfoBox.GameScoreInfoBox), {
        color: !matchData.swapColor ? matchData.matchColor.teamA : matchData.matchColor.teamB,
        team: matchData.teamA || "",
        score: matchData.scoreA || 0,
        mainWidth: TeamWidth,
        secondaryWidth: ScoreWidth,
        __source: {
            fileName: "src/graphics/Game.tsx",
            lineNumber: 83,
            columnNumber: 6
        },
        __self: this
    }), /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _gameScoreInfoBox.GameScoreInfoBox), {
        color: matchData.swapColor ? matchData.matchColor.teamA : matchData.matchColor.teamB,
        team: matchData.teamB || "",
        score: matchData.scoreB || 0,
        mainWidth: TeamWidth,
        secondaryWidth: ScoreWidth,
        __source: {
            fileName: "src/graphics/Game.tsx",
            lineNumber: 90,
            columnNumber: 6
        },
        __self: this
    })), /*#__PURE__*/ (0, _reactDefault.default).createElement(Commentators, {
        $show: showCommentary,
        __source: {
            fileName: "src/graphics/Game.tsx",
            lineNumber: 98,
            columnNumber: 5
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(InfoBox, {
        __source: {
            fileName: "src/graphics/Game.tsx",
            lineNumber: 99,
            columnNumber: 6
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _fittedText.FittedText), {
        text: "Commentary",
        font: "Splatoon",
        align: "left",
        maxWidth: FullWidth,
        __source: {
            fileName: "src/graphics/Game.tsx",
            lineNumber: 100,
            columnNumber: 7
        },
        __self: this
    })), /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _gameCommentatorInfoBox.GameCommentatorInfoBox), {
        name: commentatorOne.name,
        pronouns: commentatorOne.pronouns,
        tag: commentatorOne.tag,
        playing: showCommentary,
        fullWidth: FullWidth,
        nameWidth: CommentatorWidth,
        pronounsWidth: PronounsWidth,
        __source: {
            fileName: "src/graphics/Game.tsx",
            lineNumber: 102,
            columnNumber: 6
        },
        __self: this
    }), /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _gameCommentatorInfoBox.GameCommentatorInfoBox), {
        name: commentatorTwo.name,
        pronouns: commentatorTwo.pronouns,
        tag: commentatorTwo.tag,
        playing: showCommentary,
        fullWidth: FullWidth,
        nameWidth: CommentatorWidth,
        pronounsWidth: PronounsWidth,
        __source: {
            fileName: "src/graphics/Game.tsx",
            lineNumber: 111,
            columnNumber: 6
        },
        __self: this
    }))));
}
const StyledOmnibarOnly = (0, _styledComponentsDefault.default).div`
	position: relative;
	width: 1920px;
	height: 1080px;
	background-color: transparent;
`;
const Content = (0, _styledComponentsDefault.default).div`
	position: relative;
	margin: 25px 0 0 20px;

	font-size: 2rem;

	width: 356px;
`;
const InfoBox = (0, _styledComponentsDefault.default).div`
	font-size: 2rem;
	padding: 0 5px;

	color: var(--game-title-text);
	background-color: var(--game-title-bg);
	border: 3px solid var(--game-border);
	border-radius: 0.5rem;
`;
const Scoreboard = (0, _styledComponentsDefault.default).div`
	position: relative;
	opacity: ${({ $show })=>$show ? 1 : 0};
	
	transition: opacity 0.75s ease;
`;
const Commentators = (0, _styledComponentsDefault.default).div`
	margin-top: 1rem;

	position: relative;
	opacity: ${({ $show })=>$show ? 1 : 0};
	
	transition: opacity 0.75s ease;	
`;
const root = (0, _client.createRoot)(document.getElementById("root"));
root.render(/*#__PURE__*/ (0, _reactDefault.default).createElement(Game, {
    __source: {
        fileName: "src/graphics/Game.tsx",
        lineNumber: 169,
        columnNumber: 13
    },
    __self: undefined
}));

},{"react":"bH1AQ","styled-components":"9xpRL","@nodecg/react-hooks":"audz3","../helpers/hooks":"2VUsa","react-dom/client":"i5cPj","./components/GameScoreInfoBox":"j4XKJ","./components/FittedText":"f5NVk","./components/GameCommentatorInfoBox":"2vw2F","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"2VUsa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useObsConnectionStatus", ()=>useObsConnectionStatus);
parcelHelpers.export(exports, "useWrappedReplicant", ()=>useWrappedReplicant);
var _react = require("react");
var _reactHooks = require("@nodecg/react-hooks");
const useObsConnectionStatus = (nodecg, options)=>{
    const [connected, setConnected] = (0, _react.useState)(false);
    const onConnectionStatus = (value)=>{
        setConnected(value.isConnected);
        if (options) {
            if (options.onConnect && value.isConnected) options.onConnect();
            if (options.onDisconnect && !value.isConnected) options.onDisconnect();
        }
    };
    (0, _react.useEffect)(()=>{
        nodecg.listenFor("obsConnectionStatus", "squidwest-layout-controls", onConnectionStatus);
        return ()=>{
            nodecg.unlisten("obsConnectionStatus", "squidwest-layout-controls", onConnectionStatus);
        };
    }, []);
    return connected;
};
const useWrappedReplicant = (replicantName, defaultValue, bundle, persistent)=>{
    const [replicant, setReplicant] = (0, _reactHooks.useReplicant)(replicantName, {
        bundle,
        defaultValue,
        persistent
    });
    const [value, setValue] = (0, _react.useState)(defaultValue);
    (0, _react.useEffect)(()=>{
        if (!replicant) return;
        setValue(replicant);
    }, [
        replicant,
        setValue
    ]);
    return [
        value,
        setReplicant
    ];
};

},{"react":"bH1AQ","@nodecg/react-hooks":"audz3","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"j4XKJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GameScoreInfoBox", ()=>GameScoreInfoBox);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _styledComponents = require("styled-components");
var _styledComponentsDefault = parcelHelpers.interopDefault(_styledComponents);
var _fittedText = require("./FittedText");
const paddingWidth = 10;
const colorDisplayWidth = 15;
const colorMargin = 5;
const GameScoreInfoBox = ({ team, score, color, mainWidth, secondaryWidth })=>{
    return /*#__PURE__*/ (0, _reactDefault.default).createElement(TeamAndScore, {
        __source: {
            fileName: "src/graphics/components/GameScoreInfoBox.tsx",
            lineNumber: 19,
            columnNumber: 3
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(TeamBox, {
        $width: mainWidth,
        __source: {
            fileName: "src/graphics/components/GameScoreInfoBox.tsx",
            lineNumber: 20,
            columnNumber: 4
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(ColorDisplay, {
        $color: color,
        __source: {
            fileName: "src/graphics/components/GameScoreInfoBox.tsx",
            lineNumber: 21,
            columnNumber: 5
        },
        __self: undefined
    }), /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _fittedText.FittedText), {
        text: team,
        font: "Splatoon",
        align: "left",
        maxWidth: mainWidth - paddingWidth - colorDisplayWidth - colorMargin,
        __source: {
            fileName: "src/graphics/components/GameScoreInfoBox.tsx",
            lineNumber: 22,
            columnNumber: 5
        },
        __self: undefined
    })), /*#__PURE__*/ (0, _reactDefault.default).createElement(ScoreBox, {
        $width: secondaryWidth,
        __source: {
            fileName: "src/graphics/components/GameScoreInfoBox.tsx",
            lineNumber: 24,
            columnNumber: 4
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _fittedText.FittedText), {
        text: `${score}`,
        font: "Splatoon",
        align: "center",
        maxWidth: secondaryWidth - 5,
        __source: {
            fileName: "src/graphics/components/GameScoreInfoBox.tsx",
            lineNumber: 25,
            columnNumber: 5
        },
        __self: undefined
    })));
};
const TeamAndScore = (0, _styledComponentsDefault.default).div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: row;

	height: 3rem;
	width: 100%;
	font-size: 2rem;
	color: var(--game-main-text);
	background-color: var(--game-main-bg);
	border: 3px solid var(--game-border);
	border-radius: 0.5rem;
`;
const TeamBox = (0, _styledComponentsDefault.default).div`
	position: relative;
	height: 100%;
	padding: 5px;
	width: ${({ $width })=>$width}px;
	display: flex;
	flex-direction: row;
	align-items: center;

	box-sizing: border-box;
`;
const ColorDisplay = (0, _styledComponentsDefault.default).div`
	width: ${colorDisplayWidth}px;
	min-width: ${colorDisplayWidth}px;
	margin-right: ${colorMargin}px;
	height: 100%;
	
	border-radius: 5px;
	background-color: ${({ $color })=>$color};
`;
const ScoreBox = (0, _styledComponentsDefault.default).div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: ${({ $width })=>$width}px;
	height: 100%;

	font-size: 3rem;

	color: var(--game-sub-text);
	background-color: var(--game-sub-bg);
	border-left: 4px solid var(--game-border);
	border-radius: 0 4px 4px 0;
`;

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
            lineNumber: 53,
            columnNumber: 3
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(TextFit, {
        ref: textFit,
        $scale: textScale,
        $font: font,
        $align: align,
        __source: {
            fileName: "src/graphics/components/FittedText.tsx",
            lineNumber: 57,
            columnNumber: 4
        },
        __self: undefined
    }, text));
};
const TextSpace = (0, _styledComponentsDefault.default).div`
	position: relative;
	display: flex;

	justify-content: ${({ $align })=>justifyAlign($align)};
	
	white-space: nowrap;
	max-width: ${({ $maxWidth })=>$maxWidth > 0 ? `${$maxWidth}px` : `unset`};
`;
const TextFit = (0, _styledComponentsDefault.default).div`
	text-align: ${({ $align })=>$align};
	transform-origin: ${({ $align })=>`${$align} center`};
	width: max-content;
	transform: scaleX(${({ $scale })=>$scale});
	font-family: ${({ $font })=>$font};
`;

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

},{}],"2vw2F":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GameCommentatorInfoBox", ()=>GameCommentatorInfoBox);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _carouselComponent = require("./CarouselComponent");
var _fittedText = require("./FittedText");
var _styledComponents = require("styled-components");
const GameCommentatorInfoBox = ({ name, tag, pronouns, playing, fullWidth, nameWidth, pronounsWidth })=>{
    return /*#__PURE__*/ (0, _reactDefault.default).createElement(CommentatorBox, {
        __source: {
            fileName: "src/graphics/components/GameCommentatorInfoBox.tsx",
            lineNumber: 18,
            columnNumber: 3
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(CommentatorName, {
        __source: {
            fileName: "src/graphics/components/GameCommentatorInfoBox.tsx",
            lineNumber: 19,
            columnNumber: 4
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _carouselComponent.CarouselComponent), {
        speed: 10000,
        playing: playing,
        __source: {
            fileName: "src/graphics/components/GameCommentatorInfoBox.tsx",
            lineNumber: 20,
            columnNumber: 5
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _fittedText.FittedText), {
        text: name,
        font: "Splatoon",
        align: "left",
        maxWidth: pronouns !== "" ? nameWidth : fullWidth,
        __source: {
            fileName: "src/graphics/components/GameCommentatorInfoBox.tsx",
            lineNumber: 21,
            columnNumber: 6
        },
        __self: undefined
    }), tag !== "" && /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _fittedText.FittedText), {
        text: tag,
        font: "Splatoon",
        align: "left",
        maxWidth: pronouns !== "" ? nameWidth : fullWidth,
        __source: {
            fileName: "src/graphics/components/GameCommentatorInfoBox.tsx",
            lineNumber: 22,
            columnNumber: 21
        },
        __self: undefined
    }))), pronouns !== "" && /*#__PURE__*/ (0, _reactDefault.default).createElement(CommentatorPronouns, {
        __source: {
            fileName: "src/graphics/components/GameCommentatorInfoBox.tsx",
            lineNumber: 26,
            columnNumber: 4
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _fittedText.FittedText), {
        text: pronouns,
        font: "Splatoon",
        align: "left",
        maxWidth: pronounsWidth,
        __source: {
            fileName: "src/graphics/components/GameCommentatorInfoBox.tsx",
            lineNumber: 27,
            columnNumber: 5
        },
        __self: undefined
    })));
};
const CommentatorBox = (0, _styledComponents.styled).div`
	position: relative;
	display: flex;
	flex-direction: row;

	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 3rem;
	font-size: 2rem;

	color: var(--game-main-text);
	background-color: var(--game-main-bg);
	border: 3px solid var(--game-border);
	border-radius: 0.5rem;
`;
const CommentatorName = (0, _styledComponents.styled).div`
	padding: 5px;
	position: relative;
`;
const CommentatorPronouns = (0, _styledComponents.styled).div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 105px;
	height: 100%;
	font-size: 1.5rem;

	color: var(--game-sub-text);
	background-color: var(--game-sub-bg);
	border-left: 4px solid var(--game-border);
	border-radius: 0 4px 4px 0;
`;

},{"react":"bH1AQ","./CarouselComponent":"3ZV6n","./FittedText":"f5NVk","styled-components":"9xpRL","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"3ZV6n":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CarouselComponent", ()=>CarouselComponent);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _styledComponents = require("styled-components");
var _styledComponentsDefault = parcelHelpers.interopDefault(_styledComponents);
const DEFAULT_SPEED = 5000;
const DEFAULT_TRANSITION_SPEED = 1000;
const CarouselComponent = ({ children, playing = true, speed, transitionSpeed, once, startIndex })=>{
    const [carouselIndex, setCarouselIndex] = (0, _react.useState)(startIndex || 0);
    const carouselIntervalId = (0, _react.useRef)(null);
    const activeCarouselIndexRef = (0, _react.useRef)(startIndex || 0);
    const childElements = (0, _react.useMemo)(()=>{
        return (0, _reactDefault.default).Children.toArray(children);
    }, [
        children
    ]);
    (0, _react.useEffect)(()=>{
        if (playing && childElements.length > 1) {
            //Force it to the last element
            if (activeCarouselIndexRef.current >= childElements.length) {
                setCarouselIndex(childElements.length - 1);
                activeCarouselIndexRef.current = childElements.length - 1;
            }
            //Function ID from Set Interval, to clear it later
            carouselIntervalId.current = window.setInterval(()=>{
                if (!playing) return;
                if (once && activeCarouselIndexRef.current + 1 >= childElements.length) {
                    if (carouselIntervalId.current) clearInterval(carouselIntervalId.current);
                    return;
                }
                const nextIndex = (activeCarouselIndexRef.current + 1) % childElements.length;
                setCarouselIndex(nextIndex);
                activeCarouselIndexRef.current = nextIndex;
            }, speed || DEFAULT_SPEED);
        } else if (playing) {
            setCarouselIndex(0);
            activeCarouselIndexRef.current = 0;
        }
        return ()=>{
            if (carouselIntervalId.current) clearInterval(carouselIntervalId.current);
        };
    }, [
        playing,
        childElements.length
    ]);
    return /*#__PURE__*/ (0, _reactDefault.default).createElement(CarouselContainer, {
        __source: {
            fileName: "src/graphics/components/CarouselComponent.tsx",
            lineNumber: 60,
            columnNumber: 9
        },
        __self: undefined
    }, childElements.map((child, index, array)=>/*#__PURE__*/ (0, _reactDefault.default).createElement(CarouselItem, {
            key: index,
            $active: index === carouselIndex,
            $isRelative: index === array.length - 1,
            speed: (transitionSpeed ? transitionSpeed : DEFAULT_TRANSITION_SPEED) / 2,
            __source: {
                fileName: "src/graphics/components/CarouselComponent.tsx",
                lineNumber: 62,
                columnNumber: 17
            },
            __self: undefined
        }, child)));
};
const CarouselContainer = (0, _styledComponentsDefault.default).div`
    position: relative;
    width: 100%;
    height: 100%;
`;
const CarouselItem = (0, _styledComponentsDefault.default).div`
    position: ${(props)=>props.$isRelative ? `relative` : `absolute`};
    max-height: 100%;

    width: 100%;
    height: 100%;

    opacity: ${(props)=>props.$active ? 1 : 0};
    transition: opacity ${(props)=>props.speed}ms linear;
    transition-delay: ${(props)=>props.$active ? props.speed : 0}ms;
`;

},{"react":"bH1AQ","styled-components":"9xpRL","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}]},["dynfa"], "dynfa", "parcelRequired251")

//# sourceMappingURL=game.fb650948.js.map
