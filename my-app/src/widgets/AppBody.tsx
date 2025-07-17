import { useLocation } from "react-router-dom";
import AppRouter from "../app/router/AppRouter";
import useStore from "../app/store";
import useBoardStore from "../app/store/board/boardStore";
import { useEffect } from "react";
import SideBarMenuDesktop from "./Menu/SideBarMenuDesktop";

const AppBody = () => {
  const location = useLocation();
  const { theme } = useStore();
  const { currentBoard, setCurrentBoard } = useBoardStore();

  useEffect(() => {
    if (currentBoard) {
      if (location.pathname !== `/boards/${currentBoard.id}`) {
        setCurrentBoard(null);
      }
    }
  }, [location]);

  return (
    <main
      style={{
        background: currentBoard?.background,
        backgroundImage: `url(${currentBoard?.background})`,
      }}
      className={`min-h-screen  flex justify-center  bg-cover bg-center relative ${
        location.pathname !== "/auth" && "px-32"
      }  ${theme === "light" ? "bg-[#eaf0f5]" : "bg-[#212121]"}
         `}
    >
      <SideBarMenuDesktop />

      <div className={`w-full ${location.pathname !== "/auth" && "py-5"}`}>
        <AppRouter />
      </div>
    </main>
  );
};

export default AppBody;
