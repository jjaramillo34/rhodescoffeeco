import Layouts from "@/src/layouts/Layouts";
import dynamic from "next/dynamic";
import Link from "next/link";

import brands from "@/src/components/data/brands";
import Merchandise from "@/src/components/Merchandise";

const PhotoGalleryIsotope = dynamic(
  () => import("@/src/components/PhotoGalleryIsotope"),
  {
    ssr: false,
  }
);

const Gallery = () => {
  return (
    <Layouts>
      {/* Section Started Inner */}
      <section className="section kf-started-inner">
        <div
          className="kf-parallax-bg js-parallax"
          style={{ backgroundImage: "url(images/gallery_bg.jpg)" }}
        />
        <div className="container">
          <h1
            className="kf-h-title text-anim-1 scroll-animate"
            data-splitting="chars"
            data-animate="active"
          >
            Gallery
          </h1>
        </div>
      </section>
      {/* Section Gallery */}
      <PhotoGalleryIsotope />
      {/* Section CTA */}
      {/*<section
        className="section kf-cta kf-parallax"
        style={{ backgroundImage: "url(images/testimonials_bg_3.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
              <div className="kf-titles">
                <div
                  className="kf-subtitle element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  Need a Table On Coffee House
                </div>
                <h3
                  className="kf-title element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  Booking Table For Your &amp; Family Members
                </h3>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 align-self-center align-right">
              <Link
                href="reservation"
                className="kf-btn element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span>booking table</span>
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      */}
      {/* Section Brands */}
      <div
        className="section kf-brands"
        style={{ backgroundColor: "lightgrey" }}
      >
        <div className="container">
          <div className="kf-brands-items row">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="col-xs-12 col-sm-12 col-md-4 col-lg-2"
              >
                <div
                  className="kf-brands-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <img src={brand.image} alt={brand.name} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Section Merchandise */}
      <Merchandise />
    </Layouts>
  );
};
export default Gallery;
