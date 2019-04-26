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
import { getChartData } from './taskChart.service';
import { bindActionCreators } from 'redux';
import { generateTasks, resetTasks } from '../dataTabs.actions';
import PropTypes from 'prop-types';
import './TasksChart.scss';

class TasksChart extends Component {
  render() {
    const { tasks, generateTasks, resetTasks } = this.props;

    const dataArr = getChartData(tasks);
    return (
      <div className="tasks-chart">
        <ResponsiveContainer height={500}>
          <BarChart className="bar-chart" data={dataArr}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="chartMinutes" fill="#8884d8" />
            <Bar dataKey="chartSeconds" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>

        <Button
          variant="contained"
          color="primary"
          className="action-button right"
          onClick={generateTasks}
        >
          Generate
        </Button>

        <Button
          variant="contained"
          color="primary"
          className="action-button right"
          onClick={() => resetTasks()}
        >
          Reset All
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({ tasks: state.tasks });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ generateTasks, resetTasks }, dispatch);

TasksChart.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      start: PropTypes.number,
      duration: PropTypes.number
    })
  ),
  generateTasks: PropTypes.func,
  resetTasks: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TasksChart);
