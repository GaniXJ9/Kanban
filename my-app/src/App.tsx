import { BrowserRouter } from "react-router-dom";
import Header from "./widgets/Header/index.tsx";
import AppBody from "./widgets/AppBody.tsx";
import EntityPanel from "./widgets/EntityPanel/EntityPanel.tsx";
import useBoards from "./app/store/boards/index.ts";
import { useEffect } from "react";
import useStore from "./app/store/index.ts";

const App = () => {
  const { currentBoard } = useBoards();
  const { theme } = useStore();

  useEffect(() => {
    localStorage.setItem("themeMode", theme);
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <BrowserRouter>
        <Header />

        {currentBoard && <EntityPanel />}
        <AppBody />

        <footer className="h-10 bg-slate-600"> </footer>
      </BrowserRouter>
    </>
  );
};

export default App;
