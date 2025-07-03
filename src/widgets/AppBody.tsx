import { useLocation } from "react-router-dom";
import AppRouter from "../app/router/AppRouter";
import useStore from "../app/store";
import SideBarMenu from "./Menu/SideBarMenu";

function AppBody() {
  const location = useLocation();
  const { theme } = useStore();

  return (
    <main
      className={`min-h-screen  flex justify-center   ${
        location.pathname !== "/auth" && "px-32"
      }  ${theme === "light" ? "bg-[#eaf0f5]" : "bg-[#212121]"}
         `}
    >
      <SideBarMenu />
      <div className={`w-full ${location.pathname !== "/auth" && "py-5"}`}>
        <AppRouter />
      </div>
    </main>
  );
}

export default AppBody;
