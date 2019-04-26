import { all } from 'redux-saga/effects';
import { watchData } from './sagas/dataTasks.sagas';
import { watchActiveTimer } from './sagas/timer.sagas';

export default function* rootSaga() {
  yield all([watchData(), watchActiveTimer()]);
}
