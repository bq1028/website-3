import React from 'react';

import Slider from './Slider';

import { withStyles } from '@material-ui/core/styles';
//import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
//import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(2)
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500]
    }
});

const DialogTitle = withStyles(styles)(props => {
    const { children, classes, onClose } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="Close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles(theme => ({
    root: {
        padding: theme.spacing(2)
    }
}))(MuiDialogContent);

// const DialogActions = withStyles(theme => ({
//     root: {
//         margin: 0,
//         padding: theme.spacing(1)
//     }
// }))(MuiDialogActions);

class CustomizedDialogs extends React.Component {
    state = {
        open: false
    };

    handleClickOpen = () => {
        this.setState({
            open: true
        });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render () {
        const { images } = this.props;
        return (
            <>
                <a href='#aa' variant="outlined" onClick={this.handleClickOpen}><i className="material-icons">zoom_out_map</i></a>
                <Dialog
                    onClose={this.handleClose}
                    open={this.state.open}
                >
                    <DialogTitle id="customized-dialog-title" onClose={this.handleClose}></DialogTitle>
                    <DialogContent dividers>
                        <Slider images = {images}/>
                    </DialogContent>
                </Dialog>
            </>
        );
    }
}

export default CustomizedDialogs;