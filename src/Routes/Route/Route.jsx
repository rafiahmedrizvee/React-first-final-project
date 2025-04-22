import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Visa from "../../Pages/Visa/Visa";
import About from './../../Pages/About/About';
import Contact from './../../Pages/Contact/Contact';
import Services from "../../Pages/Home/Services/Services";
import NotFound from './../../Pages/Shared/NotFound/NotFound';
import Main from './../../Layout/Main';




const router = createBrowserRouter ([
    {
        path:'',
        element: <Main/>,
        children:[
            {
                path:'/',
                element: <Home/>
            },
            {
                path:'/home',
                element: <Home/>
            },
            {
                path:'/visa',
                element: <Visa/>
            },
            {
                path:'/about',
                element: <About/>
            },
            {
                path:'/contact',
                element: <Contact/>
            },
            {
                path:'/service',
                element: <Services/>
            },
        ],
    },
    {
        path:'*',
        element:<NotFound/>
    },
   
    
]);

export default router;