import { Route, Routes} from "react-router-dom";
import { privateRoutesConfig, publicRoutesConfig} from "../router/routerConfig.tsx";
import {useAuth} from "../context";
import {useEffect} from "react";
import {Loader} from "./UI/loader/loader.tsx";

const AppRouter = () => {
    const {
        isAuth,
        setIsAuth,
        setIsLoading,
        isLoading
    } = useAuth()

    useEffect(() => {
        const token = localStorage.getItem("auth");
        if(token) setIsAuth?.(true)
        setIsLoading?.(false);
    }, [setIsLoading, setIsAuth]);

    if(isLoading) return <Loader />

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