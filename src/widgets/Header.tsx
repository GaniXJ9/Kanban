import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Header() {
  const [showAccount, setShowAccount] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();

  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/auth");
  };

  const toggleShowAccount = () => {
    setShowAccount((prev) => !prev);
  };
  return (
    <header
      className={`sticky top-0 left-0 h-14 bg-[#6565a4]  flex items-center justify-between px-10 border-b border-white ${
        location.pathname === "/auth" && "hidden"
      }`}
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

      <div
        className="relative  flex items-center lg:hover:bg-gray-300 p-1 rounded-md lg:hover:cursor-pointer"
        onClick={toggleShowAccount}
      >
        <div className="size-10 border-2 border-white rounded-full bg-gray-800 flex items-center justify-center ">
          <p className="text-white">G</p>
        </div>

        <div
          className={`absolute top-14 right-5 h-52 w-32 bg-[#6565a4]  ${
            showAccount ? "block" : "hidden"
          }`}
        >
          <p className="text-white lg:hover:cursor-pointer" onClick={logOut}>
            LogOut
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
