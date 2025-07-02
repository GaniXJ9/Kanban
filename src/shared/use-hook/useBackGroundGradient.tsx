import { useState } from "react";

function useBackGroundGradient() {
  const [bgGradientColor, setGradientColor] = useState<string>(
    "linear-gradient(to right, #ff4b1f, #ff9068)"
  );

  const setBgSulvia = () => {
    setGradientColor("linear-gradient(to right, #ff4b1f, #ff9068)");
  };
  const setBgTransfile = () => {
    setGradientColor("linear-gradient(to right, #16bffd, #cb3066)");
  };
  const setBgMagic = () => {
    setGradientColor("linear-gradient(to right, #59c173, #a17fe0, #5d26c1)");
  };
  const setBgCitrus = () => {
    setGradientColor("linear-gradient(to right, #fceabb, #f8b500)");
  };
  const setBgSelenium = () => {
    setGradientColor("linear-gradient(to right, #3c3b3f, #605c3c)");
  };

  const setBgZink = () => {
    setGradientColor(
      "linear-gradient(to right, #ada996, #f2f2f2, #dbdbdb, #eaeaea)"
    );
  };

  return {
    bgGradientColor,
    setBgSulvia,
    setBgTransfile,
    setBgMagic,
    setBgCitrus,
    setBgSelenium,
    setBgZink,
  }; // Название функции это = setBg + Название градиента. Градиент беру с https://uigradients.com/
}

export default useBackGroundGradient;
