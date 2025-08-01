import { useState, type ChangeEvent } from "react";
import ConfirmIcon from "../../shared/icons/ConfirmIcon";

const UpdateInput = ({
  handleUpdate,
  defFalue,
  setValue,
}: {
  handleUpdate: () => void;
  defFalue: string;
  setValue: (e: string) => void;
}) => {
  const [focused, setFocused] = useState<boolean>(false);

  const onFocus = () => {
    setFocused(true);
  };
  const onBlur = () => {
    setFocused(false);
    handleUpdate();
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="relative w-full ">
      <span
        className={`absolute top-0 right-1  text-slate-600 dark:text-slate-200 transition-all duration-200 flex items-center justify-center h-full lg:hover:text-slate-400 lg:hover:cursor-pointer  ${
          focused
            ? "opacity-100 translate-x-0"
            : " opacity-0 translate-x-2 z-10"
        }`}
      >
        <ConfirmIcon />
      </span>
      <input
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
        value={defFalue}
        className={` lg:cursor-pointer font-medium text-sm capitalize py-1 w-full px-1 pr-7 text-slate-600 placeholder:text-slate-600 dark:text-slate-200 dark:placeholder:text-slate-200`}
      />
    </div>
  );
};

export default UpdateInput;
