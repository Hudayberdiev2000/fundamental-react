import './styles/app.css'
import {BrowserRouter} from "react-router-dom";
import {Navbar} from "./components/UI/navbar/navbar.tsx";
import AppRouter from "./components/appRouter.tsx";

function App() {

  return (
    <BrowserRouter>
        <Navbar />
        <AppRouter />
    </BrowserRouter>
  );
}

export default App;
