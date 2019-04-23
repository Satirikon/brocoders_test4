import {
  TIMERS,
  ADD_TIMER,
  DELETE_TIMER,
  SET_TIMERS
} from './dataTabs.constants';
import { getItem } from '../../helpers/localStorage';

const localStorageTimers = getItem(TIMERS);

const initialState = localStorageTimers ? JSON.parse(localStorageTimers) : [];

const timersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TIMER:
      return [...state, action.payload];
    case DELETE_TIMER:
      const timersCopy = [...state];
      timersCopy.splice(action.payload, 1);
      return timersCopy;
    case SET_TIMERS:
      return action.payload;
    default:
      return state;
  }
};

export default timersReducer;
