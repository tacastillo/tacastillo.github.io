import * as d3 from "d3";
import BaseChart from "./BaseChart";

export default class ForceGraph extends BaseChart {

    onMouseOver(d) {
        return this.tooltip
            .style("visibility", "visible")
            .text(`${d.xValue} (${d.yValue})`);
    }

    create(dataParam) {
        let svg = d3.select(this.el).append("svg");
        let chartLayer = svg.append("g").classed("chartLayer", true);

        let range = 250;
        let data = {
            nodes: d3.range(0, range).map(function(d){ return {label: "l"+d ,r: ~~d3.randomUniform(8, 28)()}}),
            links: d3.range(0, range).map(function(){ return {source:~~d3.randomUniform(range)(), target:~~d3.randomUniform(range)()} })        
        };
        
        this.chartWidth = this.props.width - (this.props.margin.left + this.props.margin.right);
        this.chartHeight = this.props.height - (this.props.margin.top + this.props.margin.bottom);
        let chartWidth = this.chartWidth;
        let chartHeight = this.chartHeight;
        
        svg.attr("width", this.props.width).attr("height", this.props.height);
        
        chartLayer
            .attr("width", this.chartWidth)
            .attr("height", this.chartHeight)
            .attr("transform", "translate(" + [this.props.margin.left, this.props.margin.top] + ")");
            
        let simulation = d3.forceSimulation()
            .force("link", d3.forceLink().id(function(d) { return d.index }))
            .force("collide",d3.forceCollide( function(d){return d.r + 8 }).iterations(16) )
            .force("charge", d3.forceManyBody().strength(-2000))
            .force("center", d3.forceCenter(this.chartWidth/2, this.chartHeight/2))
            .force("y", d3.forceY(0))
            .force("x", d3.forceX(0))
    
        let link = svg.append("g")
            .attr("class", "links")
            .selectAll("line")
            .data(data.links)
            .enter()
            .append("line")
            .attr("stroke", "black");
        
        let node = svg.append("g")
            .attr("class", "nodes")
            .selectAll("circle")
            .data(data.nodes)
            .enter().append("circle")
            .attr("r", function(d){  return d.r })
            .attr("fill", "#F9F9F9")
            .call(d3.drag()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended))
                .on("click", click);

        function tick(){
            // console.log(chartWidth, chartHeight)
            node.attr("cx", function(d) { return d.x = Math.max(d.r, Math.min(chartWidth - d.r, d.x)); })
                .attr("cy", function(d) { return d.y = Math.max(d.r, Math.min(chartHeight - d.r, d.y)); });

            link
                .attr("x1", function(d) { return d.source.x; })
                .attr("y1", function(d) { return d.source.y; })
                .attr("x2", function(d) { return d.target.x; })
                .attr("y2", function(d) { return d.target.y; });
        } 

        simulation
            .nodes(data.nodes)
            .on("tick", tick);
    
        simulation.force("link")
            .links(data.links);
        
        function dragstarted(d) {
            if (!d3.event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
        }
        
        function dragged(d) {
            d.fx = d3.event.x;
            d.fy = d3.event.y;
        }
        
        function dragended(d) {
            if (!d3.event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
        }

        function click(d) {
            d.fx = d.x;
            d.fy = d.y;
        }
    }

    update(data) {
    }
}