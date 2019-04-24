import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import NotFound from '../notFound/NotFound';
import Main from '../main/Main';
import TimerInfo from '../timerInfo/TimerInfo';
import PropTypes from 'prop-types';

class Router extends Component {
  render() {
    const { timers } = this.props;
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/notFound" component={NotFound} />
          <Route
            exact
            path="/tasks/:id"
            render={props => {
              const timer = timers.find(t => t.id === props.match.params.id);
              if (!timer) {
                return <Redirect to={'/notFound'} />;
              }

              return <TimerInfo timer={timer} />;
            }}
          />
          <Route exact path={['/', '/chart']} component={Main} />
          <Route path="*" render={() => <Redirect to={'/notFound'} />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({ timers: state.timers });

Router.propTypes = {
  timers: PropTypes.array
};

export default connect(mapStateToProps)(Router);
