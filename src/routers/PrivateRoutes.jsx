import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const PrivateRoutes = ({ children }) => {
  const { user, loader } = useContext(AuthContext);

  const location = useLocation();

  if (user) {
    return children;
  }
  if (loader) {
    return (
      <button className="btn loading mx-auto w-60 text-white">loading</button>
    );
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoutes;
