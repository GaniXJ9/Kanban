import { BrowserRouter } from "react-router-dom";
import AppRouter from "./app/router/AppRouter";
import Header from "./widgets/Header/index.tsx";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className="bg-[#ffffff] min-h-screen">
          <AppRouter />
        </main>
      </BrowserRouter>
    </>
  );
}
