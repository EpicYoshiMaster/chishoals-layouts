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
})({"9dx5I":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
//Theme:
//#f04888
//#eae6f3
parcelHelpers.export(exports, "Intermission", ()=>Intermission);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _reactHooks = require("@nodecg/react-hooks");
var _styledComponents = require("styled-components");
var _styledComponentsDefault = parcelHelpers.interopDefault(_styledComponents);
var _client = require("react-dom/client");
var _omnibar = require("./components/Omnibar");
var _background = require("./components/Background");
var _teamScoreBox = require("./components/TeamScoreBox");
var _fittedText = require("./components/FittedText");
function Intermission() {
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
    return /*#__PURE__*/ (0, _reactDefault.default).createElement(StyledIntermission, {
        __source: {
            fileName: "src/graphics/Intermission.tsx",
            lineNumber: 30,
            columnNumber: 3
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _background.Background), {
        __source: {
            fileName: "src/graphics/Intermission.tsx",
            lineNumber: 31,
            columnNumber: 4
        },
        __self: this
    }), /*#__PURE__*/ (0, _reactDefault.default).createElement(Content, {
        __source: {
            fileName: "src/graphics/Intermission.tsx",
            lineNumber: 32,
            columnNumber: 4
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(TopRow, {
        __source: {
            fileName: "src/graphics/Intermission.tsx",
            lineNumber: 33,
            columnNumber: 5
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(LargeFeed, {
        __source: {
            fileName: "src/graphics/Intermission.tsx",
            lineNumber: 34,
            columnNumber: 6
        },
        __self: this
    }), /*#__PURE__*/ (0, _reactDefault.default).createElement(LargeFeed, {
        __source: {
            fileName: "src/graphics/Intermission.tsx",
            lineNumber: 35,
            columnNumber: 6
        },
        __self: this
    })), /*#__PURE__*/ (0, _reactDefault.default).createElement(MiddleRow, {
        __source: {
            fileName: "src/graphics/Intermission.tsx",
            lineNumber: 37,
            columnNumber: 5
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _teamScoreBox.TeamScoreBox), {
        team: matchData?.teamA || "",
        score: matchData?.scoreA || 0,
        left: true,
        __source: {
            fileName: "src/graphics/Intermission.tsx",
            lineNumber: 38,
            columnNumber: 6
        },
        __self: this
    }), /*#__PURE__*/ (0, _reactDefault.default).createElement(SmallFeed, {
        __source: {
            fileName: "src/graphics/Intermission.tsx",
            lineNumber: 39,
            columnNumber: 6
        },
        __self: this
    }), /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _teamScoreBox.TeamScoreBox), {
        team: matchData?.teamB || "",
        score: matchData?.scoreB || 0,
        left: false,
        __source: {
            fileName: "src/graphics/Intermission.tsx",
            lineNumber: 40,
            columnNumber: 6
        },
        __self: this
    })), /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _omnibar.Omnibar), {
        __source: {
            fileName: "src/graphics/Intermission.tsx",
            lineNumber: 42,
            columnNumber: 5
        },
        __self: this
    })));
}
const StyledIntermission = (0, _styledComponentsDefault.default).div`
	position: relative;
	width: 1920px;
	height: 1080px;
`;
const Content = (0, _styledComponentsDefault.default).div`
	position: relative;
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
`;
const TopRow = (0, _styledComponentsDefault.default).div`
	position: relative;
	display: flex;
	justify-content: space-between;
	margin: 0;
	padding: 20px 40px 5px;

	box-sizing: border-box;
`;
const MiddleRow = (0, _styledComponentsDefault.default).div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: flex-end;
	padding: 5px 20px;
`;
const LargeFeed = (0, _styledComponentsDefault.default).div`
	height: 500px;
	aspect-ratio: 16/9;
	box-sizing: content-box;

	border: 8px solid #f04888;
	background-color: #eae6f3;
`;
const SmallFeed = (0, _styledComponentsDefault.default).div`
	height: 360px;
	aspect-ratio: 16/9;
	box-sizing: content-box;

	border: 8px solid #f04888;
	background-color: #eae6f3;
`;
const ScoreBox = (0, _styledComponentsDefault.default).div`
	display: flex;

	align-items: center;
	margin: 0 5px;
	padding: 5px;
	height: 5rem;
	width: 100%;
	font-size: 3rem;
	color: #f04888;
	border: 8px solid #f04888;
	background-color: #eae6f3;
	box-sizing: content-box;
`;
const StyledFittedText = (0, _styledComponentsDefault.default)((0, _fittedText.FittedText))`
	height: 100%;
`;
const root = (0, _client.createRoot)(document.getElementById("root"));
root.render(/*#__PURE__*/ (0, _reactDefault.default).createElement(Intermission, {
    __source: {
        fileName: "src/graphics/Intermission.tsx",
        lineNumber: 119,
        columnNumber: 13
    },
    __self: undefined
}));

},{"react":"bH1AQ","@nodecg/react-hooks":"audz3","styled-components":"9xpRL","react-dom/client":"i5cPj","./components/Omnibar":"au5f9","./components/Background":"n2E1c","./components/TeamScoreBox":"6sL9p","./components/FittedText":"f5NVk","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"au5f9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Omnibar", ()=>Omnibar);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _styledComponents = require("styled-components");
var _styledComponentsDefault = parcelHelpers.interopDefault(_styledComponents);
var _carouselComponent = require("./CarouselComponent");
var _react1 = require("@phosphor-icons/react");
var _reactHooks = require("@nodecg/react-hooks");
var _utils = require("../../helpers/utils");
const Omnibar = ()=>{
    const [eventData, setEventData] = (0, _reactHooks.useReplicant)("eventData", {
        bundle: "squidwest-layout-controls"
    });
    const [socials] = (0, _reactHooks.useReplicant)("socials", {
        bundle: "squidwest-layout-controls"
    });
    const [intermissionData] = (0, _reactHooks.useReplicant)("intermission", {
        bundle: "squidwest-layout-controls"
    });
    const [currentEvent, setCurrentEvent] = (0, _react.useState)({
        name: "Current Event Name",
        location: "Event Location",
        number: 1,
        date: "Today"
    });
    (0, _react.useEffect)(()=>{
        if (!eventData) return;
        setCurrentEvent(eventData.currentEvent);
    }, [
        eventData
    ]);
    const [time, setTime] = (0, _react.useState)(new Date());
    (0, _react.useEffect)(()=>{
        const interval = setInterval(()=>{
            setTime(new Date());
        }, 1000);
        return ()=>{
            clearInterval(interval);
        };
    }, []);
    const memoTime = (0, _react.useMemo)(()=>{
        return time;
    }, [
        time
    ]);
    return /*#__PURE__*/ (0, _reactDefault.default).createElement(OmnibarWrapper, {
        __source: {
            fileName: "src/graphics/components/Omnibar.tsx",
            lineNumber: 38,
            columnNumber: 9
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(OmnibarItem, {
        $show: intermissionData ? intermissionData.showTime : true,
        __source: {
            fileName: "src/graphics/components/Omnibar.tsx",
            lineNumber: 39,
            columnNumber: 4
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(TimeDate, {
        $border: true,
        __source: {
            fileName: "src/graphics/components/Omnibar.tsx",
            lineNumber: 40,
            columnNumber: 5
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(TimeDisplay, {
        __source: {
            fileName: "src/graphics/components/Omnibar.tsx",
            lineNumber: 41,
            columnNumber: 6
        },
        __self: undefined
    }, (0, _utils.formatDateHM)(memoTime)), /*#__PURE__*/ (0, _reactDefault.default).createElement(DateDisplay, {
        __source: {
            fileName: "src/graphics/components/Omnibar.tsx",
            lineNumber: 44,
            columnNumber: 6
        },
        __self: undefined
    }, (0, _utils.formatDateMDY)(memoTime)))), /*#__PURE__*/ (0, _reactDefault.default).createElement(OmnibarItem, {
        $show: intermissionData ? intermissionData.showEvent : true,
        __source: {
            fileName: "src/graphics/components/Omnibar.tsx",
            lineNumber: 49,
            columnNumber: 4
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(EventSection, {
        $border: true,
        __source: {
            fileName: "src/graphics/components/Omnibar.tsx",
            lineNumber: 50,
            columnNumber: 5
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(Logo, {
        src: "/bundles/chishoals-layouts/images/Chi-Shoals_Logo_Transparent.png",
        alt: "Chi-Shoals Logo",
        __source: {
            fileName: "src/graphics/components/Omnibar.tsx",
            lineNumber: 51,
            columnNumber: 6
        },
        __self: undefined
    }), currentEvent.number > 0 && /*#__PURE__*/ (0, _reactDefault.default).createElement(EventNumberText, {
        __source: {
            fileName: "src/graphics/components/Omnibar.tsx",
            lineNumber: 53,
            columnNumber: 6
        },
        __self: undefined
    }, "#", currentEvent.number))), /*#__PURE__*/ (0, _reactDefault.default).createElement(TextOmnibarItem, {
        $show: intermissionData ? intermissionData.showLocation : true,
        $maxWidth: "24rem",
        __source: {
            fileName: "src/graphics/components/Omnibar.tsx",
            lineNumber: 58,
            columnNumber: 4
        },
        __self: undefined
    }, currentEvent.location !== "" && /*#__PURE__*/ (0, _reactDefault.default).createElement(LocationWrapper, {
        $border: true,
        __source: {
            fileName: "src/graphics/components/Omnibar.tsx",
            lineNumber: 60,
            columnNumber: 5
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(LocationText, {
        __source: {
            fileName: "src/graphics/components/Omnibar.tsx",
            lineNumber: 61,
            columnNumber: 6
        },
        __self: undefined
    }, currentEvent.location))), /*#__PURE__*/ (0, _reactDefault.default).createElement(TextOmnibarItem, {
        $show: intermissionData ? intermissionData.showFlavorText : true,
        $maxWidth: "20rem",
        __source: {
            fileName: "src/graphics/components/Omnibar.tsx",
            lineNumber: 67,
            columnNumber: 4
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(TourneyWrapper, {
        $border: true,
        __source: {
            fileName: "src/graphics/components/Omnibar.tsx",
            lineNumber: 68,
            columnNumber: 5
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(TourneyPlaceholder, {
        __source: {
            fileName: "src/graphics/components/Omnibar.tsx",
            lineNumber: 69,
            columnNumber: 6
        },
        __self: undefined
    }, intermissionData ? intermissionData.flavorText : ""))), /*#__PURE__*/ (0, _reactDefault.default).createElement(CarouselWrapper, {
        $border: true,
        __source: {
            fileName: "src/graphics/components/Omnibar.tsx",
            lineNumber: 74,
            columnNumber: 13
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _carouselComponent.CarouselComponent), {
        speed: 5000,
        transitionSpeed: 1000,
        __source: {
            fileName: "src/graphics/components/Omnibar.tsx",
            lineNumber: 75,
            columnNumber: 5
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(CarouselRow, {
        __source: {
            fileName: "src/graphics/components/Omnibar.tsx",
            lineNumber: 76,
            columnNumber: 6
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(StyledYoutubeLogo, {
        __source: {
            fileName: "src/graphics/components/Omnibar.tsx",
            lineNumber: 77,
            columnNumber: 25
        },
        __self: undefined
    }), /*#__PURE__*/ (0, _reactDefault.default).createElement(LogoText, {
        __source: {
            fileName: "src/graphics/components/Omnibar.tsx",
            lineNumber: 78,
            columnNumber: 25
        },
        __self: undefined
    }, socials ? socials.youtube : "")), /*#__PURE__*/ (0, _reactDefault.default).createElement(CarouselRow, {
        __source: {
            fileName: "src/graphics/components/Omnibar.tsx",
            lineNumber: 80,
            columnNumber: 6
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(StyledTwitterLogo, {
        __source: {
            fileName: "src/graphics/components/Omnibar.tsx",
            lineNumber: 81,
            columnNumber: 25
        },
        __self: undefined
    }), /*#__PURE__*/ (0, _reactDefault.default).createElement(LogoText, {
        __source: {
            fileName: "src/graphics/components/Omnibar.tsx",
            lineNumber: 82,
            columnNumber: 25
        },
        __self: undefined
    }, socials ? socials.twitter : "")), /*#__PURE__*/ (0, _reactDefault.default).createElement(CarouselRow, {
        __source: {
            fileName: "src/graphics/components/Omnibar.tsx",
            lineNumber: 84,
            columnNumber: 6
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(StyledButterfly, {
        __source: {
            fileName: "src/graphics/components/Omnibar.tsx",
            lineNumber: 85,
            columnNumber: 25
        },
        __self: undefined
    }), /*#__PURE__*/ (0, _reactDefault.default).createElement(LogoText, {
        __source: {
            fileName: "src/graphics/components/Omnibar.tsx",
            lineNumber: 86,
            columnNumber: 25
        },
        __self: undefined
    }, socials ? socials.bluesky : "")), /*#__PURE__*/ (0, _reactDefault.default).createElement(CarouselRow, {
        __source: {
            fileName: "src/graphics/components/Omnibar.tsx",
            lineNumber: 88,
            columnNumber: 6
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(StyledDiscordLogo, {
        __source: {
            fileName: "src/graphics/components/Omnibar.tsx",
            lineNumber: 89,
            columnNumber: 25
        },
        __self: undefined
    }), /*#__PURE__*/ (0, _reactDefault.default).createElement(LogoText, {
        __source: {
            fileName: "src/graphics/components/Omnibar.tsx",
            lineNumber: 90,
            columnNumber: 25
        },
        __self: undefined
    }, socials ? socials.discord : "")))), /*#__PURE__*/ (0, _reactDefault.default).createElement(OmnibarElement, {
        as: "img",
        src: "/bundles/chishoals-layouts/images/SW_Logo.png",
        alt: "SquidWest Logo",
        __source: {
            fileName: "src/graphics/components/Omnibar.tsx",
            lineNumber: 94,
            columnNumber: 13
        },
        __self: undefined
    }));
};
const OmnibarWrapper = (0, _styledComponentsDefault.default).div`
	position: relative;
  	display: flex;
  	flex-direction: row;
  	width: calc(100% - 40px);
  	background-color: #f04888;
  	height: 122px;
  	margin: 10px 20px;
`;
const OmnibarItem = (0, _styledComponentsDefault.default).div`
	position: relative;
	display: ${({ $show })=>$show ? "block" : "none"};
`;
const TextOmnibarItem = (0, _styledComponentsDefault.default)(OmnibarItem)`
	max-width: ${({ $maxWidth })=>$maxWidth};
`;
const OmnibarElement = (0, _styledComponentsDefault.default).div`
	position: relative;
	padding: 10px;
	color: #ffffff;
	font-size: 20pt;
	border-right: ${(props)=>props.$border ? "5px solid #eae6f3" : ""};
`;
const TimeDate = (0, _styledComponentsDefault.default)(OmnibarElement)`
	position: relative;
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
	justify-content: center;
`;
const TimeDisplay = (0, _styledComponentsDefault.default).div`
	position: relative;
	margin: auto;
	color: #ffffff;
	font-size: 35pt;
`;
const DateDisplay = (0, _styledComponentsDefault.default).div`
	position: relative;
	margin: auto;
	color: #ffffff;
	font-size: 20pt;
`;
const EventSection = (0, _styledComponentsDefault.default)(OmnibarElement)`
	position: relative;
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 100%;
`;
const EventNumberText = (0, _styledComponentsDefault.default).div`
	margin: 8px;
	font-size: 30pt;
`;
const Logo = (0, _styledComponentsDefault.default).img`
    height: 7rem;
    object-fit: contain;
`;
const LocationWrapper = (0, _styledComponentsDefault.default)(OmnibarElement)`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	align-items: center;
`;
const LocationText = (0, _styledComponentsDefault.default).div`
	margin: auto 8px;
	font-size: 25pt;
`;
const TourneyWrapper = (0, _styledComponentsDefault.default)(OmnibarElement)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
`;
const TourneyPlaceholder = (0, _styledComponentsDefault.default).div`
	font-size: 25pt;
`;
const CarouselWrapper = (0, _styledComponentsDefault.default)(OmnibarElement)`
	position: relative;
	height: 100%;
	flex-grow: 1;
`;
const CarouselRow = (0, _styledComponentsDefault.default).div`
	position: relative;
    display: flex;
    flex-direction: row;
	align-items: center;
    justify-content: center;
    max-height: 100%;
    height: 100%;
	font-size: 40pt;
`;
const StyledYoutubeLogo = (0, _styledComponentsDefault.default)((0, _react1.YoutubeLogo))`
	width: 1em;
    object-fit: contain;
	margin-right: 20px;
`;
const StyledTwitterLogo = (0, _styledComponentsDefault.default)((0, _react1.TwitterLogo))`
	width: 1em;
    object-fit: contain;
	margin-right: 20px;
`;
const StyledButterfly = (0, _styledComponentsDefault.default)((0, _react1.Butterfly))`
	width: 1em;
    object-fit: contain;
	margin-right: 20px;
`;
const StyledDiscordLogo = (0, _styledComponentsDefault.default)((0, _react1.DiscordLogo))`
	width: 1em;
    object-fit: contain;
	margin-right: 20px;
`;
const LogoText = (0, _styledComponentsDefault.default).div`
	font-size: 35pt;
`;

},{"react":"bH1AQ","styled-components":"9xpRL","./CarouselComponent":"3ZV6n","@phosphor-icons/react":"h9z2e","@nodecg/react-hooks":"audz3","../../helpers/utils":"2gdT3","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"3ZV6n":[function(require,module,exports) {
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

},{"react":"bH1AQ","styled-components":"9xpRL","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"2gdT3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "formatTimeHMSC", ()=>formatTimeHMSC);
parcelHelpers.export(exports, "formatDateHM", ()=>formatDateHM);
parcelHelpers.export(exports, "formatDateMDY", ()=>formatDateMDY);
const formatTimeHMSC = (ms)=>{
    ms = ms > 0 ? ms : 0;
    const hour = Math.floor(ms / 60 / 60 / 1000);
    ms = ms % 3600000;
    const minute = Math.floor(ms / 60 / 1000);
    ms = ms % 60000;
    const second = Math.floor(ms / 1000);
    ms = ms % 1000;
    const centiseconds = Math.floor(ms / 10);
    return `${hour}:${minute < 10 ? `0${minute}` : minute}:${second < 10 ? `0${second}` : second}.${centiseconds < 10 ? `0${centiseconds}` : centiseconds}`;
};
const formatDateHM = (date)=>{
    return date.getHours() + ":" + (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
};
const formatDateMDY = (date)=>{
    return date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"n2E1c":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Background", ()=>Background);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _styledComponents = require("styled-components");
var _styledComponentsDefault = parcelHelpers.interopDefault(_styledComponents);
const BACKGROUND_PATH = "/bundles/chishoals-layouts/images/backgrounds";
const DEFAULT_COLOR = "#eae6f3";
const BACKGROUND_CATS = [
    {
        weight: 0.7,
        backgrounds: [
            {
                image: "bg_ika.png"
            },
            {
                image: "bg_octo.png"
            },
            {
                image: "bg_ika_octo.png"
            }
        ]
    },
    {
        weight: 0.3,
        backgrounds: [
            {
                image: "bg_pixelnpc.png",
                size: "50%"
            },
            {
                image: "bg_jelleton.png",
                size: "50%"
            },
            {
                image: "bg_shooter.png",
                size: "100%"
            },
            {
                image: "bg_charger.png",
                size: "75%"
            },
            {
                image: "bg_blaster.png",
                size: "50%"
            },
            {
                image: "bg_slosher.png",
                size: "50%"
            },
            {
                image: "bg_dualies.png",
                size: "50%"
            },
            {
                image: "bg_splatling.png",
                size: "50%"
            },
            {
                image: "bg_roller.png",
                size: "50%"
            },
            {
                image: "bg_brella.png",
                size: "50%"
            },
            {
                image: "bg_splatana.png",
                size: "50%"
            },
            {
                image: "bg_stringer.png",
                size: "50%"
            },
            {
                image: "bg_brush.png",
                size: "50%"
            },
            {
                image: "bg_main.png",
                size: "75%"
            }
        ]
    }
];
const GetRandomBackground = ()=>{
    let random = Math.random();
    let category = 0;
    BACKGROUND_CATS.forEach((item, index)=>{
        if (random <= 0) return;
        random = random - item.weight;
        if (random <= 0) category = index;
    });
    return BACKGROUND_CATS[category].backgrounds[Math.floor(Math.random() * BACKGROUND_CATS[category].backgrounds.length)];
};
const Background = ({ backgroundColor })=>{
    const [randomBackground] = (0, _react.useState)(GetRandomBackground());
    return /*#__PURE__*/ (0, _reactDefault.default).createElement(StyledBackground, {
        $backgroundColor: backgroundColor ? backgroundColor : DEFAULT_COLOR,
        src: `${BACKGROUND_PATH}/${randomBackground.image}`,
        $size: randomBackground.size,
        __source: {
            fileName: "src/graphics/components/Background.tsx",
            lineNumber: 66,
            columnNumber: 3
        },
        __self: undefined
    });
};
const StyledBackground = (0, _styledComponentsDefault.default).div`
	position: absolute;
	width: 100%;
	height: 100%;
	padding: 0px;

	background-size: ${({ $size })=>$size ? $size : "10%"};
	background-repeat: repeat;
	background-image: url(${(props)=>props.src});
	background-color: ${({ $backgroundColor })=>$backgroundColor};
	background-attachment: scroll;
	
    animation: scrolling 90s linear infinite;

	@keyframes scrolling {
  	from{
      	background-position: 1920px 1920px;
  	}
  	to{
      	background-position: 0 0;
  	}
	}
`;

},{"react":"bH1AQ","styled-components":"9xpRL","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"6sL9p":[function(require,module,exports) {
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
            lineNumber: 13,
            columnNumber: 3
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(TeamBox, {
        __source: {
            fileName: "src/graphics/components/TeamScoreBox.tsx",
            lineNumber: 14,
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
            lineNumber: 15,
            columnNumber: 5
        },
        __self: undefined
    })), /*#__PURE__*/ (0, _reactDefault.default).createElement(ScoreBox, {
        __source: {
            fileName: "src/graphics/components/TeamScoreBox.tsx",
            lineNumber: 17,
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
            lineNumber: 18,
            columnNumber: 5
        },
        __self: undefined
    })));
};
const TeamAndScore = (0, _styledComponentsDefault.default).div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	flex-direction: ${({ $left })=>$left ? "row" : "row-reverse"};

	${({ $left })=>$left ? (0, _styledComponents.css)`margin-right: 10px;` : (0, _styledComponents.css)`margin-left: 10px;`}
	height: 5rem;
	width: 100%;
	font-size: 3rem;
	color: #f04888;
	border: 8px solid #f04888;
	background-color: #eae6f3;
	box-sizing: content-box;
`;
const TeamBox = (0, _styledComponentsDefault.default).div`
	padding: 5px;

	box-sizing: border-box;
`;
const ScoreBox = (0, _styledComponentsDefault.default).div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100px;
	height: 100%;

	font-size: 5rem;

	color: #eae6f3;
	background-color: #f04888;
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

},{}]},["9dx5I"], "9dx5I", "parcelRequired251")

//# sourceMappingURL=intermission.966131a6.js.map
