import Header from "./widgets/header/index.tsx";
import EntityPanel from "./widgets/entity-panel/EntityPanel.tsx";
import useBoards from "./app/store/boards/index.ts";
import useStore from "./app/store/index.ts";
import AppBody from "./widgets/app-body.tsx";
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

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
      </BrowserRouter>
    </>
  );
};

export default App;
