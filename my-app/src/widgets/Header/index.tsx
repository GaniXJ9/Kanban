import { useLocation, useNavigate } from "react-router-dom";
import AccountBlock from "./AccountBlock/AccountBlock";
import ToggleThemeButton from "./ToggleThemeButton";
import InputBlock from "./InputBlock/InputBlock";
import DesksIcon from "../../shared/icons/DesksIcon";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const toBoards = () => {
    navigate("/boards");
  };

  return (
    <header
      className={`sticky top-0 left-0 h-14 bg-[#6565a4] border-[#bcbcbc] dark:bg-[#1a1a1a] dark:border-[#585858] flex items-center justify-between px-3 lg:px-10  border-b z-50 
      ${location.pathname === "/auth" && "hidden"}
      `}
    >
      <div className="flex lg:hidden items-center gap-3 px-3">
        <span className="text-slate-200">
          <DesksIcon />
        </span>
      </div>
      <div
        className="lg:hover:cursor-pointer text-white items-center gap-1 hidden lg:flex"
        onClick={toBoards}
      >
        <DesksIcon />
        <span className="text-xl">Kanban</span>
      </div>
      <InputBlock />
      <div className="flex gap-2 items-center">
        <ToggleThemeButton />
        <AccountBlock />
      </div>
    </header>
  );
};

export default Header;
