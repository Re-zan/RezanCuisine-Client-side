import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const PrivateRoutes = ({ children }) => {
  const { user, loader } = useContext(AuthContext);

  const location = useLocation();
  if (loader) {
    return <button className="btn loading mx-auto">loading</button>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" replace state={{ from: location }}></Navigate>;
};

export default PrivateRoutes;
