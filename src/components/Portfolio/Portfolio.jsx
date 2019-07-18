import React, { Component } from 'react';

import Slider from './Slider';

import './Portfolio.scss';

class Portfolio extends Component {
    render () {
        return (
            <div className='portfolio' id = 'portfolio'>
                <h3>Works completed by our team</h3>
                <Slider />
            </div>      
        );
    }
}

export default Portfolio;