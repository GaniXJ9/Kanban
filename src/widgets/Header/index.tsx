import { useLocation } from "react-router-dom";
import useTheme from "../../shared/use-hook/useTheme";
import AccountBlock from "./AccountBlock";
import ToggleThemeButton from "./ToggleThemeButton";
import InputBlock from "./InputBlock";

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

      <InputBlock />
      <div className="flex items-center">
        <ToggleThemeButton theme={theme} toggleTheme={toggleTheme} />
        <AccountBlock />
      </div>
    </header>
  );
}

export default Header;
