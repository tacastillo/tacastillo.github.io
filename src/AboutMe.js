import React, { Component, PropTypes } from 'react';
import './stylesheets/AboutMe.css';

import AboutMeDescriptions from './AboutMeDescriptions.js';
import { ABOUT_ME } from './aboutMeText.js';

var classNames = require('classnames');

class AboutMe extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    constructor(props) {
    	super(props);

    	this.state = {
    		events: ABOUT_ME,
    		title: "",
    		description: "",
    		selected: undefined
    	};
    }

    _setDetails = (event, i) => {
    	this.setState({
    		title: event.title,
    		description: event.description,
    		selected: i
    	});
    };

    _emptyDetails = () => {
    	this.setState({
    		title: "",
    		description: "",
    		selected: undefined
    	});
    }

    render() {

    	let listItems = this.state.events.map((event, i) => {
    		let liClass = classNames({
    			"about-selected": i === this.state.selected
    		});

    		return (
    			<li className={liClass} onMouseEnter={this._setDetails.bind(this, event, i)} key={i}>
		    		<span className="about-date">{event.date}</span>
	  				{event.title}
	    		</li>
    		);
    	});


      return (
      	<div onMouseLeave={this._emptyDetails} className="full-page align-page-right white-page">
            <div>
          		<h2>Timeline</h2>
                <h4 className="subheader">Hover Over for Details</h4>
            </div>
      		<div className="ui grid stackable about-me-container">
	      		<div className="nine wide column">
	        		<ul className="about-me">
	        			{listItems}
	        		</ul>
	      		</div>
	      		<div className="six wide column">
	      			<AboutMeDescriptions title={this.state.title} description={this.state.description}></AboutMeDescriptions>
	      		</div>
      		</div>
      	</div>
      );
    }
}

export default AboutMe;
