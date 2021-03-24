import React from "react";
import { Redirect, Route } from "react-router-dom";

function ProtectedRoute({isAuthenticated, path, childs, ...props}) {
  return isAuthenticated ? <Route to={path}>{childs}</Route>: <Redirect to="/"/>;
}

export default ProtectedRoute;
