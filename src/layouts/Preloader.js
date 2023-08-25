import { useEffect, useState } from "react";
import Image from "next/image";

const Preloader = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 5000);
  }, []);

  return (
    <div className={`preloader ${loaded ? "loaded" : ""}`}>
      <div
        className="centrize full-width"
        style={{ display: loaded ? "none" : "table" }}
      >
        <div className="vertical-center">
          <div className="spinner-logo">
            <Image
              src="/images/sunlogo.png"
              alt="Rhodes Coffee Co Logo"
              sizes="(max-width: 768px) 600px, 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={100}
              className="centrize full-width"
              style={{
                width: "250px",
                maxHeight: "300px",
                maxWidth: "500px",
              }}
            />

            <h5>loading... </h5>
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
