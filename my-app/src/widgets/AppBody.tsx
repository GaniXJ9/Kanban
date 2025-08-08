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
      className={`flex min-h-screen bg-cover bg-center relative bg-[#eaf0f5] dark:bg-[rgba(29,33,37)] pb-20
        ${location.pathname !== "/auth" && "px-12 lg:px-12"}  
         `}
    >
      {!currentBoard && location.pathname !== "/auth" && <SideBarMenuDesktop />}
      {location.pathname !== "/auth" && <SideBarMenuMobile />}
      <div className={` ${location.pathname !== "/auth" && "py-5"}`}>
        <AppRouter />
      </div>
    </main>
  );
};

export default AppBody;
