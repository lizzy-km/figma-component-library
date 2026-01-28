import { createBrowserRouter, RouteObject, RouterProvider } from "react-router-dom";

export default function QuixRouterProvider ({routes}:{routes:RouteObject[]}){


    const router = createBrowserRouter(routes)


    return <RouterProvider router={router}   />
}