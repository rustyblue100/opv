import { NextPage } from "next";
import { ReactNode, useState } from "react";

interface Iprops {
  months: [];
  monthPosition: number;
  nextSlide: () => void;
  prevSlide: () => void;
}

const MonthSlider: NextPage<Iprops> = ({
  months,
  monthPosition,
  nextSlide,
  prevSlide,
  setMonthPosition,
}) => {
  // check if start of array
  const isStartOfArray = (index: number) => {
    return index === 0;
  };

  // check if end of array
  const isEndOfArray = (index: number) => {
    return index === months?.length - 1;
  };

  return (
    <div className="max-w-48 flex items-center justify-between gap-5 text-xl">
      <button
        onClick={nextSlide}
        disabled={isStartOfArray(monthPosition)}
        className={`flex-1 text-opv-black-300 transition-colors hover:text-opv-pink-1200 ${
          isStartOfArray(monthPosition) && "text-opv-black-300"
        } ${isStartOfArray(monthPosition) && "hover:text-opv-black-300"}`}
      >
        ◀
      </button>
      <div className=" flex-1 text-center uppercase text-opv-pink-1200">
        <select
          value={months[monthPosition]}
          onChange={(e) => setMonthPosition(e.target.value)}
          className="bord bg-opv-pink-400 px-2 py-1 uppercase text-opv-black "
        >
          {months.map((m, i) => (
            <option key={i} value={m} className="">
              {m}
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={prevSlide}
        disabled={isEndOfArray(monthPosition)}
        className={`flex-1 text-opv-black-300 transition-colors hover:text-opv-pink-1200 ${
          isEndOfArray(monthPosition) && "text-opv-black-300"
        } ${isEndOfArray(monthPosition) && "hover:text-opv-black-300"}`}
      >
        ▶
      </button>
    </div>
  );
};

export default MonthSlider;
