import InstaCarousel from "@/src/components/sliders/InstaCarousel";
import Layouts from "@/src/layouts/Layouts";

import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

// assign the env variables to constants
const EMAILJS_USER_ID = process.env.EMAILJS_USER_ID;
const EMAILJS_SERVICE_ID = process.env.EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID;

const address = [
  {
    name: "Main Location",
    address: ["55 Main Street, 2nd Block, \n 3rd Floor, New York"],
    icon: "las la-map-marked-alt",
  },
  {
    name: "Email Address",
    address: ["contact@rhodescoffeeco.com \n www.rhodescoffeeco.com"],
    icon: "las la-envelope-open-text",
  },
  {
    name: "Phone Number",
    address: ["+012 (345) 678 99 \n 123456780"],
    icon: "las la-headset",
  },
];

const Contacts = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form.current,
        EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
  };

  return (
    <Layouts>
      {/* Section Started Inner */}
      <section className="section kf-started-inner">
        <div
          className="kf-parallax-bg js-parallax"
          style={{
            backgroundImage: "url(images/menu_reservation_inner_bg-1.jpg)",
          }}
        />
        <div className="container">
          <h1
            className="kf-h-title text-anim-1 scroll-animate"
            data-splitting="chars"
            data-animate="active"
          >
            Contact Us
          </h1>
        </div>
      </section>
      {/* Section Contacts Info */}
      <section className="section kf-contacts-info">
        <div className="container">
          <div className="kf-contacts-items row">
            {address.map((item, index) => (
              <div
                key={index}
                className="col-xs-12 col-sm-12 col-md-6 col-lg-4 align-center"
              >
                <div
                  className="kf-contacts-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    {/*<img src="images/contact_icon1.png" alt="" />*/}
                    <i className={item.icon} />
                  </div>
                  <div className="desc">
                    <h5 className="name">{item.name}</h5>
                    <ul>
                      {item.address.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Subscribe to Text 
        // TODO: Add a form to subscribe to sms promotions adding a phone number
        // TODO: Add mongodb to store the phone number
        // TODO: Add a backend to send sms promotions

      */}
      <section
        className="section kf-subscribe-text"
        style={{ backgroundImage: "url(images/subscribe_bg.jpg)" }}
      >
        <div className="container">
          <div className="kf-subscribe-text-inner">
            <div
              className="kf-subscribe-text-item element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="kf-subscribe-text-desc">
                <h3 className="kf-title">Subscribe to our newsletter</h3>
                <p>
                  Subscribe to our SMS promotions to get a 10% discount on your
                  next order.
                </p>
              </div>
              <div className="kf-subscribe-text-form">
                <form id="cform" method="post">
                  <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
                      <div className="kf-field">
                        <input
                          type="phone"
                          name="phone"
                          placeholder="Phone Number"
                        />
                        <i className="fas fa-mobile-alt" />
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                      <div className="kf-bts">
                        <a
                          href="#"
                          className="kf-btn"
                          onclick="$('#cform').submit(); return false;"
                        >
                          <span>Subscribe</span>
                          <i className="fas fa-chevron-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="alert-success" style={{ display: "none" }}>
                  <p>Thanks, your message is sent successfully.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Contacts Form */}
      <section className="section kf-contacts-form">
        <div className="container">
          <div
            className="kf-reservation-form element-anim-1 scroll-animate"
            data-animate="active"
          >
            <div className="kf-titles align-center">
              <div className="kf-subtitle">Contact Us</div>
              <h3 className="kf-title">Send Us Message</h3>
            </div>
            <form
              id="cform"
              method="post"
              className="kf-form"
              onSubmit={sendEmail}
              ref={form}
            >
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <div className="kf-field">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                    />
                    <i className="fas fa-user" />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <div className="kf-field">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                    />
                    <i className="fas fa-envelope" />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="kf-field">
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      required
                      defaultValue={""}
                    />
                    <i className="fas fa-pencil-alt" />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="kf-bts">
                    <button
                      type="submit"
                      className="kf-btn"
                      // on click send email
                    >
                      <span>Send Message</span>
                      <i className="fas fa-chevron-right" />
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <div className="alert-success" style={{ display: "none" }}>
              <p>Thanks, your message is sent successfully.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Map */}
      <section className="section kf-map">
        <div className="container">
          <div className="kf-map-inner">
            <div
              className="kf-map-item element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.630900547434!2d-73.987853684593!3d40.757084979328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1
                  s0x89c259a6d0a1c2e7%3A0x2e2c0c9a3a0d9a8a!2s55%20Broadway%2C%20New%20York%2C%20NY%2010006%2C%20USA!5e0!3m2!1sen!2sbd!4v162
                  9789959270!5m2!1sen!2sbd"
                  width="100%"
                  height={450}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section Insta Carousel */}
      <InstaCarousel />
      {/* Section Brands */}
      <div className="section kf-brands">
        <div className="container">
          <div className="kf-brands-items row">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
              <div
                className="kf-brands-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="images/brand1.png" alt="image" />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
              <div
                className="kf-brands-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="images/brand2.png" alt="image" />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
              <div
                className="kf-brands-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="images/brand3.png" alt="image" />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
              <div
                className="kf-brands-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="images/brand4.png" alt="image" />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
              <div
                className="kf-brands-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="images/brand5.png" alt="image" />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
              <div
                className="kf-brands-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="images/brand6.png" alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  );
};
export default Contacts;
