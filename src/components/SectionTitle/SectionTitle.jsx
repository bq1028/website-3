import React, { Component } from 'react';

import './SectionTitle.scss';

class SectionTitle extends Component {
    render () {
        const { title, text } = this.props;
        return (
            <div className = 'sectionTitle'>
                <h1>{title}</h1>
                <div></div>
                <p>{text}</p>
            </div>
        );
    }
}

export default SectionTitle;