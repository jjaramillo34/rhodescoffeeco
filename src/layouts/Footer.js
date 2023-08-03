const gallery = [
  {
    id: 1,
    image: "images/grid_gal1.jpg",
  },
  {
    id: 2,
    image: "images/grid_gal2.jpg",
  },
  {
    id: 3,
    image: "images/grid_gal3.jpg",
  },
  {
    id: 4,
    image: "images/grid_gal4.jpg",
  },
  {
    id: 5,
    image: "images/grid_gal5.jpg",
  },
  {
    id: 6,
    image: "images/grid_gal6.jpg",
  },
];

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
  },
  {
    id: 2,
    name: "Email Address: ",
    description: "contact@rhodescoffeeco.com",
    icon: "las la-envelope-open-text",
  },
  {
    id: 3,
    name: "Phone Number: ",
    description: "(315) 430-5996",
    icon: "las la-phone",
  },
];

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
                <img
                  src="images/logo.png"
                  alt="image"
                  style={{
                    width: "100%",
                    maxHeight: "300px",
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
                    {item.description}
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
                {gallery.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.image}
                      className="kf-image-hover has-popup-image"
                    >
                      <img src={item.image} alt="image" />
                    </a>
                  </li>
                ))}
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
