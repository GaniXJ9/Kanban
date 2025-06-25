import { BrowserRouter } from "react-router-dom";
import AppRouter from "./app/router/AppRouter";

export default function App() {
  // const [show, setShow] = useState<boolean>();

  return (
    <>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  );
}
