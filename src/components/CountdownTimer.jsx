import React, { useState, useEffect } from "react";

const Countdown = () => {
  const dueDate = new Date("2024-04-11T00:00:00"); // Set your due date here
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  console.log(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeRemaining() {
    const now = new Date();
    let difference = dueDate - now;

    if (difference <= 0) {
      dueDate.setDate(dueDate.getDate() + 2); // Add 2 days
      difference = dueDate - now;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  const { days, hours, minutes, seconds } = timeRemaining;

  const monthsArray = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = monthsArray[dueDate.getMonth()];
  const day = dueDate.getDate();
  const year = dueDate.getFullYear();

  return (
    <div className="count-down">
      <h3 className="timer-heading">
        Coming{" "}
        <span className="blue-h3">
          {day} {month} {year}
        </span>
      </h3>
      <div className="timer-container">
        <div className="time">
          <h4>{days}</h4>
          <p>Days</p>
        </div>
        <div className="time">
          <h4>{hours}</h4>
          <p>Hours</p>
        </div>
        <div className="time">
          <h4>{minutes}</h4>
          <p>Minutes</p>
        </div>
        <div className="time">
          <h4>{seconds}</h4>
          <p>Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
