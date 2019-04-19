import { ADD_TIMER, DELETE_TIMER, SET_TIMERS } from './dataTabs.constants';

export const addTimer = timer => ({ type: ADD_TIMER, payload: timer });
export const deleteTimer = timerArrayIndex => ({
  type: DELETE_TIMER,
  payload: timerArrayIndex
});
export const setTimers = timers => ({ type: SET_TIMERS, payload: timers });
