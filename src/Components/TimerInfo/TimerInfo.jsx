import React, { Component } from 'react';
import './TimerInfo.scss';
import { Link, Redirect } from 'react-router-dom';
import { HHMMSS } from '../../helpers/time';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class TimerInfo extends Component {
  render() {
    const { id } = this.props.match.params;
    const task = this.props.tasks.find(t => t.id === id);
    if (!task) return <Redirect to={`/404/${id}`} />;
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
                {task.id}
              </TableCell>
              <TableCell align="center">{task.name}</TableCell>
              <TableCell align="center">{HHMMSS(task.start)}</TableCell>
              <TableCell align="center">
                {HHMMSS(task.start + task.duration)}
              </TableCell>
              <TableCell align="center">
                {HHMMSS(task.duration, true)}
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

const mapStateToProps = state => ({ tasks: state.tasks });

export default connect(mapStateToProps)(TimerInfo);
