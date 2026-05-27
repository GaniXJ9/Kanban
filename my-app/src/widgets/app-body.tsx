import AppRouter from "../app/router/app-router";
import SideBarMenuDesktop from "./menu/sidebar-menu-desktop";
import useBoards from "../app/store/boards";
import clsx from "clsx";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

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
        "relative flex bg-cover bg-center bg-[#eaf0f5] dark:bg-[rgba(29,33,37)] min-h-screen overflow-y-auto",
        (location.pathname === "/sign-in" ||
          location.pathname === "/registration") &&
          "lg:px-0  py-0",
      )}
    >
      {!currentBoard && !isAuthPage && <SideBarMenuDesktop />}

      <div
        className={clsx(
          "w-full ",
          location.pathname === "/" && "px-0 py-0",
          isAuthPage ? "p-0" : "p-12",
        )}
      >
        <AppRouter />
      </div>
    </main>
  );
};

export default AppBody;
