import { useLocation, useNavigate } from "react-router-dom";
import useTheme from "../../shared/use-hook/useTheme";
import AccountBlock from "./AccountBlock/AccountBlock";
import ToggleThemeButton from "./ToggleThemeButton";
import InputBlock from "./InputBlock/InputBlock";
import DesksIcon from "../../shared/icons/DesksIcon";
// import MobileMenuIcon from "../../shared/icons/MobileMenuIcon";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const toBoards = () => {
    navigate("/boards");
  };

  return (
    <header
      className={`sticky top-0 left-0 h-14   flex items-center justify-between px-10  border-b z-50 ${
        theme === "light"
          ? "bg-[#6565a4] border-[#bcbcbc]"
          : "bg-[#1a1a1a] border-[#585858]"
      }
      ${location.pathname === "/auth" && "hidden"}
      `}
    >
      <div className="flex lg:hidden items-center gap-3 px-3">
        {/* <span className="p-2 bg-slate-200 text-slate-500 rounded-md">
          <MobileMenuIcon />
        </span> */}
        <span className="text-slate-200">
          <DesksIcon />
        </span>
      </div>
      <div
        className="lg:hover:cursor-pointer text-white items-center gap-1 hidden lg:flex"
        onClick={toBoards}
      >
        <DesksIcon />
        <span className="text-xl ">Kanban</span>
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
