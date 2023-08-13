import React from "react";
import Link from "next/link";

import merchandise from "./data/merchandise";

const Merchandise = () => {
  return (
    <>
      <section className="section kf-cta kf-parallax">
        <div className="container">
          <div className="kf-parallax-icon pi-1" data-jarallax-element={-60}>
            <div
              className="p-icon"
              style={{
                backgroundImage: "url(images/sunlogo.png)",
                rotate: "-10deg",
              }}
            />
          </div>
          <div className="kf-parallax-icon pi-2" data-jarallax-element={-80}>
            <div
              className="p-icon"
              style={{
                backgroundImage: "url(images/heart.png)",
                rotate: "10deg",
              }}
            />
          </div>
          <div className="kf-parallax-icon pi-3" data-jarallax-element={-50}>
            <div
              className="p-icon"
              style={{ backgroundImage: "url(images/hand.png)" }}
            />
          </div>
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
                  Show your support & love for RhodesCoffeeCo by purchasing our
                  branded merchandise.
                </h3>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <p
                className="kf-text element-anim-1 scroll-animate"
                data-animate="active"
              >
                Show your support for RhodesCoffeeCo by purchasing our branded
                merchandise. We currently have t-shirts, hoodies, and stickers
                available for purchase. All proceeds go towards the development
                of RhodesCoffeeCo.
              </p>
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
                  <div className="price">{item.price}</div>
                </div>
              </div>
            ))}
          </div>
          <hr />
          <div className="kf-merchandise-items row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <p>
                Disclaimer: All merchandise is made to order. Please allow 1-2
                weeks for delivery. You will be transfer to a secure payment
                page to complete your purchase.
              </p>
            </div>
          </div>

          <hr />

          <div className="kf-cta-btn">
            <Link href="/merchandise">
              <a className="kf-btn kf-btn-2 kf-btn-3">
                <i className="fa fa-love" />
                <span>Buy RhodesCoffeeCo Merchandise</span>
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Merchandise;
