d3.json("sample.json", function(error, people) {
  if(error){ alert('womp'); }

  var chartHeight = 300;

  var yScale = d3.scale.linear()
    .domain([0, d3.max(people, function(d){ return d.yearsExperience; })])
    .range([0, chartHeight]);

  d3.select("#svg-chart")
    .selectAll("rect")
      .data(people)
    .enter().append("rect")
      .attr('fill', 'steelblue')
      .attr('width', 40)
      .attr('height', function(person) { return yScale(person.yearsExperience); })
      .attr('x', function(person, index) { return index * 50; })
      .attr('y', function(person) { return chartHeight - yScale(person.yearsExperience); });
});
