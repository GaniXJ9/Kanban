import { useLocation } from "react-router-dom";
import useTheme from "../../shared/use-hook/useTheme";
import AccountBlock from "./AccountBlock/AccountBlock";
import ToggleThemeButton from "./ToggleThemeButton";
import InputBlock from "./InputBlock/InputBlock";

function Header() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  return (
    <header
      className={`sticky top-0 left-0 h-14   flex items-center justify-between px-10  border-b ${
        theme === "light"
          ? "bg-[#6565a4] border-[#bcbcbc]"
          : "bg-[#1a1a1a] border-[#585858]"
      }
      ${location.pathname === "/auth" && "hidden"}
      `}
    >
      <p className="text-white text-xl">Kanban</p>

      <InputBlock />
      <div className="flex gap-2 items-center">
        <ToggleThemeButton theme={theme} toggleTheme={toggleTheme} />
        <AccountBlock />
      </div>
    </header>
  );
}

export default Header;
