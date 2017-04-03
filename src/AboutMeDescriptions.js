import React, { Component, PropTypes } from 'react';
import './stylesheets/AboutMeDescriptions.css';

var classNames = require('classnames');

class AboutMeDescriptions extends Component {
    static propTypes = {
        className: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string
    };

    render() {
    	let divClass = classNames({
    		"about-me-desc": true,
    		"has-content": this.props.title.length > 0
    	});

        return (
            <div className={divClass}>
            	<h4>{this.props.title}</h4>
            	<div>
            		<p>{this.props.description}</p>
            	</div>
            </div>
        );
    }
}

export default AboutMeDescriptions;
