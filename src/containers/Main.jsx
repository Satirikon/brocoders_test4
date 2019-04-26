import React, { Component, Fragment } from 'react';

import Timer from '../Components/Timer/Timer';
import DataTabs from '../Components/DataTasks/DataTasks';

class Main extends Component {
  render() {
    return (
      <Fragment>
        <Timer />
        <DataTabs />
      </Fragment>
    );
  }
}

export default Main;
