import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  CartesianGrid,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { Button } from '@material-ui/core';
import { getMinutesPerHour } from './taskChart.service';
import { bindActionCreators } from 'redux';
import { generateTimers } from '../dataTabs.actions';
import './TasksChart.scss';

class TasksChart extends Component {
  render() {
    const { timers, generateTimers } = this.props;

    const dataArr = [...new Array(24)].map(() => ({ minutes: 0 }));
    timers.forEach(timer => {
      const minutesPerHour = getMinutesPerHour(timer.start, timer.duration);
      minutesPerHour.forEach(range => {
        dataArr[range.hour].minutes = range.minutes;
      });
    });

    return (
      <div className="tasks-chart">
        <ResponsiveContainer height={500}>
          <BarChart className="bar-chart" data={dataArr}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="minutes" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>

        <Button
          variant="contained"
          color="primary"
          className="action-button"
          onClick={() => generateTimers()}
        >
          Generate
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({ timers: state.timers });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ generateTimers }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TasksChart);
