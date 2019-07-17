import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import './Footer.scss';

class Footer extends Component {
    render () {
        return (
            <Grid container className = 'footer'>
                <Grid item>
                    <div>Footer</div>
                </Grid>
            </Grid>            
        );
    }
}

export default Footer;