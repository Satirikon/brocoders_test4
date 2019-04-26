import { all, takeLatest, delay, select } from 'redux-saga/effects';
import {
  ADD_ACTIVE_TIMER,
  DELETE_ACTIVE_TIMER,
  UPDATE_ACTIVE_TIMER,
  ACTIVE_TIMER
} from '../constants/timer.constants';
import { setItem, removeItem } from '../helpers/localStorage';

function* setActiveTimerToLocalStorage({ payload }) {
  yield setItem(ACTIVE_TIMER, JSON.stringify(payload));
}

function* deleteActiveTimerFromLocalStorage() {
  yield removeItem(ACTIVE_TIMER);
}

function* updateActiveTimerInLocalStorage({ payload }) {
  yield delay(500);
  const currentActiveTimer = yield select(state => state[ACTIVE_TIMER]);
  yield setItem(
    ACTIVE_TIMER,
    JSON.stringify({ ...currentActiveTimer, ...payload })
  );
}

export function* watchActiveTimer() {
  yield all([
    takeLatest(ADD_ACTIVE_TIMER, setActiveTimerToLocalStorage),
    takeLatest(DELETE_ACTIVE_TIMER, deleteActiveTimerFromLocalStorage),
    takeLatest(UPDATE_ACTIVE_TIMER, updateActiveTimerInLocalStorage)
  ]);
}
