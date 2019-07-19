import React, { Component } from 'react';

import PrimarySearchAppBar from './../Navbar/Navbar';
import SectionTitle from './../SectionTitle/SectionTitle';

import './Home.scss';

class Home extends Component {
    render () {
        return (
            <>
            <PrimarySearchAppBar />
            <div className="home" id = 'home'>
                <SectionTitle 
                    title = "Home"
                    text = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem vero quae at consequatur labore ullam minus magni omnis dolorem ut sed corrupti doloribus dolorum et quidem repudiandae soluta, deserunt facilis.'
                    color = 'white'
                />
            </div>
            </>
        );
    }
}

export default Home;