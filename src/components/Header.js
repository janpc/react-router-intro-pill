import React from "react";

import { Link } from "react-router-dom";

function Header({ isAuthenticated, login, logout }) {
  return (
    <header className="bg-light p-2">
      <nav className="container d-flex align-items-center">
        <Link className="navbar-brand" to="/">
          Home
        </Link>
        <div className="navbar navbar-expand">
          <Link className="nav-item nav-link" to="/beers/find">
            Find
          </Link>
        </div>
        <div className="d-flex ml-auto">
          {isAuthenticated ? (
            <div className="d-flex align-items-center">
              <p className="mb-0 mr-3">Hello!</p>
              <button className="btn btn-primary" onClick={logout}>
                Logout
              </button>
            </div>
          ) : (
            <button className="btn btn-primary" onClick={login}>
              Login
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
