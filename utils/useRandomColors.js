import { useState, useEffect } from "react";

const useRandomColors = () => {
  const [randomColors, setRandomColors] = useState("#FFEDED");

  useEffect(() => {
    const interval = setInterval(() => {
      const hexValues = ["A", "B", "C", "D", "E", "F"];

      let hex = "#";

      for (let i = 0; i < 6; i++) {
        const index = Math.floor(Math.random() * hexValues.length);
        hex += hexValues[index];
      }
      setRandomColors(hex);
    }, 3500);

    return () => clearInterval(interval);
  }, []);
  return randomColors;
};

export default useRandomColors;
