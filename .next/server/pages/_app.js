(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8596:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ _app)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/layouts/Preloader.js


const Preloader = ()=>{
    const [loaded, setLoaded] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            setLoaded(true);
        }, 1500);
    }, []);
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: `preloader ${loaded ? "loaded" : ""}`,
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "centrize full-width",
            style: {
                display: loaded ? "none" : "table"
            },
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "vertical-center",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "spinner-logo",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                            src: "images/logo.png",
                            alt: "image"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("h5", {
                            children: "loading"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "spinner-dot",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "spinner-line"
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const layouts_Preloader = (Preloader);

// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
;// CONCATENATED MODULE: ./pages/_app.js




const App = ({ Component , pageProps  })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(layouts_Preloader, {}),
            /*#__PURE__*/ jsx_runtime.jsx(Component, {
                ...pageProps
            })
        ]
    });
};
/* harmony default export */ const _app = (App);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js&preferredRegion=!

        // Next.js Route Loader
        
        
    

/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893], () => (__webpack_exec__(8596)));
module.exports = __webpack_exports__;

})();