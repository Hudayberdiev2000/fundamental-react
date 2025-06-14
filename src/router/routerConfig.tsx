import type {RouteProps} from "react-router-dom";
import {Posts} from "../pages/posts.tsx";
import {About} from "../pages/about.tsx";
import {PostDetails} from "../pages/postDetails.tsx";
import {NotFound} from "../pages/notFound.tsx";
import Login from "../pages/login.tsx";

export enum AppRoutes {
    POSTS = "posts",
    ABOUT = "about",
    POST_DETAILS = "post_details",
    NOT_FOUND = "not_found",
    LOGIN = "login"
}

export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.POSTS]: '/posts',
    [AppRoutes.POST_DETAILS]: '/posts/:postId',
    [AppRoutes.NOT_FOUND]: '*',
    [AppRoutes.LOGIN]: '/login',
}

export const privateRoutesConfig: Record<
    Exclude<AppRoutes, AppRoutes.LOGIN>,
    RouteProps
> = {
    [AppRoutes.POSTS]: {
        path: RoutePaths.posts,
        element: <Posts />
    },
    [AppRoutes.ABOUT]: {
        path: RoutePaths.about,
        element: <About />
    },
    [AppRoutes.POST_DETAILS]: {
        path: RoutePaths.post_details,
        element: <PostDetails />
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePaths.not_found,
        element: <NotFound />
    }
}

export const publicRoutesConfig: Record<
    Extract<AppRoutes, AppRoutes.LOGIN>,
    RouteProps
> = {
    [AppRoutes.LOGIN]: {
        path: RoutePaths.login,
        element: <Login />
    }
}