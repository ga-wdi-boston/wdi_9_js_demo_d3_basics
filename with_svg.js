window.onload = function() {
  var data = [4, 8, 15, 186, 23, 448, 100, 3, 4, 8, 80];
  var x = d3.scale.linear()
    .domain([0, d3.max(data)])
    .range([0, 800]);

var my_chart = d3.select(".chart").selectAll("g").data(data).enter().append("g");

my_chart.append("rect")
  .attr("width", function(d) { return x(d); })
  .attr("height", 24)
  .attr("y", function(d, index) { return index * 25;});

my_chart.append("text")
  .text(function(d) { return d; })
  .attr("y", function(d, index) { return index * 25;});
};
