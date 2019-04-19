import {
  TIMERS,
  ADD_TIMER,
  DELETE_TIMER,
  SET_TIMERS
} from './dataTabs.constants';
import { getItem, setItem } from '../helpers/localStorage';

const localStorageTimers = getItem(TIMERS);

const initialState = localStorageTimers ? JSON.parse(localStorageTimers) : [];

const timersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TIMER:
      const timers = [...state, action.payload];
      setItem(TIMERS, JSON.stringify(timers));
      return timers;
    case DELETE_TIMER:
      const timersCopy = [...state];
      timersCopy.splice(action.payload, 1);
      setItem(TIMERS, JSON.stringify(timersCopy));
      return timersCopy;
    case SET_TIMERS:
      setItem(TIMERS, JSON.stringify(action.payload));
      return action.payload;
    default:
      return state;
  }
};

export default timersReducer;
