import React from "react";

const openingHours = [
  {
    day: "Sunday",
    isOpen: true,
    openTime: "08:00",
    closeTime: "14:00",
  },
  {
    day: "Monday",
    isOpen: true,
    openTime: "07:00",
    closeTime: "13:00",
  },
  {
    day: "Tuesday",
    isOpen: true,
    openTime: "closed",
    closeTime: "closed",
  },
  {
    day: "Wednesday",
    isOpen: true,
    openTime: "closed",
    closeTime: "closed",
  },
  {
    day: "Thursday",
    isOpen: true,
    openTime: "closed",
    closeTime: "closed",
  },
  {
    day: "Friday",
    isOpen: true,
    openTime: "07:00",
    closeTime: "13:00",
  },
  {
    day: "Saturday",
    isOpen: true,
    openTime: "08:00",
    closeTime: "14:00",
  },
];

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
            We're closed now. We'll open again on {nextOpenDay.day} from{" "}
            {nextOpenDay.openTime} - {nextOpenDay.closeTime}
          </span>
        </div>
      )}
    </div>
  );
};

export default OpeningStatus;
