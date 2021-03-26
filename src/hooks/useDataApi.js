import { useState, useReducer, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setBeersData } from "../redux/beers/beersActions";
import INITIAL_STATE from "../redux/beers/beersState";

import simpleFetch from "../services/api";

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error();
  }
};

const useDataApi = (initialUrl, initialData = INITIAL_STATE) => {
  const [url, setUrl] = useState(initialUrl);

  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData,
  });

  const reduxDispatch = useDispatch();
  const { page, mode, search, id } = useSelector((state) => state.beers);

  useEffect(() => {
    switch (mode) {
      case "normal":
        setUrl(`https://api.punkapi.com/v2/beers?page=${page}&per_page=9`);
        break;
      case "find":
        setUrl(
          `https://api.punkapi.com/v2/beers${search}&page=${page}&per_page=9`
        );
        break;
      case "beerInfo":
          setUrl(`https://api.punkapi.com/v2/beers/${id}`);
        break;
      default:
        break;
    }
  }, [page, mode, search]);

  useEffect(() => {
    let didCancel = false;

    const fetchData = async () => {
      dispatch({ type: "FETCH_INIT" });

      try {
        const result = await simpleFetch(url);
        if (!didCancel) {
          dispatch({ type: "FETCH_SUCCESS", payload: result });
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: "FETCH_FAILURE" });
        }
      }
    };

    if (url !== "") {
      fetchData();
    }

    return () => {
      didCancel = true;
    };
  }, [url]);

  useEffect(() => {
    reduxDispatch(setBeersData(state));
  }, [state, reduxDispatch]);
};

export default useDataApi;
