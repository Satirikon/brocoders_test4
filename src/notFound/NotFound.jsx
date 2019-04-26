import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import './NotFound.scss';

class NotFound extends PureComponent {
  render() {
    const { taskId } = this.props.match.params;
    return (
      <div className="error-page">
        <div className="error-message">
          {!taskId && 'Page is not found.'}
          {!!taskId && `Task ${taskId} is not found.`}
        </div>
        <div className="wrapper">
          <Link to="/" className="link">
            <Button
              variant="contained"
              color="primary"
              className="action-button right"
            >
              Go Back
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default NotFound;
