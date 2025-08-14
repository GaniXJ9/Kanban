import clsx from "clsx";
import useStore from "../../app/store";
import MoonOutlined from "../../shared/icons/Moon";
import Light from "../../shared/icons/Light";

const ToggleThemeButton = () => {
  const { theme, toggleTheme } = useStore();
  return (
    <div
      className={` relative shadow-inner p-1.5 shadow-gray-400 dark:shadow-gray-700 border-slate-600 bg-white dark:bg-slate-800  dark:border-[#838383]   rounded-md lg:hover:cursor-pointer
       `}
      onClick={toggleTheme}
    >
      <p
        className={clsx(
          `  text-yellow-500 dark:text-white  dark:left-8 rounded-md transition-all duration-200`
        )}
      >
        {theme === "light" ? <Light /> : <MoonOutlined />}
      </p>
    </div>
  );
};

export default ToggleThemeButton;
