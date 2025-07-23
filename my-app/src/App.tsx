import { BrowserRouter } from "react-router-dom";
import Header from "./widgets/Header/index.tsx";
import AppBody from "./widgets/AppBody.tsx";
import EntityPanel from "./widgets/EntityPanel/EntityPanel.tsx";
import useBoards from "./app/store/boards/index.ts";

const App = () => {
  const { currentBoard } = useBoards();

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
