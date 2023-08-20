import { sliderProps } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

import instaData from "@/src/components/data/instadata";

const InstaCarousel = () => {
  return (
    <div
      className="section kf-insta-carousel element-anim-1 scroll-animate"
      data-animate="active"
    >
      <div className="container">
        <Swiper {...sliderProps.kfInstaCarousel} className="swiper-container">
          <div className="swiper-wrapper">
            {instaData.map((item) => (
              <SwiperSlide className="swiper-slide" key={item.id}>
                <div className="slide-item">
                  <div className="image kf-image-hover">
                    <a href={item.link} target="blank">
                      <img src={item.img} alt="image" />
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};
export default InstaCarousel;
