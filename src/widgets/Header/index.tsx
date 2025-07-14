import { useLocation, useNavigate } from "react-router-dom";
import useTheme from "../../shared/use-hook/useTheme";
import AccountBlock from "./AccountBlock/AccountBlock";
import ToggleThemeButton from "./ToggleThemeButton";
import InputBlock from "./InputBlock/InputBlock";
import DesksIcon from "../../shared/icons/DesksIcon";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const toBoards = () => {
    navigate("/boards");
  };

  return (
    <header
      className={`sticky top-0 left-0 h-14   flex items-center justify-between px-10  border-b z-10 ${
        theme === "light"
          ? "bg-[#6565a4] border-[#bcbcbc]"
          : "bg-[#1a1a1a] border-[#585858]"
      }
      ${location.pathname === "/auth" && "hidden"}
      `}
    >
      <div
        className="lg:hover:cursor-pointer text-white flex items-center gap-1 "
        onClick={toBoards}
      >
        <DesksIcon />
        <span className="text-xl">Kanban</span>
      </div>
      <InputBlock />
      <div className="flex gap-2 items-center">
        <ToggleThemeButton theme={theme} toggleTheme={toggleTheme} />
        <AccountBlock />
      </div>
    </header>
  );
};

export default Header;
