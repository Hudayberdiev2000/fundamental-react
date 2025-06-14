import { Route, Routes} from "react-router-dom";
import { privateRoutesConfig, publicRoutesConfig} from "../router/routerConfig.tsx";
import {useAuth} from "../context";

const AppRouter = () => {
    const { isAuth} = useAuth()
    return (
        <Routes>
            {isAuth ? (
                Object.values(privateRoutesConfig).map(item => {
                    return (
                        <Route key={item.path} path={item.path} element={item.element}/>
                    )
            })
            ): (
                Object.values(publicRoutesConfig).map(item => {
                    return (
                        <Route key={item.path} path={item.path} element={item.element}/>
                    )
                })
            )}
        </Routes>
    );
};

export default AppRouter;