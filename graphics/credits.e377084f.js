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
})({"CjDdB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Credits", ()=>Credits);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _styledComponents = require("styled-components");
var _styledComponentsDefault = parcelHelpers.interopDefault(_styledComponents);
var _carouselComponent = require("./components/CarouselComponent");
var _react1 = require("@phosphor-icons/react");
var _client = require("react-dom/client");
var _reactHooks = require("@nodecg/react-hooks");
var _creditsNameRow = require("./components/CreditsNameRow");
function Credits() {
    const [eventData, setEventData] = (0, _reactHooks.useReplicant)("eventData", {
        bundle: "squidwest-layout-controls"
    });
    const [currentEvent, setCurrentEvent] = (0, _react.useState)({
        name: "Current Event Name",
        location: "Event Location",
        number: 1,
        date: "Today"
    });
    const [nextEvent, setNextEvent] = (0, _react.useState)({
        name: "Next Event Name",
        location: "Next Event Location",
        number: 2,
        date: "January 1, 2024"
    });
    const [creditsData, setCreditsData] = (0, _reactHooks.useReplicant)("creditsData", {
        bundle: "squidwest-layout-controls"
    });
    const [setupTeam, setSetupTeam] = (0, _react.useState)([
        ""
    ]);
    const [commentaryTeam, setCommentaryTeam] = (0, _react.useState)([
        ""
    ]);
    const [techTeam, setTechTeam] = (0, _react.useState)([
        ""
    ]);
    const [staffTeam, setStaffTeam] = (0, _react.useState)([
        ""
    ]);
    const [headTO, setHeadTO] = (0, _react.useState)([
        ""
    ]);
    const [poolCaptains, setPoolCaptains] = (0, _react.useState)([
        ""
    ]);
    const [artTeam, setArtTeam] = (0, _react.useState)([
        ""
    ]);
    (0, _react.useEffect)(()=>{
        if (!eventData) return;
        setCurrentEvent(eventData.currentEvent);
        setNextEvent(eventData.nextEvent);
    }, [
        eventData
    ]);
    (0, _react.useEffect)(()=>{
        if (!creditsData) return;
        setSetupTeam(creditsData.setupTeam);
        setCommentaryTeam(creditsData.commentaryTeam);
        setTechTeam(creditsData.techTeam);
        setStaffTeam(creditsData.staffTeam);
        setHeadTO(creditsData.headTO);
        setPoolCaptains(creditsData.poolCaptains);
        setArtTeam(creditsData.artTeam);
    }, [
        creditsData
    ]);
    return /*#__PURE__*/ (0, _reactDefault.default).createElement(StyledCredits, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 46,
            columnNumber: 9
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(Content, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 47,
            columnNumber: 13
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _carouselComponent.CarouselComponent), {
        speed: 10000,
        transitionSpeed: 3000,
        once: true,
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 48,
            columnNumber: 17
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(CreditsRow, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 49,
            columnNumber: 21
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(TitleText, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 50,
            columnNumber: 25
        },
        __self: this
    }, currentEvent.name, " ", currentEvent.number > 0 ? "#" + currentEvent.number : "")), setupTeam.length > 0 && /*#__PURE__*/ (0, _reactDefault.default).createElement(CreditsRow, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 52,
            columnNumber: 46
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _creditsNameRow.CreditsNameRow), {
        title: "Setup and Teardown Volunteers",
        names: setupTeam,
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 53,
            columnNumber: 25
        },
        __self: this
    })), commentaryTeam.length > 0 && /*#__PURE__*/ (0, _reactDefault.default).createElement(CreditsRow, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 55,
            columnNumber: 51
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _creditsNameRow.CreditsNameRow), {
        title: "Commentary",
        names: commentaryTeam,
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 56,
            columnNumber: 25
        },
        __self: this
    })), techTeam.length > 0 && /*#__PURE__*/ (0, _reactDefault.default).createElement(CreditsRow, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 58,
            columnNumber: 45
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _creditsNameRow.CreditsNameRow), {
        title: "Stream Technicians",
        names: techTeam,
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 59,
            columnNumber: 25
        },
        __self: this
    })), artTeam.length > 0 && /*#__PURE__*/ (0, _reactDefault.default).createElement(CreditsRow, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 61,
            columnNumber: 44
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _creditsNameRow.CreditsNameRow), {
        title: "Artists",
        names: artTeam,
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 62,
            columnNumber: 25
        },
        __self: this
    })), staffTeam.length > 0 && /*#__PURE__*/ (0, _reactDefault.default).createElement(CreditsRow, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 64,
            columnNumber: 46
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(LogoRow, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 65,
            columnNumber: 25
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(HeaderText, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 66,
            columnNumber: 29
        },
        __self: this
    }, "SquidWest TOs and Staff"), /*#__PURE__*/ (0, _reactDefault.default).createElement(SWLogo, {
        src: "/bundles/chishoals-layouts/images/SW_Logo_bg.png",
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 67,
            columnNumber: 29
        },
        __self: this
    })), staffTeam.map((name, index)=>{
        return /*#__PURE__*/ (0, _reactDefault.default).createElement(NameText, {
            key: index,
            __source: {
                fileName: "src/graphics/Credits.tsx",
                lineNumber: 72,
                columnNumber: 37
            },
            __self: this
        }, name);
    })), (headTO.length > 0 || poolCaptains.length > 0) && /*#__PURE__*/ (0, _reactDefault.default).createElement(CreditsRow, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 77,
            columnNumber: 72
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(LogoRow, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 78,
            columnNumber: 25
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(Logo, {
        src: "/bundles/chishoals-layouts/images/Chi-Shoals_Logo_Transparent_Green.png",
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 79,
            columnNumber: 29
        },
        __self: this
    })), /*#__PURE__*/ (0, _reactDefault.default).createElement(CreditsColumns, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 81,
            columnNumber: 25
        },
        __self: this
    }, headTO.length > 0 && /*#__PURE__*/ (0, _reactDefault.default).createElement(Rows, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 82,
            columnNumber: 51
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _creditsNameRow.CreditsNameRow), {
        title: "Head TO",
        names: headTO,
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 83,
            columnNumber: 33
        },
        __self: this
    })), poolCaptains.length > 0 && /*#__PURE__*/ (0, _reactDefault.default).createElement(Rows, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 85,
            columnNumber: 57
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _creditsNameRow.CreditsNameRow), {
        title: "Staff and Pool Captains",
        names: poolCaptains,
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 86,
            columnNumber: 33
        },
        __self: this
    })))), /*#__PURE__*/ (0, _reactDefault.default).createElement(CreditsRow, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 90,
            columnNumber: 21
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(HeaderText, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 91,
            columnNumber: 25
        },
        __self: this
    }, "Stream Overlays and Design"), /*#__PURE__*/ (0, _reactDefault.default).createElement(NameText, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 92,
            columnNumber: 25
        },
        __self: this
    }, "EpicYoshiMaster"), /*#__PURE__*/ (0, _reactDefault.default).createElement(Divider, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 93,
            columnNumber: 25
        },
        __self: this
    }), /*#__PURE__*/ (0, _reactDefault.default).createElement(NameText, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 94,
            columnNumber: 25
        },
        __self: this
    }, "Need stream overlays for your event?"), /*#__PURE__*/ (0, _reactDefault.default).createElement(NameText, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 95,
            columnNumber: 25
        },
        __self: this
    }, "Contact me!"), /*#__PURE__*/ (0, _reactDefault.default).createElement(LogoRow, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 96,
            columnNumber: 25
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(StyledDiscordLogo, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 97,
            columnNumber: 29
        },
        __self: this
    }), /*#__PURE__*/ (0, _reactDefault.default).createElement(NameText, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 98,
            columnNumber: 29
        },
        __self: this
    }, "@epicyoshimaster")), /*#__PURE__*/ (0, _reactDefault.default).createElement(LogoRow, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 100,
            columnNumber: 25
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(StyledTwitterLogo, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 101,
            columnNumber: 29
        },
        __self: this
    }), /*#__PURE__*/ (0, _reactDefault.default).createElement(NameText, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 102,
            columnNumber: 29
        },
        __self: this
    }, "@EpicYoshiMaster")), /*#__PURE__*/ (0, _reactDefault.default).createElement(LogoRow, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 104,
            columnNumber: 25
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(StyledGithubLogo, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 105,
            columnNumber: 29
        },
        __self: this
    }), /*#__PURE__*/ (0, _reactDefault.default).createElement(NameText, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 106,
            columnNumber: 29
        },
        __self: this
    }, "EpicYoshiMaster"))), /*#__PURE__*/ (0, _reactDefault.default).createElement(CreditsRow, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 109,
            columnNumber: 21
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(HeaderText, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 110,
            columnNumber: 25
        },
        __self: this
    }, "Special Thanks")), /*#__PURE__*/ (0, _reactDefault.default).createElement(CreditsRow, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 112,
            columnNumber: 21
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(LogoRow, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 113,
            columnNumber: 25
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(HeaderText, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 114,
            columnNumber: 29
        },
        __self: this
    }, "I Play Games!"), /*#__PURE__*/ (0, _reactDefault.default).createElement(IPGLogo, {
        src: "/bundles/chishoals-layouts/images/I_Play_Games.png",
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 115,
            columnNumber: 29
        },
        __self: this
    })), /*#__PURE__*/ (0, _reactDefault.default).createElement(NameText, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 117,
            columnNumber: 25
        },
        __self: this
    }, "Equipment, support, and collaboration")), /*#__PURE__*/ (0, _reactDefault.default).createElement(CreditsRow, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 119,
            columnNumber: 21
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(LogoRow, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 120,
            columnNumber: 25
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(LibraryText, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 121,
            columnNumber: 29
        },
        __self: this
    }, "Harold Washington Library Staff"), /*#__PURE__*/ (0, _reactDefault.default).createElement(LibraryLogo, {
        src: "/bundles/chishoals-layouts/images/CPL_Logo.png",
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 122,
            columnNumber: 29
        },
        __self: this
    })), /*#__PURE__*/ (0, _reactDefault.default).createElement(NameText, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 124,
            columnNumber: 25
        },
        __self: this
    }, "Location and support")), /*#__PURE__*/ (0, _reactDefault.default).createElement(CreditsRow, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 126,
            columnNumber: 21
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(HeaderText, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 127,
            columnNumber: 25
        },
        __self: this
    }, "Event Participants"), /*#__PURE__*/ (0, _reactDefault.default).createElement(NameText, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 128,
            columnNumber: 25
        },
        __self: this
    }, "These events aren't possible without you")), /*#__PURE__*/ (0, _reactDefault.default).createElement(CreditsRow, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 130,
            columnNumber: 21
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(HeaderText, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 131,
            columnNumber: 25
        },
        __self: this
    }, "Stream Viewers"), /*#__PURE__*/ (0, _reactDefault.default).createElement(NameText, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 132,
            columnNumber: 25
        },
        __self: this
    }, "We hope you enjoyed")), /*#__PURE__*/ (0, _reactDefault.default).createElement(CreditsRow, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 134,
            columnNumber: 21
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(TitleText, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 135,
            columnNumber: 25
        },
        __self: this
    }, nextEvent.name, " ", nextEvent.number > 0 ? "#" + nextEvent.number : ""), /*#__PURE__*/ (0, _reactDefault.default).createElement(NameText, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 136,
            columnNumber: 25
        },
        __self: this
    }, nextEvent.location), /*#__PURE__*/ (0, _reactDefault.default).createElement(NameText, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 137,
            columnNumber: 25
        },
        __self: this
    }, nextEvent.date), /*#__PURE__*/ (0, _reactDefault.default).createElement(NameText, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 138,
            columnNumber: 25
        },
        __self: this
    }, "See you there!")))));
}
const StyledCredits = (0, _styledComponentsDefault.default).div`
    position: relative;

    width: 1920px;
    height: 1080px;
`;
const Content = (0, _styledComponentsDefault.default).div`
    position: relative;

    width: 100%;
    height: 100%;

    color: #ffffff;
    background-color: #000000;

    overflow: hidden;
`;
const TitleText = (0, _styledComponentsDefault.default).div`
    font-weight: bolder;
    font-size: 100px;
`;
const CreditsRow = (0, _styledComponentsDefault.default).div`
    position: relative;

    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const CreditsColumns = (0, _styledComponentsDefault.default).div`
    position: relative;
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
`;
const Rows = (0, _styledComponentsDefault.default).div`
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const HeaderText = (0, _styledComponentsDefault.default).div`
    font-weight: bolder;
    font-size: 100px;
`;
const LibraryText = (0, _styledComponentsDefault.default)(HeaderText)`
    font-size: 80px;
`;
const NameText = (0, _styledComponentsDefault.default).div`
    font-weight: normal;
    font-size: 50px;
`;
const LogoRow = (0, _styledComponentsDefault.default).div`
    position: relative;
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    font-size: 50px;
`;
const Logo = (0, _styledComponentsDefault.default).img`
    width: 20%;

    object-fit: contain;
`;
const SWLogo = (0, _styledComponentsDefault.default)(Logo)`
    margin-left: 20px;
    margin-bottom: 20px;
    width: 15%;
    height: auto;
`;
const IPGLogo = (0, _styledComponentsDefault.default)(Logo)`
    width: 25%;
`;
const LibraryLogo = (0, _styledComponentsDefault.default)(Logo)`
    margin-left: 20px;
    border: 5px solid white;
    width: 20%;
`;
const StyledGithubLogo = (0, _styledComponentsDefault.default)((0, _react1.GithubLogo))`
	width: 1em;
    object-fit: contain;
	margin-right: 20px;
    font-size: 50px;
`;
const StyledTwitterLogo = (0, _styledComponentsDefault.default)((0, _react1.TwitterLogo))`
	width: 1em;
    object-fit: contain;
	margin-right: 20px;
    font-size: 50px;
`;
const StyledDiscordLogo = (0, _styledComponentsDefault.default)((0, _react1.DiscordLogo))`
	width: 1em;
    object-fit: contain;
	margin-right: 20px;
    font-size: 50px;
`;
const Divider = (0, _styledComponentsDefault.default).div`
    width: 100%;
    height: 10%;
`;
const root = (0, _client.createRoot)(document.getElementById("root"));
root.render(/*#__PURE__*/ (0, _reactDefault.default).createElement(Credits, {
    __source: {
        fileName: "src/graphics/Credits.tsx",
        lineNumber: 276,
        columnNumber: 13
    },
    __self: undefined
}));

},{"react":"bH1AQ","styled-components":"9xpRL","./components/CarouselComponent":"3ZV6n","@phosphor-icons/react":"h9z2e","react-dom/client":"i5cPj","@nodecg/react-hooks":"audz3","./components/CreditsNameRow":"gc9si","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"3ZV6n":[function(require,module,exports) {
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
    const [carouselIndex, setCarouselIndex] = (0, _react.useState)(0);
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

    & img { height: 100%; }
`;

},{"react":"bH1AQ","styled-components":"9xpRL","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"gc9si":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CreditsNameRow", ()=>CreditsNameRow);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _styledComponents = require("styled-components");
var _styledComponentsDefault = parcelHelpers.interopDefault(_styledComponents);
const CreditsNameRow = ({ title, names })=>{
    return /*#__PURE__*/ (0, _reactDefault.default).createElement(Row, {
        __source: {
            fileName: "src/graphics/components/CreditsNameRow.tsx",
            lineNumber: 11,
            columnNumber: 9
        },
        __self: undefined
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(HeaderText, {
        __source: {
            fileName: "src/graphics/components/CreditsNameRow.tsx",
            lineNumber: 12,
            columnNumber: 13
        },
        __self: undefined
    }, title), names.map((item, index)=>{
        return /*#__PURE__*/ (0, _reactDefault.default).createElement(NameText, {
            key: index,
            __source: {
                fileName: "src/graphics/components/CreditsNameRow.tsx",
                lineNumber: 15,
                columnNumber: 24
            },
            __self: undefined
        }, item);
    }));
};
const Row = (0, _styledComponentsDefault.default).div`
    display: contents;
`;
const HeaderText = (0, _styledComponentsDefault.default).div`
    font-weight: bolder;
    font-size: 100px;
`;
const NameText = (0, _styledComponentsDefault.default).div`
    font-weight: normal;
    font-size: 50px;
`;

},{"react":"bH1AQ","styled-components":"9xpRL","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}]},["CjDdB"], "CjDdB", "parcelRequired251")

//# sourceMappingURL=credits.e377084f.js.map
