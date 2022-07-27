import { NextPage } from "next";
import { useRouter } from "next/router";
import pathPushQueryParams from "../../utils/pathPushQueryParams";

interface Iprops {
  months: [];
  monthPosition: number;
  nextSlide: () => void;
  prevSlide: () => void;
  setMonthPosition: (number: number) => void;
}

const MonthSlider: NextPage<Iprops> = ({
  months,
  monthPosition,
  nextSlide,
  prevSlide,
}) => {
  // check if start of array
  const isStartOfArray = (index: number) => {
    return index === 0;
  };

  const router = useRouter();

  // check if end of array
  const isEndOfArray = (index: number) => {
    return index === months?.length - 1;
  };

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const eventIndex = months?.findIndex(
      (month: string) => month === event.target.value
    );

    router.push(
      pathPushQueryParams(eventIndex, event.target.value),
      undefined,
      { shallow: true }
    );
  };

  return (
    <div className="max-w-48 relative left-1 ml-2 flex items-center justify-between gap-2 text-xl">
      <button
        onClick={prevSlide}
        disabled={isStartOfArray(monthPosition)}
        className={`flex-1 text-opv-black-300 transition-colors hover:text-opv-pink-1200 ${
          isStartOfArray(monthPosition) && "text-opv-black-300"
        } ${isStartOfArray(monthPosition) && "opacity-30"}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <div className="flex-1 text-center uppercase text-opv-pink-1200">
        <select
          role="combobox"
          data-index={monthPosition}
          value={months[monthPosition]}
          onChange={handleChange}
          className="bord bg-opv-pink-400 px-2 py-1 capitalize text-opv-black"
        >
          {months.map((m: string, i: number) => (
            <option key={i} value={m} className="" role="option">
              {m}
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={nextSlide}
        disabled={isEndOfArray(monthPosition)}
        className={`flex-1 text-opv-black-300 transition-colors hover:text-opv-pink-1200 ${
          isEndOfArray(monthPosition) && "text-opv-black-300"
        } ${isEndOfArray(monthPosition) && "opacity-30"} `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default MonthSlider;
