import React, { Component } from 'react';

import SectionTitle from './../SectionTitle/SectionTitle';
import PortfolioItem from './PortfolioItem';
import PaginationImgs from './PaginationImgs';

import Grid from '@material-ui/core/Grid';

import './Portfolio.scss';

class Portfolio extends Component {
    constructor (props) {
        super(props);
        this.state = { 
            offset: 0,
            pageItems: window.innerWidth > 800 ? 6 : 3
        };
    }

    componentDidMount () {
        window.addEventListener('resize', this.updatePageItems);
    }

    componentWillUnmount () {
        window.removeEventListener('resize');
    }
 
    handleClick = offset => {
        this.setState({ offset });
    }

    updatePageItems = () => {
        this.setState({
            offset: 0,
            pageItems: window.innerWidth > 800 ? 6 : 3
        });
    };

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
            },
            {
                original: '/images/portfolio/12.jpg'
            }
        ];
        const { offset, pageItems } = this.state;
        const maxPage = Math.ceil(images.length / pageItems);
        const mapStart = offset * pageItems;
        const mapEnd = mapStart + pageItems;
        return (
            <div className='portfolio' id = 'portfolio'>
                <SectionTitle 
                    title = "Portfolio"
                    text = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem vero quae at consequatur labore ullam minus magni omnis dolorem ut sed corrupti doloribus dolorum et quidem repudiandae soluta, deserunt facilis.'
                    color = '#476569'
                />
                <Grid container className = 'portfolio--images'>
                    {images.slice(mapStart, mapEnd).map(item => {
                        return <PortfolioItem key = {item.original} imgSrc = {item.original} imgAlt = {item.original} images = {images}/>;
                    })}
                </Grid>
                <PaginationImgs 
                    maxPage = {maxPage} 
                    offset = {offset} 
                    handleClick = {this.handleClick}
                />
            </div>      
        );
    }
}

export default Portfolio;