import { all } from 'redux-saga/effects';
import { watchData } from './main/dataTabs/dataTabs.sagas';

export default function* rootSaga() {
  yield all([watchData()]);
}
