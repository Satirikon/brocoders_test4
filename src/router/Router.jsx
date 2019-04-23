import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import connect from 'react-redux/es/connect/connect';
import NotFound from '../notFound/NotFound';
import Main from '../main/Main';
import TimerInfo from '../timerInfo/TimerInfo';

class Router extends Component {
  render() {
    const { timers } = this.props;
    return (
      <BrowserRouter>
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
          <Route path="/" component={Main} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({ timers: state.timers });

export default connect(mapStateToProps)(Router);
