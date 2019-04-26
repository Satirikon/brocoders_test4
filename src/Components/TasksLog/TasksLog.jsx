import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button
} from '@material-ui/core';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteTask } from '../../actions/dataTabs.actions';
import './TasksLog.scss';
import { HHMMSS } from '../../helpers/time';
import PropTypes from 'prop-types';

class TasksLog extends Component {
  render() {
    const { tasks, deleteTask } = this.props;
    return (
      <div className="tasks-log">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>№</TableCell>
              <TableCell align="center">Task</TableCell>
              <TableCell align="center">Time Start</TableCell>
              <TableCell align="center">Time end</TableCell>
              <TableCell align="center">Time Spend</TableCell>
              <TableCell align="center">Info</TableCell>
              <TableCell align="center">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map((task, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell align="center">{task.name}</TableCell>
                <TableCell align="center">{HHMMSS(task.start)}</TableCell>
                <TableCell align="center">
                  {HHMMSS(task.start + task.duration)}
                </TableCell>
                <TableCell align="center">
                  {HHMMSS(task.duration, true)}
                </TableCell>
                <TableCell align="center" className="wrapper">
                  <Link to={`/tasks/${task.id}`} className="link">
                    <Button
                      className="action-button"
                      variant="contained"
                      color="primary"
                    >
                      INFO
                    </Button>
                  </Link>
                </TableCell>
                <TableCell align="center" className="wrapper">
                  <Button
                    className="action-button"
                    variant="contained"
                    color="primary"
                    onClick={() => deleteTask(index)}
                  >
                    DELETE
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = state => ({ tasks: state.tasks });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ deleteTask }, dispatch);

TasksLog.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      start: PropTypes.number,
      duration: PropTypes.number
    })
  ),
  deleteTask: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TasksLog);
