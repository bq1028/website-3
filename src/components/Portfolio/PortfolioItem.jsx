import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import Modal from './Modal';

class PortfolioItem extends Component {
    render () {
        const { imgSrc, imgAlt } = this.props;
        return (
            <Grid item xl={4} lg={4} md={6} sm={6} xs={12} className = 'portfolio--images--item'>
                <img src = {imgSrc} alt = {imgAlt} style = {{ height: '100%', width: '100%' }}/>
                <div className = 'portfolio--images--item--option'>
                    <Modal imgSrc = {imgSrc}/>
                    <a href='#df'><i className="material-icons">link</i></a>
                </div>
            </Grid>      
        );
    }
}

export default PortfolioItem;