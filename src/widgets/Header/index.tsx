import { useLocation } from "react-router-dom";
import useTheme from "../../shared/use-hook/useTheme";
import AccountBlock from "./AccountBlock";
import ToggleThemeButton from "./ToggleThemeButton";

function Header() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  return (
    <header
      className={`sticky top-0 left-0 h-14   flex items-center justify-between px-10 border-b border-white ${
        theme === "light" ? "bg-[#6565a4]" : "bg-[#2d2d47]"
      }
      ${location.pathname === "/auth" && "hidden"}
      `}
    >
      <p className="text-white text-xl">Kanban</p>
      <div className="w-1/2  h-9 flex items-center gap-5 ">
        <input
          type="text"
          className="border border-white w-full h-full text-white px-5 rounded-md"
        />
        <button className="text-white border border-white px-5 h-full rounded-md bg-gray-500">
          Cоздать
        </button>
      </div>

      <ToggleThemeButton theme={theme} toggleTheme={toggleTheme} />
      <AccountBlock />
    </header>
  );
}

export default Header;
