import { BrowserRouter } from "react-router-dom";
import Header from "./widgets/Header/index.tsx";
import AppBody from "./widgets/AppBody.tsx";
import EntityPanel from "./widgets/EntityPanel/EntityPanel.tsx";
import useBoardStore from "./app/store/board/boardStore.ts";

const App = () => {
  const { currentBoard } = useBoardStore();

  return (
    <>
      <BrowserRouter>
        <Header />
        <div>ddascascd d</div>
        {currentBoard && <EntityPanel />}
        <AppBody />
      </BrowserRouter>
    </>
  );
};

export default App;
