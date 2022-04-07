import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context";

const Privateroutes = () => {
 const location= useLocation()
  const { auth } = useAuth();
  console.log(location)
 
  return auth.token ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />;
};
export { Privateroutes };
