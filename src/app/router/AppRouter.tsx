import { useRoutes } from "react-router-dom";
import MainPage from "../../pages/MainPage";
import Auth from "../../pages/Auth";
import Desks from "../../pages/Desks";
import Templates from "../../pages/Templates";

function AppRouter() {
  const routes = useRoutes([
    { path: "/", element: <MainPage /> },
    { path: "/auth", element: <Auth /> },
    { path: "/desks", element: <Desks /> },
    { path: "/templates", element: <Templates /> },
  ]);
  return routes;
}

export default AppRouter;
