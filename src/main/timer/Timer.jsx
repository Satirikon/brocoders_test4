import React, { Component } from 'react';
import { Button, TextField, Avatar } from '@material-ui/core';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import uuidv1 from 'uuid/v1';

import AlertModal from './alert/Alert';
import { setItem, getItem, removeItem } from '../../helpers/localStorage';
import { addTimer } from '../dataTabs/dataTabs.actions';
import { TIMER_START_TIME } from './timer.constants';
import { HHMMSS } from '../../helpers/time';

import './Timer.scss';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.timer = null;
    const localStorageStartTime = getItem(TIMER_START_TIME);
    this.state = {
      name: '',
      duration: 0,
      start: localStorageStartTime ? Number(localStorageStartTime) : 0,
      isModalOpened: false
    };
  }

  componentWillMount() {
    if (this.state.start) this.onStart(this.state.start);
  }

  onStart = (start = new Date().getTime()) => {
    this.setState({ start, duration: new Date().getTime() - start });
    setItem(TIMER_START_TIME, start);
    this.timer = setInterval(() => {
      this.setState({
        duration: new Date().getTime() - this.state.start
      });
    }, 1000);
  };

  onStop = () => {
    if (!this.state.name) return this.setState({ isModalOpened: true });

    clearInterval(this.timer);

    this.props.addTimer({
      id: uuidv1(),
      start: this.state.start,
      duration: this.state.duration,
      name: this.state.name
    });

    removeItem(TIMER_START_TIME);

    this.setState({ name: '', start: 0, duration: 0 });
  };

  onTaskNameChange = e => this.setState({ name: e.target.value.trim() });

  render() {
    const { name, start, duration, isModalOpened } = this.state;

    return (
      <div className="Timer">
        <TextField
          id="standard-bare"
          placeholder="Name of your task"
          value={name}
          margin="normal"
          className="text-field"
          onChange={this.onTaskNameChange}
        />
        <Avatar className="timer-circle">{HHMMSS(duration, true)}</Avatar>

        {!!start && (
          <Button
            variant="contained"
            color="primary"
            className="action-button"
            onClick={this.onStop}
          >
            Stop
          </Button>
        )}

        {!start && (
          <Button
            variant="contained"
            color="primary"
            className="action-button"
            onClick={() => this.onStart()}
          >
            Start
          </Button>
        )}

        <AlertModal
          isOpened={isModalOpened}
          onClose={() => this.setState({ isModalOpened: false })}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addTimer }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Timer);
