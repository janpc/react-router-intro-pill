import React, { useState, useEffect } from "react";

const useAuthentication = () => {
  const [isAuthenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const isAuth = localStorage.getItem("isAuthenticated");
    if (isAuth) {
      setAuthenticated(isAuth);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("isAuthenticated", isAuthenticated);
  }, [isAuthenticated]);

  const login = () => {
      setAuthenticated(true);
  };

  const logout = () => {
    setAuthenticated(false);
};

  return { isAuthenticated, logout, login };
};

export default useAuthentication;
