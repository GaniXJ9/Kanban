import type { UseFormRegister } from "react-hook-form";
import type { BoardDataForm } from "../../../../features/boards/schema";
import PickGradientBlock from "./pick-gradient-block";
import FormField from "./form-field";
import PickImg from "./pick-img";

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
      <PickImg setBg={fillBackgroundImageInput} />
      <PickGradientBlock setBg={fillGradientInput} setBgImg={setBgImg} />
      <input type="hidden" {...register("background")} />
    </div>
  );
};

export default BackgroundSettings;
