import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import './Home.scss';



class Home extends Component {

    render() {

        return (
            <Grid container className="home">
                <Grid item xs={12} className='home--slogan'>
                    <div>
                        <h1>{this.props.slogan}</h1>
                        <div className="home--slogan--line"></div>
                        <p>{this.props.text}</p>
                    </div>    
                </Grid>
            </Grid>    
        )
    }
}

export default Home;