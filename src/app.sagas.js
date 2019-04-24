import { all } from 'redux-saga/effects';
import { watchData } from './main/dataTabs/dataTabs.sagas';
import { watchActiveTimer } from './main/timer/timer.sagas';

export default function* rootSaga() {
  yield all([watchData(), watchActiveTimer()]);
}
