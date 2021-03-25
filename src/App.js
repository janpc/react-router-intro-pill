import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./pages/Home";
import BeerInfo from "./pages/BeerInfo";
import Find from "./pages/Find";
import ErrorPage from "./pages/Error";

import Header from "./components/Header";
import ProtectedRoute from "./components/ProtectedRoute";

import BeersContextProvider from "./contexts/BeersContexts";

import useAuthentication from "./hooks/useAuthentication "

function App() {
 const {isAuthenticated, logout, login } = useAuthentication();

  return (
    <div>
      <Header isAuthenticated={isAuthenticated} login={login} logout={logout} />
      <BeersContextProvider>
        <Switch>
          <Route path="/beers/find">
            <Find />
          </Route>
          <ProtectedRoute isAuthenticated={isAuthenticated} path="/beers/:beerId">
            <BeerInfo />
          </ProtectedRoute>
          <Route path="/error/:errorId" component={ErrorPage}>
            <ErrorPage />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*" component={ErrorPage}>
            <Redirect to="/error/0" />
          </Route>
        </Switch>
      </BeersContextProvider>
    </div>
  );
}

export default App;
