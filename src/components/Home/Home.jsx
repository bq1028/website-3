import React, { Component } from 'react';

import PrimarySearchAppBar from './../Navbar/Navbar';

import './Home.scss';

class Home extends Component {
    render () {
        return (
            <>
            <PrimarySearchAppBar />
            <div className="home" id = 'home'>
                <h1>We make IT happen</h1>
                <div className = 'line'></div>
                <div style= {{ width: '60%', margin: 'auto', paddingTop: '30px', color: '#fff' }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos dolor voluptatibus reprehenderit tempora asperiores vel,
                </div>
                <div className = 'pulse'>
                    <a href = '#services'><i className="pulse--icon fa fa-angle-double-down"></i></a>
                </div>
            </div>
            </>
        );
    }
}

export default Home;