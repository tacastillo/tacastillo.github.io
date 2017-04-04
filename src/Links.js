import React, { Component, PropTypes } from 'react';
import './stylesheets/Links.css';

import { LINK_DATA } from './linkData.js';

function setHeader(iconName) {
	return (state, props) => {
		return { text: iconName };
	}
}

class Links extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    constructor(props) {
        super(props);

        this.state = {
        	text: ""
        }
    }

    _setHeader = (icon) => {
    	let name = icon ? icon.name : "";
    	this.setState(setHeader(name));
    }

    render() {

    	let icons = LINK_DATA.map(icon => {
    		let className = `massive ${icon.class} icon`;
    		return (
    			<a  onMouseOver={this._setHeader.bind(this, icon)} 
	    			onMouseOut={this._setHeader}
	    			target="_blank"
	    			href={icon.url} key={icon.name}>
					<i className={className}/>
				</a>
    		)
    	});

        return (
            <div className="full-page black-page align-page-left">
	      		<h2>Find Me Through My...</h2>
	      		<div className="link-text-wrapper">
	      			<h1 className="link-text">{this.state.text}</h1>
      			</div>
	      		<div className="ui grid stackable centered icon-wrapper">
	      			<div className="icon-container">
		      			{icons}
		      		</div>
	      		</div>
      		</div>
        );
    }
}

export default Links;
