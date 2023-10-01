import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="section kf-about section-bg">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5">
            <div className="kf-titles">
              <div
                className="kf-subtitle element-anim-1 scroll-animate"
                data-animate="active"
                style={{
                  color: "#fff",
                  textShadow: "0 0 10px rgba(0,0,0,0.5)",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  fontSize: "2.5rem",
                }}
              >
                About Us
              </div>
            </div>
            <div
              className="kf-text element-anim-1 scroll-animate"
              data-animate="active"
            >
              <p>
                "Inspired by the road [Rhode] - the unexpected places life takes
                us, the people we meet, and ultimately - the place we call home
                - Rhodes Coffee Co. is an homage to our roots. Rooted in the
                belief that life is best lived authentically and organically -
                and as close to nature as possible. Rhodes Coffee Co. strives to
                be a catalyst for positive change with thoughtfully sourced
                organic coffee & ingredients + small batch, artisanal products
                at an affordable price."
              </p>
            </div>
            <div
              className="kf-about-quote element-anim-1 scroll-animate"
              data-animate="active"
            >
              <Image
                src="/images/quote_img1.jpg"
                alt="image"
                width={125}
                height={100}
              />
              <div>
                Rooted in authenticity, brewed for change - Rhodes Coffee Co.
                embraces life's unexpected roads.
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7">
            <div
              className="kf-about-image element-anim-1 scroll-animate"
              data-animate="active"
            >
              <Image
                src="/images/about_img1.jpeg"
                alt="image"
                width={461}
                height={600}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
