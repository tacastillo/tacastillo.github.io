import React, { Component, PropTypes } from 'react';
import './stylesheets/Projects.css';

import Chart from "./Chart";
import { PROJECTS_DATA } from "./projectsData";

class Projects extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    constructor(props) {
    	super(props); 

    	this.width = 500;
    	this.height = 900;
    	this.state = {
			focused: {
	    		"name": "",
	    		"description": ""
	    	}
    	}
    }

    _changeFocus(node) {
    	this.setState({
    		focused: node.data
    	});
    }

    render() {
        return (
	      	<div className="full-page black-page align-page-left">
	      		<h2>Projects</h2>
	      		<div className="content-container">
	      			<div className="svg-container">
			      		<div className="ui grid stackable">
			      			<div className="description-container">
			      				<h3>{this.state.focused.name}</h3>
			      				<p>{this.state.focused.description}</p>
			      			</div>
				            <Chart
					            type={"bubble"}
					            width={this.width}
					            height={this.height}
					            margin={{top:0, left:0, bottom:200, right:50}}
					            transitionDuration={750}
					            changeFocus={this._changeFocus.bind(this)}
					            data={PROJECTS_DATA}
					        />
				        </div>
			        </div>
	      		</div>
	      	</div>
        );
    }
}

export default Projects;