import React, { Component } from 'react';

import './Portfolio.scss';

const images = [
    'https://images.pexels.com/photos/206395/pexels-photo-206395.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/1462636/pexels-photo-1462636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
];

class Slider extends Component {
    state = {
        radius: images.length < 10 ? 500 : images.length * 17,
        autoRotate: true,
        rotateSpeed: -60,
        imgWidth: 120,
        imgHeight: 170,
        animationName: 'spinRevert',
        playState: 'running',
        tX: 0,
        tY: 10
    }
    
    render() {
        const {
            imgHeight,
            imgWidth,
            radius,
            animationName,
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
                        width: `${imgWidth}px`,
                        height: `${imgHeight}px`,
                        animation: `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`,
                        animationPlayState: playState
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
                <div
                    id='ground'
                    style={{
                        width: `${radius * 3}px`,
                        height: `${radius * 3}px`
                    }}
                ></div>
            </div>
        );
    }
}

export default Slider;