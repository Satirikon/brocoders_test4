import React, { PureComponent } from 'react';

import './NotFound.scss';

class NotFound extends PureComponent {
  render() {
    return <div className="error-message">Page is not found.</div>;
  }
}

export default NotFound;
