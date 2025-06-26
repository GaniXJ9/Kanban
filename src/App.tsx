import { BrowserRouter } from "react-router-dom";
import AppRouter from "./app/router/AppRouter";
import Header from "./widgets/Header.tsx";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <AppRouter />
      </BrowserRouter>
    </>
  );
}
