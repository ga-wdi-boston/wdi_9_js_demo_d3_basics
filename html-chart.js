var data = [4, 15, 323, 23, 429, 112, 3, 8, 80];

var xScale = d3.scale.linear()
  .domain([0, d3.max(data)])
  .range([0, 800]);

d3.select("#html-chart")
  .selectAll("div")
    .data(data)
  .enter().append("div")
    //.sort(d3.ascending)
    .style("width", function(d) { return xScale(d) + "px"; })
    .text(function(d) { return d; });
