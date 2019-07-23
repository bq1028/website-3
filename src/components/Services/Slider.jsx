import React, { Component } from 'react';

import './Slider.scss';

const images = [
    'images/services/c.png',
    'images/services/cpp.png',
    'images/services/qt-qml.png',
    'images/services/fluter.png',
    'images/services/dart.png',
    'images/services/html.png',
    'images/services/css.png',
    'images/services/bootstrap.png',
    'images/services/javascript.png',
    'images/services/reactjs.png',
    'images/services/electronjs.png',
    'images/services/nodejs.png',
    'images/services/mongodb.png',
    'images/services/sql.png'
];

class Slider extends Component {
    state = {
        radius: window.innerWidth / images.length * 5,
        autoRotate: true,
        rotateSpeed: -60,
        imgWidth: 70,
        imgHeight: 120,
        playState: 'running',
        tX: 0,
        tY: 10
    }

    componentDidMount () {
        window.addEventListener('resize', this.updateDimensions);
    }

    componentWillUnmount () {
        window.removeEventListener('resize');
    }

    updateDimensions = () => {
        this.setState({
            radius: window.innerWidth / images.length * 5
        });
    };
    
    render () {
        const {
            imgHeight,
            imgWidth,
            radius,
            rotateSpeed,
            playState
        } = this.state;
        return (
            <div
                id='drag-container'
            >
                <div
                    id='spin-container'
                    style={{
                        animation: `spin ${Math.abs(rotateSpeed)}s infinite linear`,
                        animationPlayState: playState,
                        width: `${imgWidth}px`
                    }}
                >
                    { images.map((item, i) => 
                        <img
                            key={item}
                            src={item}
                            alt=''
                            style={{
                                width: `${imgWidth}px`,
                                height: `${imgHeight}px`,
                                transform: `rotateY(${i * (360 / images.length)}deg) translateZ(${radius}px)`,
                                transition: `transform 1s`,
                                transitionDelay: `${(images.length - i) / 4}s`
                            }}
                        />
                    )}
                </div>
            </div>
        );
    }
}

export default Slider;