import React, { Component } from 'react';
import { Button, TextField, Avatar, withStyles } from '@material-ui/core';
import moment from 'moment';

import { setItem, getItem, removeItem } from '../helpers/localStorage';
import AlertModal from './alert/Alert';
import './Timer.scss';

const styles = () => ({
  textField: {
    marginTop: '10px',
    marginBottom: '50px'
  }
});

class Timer extends Component {
  constructor(props) {
    super(props);
    this.timer = null;

    this.state = {
      taskName: '',
      currentTime: 0,
      startTime: getItem('timerStartTime') || 0,
      isModalOpened: false
    };
  }

  componentWillMount() {
    if (this.state.startTime) this.onStart(this.state.startTime);
  }

  onStart = (startTime = new Date().getTime()) => {
    this.setState({ startTime, currentTime: new Date().getTime() - startTime });
    setItem('timerStartTime', startTime);
    this.timer = setInterval(() => {
      this.setState({
        currentTime: new Date().getTime() - this.state.startTime
      });
    }, 1000);
  };

  onStop = () => {
    if (!this.state.taskName) return this.setState({ isModalOpened: true });

    clearInterval(this.timer);
    this.setState({
      currentTime: 0,
      startTime: 0,
      taskName: ''
    });
    removeItem('timerStartTime');
  };

  onTaskNameChange = e => this.setState({ taskName: e.target.value });

  render() {
    // const { classes } = this.props;
    const { startTime, currentTime, isModalOpened } = this.state;
    return (
      <div className="Timer">
        <TextField
          id="standard-bare"
          placeholder="Name of your task"
          margin="normal"
          className="text-field"
          onChange={this.onTaskNameChange}
        />
        <Avatar style={{ width: 200, height: 200 }}>
          {moment.utc(currentTime).format('HH:mm:ss')}
        </Avatar>

        {!!startTime && (
          <Button variant="contained" color="primary" onClick={this.onStop}>
            Stop
          </Button>
        )}

        {!startTime && (
          <Button
            variant="contained"
            color="primary"
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

export default withStyles(styles)(Timer);
