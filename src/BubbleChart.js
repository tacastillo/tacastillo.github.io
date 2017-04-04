import * as d3 from "d3";
import BaseChart from "./BaseChart";

export default class BubbleChart extends BaseChart {

    create(data) {
      let svg = d3.select(this.el).append("svg")
          .attr("width", this.props.width - this.props.margin.left - this.props.margin.right)
          .attr("height", this.props.height - this.props.margin.top - this.props.margin.bottom)
          .classed("bubble-chart", true)
          .style("margin", `${this.props.margin.top}px ${this.props.margin.right}px ${this.props.margin.bottom}px ${this.props.margin.left}px`)

      let g = svg.append("g")
          .attr("transform", "translate(1,1)");

      let width = +svg.attr("width"),
          height = +svg.attr("height"),
          idSeed = 0;

      let format = d3.format(",d");

      let color = d3.scaleLinear()
          .domain([-4, 4])
          .range([d3.rgb("#3D3D3D"), d3.rgb('#FFFFFF')]);

      let stratify = d3.stratify()
          .id(function(d) { return d.name; })
          .parentId(function(d) { return d.parent; });

      let pack = d3.pack()
          .size([width - 2, height - 2])
          .padding(3);

      let root = stratify(data)
          .sum(function(d) { return d.value; })
          .each(function(d) { d.ref = idGenerator()});

      let focus = root;
      this.props.changeFocus(root);

      pack(root);

      let node = g.selectAll(".node")
          .data(root.descendants())
          .enter().append("g")
              .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })
              .attr("class", function(d) { return "node" + (!d.children ? " node--leaf" : d.depth ? "" : " node--root"); })
              .each(function(d) { d.node = this; })
              .on("mouseover", hovered(true))
              .on("mouseout", hovered(false));

      let circle = node.append("circle")
          .attr("id", function(d) { return "node-" + d.ref; })
          .attr("r", function(d) { return d.r; })
          .style("fill", function(d) { return color(d.depth);})
          .on("click", (d) => {
            if (focus !== root) {
                zoom(root);
                d3.event.stopPropagation();
              } else {
                zoom(d)
              }
            });


      let text = g.selectAll("text")
          .data(root.descendants())
          .enter().append("text")
          .attr("class", "label")
          .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })
          .attr("font-size", function(d) { return d.parent === root ? "13px" : "10px"; })
          .style("fill-opacity", function(d) { return (d.parent === root ? "1" : "0"); })
          .style("display", function(d) { return (d.parent === root ? "inline" : "none"); })
          .text(function(d) { return d.data.name; });

      node.append("title")
          .text(function(d) { return d.id });

      function hovered(hover) {
        return function(d) {
          d3.selectAll(d.ancestors().map(function(d) { return d.node; })).classed("node--hover", hover);
        };
      }

      // svg.on("click", function() { zoom(root);});

      let changeFocus = this.props.changeFocus;

      function zoom(d) {
        if (!d.children) {
          d = d.parent
        }
        focus = d;
        let x = d.x,
            y = d.y,
            radius = d.r,
            k = d === root ? 1 : 2.5;

        changeFocus(d);

        let transition = g.transition()
          .duration(750)
          .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")")

        transition.selectAll("text")
            .style("fill-opacity", function(d) { return d.parent === focus ? 1 : 0; })
            .on("start", function(d) { if (d.parent === focus) this.style.display = "inline"; })
            .on("end", function(d) { if (d.parent !== focus) this.style.display = "none"; });
      }

      function idGenerator() {
        return idSeed++;
      }        
    }

    update(data) {
    }
}