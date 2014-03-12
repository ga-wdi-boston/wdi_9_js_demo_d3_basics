window.onload = function() {
  var data = d3.json("example_data.json", function(error, people) {
    d3.select("#people")
      .selectAll("rect")
      .data(people)
      .enter() // for all the elements that aren't in the dom do..
        .append("rect")
        .attr('height', function(person) { return person.age; }) //age
        .attr('width', function(person) { return person.year_experience; })
        .attr('x', function(person, index) { return index * 20 })
  })
};
