import { takeEvery, put, all } from 'redux-saga/effects';
import { addTimer, deleteTimer, setTimers } from './dataTabs.actions';
import { ADD_TIMER, DELETE_TIMER, SET_TIMERS } from './dataTabs.constants';

function* addTimerSaga(timer) {
  yield put(addTimer(timer));
}

function* deleteTimerSaga(timerArrayIndex) {
  yield put(deleteTimer(timerArrayIndex));
}

function* setTimersSaga(timers) {
  yield put(setTimers(timers));
}

export function* watchData() {
  yield all([
    takeEvery(ADD_TIMER, addTimerSaga),
    takeEvery(DELETE_TIMER, deleteTimerSaga),
    takeEvery(SET_TIMERS, setTimersSaga)
  ]);
}
