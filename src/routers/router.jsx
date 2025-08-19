import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/public-pages/Home";
import About from "../pages/public-pages/About";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>
    },
    {
        path: "/about",
        element: <About></About>
    }
]);
export default router;