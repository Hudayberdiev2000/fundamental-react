import {Route, Routes} from "react-router-dom";
import {About} from "../pages/about.tsx";
import {Posts} from "../pages/posts.tsx";
import {NotFound} from "../pages/notFound.tsx";
import {PostDetails} from "../pages/postDetails.tsx";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={"about"}  element={<About />} />
            <Route path={"/posts"} element={<Posts />} />
            <Route path={"/posts/:postId"} element={<PostDetails />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRouter;