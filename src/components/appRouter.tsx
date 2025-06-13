import {Route, Routes} from "react-router-dom";
import {routeConfig} from "../router/routerConfig.tsx";

const AppRouter = () => {
    return (
        <Routes>
            {Object.values(routeConfig).map(item => {
                return (
                    <Route key={item.path} path={item.path} element={item.element} />
                )
            })}
        </Routes>
    );
};

export default AppRouter;