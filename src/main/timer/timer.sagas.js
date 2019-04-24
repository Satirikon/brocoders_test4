import { all, takeLatest } from 'redux-saga/effects';
import {
  ADD_ACTIVE_TIMER,
  DELETE_ACTIVE_TIMER,
  UPDATE_ACTIVE_TIMER,
  ACTIVE_TIMER
} from './timer.constants';
import { setItem, removeItem } from '../../helpers/localStorage';

function* setActiveTimerToLocalStorage({ payload }) {
  yield setItem(ACTIVE_TIMER, JSON.stringify(payload));
}

function* deleteActiveTimerFromLocalStorage() {
  yield removeItem(ACTIVE_TIMER);
}

export function* watchActiveTimer() {
  yield all([
    takeLatest(ADD_ACTIVE_TIMER, setActiveTimerToLocalStorage),
    takeLatest(DELETE_ACTIVE_TIMER, deleteActiveTimerFromLocalStorage),
    takeLatest(UPDATE_ACTIVE_TIMER, setActiveTimerToLocalStorage)
  ]);
}
