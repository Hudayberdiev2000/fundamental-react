import {Navigate, Route, Routes} from "react-router-dom";
import {AppRoutes, privateRoutesConfig, publicRoutesConfig, RoutePaths} from "../router/routerConfig.tsx";

const AppRouter = () => {
    return (
        <Routes>
            <Route index element={<Navigate to={RoutePaths[AppRoutes.POSTS]} replace />} />
                {Object.values(privateRoutesConfig).map(item => {
                    return (
                        <Route key={item.path} path={item.path} element={item.element}/>
                    )
                })}
            {Object.values(publicRoutesConfig).map(item => {
                return (
                    <Route key={item.path} path={item.path} element={item.element}/>
                )
            })}
        </Routes>
    );
};

export default AppRouter;