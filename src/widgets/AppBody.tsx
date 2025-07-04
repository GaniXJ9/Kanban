import { useLocation } from "react-router-dom";
import AppRouter from "../app/router/AppRouter";
import useStore from "../app/store";
import SideBarMenu from "./Menu/SideBarMenu";

const AppBody = () => {
  const location = useLocation();
  const { theme, currentBoard } = useStore();

  return (
    <main
      style={{
        background: currentBoard?.background,
        backgroundImage: `url(${currentBoard?.background})`,
      }}
      className={`min-h-screen  flex justify-center  bg-cover bg-center ${
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
};

export default AppBody;
