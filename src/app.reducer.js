import { combineReducers } from 'redux';

import timersReducer from './dataTabs/dataTabs.reducer';

const appReducer = combineReducers({
  timers: timersReducer
});

export default appReducer;
