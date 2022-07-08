import { NextPage } from "next";
import { useState } from "react";

const MonthSlider: NextPage = () => {
  const [monthPosition, setMonthPosition] = useState(0);

  const months = [
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
  ];

  const nextSlide = () => {
    setMonthPosition(monthPosition - 1);
  };

  const prevSlide = () => {
    setMonthPosition(monthPosition + 1);
  };

  return (
    <div className="max-w-48 flex items-center justify-between gap-3 text-2xl">
      <button
        onClick={nextSlide}
        className="flex-1 text-opv-black-300 transition-colors hover:text-opv-pink-1200"
      >
        ◀
      </button>
      <div className="min-w-[140px] flex-1 text-center uppercase text-opv-pink-1200">
        {months.map((m) => m)[monthPosition]}
      </div>
      <button
        onClick={prevSlide}
        className="flex-1 text-opv-black-300 transition-colors hover:text-opv-pink-1200"
      >
        ▶
      </button>
    </div>
  );
};

export default MonthSlider;
