import {
  SET_BEERS_DATA,
  SET_BEERS_PAGE,
  SET_BEERS_MODE,
  SET_BEERS_SEARCH,
  SET_BEERS_OPTIONS,
  SET_BEERS_ID,
} from "./beersTypes";

const setBeersData = (data) => {
  return { type: SET_BEERS_DATA, payload: data };
};
const setBeersPage = (page) => {
  return { type: SET_BEERS_PAGE, payload: page };
};
const setBeersMode = (mode) => {
  return { type: SET_BEERS_MODE, payload: mode };
};
const setBeersSearch = (search) => {
  return { type: SET_BEERS_SEARCH, payload: search };
};

const setBeersOptions = (options) => {
  return { type: SET_BEERS_OPTIONS, payload: options };
};

const setBeersId = (id) => {
  return { type: SET_BEERS_ID, payload: id };
};

export {
  setBeersData,
  setBeersPage,
  setBeersMode,
  setBeersSearch,
  setBeersOptions,
  setBeersId,
};
