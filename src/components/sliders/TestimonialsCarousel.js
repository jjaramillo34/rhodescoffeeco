import { sliderProps } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const coffeeReviews = [
  {
    name: "Alex Johnson",
    image: "https://fakeimg.pl/100/",
    type: "Regular Customer",
    review:
      "Rhodes Coffee Co. is my go-to place! Their organic coffee is pure bliss, and I love the variety of artisanal products. It feels like a warm hug every time I visit!",
  },
  {
    name: "Emma Williams",
    image: "https://fakeimg.pl/100/",
    type: "First-Time Customer",
    review:
      "I stumbled upon Rhodes Coffee Co. during a road trip, and it was a delightful surprise! Their small-batch brews are unmatched, and I couldn't resist taking some home.",
  },
  {
    name: "Michael Smith",
    image: "https://fakeimg.pl/100/",
    type: "Regular Customer",
    review:
      "As a coffee enthusiast, I appreciate the dedication Rhodes Coffee Co. has for sourcing quality beans. It's evident in every sip, and it's a positive change I'm proud to support!",
  },
  {
    name: "Sophia Martinez",
    image: "https://fakeimg.pl/100/",
    type: "Occasional Customer",
    review:
      "Rhodes Coffee Co. offers a unique experience. I love their commitment to nature and sustainability. Their baristas are friendly, and the coffee is exceptional!",
  },
  {
    name: "William Brown",
    image: "https://fakeimg.pl/100/",
    type: "Regular Customer",
    review:
      "From the first sip, I knew Rhodes Coffee Co. was special. It's more than just coffee; it's a journey of flavors that sparks positivity. Highly recommended!",
  },
  {
    name: "Olivia Davis",
    image: "https://fakeimg.pl/100/",
    type: "First-Time Customer",
    review:
      "Rhodes Coffee Co. stands out with its commitment to organic goodness. I tried their signature blend, and it exceeded my expectations! Can't wait to visit again.",
  },
  {
    name: "Ethan Miller",
    image: "https://fakeimg.pl/100/",
    type: "Regular Customer",
    review:
      "The vibe at Rhodes Coffee Co. is unmatched - cozy and welcoming. Their coffee is divine, and I'm thrilled to be part of their positive change mission!",
  },
  {
    name: "Ava Wilson",
    image: "https://fakeimg.pl/100/",
    type: "Occasional Customer",
    review:
      "I had a fantastic experience at Rhodes Coffee Co. during a friend's recommendation. The organic options and friendly staff made it a memorable coffee stop.",
  },
  {
    name: "Liam Taylor",
    image: "https://fakeimg.pl/100/",
    type: "First-Time Customer",
    review:
      "Rhodes Coffee Co. is a gem! Their mobile setup is impressive, and the coffee quality matches. An authentic coffee experience that's worth every penny!",
  },
  {
    name: "Mia Anderson",
    image: "https://fakeimg.pl/100/",
    type: "Regular Customer",
    review:
      "Rhodes Coffee Co. has stolen my heart. Their dedication to being eco-friendly is commendable. Their coffee is a reminder to appreciate life's simple joys!",
  },
];

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
                      <img src={item.image} alt="image" />
                    </div>
                    <div className="desc">
                      <div className="stars">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                      <div className="text">{item.review}</div>
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
