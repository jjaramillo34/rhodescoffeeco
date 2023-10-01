import React from "react";
import { useState, useEffect } from "react";
import { sliderProps } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import coffeeReviews from "@/src/components/data/coffeereviews";

const TestimonialsCarousel = () => {
  return (
    <section
      className="section kf-testimonials kf-testimonials-2 section-bg"
      style={{ backgroundImage: "url(images/testimonials_bg3.png)" }}
    >
      <div className="container">
        <div className="kf-titles align-center">
          <div
            className="kf-subtitle element-anim-1 scroll-animate"
            data-animate="active"
          >
            Customer Feedback
          </div>
          <h3
            className="kf-title element-anim-1 scroll-animate"
            data-animate="active"
          >
            What Our Clients Say
          </h3>
        </div>
        <div className="kf-testimonials-carousel">
          <Swiper
            {...sliderProps.kfTestimonialsCarousel}
            className="swiper-container"
          >
            <div className="swiper-wrapper">
              {coffeeReviews.map((item, index) => (
                <SwiperSlide key={index} className="swiper-slide">
                  <div
                    className="slide-item element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="image">
                      <Image
                        src={item.image}
                        alt="image"
                        layout="fill"
                        objectFit="cover"
                        priority={true}
                      />
                    </div>
                    <div className="desc">
                      <div className="stars">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                      <div className="text">
                        {item.review.length > 150 ? (
                          <p>{item.review.slice(0, 150)}...</p>
                        ) : (
                          <p>{item.review}</p>
                        )}
                      </div>
                      <h5 className="name">
                        {item.name} <em>{item.type}</em>
                      </h5>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
            <div className="swiper-pagination" />
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default TestimonialsCarousel;
