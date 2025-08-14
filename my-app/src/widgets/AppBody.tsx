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
    if (currentBoard && location.pathname !== `/boards/${currentBoard.id}`) {
      setCurrentBoard(null);
    }
  }, [location.pathname, currentBoard, setCurrentBoard]);

  const isAuthPage =
    location.pathname === "/sign-in" || location.pathname === "/registration";

  return (
    <main
      style={{
        background: currentBoard?.background,
        backgroundImage: currentBoard?.background
          ? `url(${currentBoard.background})`
          : undefined,
      }}
      className={clsx(
        "flex bg-cover bg-center relative bg-[#eaf0f5] dark:bg-[rgba(29,33,37)] min-h-screen overflow-y-auto",
        (location.pathname === "/sign-in" ||
          location.pathname === "/registration") &&
          "lg:px-0  py-0"
      )}
    >
      {!currentBoard && !isAuthPage && <SideBarMenuDesktop />}
      {!isAuthPage && <SideBarMenuMobile />}

      <div className={clsx("w-full px-32 pt-14", isAuthPage && "")}>
        <AppRouter />
      </div>
    </main>
  );
};

export default AppBody;
