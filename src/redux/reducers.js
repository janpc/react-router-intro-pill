import { combineReducers } from 'redux';
import beers from './beers/beersReducer';

const reducers = combineReducers({
  beers
})

export default reducers;