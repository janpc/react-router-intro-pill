import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./pages/Home";
import BeerInfo from "./pages/BeerInfo";
import Find from "./pages/Find";
import ErrorPage from "./pages/Error";

import Header from "./components/Header";
import ProtectedRoute from "./components/ProtectedRoute";
import useDataApi from "./hooks/useDataApi";

function App() {
  const { isAuthenticated, setIsAuthenticated } = useState(true);
  const [page, setPage] = useState(1);

  const [fetchInfo, doFetch] = useDataApi("", null);

  useEffect(() => {
    doFetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=9`);
  }, [page]);

  const login = () => {};
  const logout = () => {};

  return (
    <div>
      <Header isAuthenticated={isAuthenticated} login={login} logout={logout} />
      <Switch>
        <Route path="/beers/find">
          <Find />
        </Route>
        <ProtectedRoute isAuthenticated={true} path="/beers/:beerId">
          <BeerInfo fetchInfo={fetchInfo} />
        </ProtectedRoute>
        <Route path="/error/:errorId" component={ErrorPage}>
          <ErrorPage />
        </Route>
        <Route exact path="/">
          <Home fetchInfo={fetchInfo} page={page} setPage={setPage}/>
        </Route>
        <Route path="*" component={ErrorPage}>
          <Redirect to="/error/0" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
