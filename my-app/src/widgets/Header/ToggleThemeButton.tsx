import useStore from "../../app/store";

const ToggleThemeButton = () => {
  const { toggleTheme } = useStore();
  return (
    <div
      className={`relative w-14  p-3  border-2 border-white bg-gray-400 dark:bg-slate-800  dark:border-[#838383]   rounded-full lg:hover:cursor-pointer
       `}
      onClick={toggleTheme}
    >
      <p
        className={`absolute top-1 size-4 bg-yellow-50 left-1 dark:bg-[#464545] dark:left-8 rounded-full transition-all duration-200`}
      ></p>
    </div>
  );
};

export default ToggleThemeButton;
