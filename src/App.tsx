import { BrowserRouter } from "react-router-dom";
import Header from "./widgets/Header/index.tsx";
import AppBody from "./widgets/AppBody.tsx";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <AppBody />
      </BrowserRouter>
    </>
  );
}
