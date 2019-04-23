import uuidv1 from 'uuid/v1';
import { put, all, takeLatest, select } from 'redux-saga/effects';
import { setTimers } from './dataTabs.actions';
import {
  ADD_TIMER,
  DELETE_TIMER,
  GEN_TIMERS,
  SET_TIMERS,
  TIMERS
} from './dataTabs.constants';
import { setItem } from '../../helpers/localStorage';
import { generateRandomInt } from '../../helpers/math';

function* setTimersToLocalStorage() {
  const timers = yield select(store => store.timers);
  setItem(TIMERS, JSON.stringify(timers));
}

function* generateTimersSaga() {
  const range = generateRandomInt(10, 15);

  const dayStart = new Date();
  dayStart.setHours(0, 0, 0, 0);
  const dayEnd = new Date();
  dayEnd.setHours(23, 59, 59, 999);

  let timers = [];
  for (let i = 0; i < range; i++) {
    timers.push({
      id: uuidv1(),
      name: `task ${i + 1}_${new Date().getTime()}`,
      start: generateRandomInt(dayStart.getTime(), dayEnd.getTime()),
      duration: generateRandomInt(10, 90) * 60 * 1000
    });
  }

  yield put(setTimers(timers));
}

export function* watchData() {
  yield all([
    takeLatest(ADD_TIMER, setTimersToLocalStorage),
    takeLatest(DELETE_TIMER, setTimersToLocalStorage),
    takeLatest(SET_TIMERS, setTimersToLocalStorage),
    takeLatest(GEN_TIMERS, generateTimersSaga)
  ]);
}
