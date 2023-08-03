import Link from "next/link";
import { useEffect, useState } from "react";
import { stickyNav } from "../utils";

const social = [
  {
    icon: "fab fa-facebook-f",
    link: "facebook.com",
  },
  {
    icon: "fab fa-twitter",
    link: "twitter.com",
  },
  {
    icon: "fab fa-instagram",
    link: "instagram.com",
  },
  {
    icon: "fab fa-youtube",
    link: "youtube.com",
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
            <div
              className="kf-h-group"
              style={{
                color: "black",
                fontSize: "1.0rem",
              }}
            >
              <i className="far fa-clock" /> <em>opening hours :</em> 07:00 am -
              2:00 pm
            </div>
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
                <li>
                  <Link href="/">
                    Home
                    <i className="las la-angle-down" />
                  </Link>
                  <ul>
                    <li>
                      <Link href="/">Coffee House</Link>
                    </li>
                    <li>
                      <Link href="index-2">Restaurant</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="about">About</Link>
                </li>
                <li>
                  <Link href="menu-coffee">
                    Menu
                    <i className="las la-angle-down" />
                  </Link>
                  <ul>
                    <li>
                      <Link href="menu-coffee">Menu Coffee</Link>
                    </li>
                    <li>
                      <Link href="menu-restaurant">Menu Restaurant</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    Pages
                    <i className="las la-angle-down" />
                  </a>
                  <ul>
                    <li>
                      <Link href="services">Service</Link>
                    </li>
                    <li>
                      <Link href="reservation">Reservation</Link>
                    </li>
                    <li>
                      <Link href="history">History</Link>
                    </li>
                    <li>
                      <Link href="team">Our Chefs</Link>
                    </li>
                    <li>
                      <Link href="gallery">Gallery</Link>
                    </li>
                    <li>
                      <Link href="faq">FAQ</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    Blog
                    <i className="las la-angle-down" />
                  </a>
                  <ul>
                    <li>
                      <Link href="blog-grid">Blog Grid</Link>
                    </li>
                    <li>
                      <Link href="blog">Blog Standard</Link>
                    </li>
                    <li>
                      <Link href="blog-single">Blog Single</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="contacts">Contacts</Link>
                </li>
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
            <li className="has-children">
              <Link href="/">Home</Link>
              <i
                className="las la-angle-down"
                onClick={() => activeMenuSet("home")}
              />
              <ul style={activeLi("home")}>
                <li>
                  <Link href="/">Coffee House</Link>
                </li>
                <li>
                  <Link href="index-2">Restaurant</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="about">About</Link>
            </li>
            <li className="has-children">
              <Link href="menu-coffee">Menu</Link>
              <i
                className="las la-angle-down"
                onClick={() => activeMenuSet("Menu")}
              />
              <ul style={activeLi("Menu")}>
                <li>
                  <Link href="menu-coffee">Menu Coffee</Link>
                </li>
                <li>
                  <Link href="menu-restaurant">Menu Restaurant</Link>
                </li>
              </ul>
            </li>
            <li className="has-children">
              <a href="#">Pages</a>
              <i
                className="las la-angle-down"
                onClick={() => activeMenuSet("Pages")}
              />
              <ul style={activeLi("Pages")}>
                <li>
                  <Link href="services">Service</Link>
                </li>
                <li>
                  <Link href="reservation">Reservation</Link>
                </li>
                <li>
                  <Link href="history">History</Link>
                </li>
                <li>
                  <Link href="team">Our Chefs</Link>
                </li>
                <li>
                  <Link href="gallery">Gallery</Link>
                </li>
                <li>
                  <Link href="faq">FAQ</Link>
                </li>
              </ul>
            </li>
            <li className="has-children">
              <a href="#">Blog</a>
              <i
                className="las la-angle-down"
                onClick={() => activeMenuSet("Blog")}
              />
              <ul style={activeLi("Blog")}>
                <li>
                  <Link href="blog-grid">Blog Grid</Link>
                </li>
                <li>
                  <Link href="blog">Blog Standard</Link>
                </li>
                <li>
                  <Link href="blog-single">Blog Single</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="contacts">Contacts</Link>
            </li>
          </ul>
        </div>
        {/* mobile topline */}
        <div className="kf-topline">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              {/* mobile btn */}
              <Link href="reservation" className="kf-btn h-btn">
                <span>Book a table</span>
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              {/* social */}
              <div className="kf-h-social">
                <a href="facebook.com" target="blank">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="twitter.com" target="blank">
                  <i className="fab fa-twitter" />
                </a>
                <a href="instagram.com" target="blank">
                  <i className="fab fa-instagram" />
                </a>
                <a href="youtube.com" target="blank">
                  <i className="fab fa-youtube" />
                </a>
              </div>
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
                <i className="fas fa-map-marker-alt" /> <em>Location :</em> 55
                main street, new york
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
