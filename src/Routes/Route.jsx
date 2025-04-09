import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Main from "../Layout/Main";
import Contact from "../Pages/Contact/Contact";
import Appointment from "../Pages/Appointment/Appointment";

const router = createBrowserRouter ([
    {
        path:'',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/home',
                element: <Home></Home>
            },
            {
                path:'/appointment',
                element: <Appointment></Appointment>
            },
            {
                path:'/about',
                element: <About></About>
            },
            {
                path:'/contact',
                element: <Contact></Contact>
            },
        ],
    },
]);

export default router;