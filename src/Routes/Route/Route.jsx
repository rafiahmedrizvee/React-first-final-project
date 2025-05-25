import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Visa from "../../Pages/Visa/Visa";
import About from "./../../Pages/About/About";
import Contact from "./../../Pages/Contact/Contact";
import Services from "../../Pages/Home/Services/Services";
import NotFound from "./../../Pages/Shared/NotFound/NotFound";
import Main from "./../../Layout/Main";
import LogIn from "../../Pages/Log In/LogIn";
import SignUp from "../../Pages/Sign Up/SignUp";
import DashboardLayout from "../../Layout/DashboardLayout";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import PickedDate from "../../Pages/Dashboard/PickedDate/PickedDate";
import ManageService from "../../Pages/Dashboard/ManageService/ManageService";
import AddService from "../../Pages/Dashboard/AddService/AddService";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/visa",
        element: <Visa />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/service",
        element: <Services />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/log-in",
        element: <LogIn />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <PickedDate />,
      },
      {
        path: "/dashboard/picked-date",
        element: <PickedDate />,
      },
      {
        path: "/dashboard/all-users",
        element: <AllUsers />,
      },
      {
        path: "/dashboard/manage-service",
        element: <ManageService />,
      },
      {
        path: "/dashboard/add-service",
        element: <AddService />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
