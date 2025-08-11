import type { UseFormRegister } from "react-hook-form";
import type { BoardDataForm } from "../../../../features/boards/schema";
import PickGradientBlock from "./PickGradientBlock";
import PickImgBlock from "./PickImgBlock";
import FormField from "./FormField";

interface BackgroundSettingsProps {
  fillGradientInput: (color: string) => void;
  fillBackgroundImageInput: (img: string) => void;
  setBgImg: (img: string | null) => void;
  register: UseFormRegister<BoardDataForm>;
}

const BackgroundSettings = ({
  fillGradientInput,
  fillBackgroundImageInput,
  setBgImg,
  register,
}: BackgroundSettingsProps) => {
  return (
    <div className="flex flex-col justify-between py-3">
      <FormField title="Background" />
      <PickImgBlock setBg={fillBackgroundImageInput} />
      <PickGradientBlock setBg={fillGradientInput} setBgImg={setBgImg} />
      <input type="hidden" {...register("background")} />
    </div>
  );
};

export default BackgroundSettings;
