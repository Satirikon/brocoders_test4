import React, { Component } from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core/';

import TasksChart from './tasksChart/TasksChart';
import TasksLog from './tasksLog/TasksLog';

class DataTabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0
    };
  }

  render() {
    const { activeTab } = this.state;
    return (
      <div className="tabs-menu">
        <AppBar position="static">
          <Tabs
            value={activeTab}
            onChange={(event, activeTab) => this.setState({ activeTab })}
          >
            <Tab label="TASKS LOG" />
            <Tab label="TASKS CHART" />
          </Tabs>
        </AppBar>
        {activeTab === 0 && <TasksLog />}
        {activeTab === 1 && <TasksChart />}
      </div>
    );
  }
}

export default DataTabs;
