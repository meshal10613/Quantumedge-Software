import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Loading from "../Components/Loading";
import PrivetRoute from "./PrivetRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout/>,
        children: [
            {
                index: true,
                hydrateFallbackElement: <Loading/> ,
                loader: () => fetch("https://quantumedge-server.vercel.app/jobs", {credentials: 'include'}),
                element: <PrivetRoute><Home/></PrivetRoute>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/register",
                element: <Register/>
            }
        ]
    },
]);

// https://quantumedge-server.vercel.app