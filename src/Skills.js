import React, { Component, PropTypes } from 'react';

import './stylesheets/Skills.css'
import RadarChart from './RadarChart.js';

let d3 = require('d3');

class Skills extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    constructor(props) {
    	super(props);

			let margin = {top: 75, right: 50, bottom: 100, left: 50},
				width = window.innerWidth/2 - margin.right - margin.left,
				height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);
					

			let data = [
					  [//iPhone
						{axis:"Front-End",value:0.8},
						{axis:"Back-End",value:0.6},
						{axis:"Theory",value:0.4},
						{axis:"Analytics",value:0.5},
						{axis:"Miscellaneous",value:0.6},
					  ]
					];

			let color = d3.scaleOrdinal(d3.schemeCategory10);
				
			let radarChartOptions = {
			  w: width,
			  h: height,
			  margin: margin,
			  maxValue: 1,
			  levels: 5,
			  roundStrokes: false,
			  color: color
			};
			
			this.state = {
				options: radarChartOptions,
				data: data
			}
    }

    componentDidMount() {
    	let chart = new RadarChart();
    	chart.init(".radarChart", this.state.data, this.state.options);
    	// this._buildChart();
    }

    render() {
      return (
      	<div className="full-page align-page-right white-page skills-wrapper">
      		<h2>Skills</h2>
      		<div className="ui grid stackable" ref="container">
      			<div className="radarChart"></div>
      		</div>
      	</div>
      );
    }

    _buildChart() {
    	var container = this.refs.container;

    }
}

export default Skills;
