import INITIAL_STATE from "./beersState";
import {
  SET_BEERS_DATA,
  SET_BEERS_PAGE,
  SET_BEERS_MODE,
  SET_BEERS_SEARCH,
  SET_BEERS_OPTIONS,
  SET_BEERS_ID,
} from "./beersTypes";

const beersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_BEERS_DATA:
      return { ...state, data: action.payload };

    case SET_BEERS_PAGE:
      return { ...state, page: action.payload };

    case SET_BEERS_MODE:
      return { ...state, mode: action.payload };

    case SET_BEERS_SEARCH:
      return { ...state, search: action.payload };

    case SET_BEERS_OPTIONS:
      return { ...state, ...action.payload };

    case SET_BEERS_ID:
      return { ...state, id: action.payload };

    default:
      return state;
  }
};

export default beersReducer;
