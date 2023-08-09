import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";

const galleryItems = [
  {
    image: "images/ins_gal1.jpg",
    name: "black coffee",
    subname: "hot coffee",
    filterKey: "hot-coffee",
  },
  {
    image: "images/ins_gal2.jpg",
    name: "chocolate",
    subname: "hot chocolate",
    filterKey: "hot-coffee",
  },
  {
    image: "images/ins_gal3.jpg",
    name: "Iced coffee",
    subname: "refreshing drink",
    filterKey: "cold-drink",
  },
  {
    image: "images/ins_gal4.jpg",
    name: "Hot Cappuccino",
    subname: "Cappuccino",
    filterKey: "hot-coffee",
  },
  {
    image: "images/ins_gal5.jpg",
    name: "Chai Latte",
    subname: "Latte",
    filterKey: "hot-coffee",
  },
  {
    image: "images/ins_gal6.jpg",
    name: "Smoothie",
    subname: "refreshing drink",
    filterKey: "smoothie",
  },
  {
    image: "images/ins_gal7.jpg",
    name: "Hot coffee",
    subname: "hot coffee",
    filterKey: "hot-coffee",
  },
];

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
            onClick={handleFilterKeyChange("fast-food")}
            data-href="fast-food"
          >
            Fast food
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
            data-href="dinner-menu"
            onClick={handleFilterKeyChange("dinner-menu")}
          >
            Dinner menu
          </a>
          <a
            className="c-pointer"
            data-href="special-pizza"
            onClick={handleFilterKeyChange("special-pizza")}
          >
            Special pizza
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
