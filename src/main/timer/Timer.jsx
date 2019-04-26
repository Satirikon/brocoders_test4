import React, { Component } from 'react';
import { Button, TextField, Avatar } from '@material-ui/core';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import uuidv1 from 'uuid/v1';
import AlertModal from './alert/Alert';
import { addTask } from '../dataTabs/dataTabs.actions';
import { HHMMSS } from '../../helpers/time';
import PropTypes from 'prop-types';
import {
  addActiveTimer,
  deleteActiveTimer,
  updateActiveTimer
} from './timer.actions';

import './Timer.scss';

class Timer extends Component {
  constructor(props) {
    super(props);
    const { start } = props.activeTimer;
    this.timer = null;
    this.state = {
      duration: start === 0 ? 0 : Date.now() - start,
      isModalOpened: false
    };
  }

  componentWillMount() {
    if (this.props.activeTimer.start)
      this.onStart(this.props.activeTimer.start);
  }

  toggleModal = () =>
    this.setState(prevState => ({ isModalOpened: !prevState.isModalOpened }));

  onStart = (start = Date.now()) => {
    this.props.addActiveTimer({ start, name: this.props.activeTimer.name });
    this.timer = setInterval(() => {
      this.setState({
        duration: Date.now() - this.props.activeTimer.start
      });
    }, 1000);
  };

  onStop = () => {
    const { name, start } = this.props.activeTimer;
    if (!name) return this.toggleModal();

    clearInterval(this.timer);

    this.props.addTask({
      id: uuidv1(),
      start,
      duration: this.state.duration,
      name
    });

    this.props.deleteActiveTimer();
    this.setState({ duration: 0 });
  };

  render() {
    const { duration, isModalOpened } = this.state;
    const { start, name } = this.props.activeTimer;
    return (
      <div className="Timer">
        <TextField
          id="standard-bare"
          placeholder="Name of your task"
          value={name}
          margin="normal"
          className="text-field"
          onChange={e =>
            this.props.updateActiveTimer({ name: e.target.value.trim() })
          }
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

        <AlertModal isOpened={isModalOpened} onClose={this.toggleModal} />
      </div>
    );
  }
}
const mapStateToProps = state => ({ activeTimer: state.activeTimer });
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { addActiveTimer, deleteActiveTimer, updateActiveTimer, addTask },
    dispatch
  );

Timer.propTypes = {
  addTimer: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer);
