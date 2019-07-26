import React, { Component } from 'react';

import ImageGallery from 'react-image-gallery';

class Slider extends Component {
    render () {
        const { images } = this.props;
        return (
            <ImageGallery
                items = {images}
                showThumbnails = {false}
                showPlayButton = {false}
                // autoPlay = {true}
                // slideInterval = {5000}
            /> 
        );
    }
}

export default Slider;