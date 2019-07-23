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
                <div className = 'pulse'>
                    <a href = '#portfolio'><i class="pulse--icon fa fa-angle-double-down"></i></a>
                </div>
            </div>
            </>
        );
    }
}

export default Home;