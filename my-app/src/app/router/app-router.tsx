import { useRoutes } from "react-router-dom";
import MainPage from "../../pages/main-page";
import Boards from "../../pages/boards";
import BoardDetail from "../../pages/boards/board-details";
import Registration from "../../pages/registration";
import SingInPage from "../../pages/sign-in";

const AppRouter = () => {
  const routes = useRoutes([
    { path: "/", element: <MainPage /> },
    { path: "/sign-in", element: <SingInPage /> },
    { path: "/registration", element: <Registration /> },
    { path: "/boards", element: <Boards /> },
    { path: "/boards/:id", element: <BoardDetail /> },
  ]);

  return routes;
};

export default AppRouter;
