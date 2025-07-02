import { useState } from "react";

function useBackGround() {
  const [bgColor, setBgColor] = useState<string>(
    "linear-gradient(to right, #ff4b1f, #ff9068)"
  );

  const setBgSulvia = () => {
    setBgColor("linear-gradient(to right, #ff4b1f, #ff9068)");
  };
  const setBgTransfile = () => {
    setBgColor("linear-gradient(to right, #16bffd, #cb3066)");
  };
  const setBgMagic = () => {
    setBgColor("linear-gradient(to right, #59c173, #a17fe0, #5d26c1)");
  };
  const setBgCitrus = () => {
    setBgColor("linear-gradient(to right, #fceabb, #f8b500)");
  };
  const setBgSelenium = () => {
    setBgColor("linear-gradient(to right, #3c3b3f, #605c3c)");
  };

  const setBgZink = () => {
    setBgColor("linear-gradient(to right, #ada996, #f2f2f2, #dbdbdb, #eaeaea)");
  };

  return {
    bgColor,
    setBgSulvia,
    setBgTransfile,
    setBgMagic,
    setBgCitrus,
    setBgSelenium,
    setBgZink,
  }; // Название функции это = setBg + Название градиента. Градиент беру с https://uigradients.com/
}

export default useBackGround;
