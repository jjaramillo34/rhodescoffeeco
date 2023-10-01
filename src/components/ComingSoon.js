import React from "react";
import Countdown from "react-countdown";
import Image from "next/image";

//import "./ComingSoonPage.css";

const ComingSoonPage = () => {
  // Set your target date for the countdown
  const targetDate = new Date("2023-12-31T00:00:00");

  // Renderer function for the Countdown component
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a message when the countdown is complete
      return <div className="countdown">We're live now!</div>;
    } else {
      // Render the countdown timer
      return (
        <div className="countdown">
          <div className="countdown-item">
            <span className="countdown-number">{days}</span> Days
          </div>
          <div className="countdown-item">
            <span className="countdown-number">{hours}</span> Hours
          </div>
          <div className="countdown-item">
            <span className="countdown-number">{minutes}</span> Minutes
          </div>
          <div className="countdown-item">
            <span className="countdown-number">{seconds}</span> Seconds
          </div>
        </div>
      );
    }
  };

  return (
    // add here logo and other stuff

    <div className="coming-soon">
      <Image
        src="/images/logo.png"
        alt="Rhodes Coffee Co. Logo"
        width={500}
        height={500}
      />
      <h1>Welcome to Rhodes Coffee Co.</h1>
      <p>Our website is under construction. Stay tuned!</p>
      <Countdown date={targetDate} renderer={renderer} />
    </div>
  );
};

export default ComingSoonPage;
