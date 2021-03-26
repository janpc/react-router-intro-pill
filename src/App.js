import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./pages/Home";
import BeerInfo from "./pages/BeerInfo";
import Find from "./pages/Find";
import ErrorPage from "./pages/Error";

import Header from "./components/Header";
import ProtectedRoute from "./components/ProtectedRoute";

import ReduxProvider from "./redux/Provider";

import useAuthentication from "./hooks/useAuthentication ";
import useDataApi from "./hooks/useDataApi";

function App() {
  const { isAuthenticated, logout, login } = useAuthentication();
  useDataApi(``, null);

  return (
    <div>
      <Header isAuthenticated={isAuthenticated} login={login} logout={logout} />
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
    </div>
  );
}

export default App;
