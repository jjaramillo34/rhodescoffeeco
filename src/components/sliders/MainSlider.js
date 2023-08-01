import { sliderProps } from "@/src/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

const items = [
  {
    image: "images/started_img_n1.jpg",
    title1: "Brewing Up Fresh Adventures: ",
    title2: "RhodesCoffeeCo Mobile Truck!",
    subtitle: "Brewing dreams on the go - Rhodes Coffee Co. welcomes you!",
    link1: "menu-restaurant",
    link2: "reservation",
  },
  {
    image: "images/started_img_n2.jpg",
    title1: "Get Your Caffeine On Wheels: ",
    title2: "RhodesCoffeeCo Keeps You Energized!",
    subtitle: "Mobile bliss, natural brews - join our caffeine crusade!",
    link1: "menu-coffee",
    link2: "reservation",
  },
  {
    image: "images/started_img_n3.jpg",
    title1: "Coffee in Motion: ",
    title2: "RhodesCoffeeCo's Java Joyride!",
    subtitle: "Get ready for a java-filled journey with RhodesCoffeeCo!",
    link1: "menu-coffee",
    link2: "reservation",
  },
  {
    image: "images/started_img_n4.jpg",
    title1: "Roaming with Rhodes",
    title2: "Brewed for Adventure, Served with Love!",
    subtitle: "RhodesCoffeeCo's mobile truck is ready to roll!",
    link1: "menu-coffee",
    link2: "reservation",
  },
  {
    image: "images/started_img_n5.jpg",
    title1: "Rhodes Coffee Co.",
    title2: "Fueling Your Journey with Organic Goodness.",
    subtitle: "From roads to flavors - taste the essence of Rhodes.",
    link1: "menu-coffee",
    link2: "reservation",
  },
  {
    image: "images/started_img_n6.jpg",
    title1: "Sip & Smile",
    title2: "Embrace Life's Unexpected Twists with Rhodes.",
    subtitle: "Hop on the coffee trail - where passion meets perfection!",
    link1: "menu-coffee",
    link2: "reservation",
  },
  {
    image: "images/started_img_n7.jpg",
    title1: "Rooted in Flavor, Driven by Nature",
    title2: "Rhodes Coffee Co.",
    subtitle: "Caffeine-fueled joyride - Rhodes Coffee Co. at your service!",
    link1: "menu-coffee",
    link2: "reservation",
  },
  {
    image: "images/started_img_n8.jpg",
    title1: "From the Road to Your Cup",
    title2: "Taste the Rhodes Coffee Adventure.",
    subtitle: "Adventure in every cup - embrace the unexpected with us!",
    link1: "menu-coffee",
    link2: "reservation",
  },
  {
    image: "images/started_img_n9.jpg",
    title1: "Organic Brews, Homegrown Roots",
    title2: "Rhodes Coffee Co.",
    subtitle: "A mobile treat for your senses - Rhodes Coffee Co. delights!",
    link1: "menu-coffee",
    link2: "reservation",
  },
  {
    image: "images/started_img_n10.jpg",
    title1: "Embrace the Journey, Savor the Flavor",
    title2: "Rhodes Coffee Co.",
    subtitle: "Roaming with flavors - we're your coffee compass!",
    link1: "menu-coffee",
    link2: "reservation",
  },
  {
    image: "images/started_img_n11.jpg",
    title1: "Brewing Bridges, Cultivating Community",
    title2: "Rhodes Coffee Co.",
    subtitle: "Where nature blends with coffee - journey with Rhodes!",
    link1: "menu-coffee",
    link2: "reservation",
  },
  {
    image: "images/started_img_n12.jpg",
    title1: "Unearth Your Senses",
    title2: "Rhodes Coffee Co. Awakens Your Soul.",
    subtitle: "Taste the road less brewed - savor life's surprises!",
    link1: "menu-coffee",
    link2: "reservation",
  },
  {
    image: "images/started_img_n13.jpg",
    title1: "Rhodes Coffee Co.",
    title2: "Roaming for a Greener, Tastier Tomorrow.",
    subtitle: "Fueling your journey - Rhodes Coffee Co. is here to stay!",
    link1: "menu-coffee",
    link2: "reservation",
  },
  {
    image: "images/started_img_n14.jpg",
    title1: "Fueling Change, One Cup at a Time",
    title2: "Rhodes Coffee Co.",
    subtitle: "Home is where our coffee roams - join the ride today!",
    link1: "menu-coffee",
    link2: "reservation",
  },
  {
    image: "images/started_img_n15.jpg",
    title1: "Take the Road to Goodness",
    title2: "Rhodes Coffee Co. Leads the Way.",
    subtitle: "Home is where our coffee roams - join the ride today!",
    link1: "menu-coffee",
    link2: "reservation",
  },
  {
    image: "images/started_img_n16.jpg",
    title1: "Handcrafted, Heartfelt",
    title2: "Rhodes Coffee Co. Brewed with Care.",
    subtitle: "Small-batch wonders, big smiles - Rhodes Coffee Co. delivers!",
    link1: "menu-coffee",
    link2: "reservation",
  },
  {
    image: "images/started_img_n17.jpg",
    title1: "Taste the Freedom of Flavor",
    title2: "Rhodes Coffee Co. Mobile Magic.",
    subtitle: "Fuel your day, ignite change - it's Rhodes Coffee Co. time!",
    link1: "menu-coffee",
    link2: "reservation",
  },
];

const slice4 = (items) => {
  const r = Math.floor(Math.random() * 17);
  return items.slice(r, r + 4);
};

const MainSlider = () => {
  return (
    <section className="section kf-started-slider">
      <Swiper className="swiper-container" {...sliderProps.mainSliderSelector}>
        {slice4(items).map((item, index) => (
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
