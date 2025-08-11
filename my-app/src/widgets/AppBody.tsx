import { useLocation } from "react-router-dom";
import AppRouter from "../app/router/AppRouter";
import { useEffect } from "react";
import SideBarMenuDesktop from "./Menu/SideBarMenuDesktop";
import SideBarMenuMobile from "./Menu/SideBarMenuMobile";
import useBoards from "../app/store/boards";
import clsx from "clsx";

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
      className={clsx(
        "flex min-h-screen bg-cover bg-center relative bg-[#eaf0f5] dark:bg-[rgba(29,33,37)] px-12 ",
        location.pathname === "/sign-in" && " lg:px-0 pb-0",
        location.pathname === "/registration" && " lg:px-0 pb-0"
      )}
    >
      {!currentBoard &&
        location.pathname !== "/sign-in" &&
        location.pathname !== "/registration" && <SideBarMenuDesktop />}
      {location.pathname !== "/sign-in" &&
        location.pathname !== "/registration" && <SideBarMenuMobile />}

      <div
        className={clsx(
          "w-full ",
          location.pathname === "/sign-in" && "py-0",
          location.pathname === "/registration" && "py-0"
        )}
      >
        <AppRouter />
      </div>
    </main>
  );
};

export default AppBody;
