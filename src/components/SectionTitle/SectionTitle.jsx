import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import './SectionTitle.scss';

class SectionTitle extends Component {
    render () {
        return (
            <Grid container>
                <Grid item xs={12} className="sectionTitle">
                    <div className='sectionTitle--div'>
                        <h1 className='sectionTitle--title'>{this.props.title}</h1>
                        <p className='sectionTitle--text'>{this.props.text}</p>
                    </div>    
                </Grid>
            </Grid>    
        );
    }
}

export default SectionTitle;