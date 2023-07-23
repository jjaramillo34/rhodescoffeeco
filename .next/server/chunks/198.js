"use strict";
exports.id = 198;
exports.ids = [198];
exports.modules = {

/***/ 5198:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layouts_Layouts)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/useClickOutside.js

let useClickOutside = (handler)=>{
    let domNode = (0,external_react_.useRef)();
    (0,external_react_.useEffect)(()=>{
        let maybeHandler = (event)=>{
            if (!domNode.current.contains(event.target)) {
                handler();
            }
        };
        document.addEventListener("mousedown", maybeHandler);
        return ()=>{
            document.removeEventListener("mousedown", maybeHandler);
        };
    });
    return domNode;
};
/* harmony default export */ const src_useClickOutside = (useClickOutside);

;// CONCATENATED MODULE: ./src/components/ImageView.js



const ImgViews = ({ close , src  })=>{
    let domNode = src_useClickOutside(()=>{
        close(false);
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "mfp-bg mfp-ready",
                onClick: ()=>close(false)
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",
                tabIndex: -1,
                style: {
                    overflow: "hidden auto"
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: `mfp-container mfp-s-ready mfp-iframe-holder mfp-img-container`,
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "mfp-content",
                            ref: domNode,
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "mfp-iframe-scaler",
                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                    className: "mfp-img",
                                    src: src
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "mfp-preloader",
                            children: "Loading..."
                        })
                    ]
                })
            })
        ]
    });
};
const ImageView = ()=>{
    const [img, setImg] = (0,external_react_.useState)(false);
    const [imgValue, setImgValue] = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            const a = document.querySelectorAll("a");
            a.forEach((a)=>{
                if (a.href.includes("images/")) {
                    if (a.getAttribute("download") === null) {
                        a.addEventListener("click", (e)=>{
                            e.preventDefault();
                            setImgValue(a.href);
                            setImg(true);
                        });
                    }
                }
            });
        }, 1500);
    }, []);
    return /*#__PURE__*/ jsx_runtime.jsx(external_react_.Fragment, {
        children: img && /*#__PURE__*/ jsx_runtime.jsx(ImgViews, {
            close: ()=>setImg(false),
            src: imgValue
        })
    });
};
/* harmony default export */ const components_ImageView = (ImageView);

;// CONCATENATED MODULE: ./src/utils.js
const scrollAnimation = ()=>{
    const progress_inner = document.querySelectorAll(".scroll-animate"), triggerBottom = window.innerHeight / 5 * 5 - 20;
    progress_inner.forEach((box)=>{
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            box.style.visibility = "visible";
            box.classList.add("animate__active");
        }
    });
};
// Sticky nav
const stickyNav = ()=>{
    window.addEventListener("scroll", ()=>{
        let offset = window.scrollY;
        const sticky = document.querySelectorAll(".kf-header");
        for(let i = 0; i < sticky.length; i++){
            const stick = sticky[i];
            if (stick) {
                if (offset > 10) {
                    stick.classList.add("fixed");
                } else {
                    stick.classList.remove("fixed");
                }
            }
        }
    });
};

;// CONCATENATED MODULE: ./src/layouts/Footer.js

const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "kf-footer",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-xs-12 col-sm-12 col-md-6 col-lg-3",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "kf-logo element-anim-1 scroll-animate",
                                "data-animate": "active",
                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                    href: "index.html",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                        src: "images/logo.png",
                                        alt: "image"
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-xs-12 col-sm-12 col-md-6 col-lg-3",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "kf-f-hours element-anim-1 scroll-animate",
                                "data-animate": "active",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                        children: "Working Hours"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                children: [
                                                    "Sunday - Thursday",
                                                    /*#__PURE__*/ jsx_runtime.jsx("em", {
                                                        children: "08:00 am - 09:00pm"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                children: [
                                                    "Only Friday",
                                                    /*#__PURE__*/ jsx_runtime.jsx("em", {
                                                        children: "03:00 pm - 09:00pm"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime.jsx("strong", {
                                                    children: "Saturday Close"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-xs-12 col-sm-12 col-md-6 col-lg-3",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "kf-f-contact element-anim-1 scroll-animate",
                                "data-animate": "active",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                        children: "Contact Us"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                        className: "las la-map-marker"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("em", {
                                                        children: "Location :"
                                                    }),
                                                    "55 Main Street, New York"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                        className: "las la-envelope-open-text"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("em", {
                                                        children: "Email Address :"
                                                    }),
                                                    "kaffendev@gmail.com"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                        className: "las la-phone"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("em", {
                                                        children: "Phone Number :"
                                                    }),
                                                    "+012 (345) 678 99"
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-xs-12 col-sm-12 col-md-6 col-lg-3",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "kf-f-gallery element-anim-1 scroll-animate",
                                "data-animate": "active",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                        children: "Gallery"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                    href: "images/grid_gal1.jpg",
                                                    className: "kf-image-hover has-popup-image",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                        src: "images/grid_gal1.jpg",
                                                        alt: "image"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                    href: "images/grid_gal2.jpg",
                                                    className: "kf-image-hover has-popup-image",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                        src: "images/grid_gal2.jpg",
                                                        alt: "image"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                    href: "images/grid_gal3.jpg",
                                                    className: "kf-image-hover has-popup-image",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                        src: "images/grid_gal3.jpg",
                                                        alt: "image"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                    href: "images/grid_gal4.jpg",
                                                    className: "kf-image-hover has-popup-image",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                        src: "images/grid_gal4.jpg",
                                                        alt: "image"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                    href: "images/grid_gal5.jpg",
                                                    className: "kf-image-hover has-popup-image",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                        src: "images/grid_gal5.jpg",
                                                        alt: "image"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                    href: "images/grid_gal6.jpg",
                                                    className: "kf-image-hover has-popup-image",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                        src: "images/grid_gal1.jpg",
                                                        alt: "image"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-xs-12 col-sm-12 col-md-12 col-lg-12 align-center",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "kf-copyright element-anim-1 scroll-animate",
                            "data-animate": "active",
                            children: "Copyright \xa9 2022 Kaffen. All Rights Reserved."
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const layouts_Footer = (Footer);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/layouts/Header.js




const Header = ()=>{
    (0,external_react_.useEffect)(()=>{
        stickyNav();
    }, []);
    const [toggle, setToggle] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        if (document.querySelector("header").className.includes("animated")) {
            setTimeout(()=>{
                document.querySelector("header").classList.add("opened", "show");
            }, 800);
        }
    }, [
        toggle
    ]);
    const [activeMenu, setActiveMenu] = (0,external_react_.useState)("");
    const activeMenuSet = (value)=>setActiveMenu(activeMenu === value ? "" : value), activeLi = (value)=>value === activeMenu ? {
            display: "block"
        } : {
            display: "none"
        };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("header", {
        className: `kf-header ${toggle ? "animated" : ""}`,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "kf-topline",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-xs-12 col-sm-6 col-md-4 col-lg-4",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "kf-h-group",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("i", {
                                        className: "far fa-clock"
                                    }),
                                    " ",
                                    /*#__PURE__*/ jsx_runtime.jsx("em", {
                                        children: "opening hours :"
                                    }),
                                    " 08:00 am - 09:00 pm"
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-xs-12 col-sm-6 col-md-4 col-lg-4 align-center",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "kf-h-social",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                                        href: "facebook.com",
                                        target: "blank",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                            className: "fab fa-facebook-f"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                                        href: "twitter.com",
                                        target: "blank",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                            className: "fab fa-twitter"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                                        href: "instagram.com",
                                        target: "blank",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                            className: "fab fa-instagram"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                                        href: "youtube.com",
                                        target: "blank",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                            className: "fab fa-youtube"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-xs-12 col-sm-6 col-md-4 col-lg-4 align-right",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "kf-h-group",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("i", {
                                        className: "fas fa-map-marker-alt"
                                    }),
                                    " ",
                                    /*#__PURE__*/ jsx_runtime.jsx("em", {
                                        children: "Location :"
                                    }),
                                    " 55 main street, new york"
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "kf-navbar",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-xs-12 col-sm-6 col-md-3 col-lg-3",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "kf-logo",
                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                        src: "images/logo.png",
                                        alt: "image"
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-xs-12 col-sm-6 col-md-6 col-lg-6 align-center",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "kf-main-menu",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                    href: "/",
                                                    children: [
                                                        "Home",
                                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                            className: "las la-angle-down"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                href: "/",
                                                                children: "Coffee House"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                href: "index-2",
                                                                children: "Restaurant"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                href: "about",
                                                children: "About"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                    href: "menu-coffee",
                                                    children: [
                                                        "Menu",
                                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                            className: "las la-angle-down"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                href: "menu-coffee",
                                                                children: "Menu Coffee"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                href: "menu-restaurant",
                                                                children: "Menu Restaurant"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                    href: "#",
                                                    children: [
                                                        "Pages",
                                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                            className: "las la-angle-down"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                href: "services",
                                                                children: "Service"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                href: "reservation",
                                                                children: "Reservation"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                href: "history",
                                                                children: "History"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                href: "team",
                                                                children: "Our Chefs"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                href: "gallery",
                                                                children: "Gallery"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                href: "faq",
                                                                children: "FAQ"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                    href: "#",
                                                    children: [
                                                        "Blog",
                                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                            className: "las la-angle-down"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                href: "blog-grid",
                                                                children: "Blog Grid"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                href: "blog",
                                                                children: "Blog Standard"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                href: "blog-single",
                                                                children: "Blog Single"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                href: "contacts",
                                                children: "Contacts"
                                            })
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "col-xs-12 col-sm-6 col-md-3 col-lg-3 align-right",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("a", {
                                    href: "#",
                                    className: `kf-menu-btn ${toggle ? "active" : ""}`,
                                    onClick: ()=>setToggle(!toggle),
                                    children: /*#__PURE__*/ jsx_runtime.jsx("span", {})
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: "reservation",
                                    className: "kf-btn h-btn",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        children: "Book a table"
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "kf-navbar-mobile",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "kf-main-menu",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                    className: "has-children",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: "/",
                                            children: "Home"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                            className: "las la-angle-down",
                                            onClick: ()=>activeMenuSet("home")
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                            style: activeLi("home"),
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                        href: "/",
                                                        children: "Coffee House"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                        href: "index-2",
                                                        children: "Restaurant"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "about",
                                        children: "About"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                    className: "has-children",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: "menu-coffee",
                                            children: "Menu"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                            className: "las la-angle-down",
                                            onClick: ()=>activeMenuSet("Menu")
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                            style: activeLi("Menu"),
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                        href: "menu-coffee",
                                                        children: "Menu Coffee"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                        href: "menu-restaurant",
                                                        children: "Menu Restaurant"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                    className: "has-children",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                                            href: "#",
                                            children: "Pages"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                            className: "las la-angle-down",
                                            onClick: ()=>activeMenuSet("Pages")
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                            style: activeLi("Pages"),
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                        href: "services",
                                                        children: "Service"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                        href: "reservation",
                                                        children: "Reservation"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                        href: "history",
                                                        children: "History"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                        href: "team",
                                                        children: "Our Chefs"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                        href: "gallery",
                                                        children: "Gallery"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                        href: "faq",
                                                        children: "FAQ"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                    className: "has-children",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                                            href: "#",
                                            children: "Blog"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                            className: "las la-angle-down",
                                            onClick: ()=>activeMenuSet("Blog")
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                            style: activeLi("Blog"),
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                        href: "blog-grid",
                                                        children: "Blog Grid"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                        href: "blog",
                                                        children: "Blog Standard"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                        href: "blog-single",
                                                        children: "Blog Single"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "contacts",
                                        children: "Contacts"
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "kf-topline",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-xs-12 col-sm-12 col-md-12 col-lg-12",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                        href: "reservation",
                                        className: "kf-btn h-btn",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                children: "Book a table"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                className: "fas fa-chevron-right"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-xs-12 col-sm-12 col-md-12 col-lg-12",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "kf-h-social",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                href: "facebook.com",
                                                target: "blank",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                    className: "fab fa-facebook-f"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                href: "twitter.com",
                                                target: "blank",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                    className: "fab fa-twitter"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                href: "instagram.com",
                                                target: "blank",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                    className: "fab fa-instagram"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                href: "youtube.com",
                                                target: "blank",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                    className: "fab fa-youtube"
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-xs-12 col-sm-12 col-md-12 col-lg-12",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "kf-h-group",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                className: "far fa-clock"
                                            }),
                                            " ",
                                            /*#__PURE__*/ jsx_runtime.jsx("em", {
                                                children: "opening hours :"
                                            }),
                                            " 08:00 am - 09:00 pm"
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-xs-12 col-sm-12 col-md-12 col-lg-12",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "kf-h-group",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                className: "fas fa-map-marker-alt"
                                            }),
                                            " ",
                                            /*#__PURE__*/ jsx_runtime.jsx("em", {
                                                children: "Location :"
                                            }),
                                            " 55 main street, new york"
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const layouts_Header = (Header);

;// CONCATENATED MODULE: ./src/layouts/Layouts.js






const Layouts = ({ children  })=>{
    (0,external_react_.useEffect)(()=>{
        scrollAnimation();
        window.addEventListener("scroll", scrollAnimation);
    }, []);
    (0,external_react_.useEffect)(()=>{
        if (false) {}
        Splitting();
    });
    (0,external_react_.useEffect)(()=>{
        let { jarallax , jarallaxVideo  } = __webpack_require__(409);
        jarallaxVideo();
        jarallax(document.querySelectorAll(".js-parallax"), {
            speed: 0.65,
            type: "scroll"
        });
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(components_ImageView, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "bg",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(layouts_Header, {}),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "wrapper",
                        children: children
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(layouts_Footer, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const layouts_Layouts = (Layouts);


/***/ })

};
;