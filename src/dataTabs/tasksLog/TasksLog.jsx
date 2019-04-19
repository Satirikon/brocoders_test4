import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button
} from '@material-ui/core';
import connect from 'react-redux/es/connect/connect';
import { bindActionCreators } from 'redux';
import { deleteTimer } from '../dataTabs.actions';

class TasksLog extends Component {
  render() {
    const { timers, deleteTimer } = this.props;

    return (
      <div className="tasks-log">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>№</TableCell>
              <TableCell align="right">Task</TableCell>
              <TableCell align="right">Time Start</TableCell>
              <TableCell align="right">Time end</TableCell>
              <TableCell align="right">Time Spend</TableCell>
              <TableCell align="right">Info</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {timers.map((timer, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell align="right">{timer.name}</TableCell>
                <TableCell align="right">{timer.start}</TableCell>
                <TableCell align="right">
                  {timer.start + timer.duration}
                </TableCell>
                <TableCell align="right">{timer.duration}</TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => console.log('click info')}
                  >
                    INFO
                  </Button>
                </TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => deleteTimer(index)}
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

const mapStateToProps = state => ({ timers: state.timers });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ deleteTimer }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TasksLog);
