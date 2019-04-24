import React, { Component } from 'react';
import './TimerInfo.scss';
import { Link } from 'react-router-dom';
import { HHMMSS } from '../helpers/time';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button
} from '@material-ui/core';
import PropTypes from 'prop-types';

class TimerInfo extends Component {
  render() {
    const { timer } = this.props;
    return (
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="center">Task</TableCell>
              <TableCell align="center">Time Start</TableCell>
              <TableCell align="center">Time end</TableCell>
              <TableCell align="center">Time Spend</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                {timer.id}
              </TableCell>
              <TableCell align="center">{timer.name}</TableCell>
              <TableCell align="center">{HHMMSS(timer.start)}</TableCell>
              <TableCell align="center">
                {HHMMSS(timer.start + timer.duration)}
              </TableCell>
              <TableCell align="center">
                {HHMMSS(timer.duration, true)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <div className="wrapper">
          <Link to="/" className="link">
            <Button
              variant="contained"
              color="primary"
              className="action-button right"
            >
              Go Back
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}
TimerInfo.propTypes = {
  timer: PropTypes.shape({
    name: PropTypes.string,
    start: PropTypes.number,
    duration: PropTypes.number
  })
};

export default TimerInfo;
