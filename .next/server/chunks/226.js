"use strict";
exports.id = 226;
exports.ids = [226];
exports.modules = {

/***/ 2226:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ sliderProps)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3877);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_0__]);
swiper__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_0__.Autoplay,
    swiper__WEBPACK_IMPORTED_MODULE_0__.EffectCreative,
    swiper__WEBPACK_IMPORTED_MODULE_0__.EffectFade,
    swiper__WEBPACK_IMPORTED_MODULE_0__.Grid,
    swiper__WEBPACK_IMPORTED_MODULE_0__.Mousewheel,
    swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation,
    swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination,
    swiper__WEBPACK_IMPORTED_MODULE_0__.Parallax,
    swiper__WEBPACK_IMPORTED_MODULE_0__.Scrollbar
]);
const sliderProps = {
    mainSliderSelector: {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        speed: 1000,
        parallax: true,
        autoplay: {
            delay: 9000
        },
        watchSlidesProgress: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        on: {
            progress: function() {
                var swiper = this;
                for(var i = 0; i < swiper.slides.length; i++){
                    var slideProgress = swiper.slides[i].progress, innerOffset = swiper.width * interleaveOffset, innerTranslate = slideProgress * innerOffset;
                    swiper.slides[i].querySelector(".slide").style.transform = "translateX(" + innerTranslate + "px)";
                }
            },
            touchStart: function() {
                var swiper = this;
                for(var i = 0; i < swiper.slides.length; i++){
                    swiper.slides[i].style.transition = "";
                }
            },
            setTransition: function(swiper, speed) {
                for(var i = 0; i < swiper.slides.length; i++){
                    swiper.slides[i].style.transition = speed + "ms";
                    swiper.slides[i].querySelector(".slide").style.transition = speed + "ms";
                }
            }
        }
    },
    kfGridCarousel: {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        speed: 1000,
        watchSlidesProgress: true,
        pagination: false,
        navigation: false,
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            767: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 3
            }
        }
    },
    kfTestimonialsCarousel: {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: false,
        speed: 1000,
        watchSlidesProgress: true,
        pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: "true"
        },
        navigation: false,
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            767: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 3
            },
            1200: {
                slidesPerView: 4
            }
        }
    },
    kfInstaCarousel: {
        slidesPerView: 3,
        spaceBetween: 0,
        loop: true,
        speed: 1000,
        watchSlidesProgress: true,
        pagination: false,
        navigation: false,
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            767: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 3
            },
            1200: {
                slidesPerView: 3
            }
        }
    },
    kfHistory: {
        slidesPerView: 1,
        spaceBetween: 70,
        loop: false,
        speed: 1000,
        pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: "true"
        },
        scrollbar: {
            el: ".swiper-scrollbar",
            draggable: false
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;