"use strict";
exports.id = 995;
exports.ids = [995];
exports.modules = {

/***/ 6995:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const VideoPlayer = ({ videoBg , extraClass , dataAnimation  })=>{
    const [video, setVideo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `kf-video-item ${extraClass} ${video ? "active" : ""}`,
        "data-animate": dataAnimation ? "active" : "",
        style: {
            backgroundImage: `url(${videoBg})`,
            visibility: "visible"
        },
        children: [
            video && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                className: "js-video-iframe",
                "data-src": "https://www.youtube.com/embed/Gu6z6kIukgg?showinfo=0&rel=0&autoplay=1",
                src: "https://www.youtube.com/embed/Gu6z6kIukgg?showinfo=0&rel=0&autoplay=1"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "play",
                onClick: ()=>setVideo(true),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "fas fa-play"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VideoPlayer);


/***/ })

};
;