import { createBrowserRouter } from "react-router";
import Home from "@/pages/Home";
import Menu from "@/pages/Menu";
import AboutUs from "@/pages/AboutUs";
import Visit from "@/pages/Visit";
import Checkout from "@/pages/Checkout";
import NotFound from "@/pages/NotFound";

export const router = createBrowserRouter([
    { index: true, element: <Home /> },
    { path: "/menu", element: <Menu /> },
    { path: "/about-us", element: <AboutUs /> },
    { path: "/visit", element: <Visit /> },
    { path: "/checkout", element: <Checkout /> },
    { path: "*", element: <NotFound /> },
]);
