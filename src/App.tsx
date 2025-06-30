import { BrowserRouter } from "react-router-dom";
import AppRouter from "./app/router/AppRouter";
import Header from "./widgets/Header/index.tsx";
import useStore from "./app/store/index.ts";

export default function App() {
  const { theme } = useStore();
  return (
    <>
      <BrowserRouter>
        <Header />
        <main
          className={` min-h-screen ${
            theme === "light" ? "bg-[#eaf0f5]" : "bg-[#2d2d47]"
          }`}
        >
          <AppRouter />
        </main>
      </BrowserRouter>
    </>
  );
}
