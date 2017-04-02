import React, { PropTypes } from "react";

import BubbleChart from "./BubbleChart";
import BarChart from "./BarChart";
// import PieChart from "./PieChart";

const CHART_MAPPINGS = {
    bar: BarChart,
    bubble: BubbleChart
};

export default class Chart extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        type: PropTypes.oneOf(Object.keys(CHART_MAPPINGS)).isRequired,
        width: PropTypes.number,
        height: PropTypes.number,
        margin: PropTypes.objectOf(PropTypes.number)
    };

    componentDidMount() {
        const el = this.refs.chart;

        if (this.props.type === "custom") {
            this.chart = new this.props.customChart(el, this.props);
        } else {
            this.chart = new CHART_MAPPINGS[this.props.type](el, this.props);
        }

        this.chart.create(this.props.data);
    }

    componentDidUpdate() {
        this.chart.update(this.props.data);
    }

    componentWillUnmount() {
        this.chart.unmount();
    }

    render() {

        return (<div className="chart" ref="chart"></div>);
    }
}