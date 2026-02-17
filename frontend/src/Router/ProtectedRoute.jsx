import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const Privateroute = () => {
  let auth = false;
  if (localStorage.getItem("jwtToken") && localStorage.getItem("userid")) {
    auth = true;
  }
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

const Privaterouteadmin = () => {
  const token = localStorage.getItem("jwtToken");
  const role = localStorage.getItem("user_role");

  if (token && role === "ROLE_ADMIN") {
    return <Outlet />;
  }

  return <Navigate to="/admin-login" />;
};



export {Privateroute,Privaterouteadmin};
