import React from "react";
import { Redirect, Route } from "react-router-dom";

function ProtectedRoute({isAuthenticated, path, children, ...props}) {
  return isAuthenticated ? <Route to={path} {...props}>{children}</Route>: <Redirect to="/"/>;
}

export default ProtectedRoute;
