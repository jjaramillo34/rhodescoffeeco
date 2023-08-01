import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";

// import menu from "../data/menu";
import menu from "./data/menu";

const CoffeeMenu = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".all-menu-items", {
        itemSelector: ".kf-menu-item-col",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".kf-menu-item-col",
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
    const filterLinks = document.querySelectorAll(".kf-filter-menu a");
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
    <section className="section kf-menu kf-menu-tabs">
      <div className="container">
        <div className="kf-titles align-center">
          <div
            className="kf-subtitle element-anim-1 scroll-animate"
            data-animate="active"
          >
            Choose Best of
          </div>
          <h3
            className="kf-title element-anim-1 scroll-animate"
            data-animate="active"
          >
            RHODES COFFEE CO.
          </h3>
        </div>
        <div
          className="kf-filter kf-filter-menu element-anim-1 scroll-animate"
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
            onClick={handleFilterKeyChange("espresso")}
            data-href="espresso"
          >
            Espresso
          </a>
          <a
            className="c-pointer"
            onClick={handleFilterKeyChange("hot")}
            data-href="hot"
          >
            Hot
          </a>
          <a
            className="c-pointer"
            onClick={handleFilterKeyChange("cold")}
            data-href="cold"
          >
            Cold
          </a>
          <a
            className="c-pointer"
            onClick={handleFilterKeyChange("smoothies")}
            data-href="smoothies"
          >
            Smoothies
          </a>
          <a
            className="c-pointer"
            onClick={handleFilterKeyChange("treats-eats")}
            data-href="treats-eats"
          >
            Treats & Eats
          </a>
        </div>

        <div
          className="kf-menu-items"
          style={{ backgroundImage: "url(images/menu_logo.png)" }}
        >
          <div className="row all-menu-items">
            {menu.map((item, index) => (
              <div
                key={index}
                className={`kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all ${item.category}`}
              >
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/menu1.jpg" className="has-popup-image">
                      <img src={item.image} alt="image" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">{item.name}</h5>
                    <div className="subname">{item.subname}</div>
                    <div className="size">{item.size}</div>
                    <div
                      className="price"
                      style={{
                        fontFamily: "Caveat",
                        fontSize: "1.2rem",
                        fontWeight: "bolder",
                      }}
                    >
                      {item.price}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default CoffeeMenu;

//<div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all hot-coffee">
//  <div
//    className="kf-menu-item element-anim-1 scroll-animate"
//    data-animate="active"
//  >
//    <div className="image kf-image-hover">
//      <a href="images/menu1.jpg" className="has-popup-image">
//        <img src="images/menu1.jpg" alt="image" />
//      </a>
//    </div>
//    <div className="desc">
//      <h5 className="name">Americano</h5>
//      <div className="subname">2/3 espresso, 1/3 streamed milk</div>
//      <div className="price">$4.9</div>
//    </div>
//  </div>
//</div>;
