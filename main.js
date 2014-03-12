window.onload = function() {
  var data = [4, 8, 15, 132386, 23, 42948, 1012320, 3, 4, 8, 80];
  var x = d3.scale.linear()
    .domain([0, d3.max(data)])
    .range([0, 800]);

  d3.select(".chart") // Selects the chart (container)
    .selectAll("div") // This is what we *will* have, also what's being appended.
      .data(data)     // This will be the data that maps to our divs
    .enter().append("div") // Enter is a join. This is what will happen with new data. We'll append it.
      .style("width", function(d) { return x(d) + "px"; }) // Just setting the style
      .text(function(d) { return d; }); // Setting the text. Note the D is the same, passed a function

};

