import React, { Component } from 'react';

import SectionTitle from './../SectionTitle/SectionTitle';
import Slider from './Slider';

import './Services.scss';

class Services extends Component {
    render () {
        return (
            <div className='services' id = 'services'>
                <SectionTitle 
                    title = "Services"
                    text = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem vero quae at consequatur labore ullam minus magni omnis dolorem ut sed corrupti doloribus dolorum et quidem repudiandae soluta, deserunt facilis.'
                />
                <Slider />
            </div>    
        );
    }
}

export default Services;