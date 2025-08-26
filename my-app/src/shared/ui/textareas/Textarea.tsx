import type { ChangeEvent } from "react";

interface TextareaProps {
  onFocus?: () => void;
  onBlur?: () => void;
  value: string;
  setValue: (value: string) => void;
  placeholder?: string;
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
      data-testid="test-textarea-id"
      required={required}
      placeholder={placeholder}
      onFocus={onFocus}
      onBlur={onBlur}
      className="outline-none bg-slate-300 rounded-sm text-slate-600 lg:cursor-pointer dark:lg:hover:bg-slate-600 lg:hover:bg-slate-300
         dark:text-slate-200 dark:bg-[#535252]  border-[#3262a1] dark:border-[#c7c7c7] shadow-md 
          resize-none w-full p-1 lg:p-3  text-md"
      onChange={onChange}
      value={value}
    />
  );
};

export default Textarea;
