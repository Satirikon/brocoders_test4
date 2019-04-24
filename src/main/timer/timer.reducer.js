import {
  ADD_ACTIVE_TIMER,
  DELETE_ACTIVE_TIMER,
  ACTIVE_TIMER,
  UPDATE_ACTIVE_TIMER
} from './timer.constants';
import { getItem } from '../../helpers/localStorage';

const localStorageActiveTimer = getItem(ACTIVE_TIMER);

const initialState = localStorageActiveTimer
  ? JSON.parse(localStorageActiveTimer)
  : { name: '', start: 0 };

const activeTimerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ACTIVE_TIMER:
      return action.payload;
    case DELETE_ACTIVE_TIMER:
      return { name: '', start: 0 };
    case UPDATE_ACTIVE_TIMER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default activeTimerReducer;
