import React, { Component, PropTypes } from 'react';
import './stylesheets/Projects.css';

import Chart from "./Chart";
import { PROJECTS_DATA } from "./projectsData";

function updateFocus(node) {
	return (state, props) => {
		return { focused: node.data };
	}
}

function updateModal(state, props) {
	if (!state.showModal) {
		document.body.style = "overflow: hidden";
	} else {
		document.body.style = "";
	}
	return { showModal: !state.showModal };
}

class Projects extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    constructor(props) {
    	super(props);
    	
    	this.width = 600;
    	this.height = 700;

    	this.dim = false;

    	this.state = {
    		showModal: false,
			focused: {
	    		"name": "",
	    		"description": "",
	    		"url": "",
	    		"img": ""
	    	}
    	}
    }

    _changeFocus(node) {
    	this.setState(updateFocus(node));
    }

    _changeModal = () => {
    	this.setState(updateModal);
    }

    _openModal = () => {
    	let imgUrl = require(`./assets/${this.state.focused.img}.jpg`);
    	console.log(imgUrl);
    }

    render() {
    	let openIcon,
    		img, thumbnail, imgUrl,
    		displayNone, displayFlex,
    		showModal;
    	if (this.state.focused.url) {
    		openIcon = <i className="external icon"></i>;
    	}

    	displayNone = { display: "none" };
    	displayFlex= { display: "flex" };
    	if (this.state.focused.img) {
    		imgUrl = require(`./assets/${this.state.focused.img}.jpg`);
    	}
		thumbnail = <img onClick={this._changeModal} className="project-image-icon" style={imgUrl ? {} : displayNone} src={imgUrl}></img>;
		img = <img onClick={this._changeModal} className="project-image" src={imgUrl}></img>;
        return (
	      	<div className="full-page black-page align-page-left">
	      		<h2>Projects</h2>
	      		<div className="content-container">
	      			<div className="svg-container">
			      		<div className="ui grid stackable">
				            <Chart
					            type={"bubble"}
					            width={this.width}
					            height={this.height}
					            margin={{top:0, left:0, bottom: 150, right:50}}
					            transitionDuration={750}
					            changeFocus={this._changeFocus.bind(this)}
					            data={PROJECTS_DATA}
					        />
			      			<div className="description-container">
			      				<h3><a target="_blank" href={this.state.focused.url}><span>{this.state.focused.name}</span> {openIcon}</a></h3>
			      				<p>{this.state.focused.description}</p>
			      				{thumbnail}
			      			</div>
				        </div>
			        </div>
	      		</div>
	      		<div id="project-image-modal" className="custom-modal" onClick={this._changeModal}
	      		style={this.state.showModal ? displayFlex : displayNone}>
		      		<div className="custom-modal-content" onClick={this._changeModal}>
						{img}
					</div>
				</div>
	      	</div>
        );
    }
}

export default Projects;