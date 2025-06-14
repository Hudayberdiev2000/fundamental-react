import {Link, useNavigate} from "react-router-dom";
import MyButton from "../button/myButton.tsx";
import {useAuth} from "../../../context";
import {RoutePaths} from "../../../router/routerConfig.tsx";

export const Navbar = () => {
    const {isAuth, setIsAuth} = useAuth()
    const  navigate = useNavigate();

    const logout = () => {
        setIsAuth?.(false);
        navigate(RoutePaths.login)
    }

    return (
        <div className="navbar">
            {isAuth && <MyButton onClick={logout}>Logout</MyButton>}
            <div className="navbar__links">
                <Link to="/about">About</Link>
                <Link to="/posts">Posts</Link>
            </div>
        </div>
    );
};

