import { useEffect, useRef, useState } from "react";
import RoundedButtons from "./RoundedButtons";

function SaleCountdown() {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countDownDate = new Date().getTime() + 4 * 24 * 60 * 60 * 1000;

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    let currentInterval = interval.current;
    startTimer();
    return () => {
      clearInterval(currentInterval);
    };
  }, []);

  return (
    <div className="saleCountdown relative flex justify-between items-center w-[90vw] m-auto mt-[8em]">
      <div className="text-3xl font-bold flex flex-col desktop:flex-row justify-between items-end gap-[5em]">
        <span className="inline-block ">Flash Sales</span>
        <div className="flex flex-col items-center">
          <div className="text-[0.5rem] text-center font-normal flex justify-between w-full">
            <span className="inline-block">Days</span>
            <span className="inline-block">Hours</span>
            <span className="inline-block">Minutes</span>
            <span className="inline-block">Seconds</span>
          </div>
          <div className="flex gap-4 w-full justify-between">
            <span className="inline-block">{timerDays}</span>
            <span className="inline-block text-[#E11D48]">:</span>
            <span className="inline-block">{timerHours}</span>
            <span className="inline-block text-[#E11D48]">:</span>
            <span className="inline-block">{timerMinutes}</span>
            <span className="inline-block text-[#E11D48]">:</span>
            <span className="inline-block">{timerSeconds}</span>
          </div>
        </div>
      </div>
      <div>
        <RoundedButtons />
      </div>
    </div>
  );
}

export default SaleCountdown;
