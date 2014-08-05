var data = [4, 15, 323, 23, 429, 112, 3, 8, 80];

var xScale = d3.scale.linear()
  .domain([0, d3.max(data)])  // Actual min/max
  .range([0, 800]); // Scaled min/max

// d3.select('#html-chart')
//   .selectAll('div')
//     .data(data)
//   .enter().append('div')
//     .style('width', function(d){ return xScale(d) + 'px'; })
//     .text(function(d){ return d; });

var enteringGroup = d3.select('#svg-chart')
  .selectAll('g')
    .data(data)
  .enter().append('g');

enteringGroup.append('rect')
  .attr('height', 24)
  .attr('fill', 'steelblue')
  .attr('y', function(d, index){ return index * 25; })
  .attr('width', 0)
  .transition()
    .duration(1000)
    .attr('width', function(d){ return xScale(d); });

enteringGroup.append('text')
  .text(function(d){ return d; })
  .attr('fill', 'white')
  .attr('y', function(d, index){ return index * 25 + 20; });
