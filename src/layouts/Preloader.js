import { useEffect, useState } from "react";
import Image from "next/image";

const Preloader = ({ onComplete }) => {
  const [isLoaded, setLoaded] = useState(true);
  const [progress, setProgress] = useState(0);

  // count up to 100%
  const countUp = () => {
    if (progress < 100) {
      setProgress(progress + 1);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoaded(false);

      onComplete();
    }, 50000);
  }, []);

  // if (!isLoaded) return null;

  return isLoaded ? (
    <div className={`preloader ${isLoaded ? "loaded" : ""}`}>
      <div
        className="centrize full-width"
        style={{ display: isLoaded ? "none" : "table" }}
      >
        <div className="vertical-center">
          <div className="spinner-logo">
            <img src="images/logo.png" alt="image" />
            <div className="spinner-dot">
              <div className="spinner-line" />
            </div>
            <div
              className="spinner-text"
              style={{ display: progress === 100 ? "none" : "block" }}
            >
              Loading...
            </div>
            <div className="spinner-progress" style={{ width: `${progress}%` }}>
              {progress}%
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Preloader;
