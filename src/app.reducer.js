import { combineReducers } from 'redux';

import dataTabsReducer from './dataTabs/dataTabs.reducer';

const appReducer = combineReducers({
  data: dataTabsReducer
});

export default appReducer;
