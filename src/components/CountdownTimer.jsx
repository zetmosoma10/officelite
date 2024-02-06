import { useState, useEffect } from "react";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="count-down">
      <h3 className="timer-heading">
        Coming <span className="blue-h3">4 Nov 2020</span>
      </h3>
      <div className="timer-container">
        <div className="time">
          <h4>{timeLeft.days}</h4>
          <p>Days</p>
        </div>
        <div className="time">
          <h4>{timeLeft.hours}</h4>
          <p>Hours</p>
        </div>
        <div className="time">
          <h4>{timeLeft.minutes}</h4>
          <p>Minutes</p>
        </div>
        <div className="time">
          <h4>{timeLeft.seconds}</h4>
          <p>Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
