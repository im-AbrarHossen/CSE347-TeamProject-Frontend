import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/public-pages/Home";
import About from "../pages/public-pages/About";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>
    },
    {
        path: "/about",
        element: <About></About>
    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "/register",
        element: <Register></Register>
    }
]);
export default router;