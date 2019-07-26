import React, { Component } from 'react';

import SectionTitle from './../SectionTitle/SectionTitle';
import PortfolioItem from './PortfolioItem';
import PaginationImgs from './PaginationImgs';

import Grid from '@material-ui/core/Grid';

import './image-gallery-styles/image-gallery.scss';
import './image-gallery-styles/image-gallery-no-icon.scss';

import './Portfolio.scss';

class Portfolio extends Component {
    render () {
        const images = [
            {
                original: '/images/portfolio/1.jpg'
            },
            {
                original: '/images/portfolio/2.jpg'
            },
            {
                original: '/images/portfolio/3.jpg'
            },
            {
                original: '/images/portfolio/4.jpg'
            },
            {
                original: '/images/portfolio/5.jpg'
            },
            {
                original: '/images/portfolio/6.jpg'
            },
            {
                original: '/images/portfolio/7.jpg'
            },
            {
                original: '/images/portfolio/8.jpg'
            },
            {
                original: '/images/portfolio/9.jpg'
            },
            {
                original: '/images/portfolio/10.jpg'
            },
            {
                original: '/images/portfolio/11.jpg'
            }
        ];
        const pageItems = 9;
        const maxPage = Math.ceil(images.length / pageItems);
        return (
            <div className='portfolio' id = 'portfolio'>
                <SectionTitle 
                    title = "Portfolio"
                    text = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem vero quae at consequatur labore ullam minus magni omnis dolorem ut sed corrupti doloribus dolorum et quidem repudiandae soluta, deserunt facilis.'
                    color = '#476569'
                />
                <Grid container className = 'portfolio--images'>
                    {images.map(item => {
                        return <PortfolioItem key = {item.original} imgSrc = {item.original} imgAlt = {item.original} images = {images}/>;
                    })}
                </Grid>
                <PaginationImgs maxPage = {maxPage} />
            </div>      
        );
    }
}

export default Portfolio;