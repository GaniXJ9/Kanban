import { BrowserRouter } from "react-router-dom";
import AppRouter from "./app/router/AppRouter";
import Header from "./widgets/Header/index.tsx";
import useStore from "./app/store/index.ts";
import SideBarMenu from "./widgets/Menu/SideBarMenu.tsx";

export default function App() {
  const { theme } = useStore();
  return (
    <>
      <BrowserRouter>
        <Header />
        <main
          className={`min-h-screen flex justify-center px-32 ${
            theme === "light" ? "bg-[#eaf0f5]" : "bg-[#1a1a1a]"
          }`}
        >
          <SideBarMenu />
          <div className="w-full">
            <AppRouter />
          </div>
        </main>
      </BrowserRouter>
    </>
  );
}
