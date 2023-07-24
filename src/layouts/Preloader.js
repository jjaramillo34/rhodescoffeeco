import { useEffect, useState } from "react";

const Preloader = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1500);
  }, []);

  return (
    <div className={`preloader ${loaded ? "loaded" : ""}`}>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Caveat&display=swap');
      </style>
      <div
        className="centrize full-width"
        style={{ display: loaded ? "none" : "table" }}
      >
        <div className="vertical-center">
          <div className="spinner-logo">
            <h1 style={{ fontFamily: "Caveat" }}>Rhodescoffee</h1>
            <h5>loading</h5>
            <div className="spinner-dot">
              <div className="spinner-line" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Preloader;
