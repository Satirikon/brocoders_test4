import { combineReducers } from 'redux';

import tasksReducer from './main/dataTabs/dataTabs.reducer';
import activeTimerReducer from './main/timer/timer.reducer';

const appReducer = combineReducers({
  tasks: tasksReducer,
  activeTimer: activeTimerReducer
});

export default appReducer;
