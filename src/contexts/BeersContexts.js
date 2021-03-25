import React, { useState, useEffect } from "react";

import useDataApi from "../hooks/useDataApi";

const BeersContext = React.createContext([]);

const BeersContextProvider = ({ children }) => {
  const [page, setPage] = useState(1);
  const [mode, setMode] = useState("normal");
  const [search, setSearch] = useState("");

  const [{ data, isLoading, isError }, doFetch] = useDataApi("", null);

  useEffect(() => {
    if (mode === "normal") {
      doFetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=9`);
    } else if ((mode === "find")) {
        doFetch(`https://api.punkapi.com/v2/beers${search}&page=${page}&per_page=9`);
    }
  }, [page, mode, search]);

  return (
    <BeersContext.Provider
      value={{
        data,
        isLoading,
        isError,
        page,
        setPage,
        setMode,
        setSearch
      }}
    >
      {children}
    </BeersContext.Provider>
  );
};

export default BeersContextProvider;
export { BeersContext };
