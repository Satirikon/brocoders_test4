import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import NotFound from '../Components/NotFound/NotFound';
import Main from '../containers/Main';
import TimerInfo from '../Components/TimerInfo/TimerInfo';
import PropTypes from 'prop-types';

class Router extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/404/:taskId?" component={NotFound} />
          <Route exact path="/tasks/:id" component={TimerInfo} />
          <Route exact path={['/', '/chart']} component={Main} />
          <Redirect to={'/404'} />
        </Switch>
      </BrowserRouter>
    );
  }
}

Router.propTypes = {
  tasks: PropTypes.array
};

export default Router;
