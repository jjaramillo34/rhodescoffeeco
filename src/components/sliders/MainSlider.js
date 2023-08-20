import { sliderProps } from "@/src/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

import items from "@/src/components/data/mainitems";

const MainSlider = () => {
  return (
    <section className="section kf-started-slider">
      <Swiper className="swiper-container" {...sliderProps.mainSliderSelector}>
        {items.map((item, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div className="kf-started-item">
              <div
                className="slide js-parallax"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className="container">
                <div className="description align-left">
                  <div className="subtitles">{item.subtitle}</div>
                  <h2
                    className="name text-anim-1"
                    data-splitting="chars"
                    style={{
                      fontFamily: "Caveat",
                      fontSize: "3.0rem",
                    }}
                  >
                    {item.title1} <br />
                    {item.title2}
                  </h2>
                  <div className="kf-bts">
                    <Link href={item.link1} className="kf-btn">
                      <span>explore more</span>
                      <i className="fas fa-chevron-right" />
                    </Link>
                    <Link href={item.link2} className="kf-btn dark-btn">
                      <span>get delivery</span>
                      <i className="fas fa-chevron-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="mainSlider-prev swiper-button-prev" />
        <div className="mainSlider-next swiper-button-next" />
      </Swiper>
    </section>
  );
};
export default MainSlider;

//<SwiperSlide className="swiper-slide">
//  <div className="kf-started-item">
//    <div
//      className="slide js-parallax"
//      style={{ backgroundImage: "url(images/started_img_n3.jpg)" }}
//    />
//    <div className="container">
//      <div className="description align-left">
//        <div className="subtitles">Welcome to the rhodescoffee</div>
//        <h2 className="name text-anim-1" data-splitting="chars">
//          Great Coffee <br />
//          Good Vibes
//        </h2>
//        <div className="kf-bts">
//          <Link href="menu-coffee" className="kf-btn">
//            <span>explore more</span>
//            <i className="fas fa-chevron-right" />
//          </Link>
//          <Link href="reservation" className="kf-btn dark-btn">
//            <span>get delivery</span>
//            <i className="fas fa-chevron-right" />
//          </Link>
//        </div>
//      </div>
//    </div>
//  </div>
//</SwiperSlide>;
