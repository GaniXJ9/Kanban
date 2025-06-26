import { useLocation, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/auth");
  };
  return (
    <header
      className={`h-12 bg-blue-500 ${
        location.pathname === "/auth" && "hidden"
      }`}
    >
      <p className="text-xl lg:hover:cursor-pointer" onClick={logOut}>
        Log out
      </p>
    </header>
  );
}

export default Header;
