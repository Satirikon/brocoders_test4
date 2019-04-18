import React, { Component } from 'react';
import Timer from './timer/Timer';
import DataTabs from './dataTabs/DataTabs';

import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import appReducer from './app.reducer';

import './App.scss';

//Store
const sagaMiddleware = createSagaMiddleware();
const store = createStore(appReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchFetchDog);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Timer />
        <DataTabs />
      </div>
    );
  }
}

export default App;
