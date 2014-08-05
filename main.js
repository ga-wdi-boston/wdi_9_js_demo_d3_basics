var margin = { top: 20, right: 30, bottom: 20, left: 40 };
var width = 800 - margin.left - margin.right;
var height = 500 - margin.top - margin.bottom;

var xScale = d3.scale.ordinal()
  .rangeRoundBands([0, width], 0.1);

var yScale = d3.scale.linear()
  .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(xScale)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(yScale)
    .orient("left");

var container = d3.select("#svg-chart")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.json("http://data.cityofnewyork.us/resource/fxwm-3t4n.json", function(error, data) {

  data.forEach(function(e){
    e.grade_year = e.grade + '_' + e.year;
  });

  xScale.domain(data.map(function(d) { return d.grade_year; }));
  yScale.domain([d3.min(data, function(d) { return d.mean_scale_score; })-10, d3.max(data, function(d) { return d.mean_scale_score; })]);

  container.append("g")
    .attr("class", "y axis")
    .call(yAxis);

  container
    .selectAll(".bar")
      .data(data)
    .enter().append("rect")
      .attr("class", function(d) { return 'bar-' + d.year; })
      .attr("x", function(d) { return xScale(d.grade_year); })
      .attr("y", function(d) { return height; })
      .attr("width", xScale.rangeBand())
      .attr('height', function(d){ return 0; })
      .transition()
        .duration(1500)
        .attr('height', function(d){ return height - yScale(d.mean_scale_score); })
        .attr("y", function(d) { return yScale(d.mean_scale_score); });

  container
    .selectAll(".bar")
      .data(data)
    .enter().append('text')
      .text(function(d){ return 'Grade ' + d.grade + ': ' + d.year; })
      .attr('class', 'bar-text')
      .attr('fill', 'black')
      .attr('x', -height)
      .attr('y', function(d, i){ return (xScale.rangeBand() * i * 1.075) + margin.top + 13; })
      .attr('transform', 'rotate(-90)');
});
