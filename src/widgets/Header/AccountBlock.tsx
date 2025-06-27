import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AccountBlock() {
  const [showAccount, setShowAccount] = useState<boolean>(false);
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/auth");
  };

  const toggleShowAccount = () => {
    setShowAccount((prev) => !prev);
  };
  return (
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
  );
}

export default AccountBlock;
