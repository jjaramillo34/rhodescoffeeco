import VideoPlayer from "@/src/components/VideoPlayer";
import TestimonialsCarousel from "@/src/components/sliders/TestimonialsCarousel";
import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";

const numbers2 = [
  {
    icon: "las la-gem",
    num: "100+",
    name: "Clients",
    subname: "Our clients are our family",
  },
  {
    icon: "las la-user-tie",
    num: "2+",
    name: "Professional Chefs",
    subname: "Our chefs are the best",
  },
  {
    icon: "las la-trophy",
    num: "1+",
    name: "Winning Awards",
    subname: "Winning awards is our passion",
  },
  {
    icon: "lar la-grin-stars",
    num: "100+",
    name: "5 Star Reviews",
    subname: "Serve our customers with a smile",
  },
];

const services2 = [
  {
    icon: "images/service_icon3.png",
    name: "Coffee & Tea",
    subname: "Hot coffee and tea",
  },
  {
    icon: "images/service_icon4.png",
    name: "Ice Coffee & Tea",
    subname: "Cold coffee and tea",
  },
  {
    icon: "images/service_icon1.png",
    name: "Treats & Cookies",
    subname: "Variety of treats and cookies",
  },
  {
    icon: "images/service_icon2.png",
    name: "Smoothies & Bowls",
    subname: "Fresh smoothies and bowls",
  },
];

const ourTeam = [
  {
    name: "Tricia Hax",
    subname: "Senior Chefs",
    image: "images/team1.jpg",
    email: "tricia@rhodescofeeco.com",
    phone: "315) 430-5996",
    facebook: "https://www.facebook.com/",
    twitter: "https://twitter.com/",
    instagram: "https://www.instagram.com/tricia_hax/",
  },
  {
    name: "Kenny V. Gonzalez",
    subname: "Senior Chefs",
    image: "images/team2.jpg",
    email: "",
    facebook: "https://www.facebook.com/",
    twitter: "https://twitter.com/",
    instagram: "https://www.instagram.com/",
  },
  {
    name: "Joseph M. Lawrence",
    subname: "Senior Chefs",
    image: "images/team3.jpg",
    email: "",
    facebook: "https://www.facebook.com/",
    twitter: "https://twitter.com/",
    instagram: "https://www.instagram.com/",
  },
  {
    name: "Charles K. Smith",
    subname: "Senior Chefs",
    image: "images/team4.jpg",
    email: "",
    facebook: "https://www.facebook.com/",
    twitter: "https://twitter.com/",
    instagram: "https://www.instagram.com/",
  },
];

const brands = [
  {
    image: "images/brand1.png",
  },
  {
    image: "images/brand2.png",
  },
  {
    image: "images/brand3.png",
  },
  {
    image: "images/brand4.png",
  },
  {
    image: "images/brand5.png",
  },
  {
    image: "images/brand6.png",
  },
];

const merchandise = [
  {
    image: "images/merchandise1.jpg",
    name: "RhodesCoffeeCo T-Shirt",
    subname: "$25.00",
  },
  {
    image: "images/merchandise2.jpg",
    name: "RhodesCoffeeCo Hoodie",
    subname: "$35.00",
  },
  {
    image: "images/merchandise3.jpg",
    name: "RhodesCoffeeCo Mug",
    subname: "$15.00",
  },
];

const About = () => {
  return (
    <Layouts>
      {/* Section Started Inner */}
      <section className="section kf-started-inner">
        <div
          className="kf-parallax-bg js-parallax"
          style={{ backgroundImage: "url(images/history_inner_bg1.jpg)" }}
        />
        <div className="container">
          <h1
            className="kf-h-title text-anim-1 scroll-animate"
            data-splitting="chars"
            data-animate="active"
          >
            About Us
          </h1>
        </div>
      </section>
      {/* Section About-2 */}
      <section className="section kf-choose kf-choose-2">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 align-self-center">
              <div className="kf-titles">
                <div
                  className="kf-subtitle element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  About RhodesCoffeeCo
                </div>
                <h3
                  className="kf-title element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  RhodesCoffeeCo mobile coffee shop
                </h3>
              </div>
              <div
                className="kf-text element-anim-1 scroll-animate"
                data-animate="active"
              >
                <p>
                  RhodesCoffeeCo is a mobile coffee shop that serves the
                  community of Pulaski NY and surrounding areas. We are a
                  family-owned business that is passionate about coffee and
                  serving our community.
                </p>
              </div>
              <div className="kf-choose-list">
                <ul>
                  <li
                    className="element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="icon">
                      <img src="images/choose_icon1.png" alt="image" />
                    </div>
                    <div className="desc">
                      <h5 className="name">100% Organic Coffee</h5>
                      <div className="subname">
                        Brewed coffee is made by pouring hot water onto ground
                        coffee beans.
                      </div>
                    </div>
                  </li>
                  <li
                    className="element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="icon">
                      <img src="images/choose_icon2.png" alt="image" />
                    </div>
                    <div className="desc">
                      <h5 className="name">Fresh &amp; Healthy Foods</h5>
                      <div className="subname">
                        Smoothies, Bowls and more. We have a variety of healthy
                        options to choose from.
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <Link
                href="menu-coffee"
                className="kf-btn element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span>our menu</span>
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 offset-lg-1">
              <div
                className="kf-choose-image element-anim-1 scroll-animate"
                data-animate="active"
              >
                <img src="images/about_img2.jpg" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section Numbers-2 */}
      <section className="section kf-numbers-2 section-bg">
        <div className="container">
          <div className="kf-numbers-items-2 row">
            {numbers2.map((item, index) => (
              <div
                key={index}
                className="col-xs-12 col-sm-12 col-md-6 col-lg-3"
              >
                <div
                  className="kf-numbers-item-2 element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="icon">
                    <i className={item.icon} />
                  </div>
                  <div className="num">{item.num}</div>
                  <div className="desc">
                    <h5 className="name">{item.name}</h5>
                    <div className="subname">{item.subname}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Section Video */}
      <section className="section kf-video">
        <div className="container">
          <VideoPlayer
            videoBg={"images/video_bg.jpg"}
            extraClass={"kf-image-hover"}
          />
        </div>
      </section>
      {/* Section Services-2 */}
      <section className="section kf-services">
        <div className="container">
          <div className="kf-services-items-2 row">
            {services2.map((item, index) => (
              <div
                key={index}
                className="col-xs-12 col-sm-12 col-md-6 col-lg-3"
              >
                <div
                  className="kf-services-item-2 element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <img src={item.icon} alt="image" />
                  </div>
                  <div className="desc">
                    <h5 className="name">{item.name}</h5>
                    <div className="subname">{item.subname}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Section Team */}
      <section className="section kf-team section-bg">
        <div className="container">
          <div className="kf-titles align-center">
            <div
              className="kf-subtitle element-anim-1 scroll-animate"
              data-animate="active"
            >
              Experience Team Member
            </div>
            <h3
              className="kf-title element-anim-1 scroll-animate"
              data-animate="active"
            >
              Meet Our Professional Chefs
            </h3>
          </div>
          <div className="kf-team-items row">
            {ourTeam.map((item, index) => (
              <div
                key={index}
                className="col-xs-12 col-sm-12 col-md-6 col-lg-3"
              >
                <div
                  className="kf-team-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="desc">
                    <h5 className="name">{item.name}</h5>
                    <div className="subname">{item.subname}</div>
                  </div>
                  <div className="image kf-image-hover">
                    <img src={item.image} alt="image" />
                    <div className="info">
                      <div className="label">{item.email}</div>
                      <div className="label">{item.phone}</div>
                    </div>
                    <div className="social">
                      <a href={item.facebook} target="_blank">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href={item.twitter} target="_blank">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href={item.instagram} target="_blank">
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Section Brands */}
      <section className="section kf-brands">
        <div className="container">
          <div className="kf-brands-items row">
            {brands.map((item, index) => (
              <div
                key={index}
                className="col-xs-12 col-sm-12 col-md-4 col-lg-2"
              >
                <div
                  className="kf-brands-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <img src={item.image} alt="image" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Section Testimonials Carousel */}
      <TestimonialsCarousel />
      {/* Section CTA */}
      {/*<section
        className="section kf-cta kf-parallax"
        style={{ backgroundImage: "url(images/cta_bg.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
              <div className="kf-titles">
                <div
                  className="kf-subtitle element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  Need a Table On Coffee House
                </div>
                <h3
                  className="kf-title element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  Booking Table For Your &amp; Family Members
                </h3>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 align-self-center align-right">
              <Link
                href="reservation"
                className="kf-btn element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span>booking table</span>
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>*/}
      {/* Section Sell Merchandise */}
      <section className="section kf-cta kf-parallax">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
              <div className="kf-titles">
                <div
                  className="kf-subtitle element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  RhodesCoffeeCo Merchandise
                </div>
                <h3
                  className="kf-title element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  Buy RhodesCoffeeCo Merchandise
                </h3>
              </div>
            </div>
          </div>
          <hr />
          <div className="kf-merchandise-items row">
            {merchandise.map((item, index) => (
              <div
                key={index}
                className="col-xs-12 col-sm-12 col-md-12 col-lg-4"
              >
                <div
                  className="kf-merchandise-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <img src={item.image} alt="image" />
                  </div>
                  <div className="desc">
                    <h5 className="name">{item.name}</h5>
                    <div className="subname">{item.subname}</div>
                  </div>
                  <div className="kf-btn">
                    <Link
                      href="https://form.jotform.com/232175552619156"
                      className="kf-btn element-anim-1 scroll-animate"
                      data-animate="active"
                      target="_blank"
                    >
                      <span>Buy Now</span>
                      <i className="fas fa-chevron-right" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layouts>
  );
};
export default About;
