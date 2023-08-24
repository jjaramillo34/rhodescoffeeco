import VideoPlayer from "@/src/components/VideoPlayer";
import TestimonialsCarousel from "@/src/components/sliders/TestimonialsCarousel";
import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";

// import merchandise from "@/src/data/merchandise";
import Merchandise from "@/src/components/Merchandise";

// import data here
import numbers2 from "@/src/components/data/numbers";
import services2 from "@/src/components/data/services";
import ourTeam from "@/src/components/data/ourteam";
import brands from "@/src/components/data/brands";

// next/image
import Image from "next/image";

const About = () => {
  return (
    <Layouts>
      {/* Section Started Inner */}
      <section className="section kf-started-inner">
        <div
          className="kf-parallax-bg js-parallax"
          style={{ backgroundImage: "url(images/history_inner_bg1.jpeg)" }}
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
                      <Image
                        src="/images/choose_icon1.png"
                        alt="image"
                        sizes="100%"
                      />
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
                      <Image
                        src="/images/choose_icon2.png"
                        alt="image"
                        sizes="100%"
                      />
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
                <Image
                  src="/images/about2.jpg"
                  alt="image"
                  sizes="(max-width: 479px) 100vw, (max-width: 767px) 100vw, (max-width: 991px) 100vw, 100vw, (max-width: 1199px) 100vw, 100vw"
                />
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
                    <Image
                      src={item.image}
                      alt="services image"
                      sizes="(max-width: 479px) 100vw, (max-width: 767px) 100vw, (max-width: 991px) 100vw, 100vw, (max-width: 1199px) 100vw, 100vw"
                    />
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
              Meet Our Professional Baristas
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
                    <Image
                      src={item.image}
                      alt="image"
                      sizes="(max-width: 479px) 100vw, (max-width: 767px) 100vw, (max-width: 991px) 100vw, 100vw, (max-width: 1199px) 100vw, 100vw"
                    />
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
                    <Image
                      src={item.image}
                      alt="image"
                      sizes="(max-width: 479px) 100vw, (max-width: 767px) 100vw, (max-width: 991px) 100vw, 100vw, (max-width: 1199px) 100vw, 100vw"
                    />
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
      <Merchandise />
    </Layouts>
  );
};
export default About;
