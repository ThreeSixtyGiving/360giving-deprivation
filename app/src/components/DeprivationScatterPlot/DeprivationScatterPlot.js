import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './DeprivationScatterPlot.scss'
import { select, event } from 'd3-selection'
import { scaleBand,scaleLinear,scaleLog } from 'd3-scale'
import { axisBottom, axisLeft } from 'd3-axis'
import { zoom as d3zoom } from 'd3-zoom'
import { format } from 'd3-format'
import { extent } from 'd3-array'
import { getColorScale, convertHex, makeTooltip, getPowersOf10, getExtent } from '../../VizHelpers'
import _ from 'lodash'
import { default as tip } from 'd3-tip'


class DeprivationScatterPlot extends Component {
    constructor(props){
      super(props)
      this.createBarChart = this.createBarChart.bind(this)
    }


    componentDidMount() {
      this.createBarChart()
    }
    
    componentDidUpdate() {
      this.createBarChart()
    }
    
    createBarChart() {
      const xVal = this.props.xVal;
      const yVal = 'Amount Awarded';

      let data = this.props.data;
      const filterFunc = this.props.addFilter;
      select('.d3-tip').remove();

      const opacity = 100;

      let tooltip = tip()
      .attr('class', 'd3-tip')
      .offset([0, 20])
      .direction(d => 'e')
      .html((d) => {
        // console.log(d);
        return makeTooltip(
          d.placeName + " [" + d.id + "]",
          [
            {label:this.props.xValLabel.label, value:format(".2f")(d[xVal])},
            {label:"Amount Awarded", value:"£"+format(",.0f")(d[yVal])}
          ]
        )
      })


      console.log(this.props);
      data = data.map(d => {
        return {
          'id': d['id'],
          [xVal]: d[xVal] ? (+d[xVal]) : 0,
          'Amount Awarded': d[yVal] ? (+d[yVal]) : 0,
          'filterLocation': d.filterLocation,
          'placeName': d.placeName
        }
      });

      // console.log(data);
  
      var margin = {top: 20, right: 20, bottom: 90, left: 90},
      width = this.props.dimensions.width - margin.left - margin.right,
      height = this.props.dimensions.height - margin.top - margin.bottom,
      node = select(this.node);
  
      // const xVal = this.props.xVal;
      const xValues = data.map(d => +d[xVal]);
      const yValues = data.map(d => +d[yVal]);

      const smallRadius = 2;
      const bigRadius = 15;
      const smallStroke = 1;
      const bigStroke = 3;


      const [yMin, yMax] = getExtent(yValues,this.props.yMinLimit,true);

      data = data.filter(d => {
        // console.log(this.props.yMinLimit,+d[yVal]);
        return +d[yVal]>=yMin;
      });
      const unfiltered = data.filter(d => !d.filterLocation)
      const filtered = data.filter(d => d.filterLocation)
      data = unfiltered.concat(filtered);
      
      // set the ranges
      var x = scaleLinear()
                .range([0, width])
                .domain(getExtent(xValues))
                // .padding(0.1);
      var y = scaleLog()
                .range([height, 0])
                .domain([yMin,yMax])
          
    const colorScale = getColorScale(getExtent(xValues));

    const zoomed = () => {
      // create new scale ojects based on event
      var new_xScale = event.transform.rescaleX(x);
      var new_yScale = event.transform.rescaleY(y);
      // update axes
      gX.call(xAxis.scale(new_xScale));
      gY.call(yAxis.scale(new_yScale));
      points.data(data.filter(d => +d[yVal]>=yMin))
        .attr('cx', function(d) {return new_xScale(d[xVal])})
        .attr('cy', function(d) {return new_yScale(d[yVal])});
    }

    node.selectAll("g").remove();

    // Clip Path for scatter plot points
    node.append("defs").append("clipPath")
        .attr("id", "clip")
      .append("rect")
        .attr("width", width)
        .attr("height", height);

    

    let zoom = d3zoom()
      .scaleExtent([.5, 20])
      .extent([[0, 0], [width, height]])
      .on("zoom", zoomed);
    
    node.append("rect")
      .attr("width", width)
      .attr("height", height)
      .style("fill", "none")
      .style("pointer-events", "all")
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
      .call(zoom);

    const g = node.append('g');
    g.attr("transform", "translate(" + margin.left + "," + margin.top + ")")
      .style("pointer-events", "all");

    const gForPoints = g.append('g')
      .attr("width", width)
      .attr("height", height)
      .attr("clip-path", "url(#clip)");

    let points = gForPoints.selectAll(".dot")
      .data(data)
    .enter().append("circle")
      .attr("class", "dot")
      .attr("r", smallRadius)
      .attr("stroke", '#99999933')
      .attr("stroke-width", smallStroke)
      .attr("cx", d => x(+d[xVal]))
      .attr("cy", d => {
        return y(+d[yVal]);
      })
      .attr('fill', d => d['filterLocation'] ? convertHex(colorScale(+d[xVal]),opacity) : "rgba(0,0,0,0)")
      .on('mouseover', function(d) {
        tooltip.show(d,this);
        select(this)
          .attr("r", bigRadius)
          .attr("fill",convertHex(colorScale(+d[xVal]),opacity))
          .attr("stroke", "#f48320")
          .attr("stroke-width", bigStroke);
      })
      .on('mouseout', function(d) {
        tooltip.hide();
        select(this)
          .attr("r", smallRadius)
          .attr("fill",d => d['filterLocation'] ? convertHex(colorScale(+d[xVal]),opacity) : "rgba(0,0,0,0)")
          .attr("stroke", '#99999933')
          .attr("stroke-width", smallStroke);
      })
      .on('click', function(d) { 
        console.log(this.props);
        tooltip.hide();
        filterFunc({'location': [d['id']] },true);
      });

    

    node.call(tooltip);

    


    // add the x Axis
    let xAxis = axisBottom(x).ticks(4).tickFormat( format(".3s") );
    let gX = g.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);
    
    // Clip Path for Y Axis
    g.append("defs").append("clipPath")
    .attr("id", "clipYAxis")
    .append("rect")
    .attr("width", width)
    .attr("height", height)
    .attr("transform", "translate(" + (-margin.left) + ",0)");

    // add the y Axis
    let yAxis = axisLeft(y)
    .tickValues(getPowersOf10(yMin,yMax))  
    .tickFormat(function(d) {return "£"+format(".1s")(d)
      .replace('M', ' mil')
      .replace('G', ' bil')
    })
    let gY = g.append("g")
    .attr("clip-path", "url(#clipYAxis)")
    .attr("width", width)
    .attr("height", height)
    .call(yAxis);

    

    }
    
    

    render() {
        return (
      <div className="DonorBarChart">
        <button onClick={this.props.addFilter.bind(this,{'location': 'reset'})}>Clear Scatterplot Filters</button>
        <svg ref={node => this.node = node}
          width={this.props.dimensions.width} height={this.props.dimensions.width}>
        </svg>
      </div>
      );
    }
}

DeprivationScatterPlot.propTypes = {}

DeprivationScatterPlot.defaultProps = {}

export default DeprivationScatterPlot
