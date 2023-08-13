import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";

import galleryItems from "./data/galleryitems";

const PhotoGalleryIsotope = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".kf-gallery-items", {
        itemSelector: ".kf-gallery-col",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".kf-gallery-col",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    //     return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
    const filterLinks = document.querySelectorAll(".kf-filter a");
    filterLinks.forEach((filter) => {
      const filterValue = filter.getAttribute("data-href");
      if (filterValue == key) {
        filter.classList.add("active");
      } else {
        filter.classList.remove("active");
      }
    });
  };
  return (
    <section className="section kf-gallery">
      <div className="container">
        <div className="kf-titles align-center">
          <div
            className="kf-subtitle element-anim-1 scroll-animate"
            data-animate="active"
          >
            Our Photo Gallery
          </div>
          <h3
            className="kf-title element-anim-1 scroll-animate"
            data-animate="active"
          >
            Looks Our Photo Gallery
          </h3>
        </div>
        <div
          className="kf-filter kf-filter-gal element-anim-1 scroll-animate"
          data-animate="active"
        >
          <a
            className="c-pointer active"
            onClick={handleFilterKeyChange("*")}
            data-href="*"
          >
            All
          </a>
          <a
            className="c-pointer"
            onClick={handleFilterKeyChange("cold-coffee")}
            data-href="cold-coffee"
          >
            Cold coffee
          </a>
          <a
            className="c-pointer"
            onClick={handleFilterKeyChange("hot-coffee")}
            data-href="hot-coffee"
          >
            Hot coffee
          </a>
          <a
            className="c-pointer"
            data-href="bowls"
            onClick={handleFilterKeyChange("bowls")}
          >
            Bowls
          </a>
          <a
            className="c-pointer"
            data-href="treats-eats"
            onClick={handleFilterKeyChange("treats-eats")}
          >
            Treats & Eats
          </a>
        </div>
        <div className="kf-gallery-items row">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`kf-gallery-col col-xs-12 col-sm-12 col-md-6 col-lg-4 all ${item.filterKey}`}
            >
              <div
                className="kf-gallery-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a
                    href={item.image}
                    className="has-popup-gallery"
                    data-fancybox="gallery"
                  >
                    <img src={item.image} alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <div className="name">
                    <div className="value">{item.name}</div>
                  </div>
                  <div className="subname">
                    <div className="value">{item.subname}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default PhotoGalleryIsotope;
