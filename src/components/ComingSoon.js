import React from "react";
import Countdown from "react-countdown";
import { motion } from "framer-motion";
// import coming soon css from public folder
//import "@/public/comingsoon.css";
function App() {
  const targetDate = new Date("2023-12-31T00:00:00").getTime(); // Replace with your target date

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <div>Launch day!</div>;
    } else {
      return (
        <div className="countdown">
          <div className="countdown-item">
            <span className="countdown-number">{days}</span>
            <span className="countdown-label">Days</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-number">{hours}</span>
            <span className="countdown-label">Hours</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-number">{minutes}</span>
            <span className="countdown-label">Minutes</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-number">{seconds}</span>
            <span className="countdown-label">Seconds</span>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <img
            src="images/logo.png"
            alt="Rhodes Coffee Co Logo"
            className="logo"
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          Rhodes Coffee Co
        </motion.h1>
        <br />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="subtitle"
        >
          Coming Soon
        </motion.p>
        <br />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <Countdown date={targetDate} renderer={renderer} />
        </motion.div>
      </header>
    </div>
  );
}

export default App;
