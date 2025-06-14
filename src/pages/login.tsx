import MyInput from "../components/UI/input/myInput.tsx";
import MyButton from "../components/UI/button/myButton.tsx";

const Login = () => {
    return (
        <div>
            <h1>Login Page</h1>
            <form>
                <MyInput type="text" placeholder="Username" />
                <MyInput type="password" placeholder="Password" />
                <MyButton>Login</MyButton>
            </form>
        </div>
    );
};

export default Login;