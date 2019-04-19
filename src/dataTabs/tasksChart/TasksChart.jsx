import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  CartesianGrid,
  Legend
} from 'recharts';
import { Button } from '@material-ui/core';
import { getMinutesPerHour, generateTimers } from './taskChart.service';
import { bindActionCreators } from 'redux';
import { setTimers } from '../dataTabs.actions';

class TasksChart extends Component {
  render() {
    const { timers, setTimers } = this.props;

    const dataArr = [...new Array(24)].map(() => ({ minutes: 0 }));
    timers.forEach(timer => {
      const minutesPerHour = getMinutesPerHour(timer.start, timer.duration);
      minutesPerHour.forEach(range => {
        dataArr[range.hour].minutes = range.minutes;
      });
    });

    return (
      <div className="tasks-chart">
        <BarChart width={730} height={250} data={dataArr}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="minutes" fill="#8884d8" />
        </BarChart>

        <Button
          variant="contained"
          color="primary"
          className="button"
          onClick={() => setTimers(generateTimers())}
        >
          Generate Tasks
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({ timers: state.timers });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ setTimers }, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TasksChart);
