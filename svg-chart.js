var data = [4, 15, 323, 23, 429, 112, 3, 8, 80];

var xScale = d3.scale.linear()
  .domain([0, d3.max(data)])
  .range([0, 800]);

var enteringGroup = d3.select("#svg-chart")
  .selectAll("g")
    .data(data)
  .enter().append("g");

enteringGroup.append("rect")
  .attr("width", function(d) { return xScale(d); })
  .attr("height", 24)
  .attr("fill", "steelblue")
  .attr("y", function(d, index) { return index * 25; });

enteringGroup.append("text")
  .text(function(d) { return d; })
  .attr("fill", "white")
  .attr("y", function(d, index) { return index * 25 + 20; });
