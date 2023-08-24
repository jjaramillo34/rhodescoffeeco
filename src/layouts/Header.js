import Link from "next/link";
import { useEffect, useState } from "react";
import { stickyNav } from "../utils";

import CheckOpeningHours from "./OpeningHours";

const social = [
  {
    icon: "fab fa-facebook-f",
    link: "facebook.com",
  },
  {
    icon: "fab fa-instagram",
    link: "instagram.com",
  },
];

const menu = [
  {
    title: "Home",
    link: "/",
    submenu: [
      {
        title: "Coffee House",
        link: "/",
      },
    ],
  },
  {
    title: "About",
    link: "about",
    submenu: [
      {
        title: "AboutUs",
        link: "about",
      },
    ],
  },
  {
    title: "Menu",
    link: "menu-coffee",
    submenu: [
      {
        title: "Menu Coffee",
        link: "menu-coffee",
      },
    ],
  },
  //{
  //  title: "Shop",
  //  link: "shop",
  //  submenu: [
  //    {
  //      title: "Shop",
  //      link: "shop",
  //    },
  //  ],
  //},
  {
    title: "Services",
    link: "services",
    submenu: [
      {
        title: "Catering",
        link: "catering",
      },
      {
        title: "Merchandise",
        link: "shop",
      },
      {
        title: "Gallery",
        link: "gallery",
      },
      {
        title: "FAQ",
        link: "faq",
      },
    ],
  },
  //{
  //  title: "Catering",
  //  link: "catering",
  //  submenu: [
  //    {
  //      title: "Catering",
  //      link: "catering",
  //    },
  //  ],
  //},
  //{
  //  title: "Gallery",
  //  link: "gallery",
  //  submenu: [
  //    {
  //      title: "Our Gallery",
  //      link: "gallery",
  //    },
  //  ],
  //},
  //{
  //  title: "FAQ",
  //  link: "faq",
  //  submenu: [
  //    {
  //      title: "FAQ",
  //      link: "faq",
  //    },
  //  ],
  //},
  {
    title: "History",
    link: "history",
    submenu: [
      {
        title: "Our History",
        link: "history",
      },
    ],
  },
  {
    title: "Contact",
    link: "contacts",
    submenu: [
      {
        title: "Contact Us",
        link: "contacts",
      },
    ],
  },
];

const Header = () => {
  useEffect(() => {
    stickyNav();
  }, []);

  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (document.querySelector("header").className.includes("animated")) {
      setTimeout(() => {
        document.querySelector("header").classList.add("opened", "show");
      }, 800);
    }
  }, [toggle]);

  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };

  return (
    <header className={`kf-header ${toggle ? "animated" : ""}`}>
      {/* topline */}
      <div className="kf-topline">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
            {/* hours */}
            <CheckOpeningHours />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 align-center">
            {/* social */}
            <div className="kf-h-social">
              {social.map((item) => (
                <a href={item.link} target="blank">
                  <i
                    className={item.icon}
                    style={{
                      color: "black",
                      fontSize: "1.0rem",
                    }}
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 align-right">
            {/* location */}
            <div
              className="kf-h-group"
              style={{
                color: "black",
                fontSize: "1.0rem",
              }}
            >
              <i className="fas fa-map-marker-alt" /> <em>Location :</em>
              4759 Salina Street
            </div>
          </div>
        </div>
      </div>
      {/* navbar */}
      <div
        className="kf-navbar"
        style={{
          backgroundColor: "#e4d5b7",
          backdropFilter: "blur(10px)",
          backfaceVisibility: "hidden",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
        }}
      >
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
            {/* logo */}
            <div className="kf-logo">
              <Link href="/">
                <img
                  src="images/logo.png"
                  alt="image"
                  style={{
                    width: "100%",
                    maxHeight: "100px",
                    maxWidth: "100%",
                  }}
                />
              </Link>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 align-center">
            {/* main menu */}
            <div className="kf-main-menu">
              <ul>
                {menu.map((item) => (
                  <li>
                    <Link href={item.link}>
                      {item.title}
                      <i
                        className="las la-angle-down"
                        onClick={() => activeMenuSet(item.title)}
                      />
                    </Link>
                    <ul style={activeLi(item.title)}>
                      {item.submenu.map((subitem) => (
                        <li>
                          <Link href={subitem.link}>{subitem.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 align-right">
            {/* menu btn */}
            <a
              href="#"
              className={`kf-menu-btn ${toggle ? "active" : ""}`}
              onClick={() => setToggle(!toggle)}
            >
              <span />
            </a>
            {/* btn check menu*/}
            <Link href="menu-coffee" className="kf-btn h-btn">
              <span>Check Our Menu</span>
              <i className="fas fa-chevron-right" />
            </Link>
          </div>
        </div>
      </div>
      {/* mobile navbar */}
      <div className="kf-navbar-mobile">
        {/* mobile menu */}
        <div className="kf-main-menu">
          <ul>
            {menu.map((item) => (
              <li>
                <Link href={item.link}>
                  {item.title}
                  <i
                    className="las la-angle-down"
                    onClick={() => activeMenuSet(item.title)}
                  />
                </Link>
                <ul style={activeLi(item.title)}>
                  {item.submenu.map((subitem) => (
                    <li>
                      <Link href={subitem.link}>{subitem.title}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
        {/* mobile topline */}
        <div className="kf-topline">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              {/* mobile btn */}
              <Link href="menu-coffee" className="kf-btn h-btn">
                <span>Check Our Menu</span>
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              {/* social */}
              {social.map((item) => (
                <div className="kf-h-social">
                  <a href={item.link} target="blank">
                    <i className={item.icon} />
                  </a>
                </div>
              ))}
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              {/* hours */}
              <div className="kf-h-group">
                <i className="far fa-clock" /> <em>opening hours :</em> 08:00 am
                - 09:00 pm
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              {/* location */}
              <div className="kf-h-group">
                <i className="fas fa-map-marker-alt" /> <em>Location :</em>
                <a href="https://www.google.com/maps/place/4759+salina+st/@43.5618154,-76.1265864,3a,75y,274.81h,90t/data=!3m4!1e1!3m2!1svLdUR0GdnQKxLDjN84jStQ!2e0!4m2!3m1!1s0x89d83526100e6093:0xf7d45bb50875d655?sa=X&ved=2ahUKEwi63bzH0PWAAxV-F1kFHe-KAGcQxB16BAgdEAA">
                  4759 Salina Street
                </a>
              </div>
            </div>
            <hr />
            <CheckOpeningHours />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
