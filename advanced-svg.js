var margin = { top: 20, right: 30, bottom: 30, left: 40 };
var width = 960 - margin.left - margin.right;
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

var containerGroup = d3.select("#svg-chart")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

function translateCSV(d) {
  return {
    name: d['Name'],
    age: d['Age'],
    yearsExperience: d['Years Experience']
  };
}

d3.csv("sample.csv", translateCSV, function(error, data) {
  xScale.domain(data.map(function(d) { return d.name; }));
  yScale.domain([0, d3.max(data, function(d) { return d.age; })]);

  containerGroup.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);

  containerGroup.append("g")
    .attr("class", "y axis")
    .call(yAxis);

  containerGroup
    .selectAll(".bar")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return xScale(d.name); })
      .attr("y", function(d) { return yScale(d.age); })
      .attr("height", function(d) { return height - yScale(d.age); })
      .attr("width", xScale.rangeBand());
});
