import uuidv1 from 'uuid/v1';
import { put, all, takeLatest, select } from 'redux-saga/effects';
import { resetTasks } from '../actions/dataTabs.actions';
import {
  ADD_TASKS,
  DELETE_TASKS,
  GEN_TASKS,
  RESET_TASKS,
  TASKS
} from '../constants/dataTasks.constants';
import { setItem, removeItem } from '../helpers/localStorage';
import { generateRandomInt } from '../helpers/math';

function* setTasksToLocalStorage({ payload }) {
  const tasks = yield select(store => store.tasks);
  if (!payload) return removeItem(TASKS);
  setItem(TASKS, JSON.stringify(tasks));
}

function* generateTasksSaga() {
  const range = generateRandomInt(10, 15);

  const dayStart = new Date();
  dayStart.setHours(0, 0, 0, 0);
  const dayEnd = new Date();
  dayEnd.setHours(23, 59, 59, 999);

  let tasks = [];
  for (let i = 0; i < range; i++) {
    tasks.push({
      id: uuidv1(),
      name: `task ${i + 1}_${Date.now()}`,
      start: generateRandomInt(dayStart.getTime(), dayEnd.getTime()),
      duration: generateRandomInt(10, 90) * 60 * 1000
    });
  }

  yield put(resetTasks(tasks));
}

export function* watchData() {
  yield all([
    takeLatest(ADD_TASKS, setTasksToLocalStorage),
    takeLatest(DELETE_TASKS, setTasksToLocalStorage),
    takeLatest(RESET_TASKS, setTasksToLocalStorage),
    takeLatest(GEN_TASKS, generateTasksSaga)
  ]);
}
