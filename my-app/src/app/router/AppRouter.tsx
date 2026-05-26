import { useRoutes } from "react-router-dom";
import MainPage from "../../pages/MainPage";
import Boards from "../../pages/Boards";
import Templates from "../../pages/Templates";
import BoardDetail from "../../pages/Boards/BoardDetail";
import Registration from "../../pages/Registration";
import SignInForm from "../../widgets/SignIn/SignInForm";

const AppRouter = () => {
  const routes = useRoutes([
    { path: "/", element: <MainPage /> },
    { path: "/sign-in", element: <SignInForm /> },
    { path: "/registration", element: <Registration /> },
    { path: "/boards", element: <Boards /> },
    { path: "/boards/:id", element: <BoardDetail /> },
    { path: "/templates", element: <Templates /> },
  ]);

  return routes;
};

export default AppRouter;
