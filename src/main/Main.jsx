import React, { Component, Fragment } from 'react';

import Timer from './timer/Timer';
import DataTabs from './dataTabs/DataTabs';

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
