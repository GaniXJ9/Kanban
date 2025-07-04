import { useEffect } from "react";
import PickGradientItem from "./PickGradientItem";
import useBackGroundGradient from "../../../../shared/use-hook/useBackGroundGradient";

const PickGradientBlock = ({
  setBg,
  setBgImg,
}: {
  setBg: (value: string) => void;
  setBgImg: (value: null | string) => void;
}) => {
  const {
    bgGradientColor,
    setBgMagic,
    setBgSulvia,
    setBgTransfile,
    setBgCitrus,
    setBgSelenium,
    setBgZink,
  } = useBackGroundGradient();

  useEffect(() => {
    setBg(bgGradientColor);
    setBgImg(null);
  }, [bgGradientColor]);

  return (
    <div className="flex justify-between py-2">
      <PickGradientItem
        gradient={"linear-gradient(to right, #59c173, #a17fe0, #5d26c1)"}
        setColor={setBgMagic}
      />
      <PickGradientItem
        gradient={"linear-gradient(to right, #ff4b1f, #ff9068)"}
        setColor={setBgSulvia}
      />
      <PickGradientItem
        gradient={"linear-gradient(to right, #16bffd, #cb3066)"}
        setColor={setBgTransfile}
      />
      <PickGradientItem
        gradient={"linear-gradient(to right, #fceabb, #f8b500)"}
        setColor={setBgCitrus}
      />
      <PickGradientItem
        gradient={"linear-gradient(to right, #3c3b3f, #605c3c)"}
        setColor={setBgSelenium}
      />
      <PickGradientItem
        gradient={
          "linear-gradient(to right, #ada996, #f2f2f2, #dbdbdb, #eaeaea)"
        }
        setColor={setBgZink}
      />
    </div>
  );
};

export default PickGradientBlock;
