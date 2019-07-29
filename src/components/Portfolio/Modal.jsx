import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';

const DialogContent = withStyles(theme => ({
    root: {
        padding: theme.spacing(2)
    }
}))(MuiDialogContent);

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
        const { imgSrc } = this.props;
        return (
            <>
                <a href='#aa' variant="outlined" onClick={this.handleClickOpen}><i className="material-icons">zoom_out_map</i></a>
                <Dialog
                    onClose={this.handleClose}
                    open={this.state.open}
                >
                    <DialogContent dividers onClick={this.handleClose}>
                        {/* <Slider images = {images}/> */}
                        <img src = {imgSrc} alt = 'zoom'/>
                    </DialogContent>
                </Dialog>
            </>
        );
    }
}

export default CustomizedDialogs;