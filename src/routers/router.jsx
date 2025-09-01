import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/public-pages/Home";
import About from "../pages/public-pages/About";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import HelpAndSupport from "../pages/public-pages/HelpAndSupport";
import Marketplace from "../pages/public-pages/Marketplace";

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
    },
    {
        path: "/marketplace",
        element: <Marketplace></Marketplace>
    },
    {
        path: "/help-and-support",
        element: <HelpAndSupport></HelpAndSupport>
    },
]);
export default router;