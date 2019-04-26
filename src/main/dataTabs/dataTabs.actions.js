import {
  ADD_TASKS,
  DELETE_TASKS,
  GEN_TASKS,
  RESET_TASKS
} from './dataTabs.constants';

export const addTask = task => ({ type: ADD_TASKS, payload: task });
export const deleteTask = taskArrayIndex => ({
  type: DELETE_TASKS,
  payload: taskArrayIndex
});
export const generateTasks = () => ({ type: GEN_TASKS });
export const resetTasks = task => ({ type: RESET_TASKS, payload: task });
