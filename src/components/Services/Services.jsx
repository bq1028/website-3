import React, { Component } from 'react';

import SectionTitle from './../SectionTitle/SectionTitle';
import Grid from '@material-ui/core/Grid';
import Slider from './Slider';
import gif from './aa.gif';

import './Services.scss';

class Services extends Component {
    render () {
        const images = [
            {
                src: 'images/services/c.png',
                name: 'C'
            },
            {
                src: 'images/services/cpp.png',
                name: 'C++'
            },
            {
                src: 'images/services/qt-qml.png',
                name: 'QT/QML'
            },
            {
                src: 'images/services/electronjs.png',
                name: 'ELECTRON.JS'
            },
            {
                src: 'images/services/ios.png',
                name: 'IOS'
            },
            {
                src: 'images/services/android.png',
                name: 'ANDROID'
            },
            {
                src: 'images/services/fluter.png',
                name: 'FLUTER'
            },
            {
                src: 'images/services/dart.png',
                name: 'DART'
            },
            {
                src: 'images/services/html.png',
                name: 'HTML'
            },
            {
                src: 'images/services/css.png',
                name: 'CSS'
            },
            {
                src: 'images/services/sass.png',
                name: 'SASS'
            },
            {
                src: 'images/services/bootstrap.png',
                name: 'Bootstrap'
            },
            {
                src: 'images/services/javascript.png',
                name: 'JavaScript'
            },
            {
                src: 'images/services/reactjs.png',
                name: 'REACT.JS'
            },
            {
                src: 'images/services/nodejs.png',
                name: 'NODE.JS'
            },
            {
                src: 'images/services/mongodb.png',
                name: 'MONGO DB'
            },
            {
                src: 'images/services/sql.png',
                name: 'SQL'
            },
            {
                src: 'images/services/blockchain.png',
                name: 'BLOCKCHAIN'
            }
        ];
        return (
            <div className='services' id = 'services'>
                <SectionTitle 
                    title = "Services"
                    text = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem vero quae at consequatur labore ullam minus magni omnis dolorem ut sed corrupti doloribus dolorum et quidem repudiandae soluta, deserunt facilis.'
                    color = '#476569'
                />
                <Grid container className = 'containera'>
                    {images.map(item => {
                        return <Grid item xl={3} lg={3} md={4} sm={4} xs={6}>
                            <div className='services--content'>
                                <div className='services--logo'>
                                    <img src = {item.src}/>
                                </div>
                                <div className='services--category'>
                                    <h3>{item.name}</h3>
                                </div>
                            </div>
                        </Grid>;      
                    })}
                </Grid>
            </div>    
        );
    }
}

export default Services;