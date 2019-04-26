import { ADD_TASKS, DELETE_TASKS, RESET_TASKS } from './dataTabs.constants';

const initialState = [];

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASKS:
      return [...state, action.payload];
    case DELETE_TASKS:
      const tasksCopy = [...state];
      tasksCopy.splice(action.payload, 1);
      return tasksCopy;
    case RESET_TASKS:
      return action.payload ? action.payload : initialState;
    default:
      return state;
  }
};

export default tasksReducer;
