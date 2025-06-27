import { useRoutes } from "react-router-dom";
import MainPage from "../../pages/MainPage";
import Auth from "../../pages/Auth";
import RegistrationPage from "../../pages/RegistartionPage";

function AppRouter() {
  const routes = useRoutes([
    { path: "/", element: <MainPage /> },
    { path: "/auth", element: <Auth /> },
    { path: "/registration", element: <RegistrationPage /> },
  ]);
  return routes;
}

export default AppRouter;
