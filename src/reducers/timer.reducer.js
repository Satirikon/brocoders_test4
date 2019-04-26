import {
  ADD_ACTIVE_TIMER,
  DELETE_ACTIVE_TIMER,
  UPDATE_ACTIVE_TIMER
} from '../constants/timer.constants';

const initialState = { name: '', start: 0 };

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
