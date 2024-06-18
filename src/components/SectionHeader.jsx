import RoundedButtons from "../components/RoundedButtons";
import ViewAllBtns from "./ViewAllBtn";
import PropTypes from "prop-types";

import { useRef, useEffect, useState } from "react";

function SectionHeader({
  headerTitle,
  isFlashSales = false,
  isFlashSalesBtn = false,
  title = "Today's",
  marginTop ="mt-8",
  display = "block",
}) {
  // is the product flash sales or not function

  //   Flash sales countdown
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
  }, [isFlashSales]);
  //   Flash sales countdown end

  return (
    <div className="items-center w-[90vw] m-auto mt-[4em]">
      <span className=" relative   title text-buttonColor text-sm  pl-6 font-normal">
        {title}
      </span>
      <div className={`${marginTop} flex justify-between  `}>
        <div className="text-3xl font-bold flex flex-col desktop:flex-row justify-between desktop:items-end gap-[.5em] desktop:gap-[2em]">
          <span className="block text-[.8em] desktop:text-[1em] ">{headerTitle}</span>

          {!isFlashSales && (
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
          )}
        </div>
        <div className={`${display}`}>
          {!isFlashSalesBtn ? <RoundedButtons /> : <ViewAllBtns px="px-2" />}
        </div>
      </div>
    </div>
  );
}

SectionHeader.propTypes = {
  isFlashSales: PropTypes.bool,
  isFlashSalesBtn: PropTypes.bool,
  headerTitle: PropTypes.string,
  title: PropTypes.string,
  marginTop: PropTypes.string,
  display: PropTypes.string,
};

export default SectionHeader;
