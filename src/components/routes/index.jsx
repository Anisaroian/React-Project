import { Navigate } from "react-router";
import NotFound from "../../pages/404";
import About from "../../pages/About";
import Resume from "../../pages/Resume";
import Home from "../../pages/Home";
import Project from "../../pages/Project";
import SingleTask from "../../pages/SingleTask";
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
        path: "/my-cv",
        element: <Resume />
                
    },
    {
        path: "/project",
        element: <Project />
                
    },
    // {
    //     path: "/form",
    //     element: <Form />
                
    // },
    {
        path: "/task/:task_id",
        element: <SingleTask />
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