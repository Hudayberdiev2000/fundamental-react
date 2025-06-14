import {Link} from "react-router-dom";
import MyButton from "../button/myButton.tsx";
import {useAuth} from "../../../context";

export const Navbar = () => {
    const {isAuth, setIsAuth} = useAuth()

    const logout = () => {
        setIsAuth?.(false);
        localStorage.removeItem("auth");
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

