import { useRoutes } from "react-router-dom";
import MainPage from "../../pages/MainPage";
import Auth from "../../pages/Auth";
import Boards from "../../pages/Boards";
import Templates from "../../pages/Templates";
import BoardDetail from "../../pages/Boards/BoardDetail";

const AppRouter = () => {
  const routes = useRoutes([
    { path: "/", element: <MainPage /> },
    { path: "/auth", element: <Auth /> },
    { path: "/boards", element: <Boards /> },
    { path: "/boards/:id", element: <BoardDetail /> },
    { path: "/templates", element: <Templates /> },
  ]);

  return routes;
};

export default AppRouter;
