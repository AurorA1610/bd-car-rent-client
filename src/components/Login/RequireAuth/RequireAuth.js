import React from "react";

import { Navigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { CircularProgress } from "@mui/material";

const RequireAuth = ({ children, redirectTo }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return <CircularProgress color="success" />;
  }
  return user.email ? children : <Navigate to={redirectTo} />;
};

export default RequireAuth;
