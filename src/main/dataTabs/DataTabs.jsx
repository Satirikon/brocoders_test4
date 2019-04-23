import React, { Component } from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core/';
import './DataTabs.scss';
import { Route, withRouter } from 'react-router-dom';
import TasksChart from './tasksChart/TasksChart';
import TasksLog from './tasksLog/TasksLog';

class DataTabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.location.pathname === '/chart' ? 1 : 0
    };
  }

  setActiveTab = (event, activeTab) => {
    if (this.state.activeTab === activeTab) return;
    this.setState({ activeTab });
    const route = activeTab === 0 ? '/' : '/chart';
    this.props.history.push(route);
  };
  render() {
    const { activeTab } = this.state;

    return (
      <div className="tabs-menu">
        <AppBar position="static">
          <Tabs
            className="header-menu"
            value={activeTab}
            onChange={this.setActiveTab}
          >
            <Tab className="tasks-menu" label="TASKS LOG" />
            <Tab className="tasks-menu" label="TASKS CHART" />
          </Tabs>
        </AppBar>

        <Route exact path="/" component={TasksLog} />
        <Route exact path="/chart" component={TasksChart} />
      </div>
    );
  }
}

export default withRouter(DataTabs);
