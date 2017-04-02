import React, { Component, PropTypes } from 'react';

import './stylesheets/Skills.css'
import RadarChart from './RadarChart.js';
import Chart from './Chart.js';
import { SUMMARY_DATA, SUBTOTAL_DATA } from './skillsData.js';

let d3 = require('d3');

class Skills extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    constructor(props) {
    	super(props);

			let margin = {top: 100, right: 0, bottom: 50, left: 0}, //for radarChart
				width = 450,
				height = 450;

			let summaryData = [SUMMARY_DATA];

			let color = d3.scaleOrdinal(d3.schemeCategory10);
				
			let radarChartOptions = {
			  w: width - margin.left - margin.right,
			  h: height - margin.top - margin.bottom,
			  margin: margin,
			  maxValue: 1,
			  levels: 5,
			  roundStrokes: false,
			  color: color,
			  mouseOverFunction: this._mouseOver,
			  mouseOutFunction: this._mouseOut
			};
			
			this.state = {
				options: radarChartOptions,
				totalData: summaryData,
				currentScope: summaryData[0],
				subtotalData: SUBTOTAL_DATA,
				width: width,
				height: height
			}
    }

    _mouseOver = (d, i) => {
    	this.setState({
    		currentScope: this.state.subtotalData[d]
    	});
    }

    _mouseOut = (d, i) => {
    	this.setState({
    		currentScope: this.state.totalData[0]
    	});
    }

    componentDidMount() {
    	let chart = new RadarChart();
    	chart.init(".radarChart", this.state.totalData, this.state.options);
    	// this._buildChart();
    }

    render() {
      return (
      	<div className="full-page align-page-right white-page skills-wrapper">
      		<h2>Skills</h2>
			<h4 className="subheader">Hover Over the Labels of the Radar Chart For More Detail</h4>
      		<div className="content-container">
	      		<div className="svg-container">
		      		<div onMouseLeave={this._mouseOut} className="ui grid stackable">
		      			<div className="radarChart"></div>
		            <Chart
			            type={"bar"}
			            width={this.state.width}
			            height={this.state.height}
			            margin={{top:25, left:120, bottom:0, right:25}}
			            showTooltips={true}
			            transitionDuration={750}
			            data={this.state.currentScope}
				        />
		      		</div>
	      		</div>
      		</div>
      	</div>
      );
    }
}

export default Skills;
