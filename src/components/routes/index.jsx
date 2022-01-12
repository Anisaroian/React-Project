import { Navigate } from "react-router";
import NotFound from "../../pages/404";
import About from "../../pages/About";
import Home from "../../pages/Home";
import Project from "../../pages/Project"
import Form from "../FormComponent/components/Form";

export const routes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/about-me",
        element: <About />
    },
    {
        path: "/project",
        element: <Project />
    },
    {
        path: "/task",
        element: <Form />
    },
    {
        path: "/not-found",
        element: <NotFound />
    },
    {
        path: "*",
        element: <Navigate to="/not-found" />
    }
] 