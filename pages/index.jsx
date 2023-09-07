import React from "react";
import MainSlider from "@/src/components/sliders/MainSlider";
import TestimonialsCarousel from "@/src/components/sliders/TestimonialsCarousel";
import Layouts from "@/src/layouts/Layouts";
import { sliderProps } from "@/src/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
// next image
import Image from "next/image";

// import js component file for merchandise
import Merchandise from "@/src/components/Merchandise";

// import menu from "@/src/menu";
import items from "@/src/components/data/menu";
// import from pages folder api folder subscribe.js
import SubscribePopup from "@/src/components/SubscribePopup";

const slice6 = items.slice(0, 6);

// import data for itemscarousel
import itemsCarousel from "@/src/components/data/itemscarousel";
import reviews from "@/src/components/data/reviews";
import numbers from "@/src/components/data/clients";
import services from "@/src/components/data/services1";

const Index = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 5000);
  }, []);

  return (
    <Layouts>
      {/* Section Started Slider */}
      <SubscribePopup isOpen={show} onClose={() => setShow(false)} />
      <MainSlider />
      {/* Section About */}
      <section className="section kf-about section-bg">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5">
              <div className="kf-titles">
                <div
                  className="kf-subtitle element-anim-1 scroll-animate"
                  data-animate="active"
                  style={{
                    color: "#fff",
                    textShadow: "0 0 10px rgba(0,0,0,0.5)",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    fontSize: "2.5rem",
                  }}
                >
                  About Us
                </div>
                <h3
                  className="kf-title element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  Organic &amp; Fresh Coffee <br />
                  at Rhodes Coffee Co.
                </h3>
              </div>
              <div
                className="kf-text element-anim-1 scroll-animate"
                data-animate="active"
              >
                <p>
                  "Inspired by the road [Rhode] - the unexpected places life
                  takes us, the people we meet, and ultimately - the place we
                  call home - Rhodes Coffee Co. is an homage to our roots.
                  Rooted in the belief that life is best lived authentically and
                  organically - and as close to nature as possible. Rhodes
                  Coffee Co. strives to be a catalyst for positive change with
                  thoughtfully sourced organic coffee & ingredients + small
                  batch, artisanal products at an affordable price."
                </p>
              </div>
              <div
                className="kf-about-quote element-anim-1 scroll-animate"
                data-animate="active"
              >
                <Image
                  src="/images/quote_img1.jpg"
                  alt="image"
                  width={125}
                  height={100}
                />
                <div>
                  Rooted in authenticity, brewed for change - Rhodes Coffee Co.
                  embraces life's unexpected roads.
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7">
              <div
                className="kf-about-image element-anim-1 scroll-animate"
                data-animate="active"
              >
                <Image
                  src="/images/about_img1.jpeg"
                  alt="image"
                  width={461}
                  height={600}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section Services */}
      <section className="section kf-services section-bg">
        <div className="container">
          <div className="kf-services-items row">
            {services.map((item, index) => (
              <div
                className="col-xs-12 col-sm-12 col-md-12 col-lg-4"
                key={index}
              >
                <div
                  className="kf-services-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <Link href={item.link}>
                      <Image src={item.image} alt="image" />
                    </Link>
                  </div>
                  <div className="desc">
                    <div className="icon">
                      <i className={item.icon} />
                    </div>
                    <h5 className="name">{item.name}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Section Menu */}
      <section
        className="section kf-menu kf-parallax"
        style={{ backgroundImage: "url(images/category_bg.jpg)" }}
      >
        <div className="container">
          <div className="kf-parallax-icon pi-1" data-jarallax-element={-60}>
            <div
              className="p-icon"
              style={{
                backgroundImage: "url(images/menu_icon.png)",
              }}
            />
          </div>
          <div className="kf-titles align-center">
            <div
              className="kf-subtitle element-anim-1 scroll-animate"
              data-animate="active"
            >
              Choose Best Coffee
            </div>
            <h3
              className="kf-title element-anim-1 scroll-animate"
              data-animate="active"
              style={{
                color: "#fff",
                textShadow: "0 0 10px rgba(0,0,0,0.5)",
                textTransform: "uppercase",
                fontWeight: "bold",
                fontSize: "2.5rem",
                fontFamily: "sans-serif",
              }}
            >
              RhodesCoffee Popular Coffee Menu
            </h3>
          </div>
          <div className="kf-menu-items" style={{ backgroundColor: "#C4A484" }}>
            <img
              style={{
                width: "100%",
                height: "auto",
                backgroundImage: "url(images/menu_logo.png)",
              }}
            />
            <div className="row">
              {slice6.map((item, index) => (
                <div
                  className="col-xs-12 col-sm-12 col-md-12 col-lg-6"
                  key={index}
                >
                  <div
                    className="kf-menu-item element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="image kf-image-hover">
                      <a href="images/menu1.jpg" className="has-popup-image">
                        <img src={item.image} alt="image" />
                      </a>
                    </div>
                    <div className="desc">
                      <h5 className="name">{item.name}</h5>
                      <div
                        className="subname"
                        style={{
                          color: "#fff",
                          fontSize: "0.75rem",
                          fontFamily: "sans-serif",
                        }}
                      >
                        {item.subname}
                      </div>
                      <div
                        className="price"
                        style={{
                          color: "#fff",
                          fontWeight: "bold",
                          fontSize: "1.0rem",
                          fontFamily: "sans-serif",
                        }}
                      >
                        {item.price}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Section Choose */}
      <section
        className="section kf-choose section-bg"
        style={{
          backgroundColor: "#b1b1b1",
        }}
      >
        <div className="container">
          <div className="kf-parallax-icon pi-1" data-jarallax-element={-60}>
            <div
              className="p-icon"
              style={{
                backgroundImage: "url(images/parallax_icon1.png)",
              }}
            />
          </div>
          <div className="kf-parallax-icon pi-2" data-jarallax-element={-80}>
            <div
              className="p-icon"
              style={{ backgroundImage: "url(images/parallax_icon2.png)" }}
            />
          </div>
          <div className="kf-parallax-icon pi-3" data-jarallax-element={-40}>
            <div
              className="p-icon"
              style={{ backgroundImage: "url(images/parallax_icon3.png)" }}
            />
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <div
                className="kf-choose-image element-anim-1 scroll-animate"
                data-animate="active"
              >
                <Image
                  src="/images/choose_img1.jpg"
                  alt="image"
                  width={500}
                  height={700}
                  sizes="{(max-width: 767px) 500px, (max-width: 991px) 500px, 700px}"
                />
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 offset-lg-1 align-self-center">
              <div className="kf-titles">
                <div
                  className="kf-subtitle element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  Why Choose Us
                </div>
                <h3
                  className="kf-title element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  RhodesCoffee Best Coffee Mobile in Town Since 2022
                </h3>
              </div>
              <div
                className="kf-text element-anim-1 scroll-animate"
                data-animate="active"
              >
                <p>
                  Step into the realm of coffee excellence with RhodesCoffee -
                  Proudly Serving the Finest Mobile Brews in Town Since 2022!
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
                      <h5 className="name">Natural Coffee Beans</h5>
                      <div className="subname">
                        100% Organic Coffee Beans blend with natural ingredients
                        and flavors to create a unique taste experience.
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
                      <h5 className="name">100% ISO Certification</h5>
                      <div className="subname">
                        We thrive to provide the best quality coffee to our dear
                        customers. Are truck is ISO certified and we are proud
                        of it.
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <Link
                href="about"
                className="kf-btn element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span>explore more</span>
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Section Grid Carousel */}
      <section className="section kf-grid-carousel">
        <div className="container">
          <Swiper {...sliderProps.kfGridCarousel} className="swiper-container">
            {itemsCarousel.map((item, index) => (
              <SwiperSlide className="swiper-slide" key={index}>
                <div
                  className="slide-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href={item.image} className="has-popup-image">
                      <Image
                        src={item.image}
                        alt="image"
                        width={667}
                        height={1000}
                        sizes="{(max-width: 767px) 667px, (max-width: 991px) 667px, 1000px}"
                      />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">{item.name}</h5>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      {/* end Section Grid Carousel */}
      {/* Section Testimonials Carousel */}
      <TestimonialsCarousel />
      {/* Section Numbers */}
      <section className="section kf-numbers">
        <div className="container">
          <div className="kf-numbers-items row">
            {numbers.map((item, index) => (
              <div
                className="col-xs-12 col-sm-12 col-md-6 col-lg-4"
                key={index}
              >
                <div
                  className="kf-numbers-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="num">{item.number}</div>
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
      {/* Section Latest Blog */}
      {/* 
      <section className="section kf-latest-blog section-bg">
        <div className="container">
          <div className="kf-titles align-center">
            <div
              className="kf-subtitle element-anim-1 scroll-animate"
              data-animate="active"
            >
              Get Every Single Update
            </div>
            <h3
              className="kf-title element-anim-1 scroll-animate"
              data-animate="active"
            >
              Read Some Latest Blog &amp; News
            </h3>
          </div>
          <div className="kf-blog-grid-items row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              <div
                className="kf-blog-grid-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <Link href="blog-single">
                    <img src="images/latest_blog1.jpg" alt="image" />
                  </Link>
                </div>
                <div className="desc">
                  <h5 className="name">
                    SWR React Hooks With Next Increm Ental Static Regeneration
                  </h5>
                  <div className="kf-date">
                    <i className="far fa-calendar-alt" />
                    25 Sep 2021
                  </div>
                  <div className="kf-comm">
                    <i className="far fa-comments" />
                    Comments (7)
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              <div
                className="kf-blog-grid-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <Link href="blog-single">
                    <img src="images/latest_blog2.jpg" alt="image" />
                  </Link>
                </div>
                <div className="desc">
                  <h5 className="name">
                    Decisions For Building Flexible Components DevTools Browser
                  </h5>
                  <div className="kf-date">
                    <i className="far fa-calendar-alt" />
                    25 Sep 2021
                  </div>
                  <div className="kf-comm">
                    <i className="far fa-comments" />
                    Comments (7)
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              <div
                className="kf-blog-grid-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <Link href="blog-single">
                    <img src="images/latest_blog3.jpg" alt="image" />
                  </Link>
                </div>
                <div className="desc">
                  <h5 className="name">
                    SWR React Hooks With Next Increm Ental Static Regeneration
                  </h5>
                  <div className="kf-date">
                    <i className="far fa-calendar-alt" />
                    25 Sep 2021
                  </div>
                  <div className="kf-comm">
                    <i className="far fa-comments" />
                    Comments (7)
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="align-center">
            <Link
              href="blog-grid"
              className="kf-btn element-anim-1 scroll-animate"
              data-animate="active"
            >
              <span>view all</span>
              <i className="fas fa-chevron-right" />
            </Link>
          </div>
        </div>
      </section> */}
      {/* Section CTA */}
      {/*
      <section
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
      </section>
      */}
      {/* Section subscribe */}
      <section
        className="section kf-subscribe"
        style={{
          backgroundColor: "#b1b1b1",
        }}
      >
        <div className="container">
          <div className="kf-parallax-icon pi-1" data-jarallax-element={-60}>
            <div
              className="p-icon"
              style={{
                backgroundImage: "url(images/parallax_icon4.png)",
              }}
            />
          </div>
          <div className="kf-subscribe-items row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <div
                className="kf-subscribe-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="kf-subscribe-image">
                  <Image
                    src="/images/subscribe_img1.jpg"
                    alt="image"
                    width={570}
                    height={400}
                    sizes="{(max-width: 767px) 570px, (max-width: 991px) 570px, 400px}"
                  />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 align-self-center">
              <div className="kf-titles">
                <div
                  className="kf-subtitle element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  Subscribe Our Newsletter
                </div>
                <h3
                  className="kf-title element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  Get Every Single Update
                </h3>
              </div>
              <div
                className="kf-text element-anim-1 scroll-animate"
                data-animate="active"
              >
                <p>
                  Subscribe to our newsletter to get the latest news, updates
                  and offers delivered directly in your inbox.
                </p>
              </div>
              <form
                className="kf-subscribe-form element-anim-1 scroll-animate"
                data-animate="active"
              >
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
                <button type="submit" className="kf-btn">
                  <span>subscribe</span>
                  <i className="fas fa-chevron-right" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Section Gallery */}
      {/*<section className="section kf-gallery">
        <div className="container">
          <div className="kf-titles align-center">
            <div
              className="kf-subtitle element-anim-1 scroll-animate"
              data-animate="active"
            >
              Our Gallery
            </div>
            <h3
              className="kf-title element-anim-1 scroll-animate"
              data-animate="active"
            >
              RhodesCoffee Co. Instagram Gallery
            </h3>
          </div>
          <div className="kf-gallery-items">
            <div className="row">
              {itemsCarousel.map((item, index) => (
                <div
                  className="col-xs-12 col-sm-12 col-md-6 col-lg-4"
                  key={index}
                >
                  <div
                    className="kf-gallery-item element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="image kf-image-hover">
                      <a
                        href="images/grid_gal1.jpg"
                        className="has-popup-image"
                      >
                        <img src={item.image} alt="image" />
                      </a>
                    </div>

                    <div className="desc">
                      <div className="icon">
                        <i className="fab fa-instagram" />
                      </div>
                      <h5 className="name">{item.name}</h5>
                      <i className="fas fa-heart" />
                      <span>1.2k</span>
                      <span className="sep">|</span>
                      <i className="fas fa-retweet" />
                      <span>1.2k</span>
                      <span className="sep">|</span>
                      <i className="fas fa-comment" />
                      <span>1.2k</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="align-center">
            <Link
              href="gallery"
              className="kf-btn element-anim-1 scroll-animate"
              data-animate="active"
            >
              <span>view all</span>
              <i className="fas fa-chevron-right" />
            </Link>
          </div>
        </div>
      </section>
      */}
      {/* Section Merchandise */}
      <Merchandise />
      {/* End Section Merchandise */}
    </Layouts>
  );
};
export default Index;
