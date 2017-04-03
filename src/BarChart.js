import * as d3 from "d3";
import BaseChart from "./BaseChart";

export default class BarChart extends BaseChart {
    getScaleY() {
        return d3.scaleBand().range([0, this.props.height], 0.1).padding(0.05);
    }

    getScaleX() {
        return d3.scaleLinear().range([0, this.props.width]);
    }

    createAxisX(x) {
        return d3.axisTop(x);
    }

    createAxisY(y) {
        return d3.axisLeft(y);
    }

    onMouseOver(d) {
        return this.tooltip
            .style("visibility", "visible")
            .text(`${d.xValue} (${d.yValue})`);
    }

    create(data) {
        this.y = this.getScaleY();
        this.x = this.getScaleX();

        const yAxis = this.createAxisY(this.y);
        const xAxis = this.createAxisX(this.x);

        this.Format = d3.format(".0%");

        const width = this.props.width + this.props.margin.left + this.props.margin.right;
        const height = this.props.height + this.props.margin.top + this.props.margin.bottom;

        this.svg = d3.select(this.el).append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
                .attr("transform", `translate(${this.props.margin.left}, ${this.props.margin.top})`);

        let filter = this.svg.append('defs').append('filter').attr('id','glow'),
            feGaussianBlur = filter.append('feGaussianBlur').attr('stdDeviation','2').attr('result','coloredBlur'),
            feMerge = filter.append('feMerge'),
            feMergeNode_1 = feMerge.append('feMergeNode').attr('in','coloredBlur'),
            feMergeNode_2 = feMerge.append('feMergeNode').attr('in','SourceGraphic');

        this.y.domain(data.map(d => { return d.xValue; }));
        // this.y.domain([0, d3.max(data, d => { return d.yValue; })]);
        this.x.domain([0, 1]);

        this.svg.append("g")
            .attr("class", "x axis")
            .call(xAxis.tickFormat(this.Format))
            .selectAll("text")
                .style("text-anchor", "end")
                .attr("dx", "1.3em")
                .attr("dy", ".15em")

        this.svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)
        .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .style("font-face", "bodyFont, sans-serif")

        this.svg.selectAll(".bar")
            .data(data)
        .enter().append("rect")
            .attr("class", "bar")
            .attr("y", d => { return this.y(d.xValue); })
            .attr("height", this.y.bandwidth())
            .attr("x", 0)
            .attr("width", d => { return this.x(d.yValue); })
            .style("stroke", "#424242")
            .style("fill", "#424242")
            .style("fill-opacity", 0.3)
            .style("filter" , "url(#glow)")
            // .on("mouseover", this.onMouseOver.bind(this))
            // .on("mousemove", this.onMouseMove.bind(this))
            // .on("mouseout", this.onMouseOut.bind(this))

        this.svg.selectAll("text.bar")
            .data(data)
            .enter().append("text")
              .attr("class", "bar")
              .attr("text-anchor", "middle")
              .attr("font-size", "20px")
              .attr("y", d => this.y(d.xValue) + this.y.bandwidth()/2  + 6)
              .attr("x", d => this.x(d.yValue) - 24)
              .text(d => this.Format(d.yValue))
              .style("fill", "white");

        // this.svg.selectAll("path")
        //     .style("fill", "none")
        //     .style("stroke", "#000")
        //     .style("shape-rendering", "crispEdges");

        if (this.showTooltips) {
            this.addTooltips();
        }
    }

    update(data) {
        // Recalculate domain given new data
        
        this.y.domain(data.map(d => { return d.xValue; }));

        let updatedAxisY = this.createAxisY(this.y);

        this.svg.selectAll("g.y.axis").call(updatedAxisY)

        this.svg.selectAll("rect")
            .data(data)
            .transition().duration(this.transitionDuration)
                .attr("class", "bar")
                .attr("y", d => { return this.y(d.xValue); })
                .attr("height", this.y.bandwidth())
                .attr("x", 0)
                .attr("width", d => { return this.x(d.yValue); })

        this.svg.selectAll("text.bar")
            .data(data)
            .transition().duration(this.transitionDuration)
              .attr("class", "bar")
              .attr("text-anchor", "middle")
              .attr("y", d => this.y(d.xValue) + this.y.bandwidth()/2 + 6)
              .attr("x", d => this.x(d.yValue) - 24)
              .text(d => this.Format(d.yValue));
              
    }
}