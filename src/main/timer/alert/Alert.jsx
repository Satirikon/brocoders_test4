import React, { PureComponent } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core';
import './Alert.scss';

class AlertModal extends PureComponent {
  render() {
    const { isOpened, onClose } = this.props;
    return (
      <Dialog
        open={isOpened}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="alert-modal"
      >
        <DialogTitle className="alert-dialog-title">
          {'Empty task name'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText className="alert-dialog-description">
            You are trying to close your task without a name, enter the title
            and try again!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            className="alert-dialog-button"
            onClick={onClose}
            color="primary"
            autoFocus
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default AlertModal;
