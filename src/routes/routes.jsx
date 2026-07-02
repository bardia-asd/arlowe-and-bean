import { createBrowserRouter } from "react-router";
import AppLayout from "@/components/layout/AppLayout";
import Home from "@/pages/Home";
import Menu from "@/pages/Menu";
import AboutUs from "@/pages/AboutUs";
import Contact from "@/pages/Contact";
import Checkout from "@/pages/Checkout";
import NotFound from "@/pages/NotFound";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: "menu", element: <Menu /> },
            { path: "about-us", element: <AboutUs /> },
            { path: "Contact", element: <Contact /> },
            { path: "checkout", element: <Checkout /> },
            { path: "*", element: <NotFound /> },
        ],
    },
]);
