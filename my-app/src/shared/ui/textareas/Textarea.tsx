import type { ChangeEvent } from "react";

interface TextareaProps {
  onFocus?: () => void;
  onBlur?: () => void;
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
  required: boolean;
}

const Textarea = ({
  value,
  setValue,
  placeholder,
  required,
  onFocus,
  onBlur,
}: TextareaProps) => {
  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return (
    <textarea
      required={required}
      placeholder={placeholder}
      onFocus={onFocus}
      onBlur={onBlur}
      className="bg-slate-300 text-slate-600 lg:cursor-pointer dark:lg:hover:bg-slate-600 lg:hover:bg-slate-400
         dark:text-slate-200 dark:bg-[#535252] border border-slate-600 dark:border-[#c7c7c7]
          resize-none w-full p-3 rounded-lg"
      onChange={onChange}
      value={value}
    />
  );
};

export default Textarea;
