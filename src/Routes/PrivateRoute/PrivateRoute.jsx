import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../Pages/Shared/Loading/Loading";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user,loading } = useContext(AuthContext);

  if (loading){
        return <Loading></Loading>
  }

  if (user) {
    return children;
  }
  return <Navigate to="/log-in" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
