import React, { useState, useEffect } from "react";

const GiveawayTimer = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const [giveawayText, setGiveawayText] = useState("");
  const [deadlineText, setDeadlineText] = useState("");
  const [items, setItems] = useState([0, 0, 0, 0]);

  const getRemainingTime = () => {
    const today = new Date().getTime();
    const t = futureTime - today;

    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    let days = t / oneDay;
    days = Math.floor(days);
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);

    const values = [days, hours, minutes, seconds];

    const formattedValues = values.map((item) =>
      item < 10 ? `0${item}` : item
    );

    setItems(formattedValues);

    if (t < 0) {
      clearInterval(countdown);
      setDeadlineText("Sorry, this giveaway has expired!");
    }
  };

  const tempDate = new Date();
  const tempYear = tempDate.getFullYear();
  const tempMonth = tempDate.getMonth();
  const tempDay = tempDate.getDate();

  const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);
  const futureTime = futureDate.getTime();

  const year = futureDate.getFullYear();
  const hours = futureDate.getHours();
  const minutes = futureDate.getMinutes();

  let month = futureDate.getMonth();
  month = months[month];
  const weekday = weekdays[futureDate.getDay()];
  const date = futureDate.getDate();

  useEffect(() => {
    setGiveawayText(
      `Giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`
    );
  }, [weekday, date, month, year, hours, minutes]);

  useEffect(() => {
    const countdown = setInterval(getRemainingTime, 1000);
    return () => clearInterval(countdown);
  }, []);

  return (
    <div className="count-down">
      <h3 className="timer-heading">
        Coming{" "}
        <span className="blue-h3">
          {date} {month} {year}
        </span>
      </h3>
      <div className="timer-container">
        <div className="time">
          <h4>{items[0]}</h4>
          <p>Days</p>
        </div>
        <div className="time">
          <h4>{items[1]}</h4>
          <p>Hours</p>
        </div>
        <div className="time">
          <h4>{items[2]}</h4>
          <p>Minutes</p>
        </div>
        <div className="time">
          <h4>{items[3]}</h4>
          <p>Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default GiveawayTimer;
