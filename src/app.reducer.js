import { combineReducers } from 'redux';

import tasksReducer from './reducers/dataTasks.reducer';
import activeTimerReducer from './reducers/timer.reducer';

const appReducer = combineReducers({
  tasks: tasksReducer,
  activeTimer: activeTimerReducer
});

export default appReducer;
