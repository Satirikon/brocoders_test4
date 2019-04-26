import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import appReducer from './app.reducer';
import appSagas from './app.sagas';
import { composeWithDevTools } from 'redux-devtools-extension';
import Router from './router/Router';
import { reHydrateStore } from './helpers/sagas';

import './App.scss';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  appReducer,
  reHydrateStore(),
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(appSagas);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router />
        </div>
      </Provider>
    );
  }
}

export default App;
