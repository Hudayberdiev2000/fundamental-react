import './styles/app.css'
import {BrowserRouter} from "react-router-dom";
import {Navbar} from "./components/UI/navbar/navbar.tsx";
import AppRouter from "./components/appRouter.tsx";
import { AuthProvider} from "./context";

function App() {
  return (
        <AuthProvider>
            <BrowserRouter>
                <Navbar />
                <AppRouter />
            </BrowserRouter>
        </AuthProvider>
  );
}

export default App;
