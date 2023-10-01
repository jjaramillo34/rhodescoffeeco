const hours = [
  {
    id: 1,
    day: "Saturday & Sunday",
    time: "08:00 am - 2:00pm",
  },
  {
    id: 2,
    day: "Monday & Friday",
    time: "07:00 am - 1:00pm",
  },
  {
    id: 3,
    day: "Tuesday - Thursday",
    time: "Closed",
  },
];

const location = [
  {
    id: 1,
    name: "Location: ",
    description: "4759 Salina Street",
    icon: "las la-map-marker",
    linktoFollow: "https://goo.gl/maps/6Z1Z9Z6Z9Z6Z9Z6Z9",
  },
  {
    id: 2,
    name: "Email Address: ",
    description: "contact@rhodescoffeeco.com",
    icon: "las la-envelope-open-text",
    linktoFollow: "mailto:contact@rhodescoffeco.com ",
  },
  {
    id: 3,
    name: "Phone Number: ",
    description: "(315) 430-5996",
    icon: "las la-phone",
    linktoFollow: "tel:315-430-5996",
  },
];

import gallery from "../components/data/itemscarousel";
import OpeningHours from "./OpeningHours";

import Image from "next/image";

// slice gallery array to only show 8 images
const slicedGallery = gallery.slice(0, 9);

import footerImage from "@/public/images/logo_footer.png";

const Footer = () => {
  return (
    <div className="kf-footer">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            {/* logo */}
            <div
              className="kf-logo element-anim-1 scroll-animate"
              data-animate="active"
            >
              <a href="/">
                <Image
                  src={footerImage}
                  alt="Rhodes Coffee Co Logo"
                  sizes="(max-width: 768px) 600px, 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={100}
                  className="img-fluid"
                  style={{
                    width: "300px",
                    height: "200px",
                  }}
                />
              </a>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            {/* hours */}
            <div
              className="kf-f-hours element-anim-1 scroll-animate"
              data-animate="active"
            >
              <h5>Working Hours</h5>
              <ul>
                {hours.map((item) =>
                  item.time === "Closed" ? (
                    <li key={item.id}>
                      <em
                        style={{
                          color: "white",
                          fontWeight: "bolder",
                        }}
                      >
                        {item.day}
                      </em>
                      <strong
                        style={{
                          color: "black",
                          fontWeight: "bolder",
                        }}
                      >
                        {item.time}
                      </strong>
                    </li>
                  ) : (
                    <li key={item.id}>
                      <em
                        style={{
                          color: "white",
                          fontWeight: "bolder",
                        }}
                      >
                        {item.day}
                      </em>
                      {item.time}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            {/* contact */}
            <div
              className="kf-f-contact element-anim-1 scroll-animate"
              data-animate="active"
            >
              <h5>Contact Us</h5>
              <ul>
                {location.map((item) => (
                  <li key={item.id}>
                    <i
                      className={item.icon}
                      style={{
                        color: "black",
                      }}
                    />
                    <em
                      style={{
                        color: "black",
                      }}
                    >
                      {item.name}
                    </em>
                    <a
                      href={item.linktoFollow}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "black",
                      }}
                    >
                      {item.description}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            {/* gallery */}
            <div
              className="kf-f-gallery element-anim-1 scroll-animate"
              data-animate="active"
            >
              <h5>Gallery</h5>
              <ul>
                {slicedGallery.map((item) => (
                  <li key={item.id}>
                    <Image
                      src={item.image}
                      alt="Rhodes Coffee Co Gallery Image"
                      sizes="(max-width: 768px) 600px, 100vw, (max-width: 1200px) 50vw, 33vw"
                      quality={100}
                      className="img-fluid"
                      style={{
                        width: "100px",
                        height: "100px",
                      }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 align-center">
            {/* OpeningHours Component */}
            <div
              className="kf-opening-hours element-anim-1 scroll-animate"
              data-animate="active"
            >
              <OpeningHours />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 align-center">
            {/* copyright */}
            <div
              className="kf-copyright element-anim-1 scroll-animate"
              data-animate="active"
            >
              <p>
                Copyright ©{new Date().getFullYear()} RhodesCoffee.co. All
                Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
