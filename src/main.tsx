import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./app/styles/style.css";

createRoot(document.getElementById("root")!).render(
  <>
    <App />
  </>
);
