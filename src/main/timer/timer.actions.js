import {
  ADD_ACTIVE_TIMER,
  DELETE_ACTIVE_TIMER,
  UPDATE_ACTIVE_TIMER
} from './timer.constants';

export const addActiveTimer = timer => ({
  type: ADD_ACTIVE_TIMER,
  payload: timer
});
export const deleteActiveTimer = () => ({ type: DELETE_ACTIVE_TIMER });
export const updateActiveTimer = timer => ({
  type: UPDATE_ACTIVE_TIMER,
  payload: timer
});
