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
var _utils = require("../helpers/utils");
var _fittedText = require("./components/FittedText");
function Credits() {
    const [eventData] = (0, _reactHooks.useReplicant)("eventData", {
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
    const [creditsData] = (0, _reactHooks.useReplicant)("creditsData", {
        bundle: "squidwest-layout-controls"
    });
    (0, _react.useEffect)(()=>{
        if (!eventData) return;
        setCurrentEvent(eventData.currentEvent);
        setNextEvent(eventData.nextEvent);
    }, [
        eventData
    ]);
    const getSpecialCreditsRow = (0, _react.useCallback)((credit, index)=>{
        switch(credit){
            case "CURRENTEVENT":
                return /*#__PURE__*/ (0, _reactDefault.default).createElement(CreditsRow, {
                    key: index,
                    __source: {
                        fileName: "src/graphics/Credits.tsx",
                        lineNumber: 38,
                        columnNumber: 16
                    },
                    __self: this
                }, /*#__PURE__*/ (0, _reactDefault.default).createElement(TitleText, {
                    __source: {
                        fileName: "src/graphics/Credits.tsx",
                        lineNumber: 39,
                        columnNumber: 21
                    },
                    __self: this
                }, currentEvent.name, " ", currentEvent.number > 0 ? "#" + currentEvent.number : ""));
            case "NEXTEVENT":
                return /*#__PURE__*/ (0, _reactDefault.default).createElement(CreditsRow, {
                    key: index,
                    __source: {
                        fileName: "src/graphics/Credits.tsx",
                        lineNumber: 42,
                        columnNumber: 16
                    },
                    __self: this
                }, /*#__PURE__*/ (0, _reactDefault.default).createElement(TitleText, {
                    __source: {
                        fileName: "src/graphics/Credits.tsx",
                        lineNumber: 43,
                        columnNumber: 21
                    },
                    __self: this
                }, nextEvent.name, " ", nextEvent.number > 0 ? "#" + nextEvent.number : ""), /*#__PURE__*/ (0, _reactDefault.default).createElement(NameText, {
                    __source: {
                        fileName: "src/graphics/Credits.tsx",
                        lineNumber: 44,
                        columnNumber: 21
                    },
                    __self: this
                }, nextEvent.location), /*#__PURE__*/ (0, _reactDefault.default).createElement(NameText, {
                    __source: {
                        fileName: "src/graphics/Credits.tsx",
                        lineNumber: 45,
                        columnNumber: 21
                    },
                    __self: this
                }, nextEvent.date), /*#__PURE__*/ (0, _reactDefault.default).createElement(NameText, {
                    __source: {
                        fileName: "src/graphics/Credits.tsx",
                        lineNumber: 46,
                        columnNumber: 21
                    },
                    __self: this
                }, "See you there!"));
            case "YOSHI":
                return /*#__PURE__*/ (0, _reactDefault.default).createElement(CreditsRow, {
                    key: index,
                    __source: {
                        fileName: "src/graphics/Credits.tsx",
                        lineNumber: 49,
                        columnNumber: 16
                    },
                    __self: this
                }, /*#__PURE__*/ (0, _reactDefault.default).createElement(HeaderText, {
                    __source: {
                        fileName: "src/graphics/Credits.tsx",
                        lineNumber: 50,
                        columnNumber: 21
                    },
                    __self: this
                }, "Stream Overlays and Design"), /*#__PURE__*/ (0, _reactDefault.default).createElement(YoshiRow, {
                    __source: {
                        fileName: "src/graphics/Credits.tsx",
                        lineNumber: 51,
                        columnNumber: 21
                    },
                    __self: this
                }, /*#__PURE__*/ (0, _reactDefault.default).createElement("img", {
                    src: "/bundles/chishoals-layouts/images/misc/harmonypixel.gif",
                    alt: "Harmony Pixel",
                    __source: {
                        fileName: "src/graphics/Credits.tsx",
                        lineNumber: 52,
                        columnNumber: 25
                    },
                    __self: this
                }), /*#__PURE__*/ (0, _reactDefault.default).createElement(YoshiSpan, {
                    __source: {
                        fileName: "src/graphics/Credits.tsx",
                        lineNumber: 53,
                        columnNumber: 25
                    },
                    __self: this
                }, /*#__PURE__*/ (0, _reactDefault.default).createElement(YoshiText, {
                    __source: {
                        fileName: "src/graphics/Credits.tsx",
                        lineNumber: 53,
                        columnNumber: 36
                    },
                    __self: this
                }, "EpicYoshiMaster")), /*#__PURE__*/ (0, _reactDefault.default).createElement("img", {
                    src: "/bundles/chishoals-layouts/images/misc/harmonypixel.gif",
                    alt: "Harmony Pixel",
                    __source: {
                        fileName: "src/graphics/Credits.tsx",
                        lineNumber: 54,
                        columnNumber: 25
                    },
                    __self: this
                })), /*#__PURE__*/ (0, _reactDefault.default).createElement(Divider, {
                    __source: {
                        fileName: "src/graphics/Credits.tsx",
                        lineNumber: 56,
                        columnNumber: 21
                    },
                    __self: this
                }), /*#__PURE__*/ (0, _reactDefault.default).createElement(NameText, {
                    __source: {
                        fileName: "src/graphics/Credits.tsx",
                        lineNumber: 57,
                        columnNumber: 21
                    },
                    __self: this
                }, "Need stream overlays for your event?"), /*#__PURE__*/ (0, _reactDefault.default).createElement(NameText, {
                    __source: {
                        fileName: "src/graphics/Credits.tsx",
                        lineNumber: 58,
                        columnNumber: 21
                    },
                    __self: this
                }, "Contact me!"), /*#__PURE__*/ (0, _reactDefault.default).createElement(YoshiRow, {
                    __source: {
                        fileName: "src/graphics/Credits.tsx",
                        lineNumber: 59,
                        columnNumber: 21
                    },
                    __self: this
                }, /*#__PURE__*/ (0, _reactDefault.default).createElement(NameText, {
                    __source: {
                        fileName: "src/graphics/Credits.tsx",
                        lineNumber: 60,
                        columnNumber: 25
                    },
                    __self: this
                }, "epicyoshimaster.neocities.org")), /*#__PURE__*/ (0, _reactDefault.default).createElement(YoshiRow, {
                    __source: {
                        fileName: "src/graphics/Credits.tsx",
                        lineNumber: 62,
                        columnNumber: 21
                    },
                    __self: this
                }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _react1.DiscordLogo), {
                    __source: {
                        fileName: "src/graphics/Credits.tsx",
                        lineNumber: 63,
                        columnNumber: 25
                    },
                    __self: this
                }), /*#__PURE__*/ (0, _reactDefault.default).createElement(NameText, {
                    __source: {
                        fileName: "src/graphics/Credits.tsx",
                        lineNumber: 64,
                        columnNumber: 25
                    },
                    __self: this
                }, "@epicyoshimaster")), /*#__PURE__*/ (0, _reactDefault.default).createElement(YoshiRow, {
                    __source: {
                        fileName: "src/graphics/Credits.tsx",
                        lineNumber: 66,
                        columnNumber: 21
                    },
                    __self: this
                }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _react1.Butterfly), {
                    __source: {
                        fileName: "src/graphics/Credits.tsx",
                        lineNumber: 67,
                        columnNumber: 25
                    },
                    __self: this
                }), /*#__PURE__*/ (0, _reactDefault.default).createElement(NameText, {
                    __source: {
                        fileName: "src/graphics/Credits.tsx",
                        lineNumber: 68,
                        columnNumber: 25
                    },
                    __self: this
                }, "@epicyoshimaster.bsky.social")), /*#__PURE__*/ (0, _reactDefault.default).createElement(YoshiRow, {
                    __source: {
                        fileName: "src/graphics/Credits.tsx",
                        lineNumber: 70,
                        columnNumber: 21
                    },
                    __self: this
                }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _react1.GithubLogo), {
                    __source: {
                        fileName: "src/graphics/Credits.tsx",
                        lineNumber: 71,
                        columnNumber: 25
                    },
                    __self: this
                }), /*#__PURE__*/ (0, _reactDefault.default).createElement(NameText, {
                    __source: {
                        fileName: "src/graphics/Credits.tsx",
                        lineNumber: 72,
                        columnNumber: 25
                    },
                    __self: this
                }, "EpicYoshiMaster")), /*#__PURE__*/ (0, _reactDefault.default).createElement(YoshiRow, {
                    __source: {
                        fileName: "src/graphics/Credits.tsx",
                        lineNumber: 74,
                        columnNumber: 21
                    },
                    __self: this
                }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _react1.TwitterLogo), {
                    __source: {
                        fileName: "src/graphics/Credits.tsx",
                        lineNumber: 75,
                        columnNumber: 25
                    },
                    __self: this
                }), /*#__PURE__*/ (0, _reactDefault.default).createElement(NameText, {
                    __source: {
                        fileName: "src/graphics/Credits.tsx",
                        lineNumber: 76,
                        columnNumber: 25
                    },
                    __self: this
                }, "@EpicYoshiMaster")));
        }
        return undefined;
    }, [
        currentEvent,
        nextEvent
    ]);
    return /*#__PURE__*/ (0, _reactDefault.default).createElement(StyledCredits, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 82,
            columnNumber: 10
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement(Content, {
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 83,
            columnNumber: 13
        },
        __self: this
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _carouselComponent.CarouselComponent), {
        speed: 10000,
        transitionSpeed: 3000,
        once: true,
        __source: {
            fileName: "src/graphics/Credits.tsx",
            lineNumber: 84,
            columnNumber: 17
        },
        __self: this
    }, creditsData && creditsData.map((creditsRow, index)=>{
        const specialCreditsRow = getSpecialCreditsRow(creditsRow.name, index);
        if (specialCreditsRow) return specialCreditsRow;
        return /*#__PURE__*/ (0, _reactDefault.default).createElement(CreditsRow, {
            key: index,
            __source: {
                fileName: "src/graphics/Credits.tsx",
                lineNumber: 88,
                columnNumber: 18
            },
            __self: this
        }, creditsRow.image && creditsRow.imageBundle && /*#__PURE__*/ (0, _reactDefault.default).createElement(LogoRow, {
            __source: {
                fileName: "src/graphics/Credits.tsx",
                lineNumber: 89,
                columnNumber: 80
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement(Logo, {
            src: (0, _utils.getImagePath)(creditsRow.imageBundle, creditsRow.image),
            __source: {
                fileName: "src/graphics/Credits.tsx",
                lineNumber: 90,
                columnNumber: 41
            },
            __self: this
        })), /*#__PURE__*/ (0, _reactDefault.default).createElement(HeaderText, {
            __source: {
                fileName: "src/graphics/Credits.tsx",
                lineNumber: 92,
                columnNumber: 32
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _fittedText.FittedText), {
            text: creditsRow.name,
            align: "center",
            font: "Splatoon",
            maxWidth: 1900,
            __source: {
                fileName: "src/graphics/Credits.tsx",
                lineNumber: 92,
                columnNumber: 44
            },
            __self: this
        })), creditsRow.items.map((name, index)=>/*#__PURE__*/ (0, _reactDefault.default).createElement(NameText, {
                key: index,
                __source: {
                    fileName: "src/graphics/Credits.tsx",
                    lineNumber: 93,
                    columnNumber: 72
                },
                __self: this
            }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _fittedText.FittedText), {
                text: name,
                align: "center",
                font: "Splatoon",
                maxWidth: 1900,
                __source: {
                    fileName: "src/graphics/Credits.tsx",
                    lineNumber: 93,
                    columnNumber: 94
                },
                __self: this
            }))));
    }))));
}
const StyledCredits = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "Credits__StyledCredits",
    componentId: "sc-ssk9q8-0"
})([
    "position:relative;width:1920px;height:1080px;"
]);
const Content = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "Credits__Content",
    componentId: "sc-ssk9q8-1"
})([
    "position:relative;width:100%;height:100%;color:var(--credits-text);background-color:var(--credits-bg);overflow:hidden;"
]);
const CreditsRow = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "Credits__CreditsRow",
    componentId: "sc-ssk9q8-2"
})([
    "position:relative;width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;"
]);
const LogoRow = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "Credits__LogoRow",
    componentId: "sc-ssk9q8-3"
})([
    "position:relative;display:flex;max-height:500px;max-width:500px;flex-direction:row;align-items:center;justify-content:center;font-size:3rem;"
]);
const Logo = (0, _styledComponentsDefault.default).img.withConfig({
    displayName: "Credits__Logo",
    componentId: "sc-ssk9q8-4"
})([
    "max-width:100%;max-height:100%;object-fit:contain;"
]);
const TitleText = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "Credits__TitleText",
    componentId: "sc-ssk9q8-5"
})([
    "font-weight:bolder;font-size:7rem;"
]);
const HeaderText = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "Credits__HeaderText",
    componentId: "sc-ssk9q8-6"
})([
    "font-weight:bolder;font-size:6rem;"
]);
const NameText = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "Credits__NameText",
    componentId: "sc-ssk9q8-7"
})([
    "font-weight:normal;font-size:3rem;"
]);
const YoshiRow = (0, _styledComponentsDefault.default)(LogoRow).withConfig({
    displayName: "Credits__YoshiRow",
    componentId: "sc-ssk9q8-8"
})([
    "gap:20px;& img{height:5rem;}svg{width:1em;object-fit:contain;font-size:3rem;flex-shrink:0;}"
]);
const YoshiText = (0, _styledComponentsDefault.default)(NameText).withConfig({
    displayName: "Credits__YoshiText",
    componentId: "sc-ssk9q8-9"
})([
    "position:relative;font-size:5rem;font-weight:bold;color:var(--credits-text);background:var(--credits-bg);mix-blend-mode:multiply;"
]);
const YoshiSpan = (0, _styledComponentsDefault.default).span.withConfig({
    displayName: "Credits__YoshiSpan",
    componentId: "sc-ssk9q8-10"
})([
    "background:linear-gradient(to right,transparent 0% 13%,#424fff 13% 16%,transparent 16% 17%,#65b5ff 17% 19%,transparent 19% 100%),linear-gradient(to right,transparent 0% 41%,#65b5ff 41% 43%,transparent 43% 100%),linear-gradient(to right,transparent 0% 56%,#fe64ab 56% 59%,#a1b4a8 59%,61%,transparent 61% 100%),linear-gradient(to right,#ff86d5 0% 25%,#00ddab 25% 50%,#ff86d5 50% 75%,#00ddab 75% 100%);background-size:25%;"
]);
const Divider = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "Credits__Divider",
    componentId: "sc-ssk9q8-11"
})([
    "width:100%;height:10%;"
]);
const root = (0, _client.createRoot)(document.getElementById("root"));
root.render(/*#__PURE__*/ (0, _reactDefault.default).createElement(Credits, {
    __source: {
        fileName: "src/graphics/Credits.tsx",
        lineNumber: 149,
        columnNumber: 13
    },
    __self: undefined
}));

},{"react":"bH1AQ","styled-components":"9xpRL","./components/CarouselComponent":"3ZV6n","@phosphor-icons/react":"h9z2e","react-dom/client":"i5cPj","@nodecg/react-hooks":"audz3","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG","../helpers/utils":"9zR4Y","./components/FittedText":"f5NVk"}],"3ZV6n":[function(require,module,exports) {
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
            lineNumber: 54,
            columnNumber: 10
        },
        __self: undefined
    }, childElements.map((child, index, array)=>/*#__PURE__*/ (0, _reactDefault.default).createElement(CarouselItem, {
            key: index,
            $active: index === carouselIndex,
            $isRelative: index === array.length - 1,
            speed: (transitionSpeed ? transitionSpeed : DEFAULT_TRANSITION_SPEED) / 2,
            __source: {
                fileName: "src/graphics/components/CarouselComponent.tsx",
                lineNumber: 55,
                columnNumber: 57
            },
            __self: undefined
        }, child)));
};
const CarouselContainer = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "CarouselComponent__CarouselContainer",
    componentId: "sc-94xrx4-0"
})([
    "position:relative;width:100%;height:100%;"
]);
const CarouselItem = (0, _styledComponentsDefault.default).div.withConfig({
    displayName: "CarouselComponent__CarouselItem",
    componentId: "sc-94xrx4-1"
})([
    "position:",
    ";max-height:100%;width:100%;height:100%;opacity:",
    ";transition:opacity ",
    "ms linear;transition-delay:",
    "ms;"
], (props)=>props.$isRelative ? `relative` : `absolute`, (props)=>props.$active ? 1 : 0, (props)=>props.speed, (props)=>props.$active ? props.speed : 0);

},{"react":"bH1AQ","styled-components":"9xpRL","@parcel/transformer-js/src/esmodule-helpers.js":"hvLRG"}],"f5NVk":[function(require,module,exports) {
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

},{}]},["CjDdB"], "CjDdB", "parcelRequired251")

//# sourceMappingURL=credits.e377084f.js.map
