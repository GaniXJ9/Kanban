import useBackGround from "../../../../shared/use-hook/useBackGround";
import GradientPicker from "./GradientPicker";

function BoardBackGround() {
  const {
    bgColor,
    setBgMagic,
    setBgSulvia,
    setBgTransfile,
    setBgCitrus,
    setBgSelenium,
    setBgZink,
  } = useBackGround();
  const blockStyle = { background: bgColor };
  return (
    <section className="w-full p-2">
      <div
        className={` w-full h-48 rounded-sm shadow-md`}
        style={blockStyle}
      ></div>

      <div className="flex justify-between py-3">
        <GradientPicker
          gradient={"linear-gradient(to right, #59c173, #a17fe0, #5d26c1)"}
          setColor={setBgMagic}
        />

        <GradientPicker
          gradient={"linear-gradient(to right, #ff4b1f, #ff9068)"}
          setColor={setBgSulvia}
        />

        <GradientPicker
          gradient={"linear-gradient(to right, #16bffd, #cb3066)"}
          setColor={setBgTransfile}
        />
        <GradientPicker
          gradient={"linear-gradient(to right, #fceabb, #f8b500)"}
          setColor={setBgCitrus}
        />

        <GradientPicker
          gradient={"linear-gradient(to right, #3c3b3f, #605c3c)"}
          setColor={setBgSelenium}
        />
        <GradientPicker
          gradient={
            "linear-gradient(to right, #ada996, #f2f2f2, #dbdbdb, #eaeaea)"
          }
          setColor={setBgZink}
        />

        <p className="h-6 w-8 rounded-sm shadow lg:hover:cursor-pointer text-center pb-1 bg-gray-200">
          ...
        </p>
      </div>
    </section>
  );
}

export default BoardBackGround;
