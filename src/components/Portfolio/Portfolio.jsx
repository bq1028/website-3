import React, { Component } from 'react';

import SectionTitle from './../SectionTitle/SectionTitle';

import './Portfolio.scss';

class Portfolio extends Component {
    render () {
        return (
            <div className='portfolio' id = 'portfolio'>
                <SectionTitle 
                    title = "Portfolio"
                    text = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem vero quae at consequatur labore ullam minus magni omnis dolorem ut sed corrupti doloribus dolorum et quidem repudiandae soluta, deserunt facilis.'
                />
            </div>      
        );
    }
}

export default Portfolio;