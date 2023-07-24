const Footer = () => {
  const openHours = [
    {
      day: "Sunday - Thursday",
      time: "08:00 am - 09:00pm",
    },
    {
      day: "Only Friday",
      time: "03:00 pm - 09:00pm",
    },
    {
      day: "Saturday Close",
      time: "",
    },
  ];

  const contact = [
    {
      icon: "las la-map-marker",
      title: "Location :",
      text: "55 Main Street, New York",
    },
    {
      icon: "las la-envelope-open-text",
      title: "Email Address :",
      text: "contact@rhodescoffee.co",
    },
    {
      icon: "las la-phone",
      title: "Phone Number :",
      text: "+012 (345) 678 99",
    },
  ];

  const gallery = [
    { image: "images/grid_gal1.jpg" },
    {
      image: "images/grid_gal2.jpg",
    },
    {
      image: "images/grid_gal3.jpg",
    },
    {
      image: "images/grid_gal4.jpg",
    },
    {
      image: "images/grid_gal5.jpg",
    },
    {
      image: "images/grid_gal6.jpg",
    },
  ];

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
              <a href="index.html">
                <img src="images/logo.jpeg" alt="image" />
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
                {openHours.map((item, index) => (
                  <li key={index}>
                    <em>{item.day}</em>
                    <span>{item.time}</span>
                  </li>
                ))}
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
                <li>
                  <i className="las la-map-marker" />
                  <em>Location :</em>
                  55 Main Street, New York
                </li>
                <li>
                  <i className="las la-envelope-open-text" />
                  <em>Email Address :</em>
                  rhodescoffeedev@gmail.com
                </li>
                <li>
                  <i className="las la-phone" />
                  <em>Phone Number :</em>
                  +012 (345) 678 99
                </li>
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
                <li>
                  <a
                    href="images/grid_gal1.jpg"
                    className="kf-image-hover has-popup-image"
                  >
                    <img src="images/grid_gal1.jpg" alt="image" />
                  </a>
                </li>
                <li>
                  <a
                    href="images/grid_gal2.jpg"
                    className="kf-image-hover has-popup-image"
                  >
                    <img src="images/grid_gal2.jpg" alt="image" />
                  </a>
                </li>
                <li>
                  <a
                    href="images/grid_gal3.jpg"
                    className="kf-image-hover has-popup-image"
                  >
                    <img src="images/grid_gal3.jpg" alt="image" />
                  </a>
                </li>
                <li>
                  <a
                    href="images/grid_gal4.jpg"
                    className="kf-image-hover has-popup-image"
                  >
                    <img src="images/grid_gal4.jpg" alt="image" />
                  </a>
                </li>
                <li>
                  <a
                    href="images/grid_gal5.jpg"
                    className="kf-image-hover has-popup-image"
                  >
                    <img src="images/grid_gal5.jpg" alt="image" />
                  </a>
                </li>
                <li>
                  <a
                    href="images/grid_gal6.jpg"
                    className="kf-image-hover has-popup-image"
                  >
                    <img src="images/grid_gal1.jpg" alt="image" />
                  </a>
                </li>
              </ul>
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
              Copyright © 2022 rhodescoffee. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
