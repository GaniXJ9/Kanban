import { useLocation } from "react-router-dom";
import AppRouter from "../app/router/AppRouter";
import { useEffect } from "react";
import SideBarMenuDesktop from "./Menu/SideBarMenuDesktop";
import SideBarMenuMobile from "./Menu/SideBarMenuMobile";
import useBoards from "../app/store/boards";

const AppBody = () => {
  const location = useLocation();
  const { currentBoard, setCurrentBoard } = useBoards();

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
      className={`min-h-screen  flex justify-center  bg-cover bg-center relative bg-[#eaf0f5] dark:bg-[#212121]
        ${location.pathname === `/boards/${currentBoard?.id}` && "px-0"}
        ${location.pathname !== "/auth" && "px-12 lg:px-32"}  
         `}
    >
      {!currentBoard && location.pathname !== "/auth" && <SideBarMenuDesktop />}
      {location.pathname !== "/auth" && <SideBarMenuMobile />}
      <div className={`w-full ${location.pathname !== "/auth" && "py-5"}`}>
        <AppRouter />
      </div>
    </main>
  );
};

export default AppBody;
