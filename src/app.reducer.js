import { combineReducers } from 'redux';

import timersReducer from './main/dataTabs/dataTabs.reducer';

const appReducer = combineReducers({
  timers: timersReducer
});

export default appReducer;
