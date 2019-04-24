import { combineReducers } from 'redux';

import timersReducer from './main/dataTabs/dataTabs.reducer';
import activeTimerReducer from './main/timer/timer.reducer';

const appReducer = combineReducers({
  timers: timersReducer,
  activeTimer: activeTimerReducer
});

export default appReducer;
