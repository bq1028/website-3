import React, { Component } from 'react';

import ImageGallery from 'react-image-gallery';

const images = [
    {
        original: 'http://lorempixel.com/1000/600/nature/1/',
        thumbnail: 'http://lorempixel.com/250/150/nature/1/',
        description: 'Description 1'
    },
    {
        original: 'http://lorempixel.com/1000/600/nature/2/',
        thumbnail: 'http://lorempixel.com/250/150/nature/2/',
        description: 'Description 2'
    },
    {
        original: 'http://lorempixel.com/1000/600/nature/3/',
        thumbnail: 'http://lorempixel.com/250/150/nature/3/',
        description: 'Description 3'
    }
];
class Slider extends Component {
    render () {
        return (
            <ImageGallery
                items = {images}
                showThumbnails = {true}
                showFullscreenButton = {false}
                showPlayButton = {false}
                autoPlay = {true}
                slideInterval = {5000}
            /> 
        );
    }
}

export default Slider;