import React from "react";
// import openingHours from "../data/openingHours.json";

import openingHours from "../components/data/openinghours";

const OpeningStatus = () => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDate = new Date();
  const currentDay = daysOfWeek[currentDate.getDay()];
  const currentHour = currentDate.getHours();
  const currentMinutes = currentDate.getMinutes();

  const currentDaySchedule = openingHours.find(
    (hour) => hour.day === currentDay
  );

  let isOpen = false;
  if (currentDaySchedule && currentDaySchedule.openTime !== "closed") {
    const openHour = parseInt(currentDaySchedule.openTime.split(":")[0]);
    const closeHour = parseInt(currentDaySchedule.closeTime.split(":")[0]);
    if (currentHour >= openHour && currentHour < closeHour) {
      isOpen = true;
    }
  }

  const nextOpenDay =
    openingHours.find((hour, index) => {
      return (
        hour.openTime !== "closed" && index > daysOfWeek.indexOf(currentDay)
      );
    }) || openingHours.find((hour) => hour.openTime !== "closed");

  return (
    <div>
      {isOpen ? (
        <div className="kf-h-group">
          <i className="far fa-clock" /> <em>Opening Hours :</em>
          <span>
            {currentDaySchedule.openTime} - {currentDaySchedule.closeTime}
          </span>
        </div>
      ) : (
        <div className="kf-h-group">
          <i className="far fa-clock" /> <em>Opening Hours :</em>
          <span>
            We're closed. We'll open again on {nextOpenDay.day} from{" "}
            {nextOpenDay.openTime} - {nextOpenDay.closeTime}
          </span>
        </div>
      )}
    </div>
  );
};

export default OpeningStatus;
