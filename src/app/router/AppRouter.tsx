import { useRoutes } from "react-router-dom";
import Main from "../../pages/Main";
import Auth from "../../pages/Auth";

function AppRouter() {
  const routes = useRoutes([
    { path: "/", element: <Main /> },
    { path: "/auth", element: <Auth /> },
  ]);
  return routes;
}

export default AppRouter;
