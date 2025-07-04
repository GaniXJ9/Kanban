import { BrowserRouter } from "react-router-dom";
import Header from "./widgets/Header/index.tsx";
import AppBody from "./widgets/AppBody.tsx";
import useStore from "./app/store/index.ts";
import EntityPanel from "./widgets/EntityPanel/EntityPanel.tsx";

const App = () => {
  const { currentBoard } = useStore();

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
