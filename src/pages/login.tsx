import MyInput from "../components/UI/input/myInput.tsx";
import MyButton from "../components/UI/button/myButton.tsx";
import {useAuth} from "../context";
import { useNavigate} from "react-router-dom";
import {RoutePaths} from "../router/routerConfig.tsx";

const Login = () => {
    const  { setIsAuth } = useAuth()
    const navigate = useNavigate()

    const login = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (setIsAuth) {
            setIsAuth(true)
            navigate(RoutePaths.posts)
            localStorage.setItem("auth", "true")
        }
    }

    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="Username" />
                <MyInput type="password" placeholder="Password" />
                <MyButton>Login</MyButton>
            </form>
        </div>
    );
};

export default Login;