import { BrowserRouter } from "react-router-dom";
import Header from "./widgets/Header/index.tsx";
import AppBody from "./widgets/AppBody.tsx";
import EntityPanel from "./widgets/EntityPanel/EntityPanel.tsx";
import useBoardStore from "./app/store/board/boardStore.ts";
import SideBarMenuMobile from "./widgets/Menu/SideBarMenuMobile.tsx";

const App = () => {
  const { currentBoard } = useBoardStore();

  return (
    <>
      <BrowserRouter>
        <Header />
        <SideBarMenuMobile />
        {currentBoard && <EntityPanel />}
        <AppBody />
      </BrowserRouter>
    </>
  );
};

export default App;
