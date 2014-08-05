var groceryList = ['Cheese', 'Crackers', 'Plutonium'];
var newList = ['Waffles', 'Cheese', 'Bacon', 'Plutonium'];

function updateGroceries(data){
  var list = d3.select('#simple-list')
    .selectAll('li')
      .data(data, function(d){ return d; });

  list.enter().append('li')
    .text(function(d){ return d; });

  list.exit().remove();
}

// Version that colors the updating, entering, and exiting selections
//
// function updateGroceries(data){
//   var list = d3.select('#simple-list')
//     .selectAll('li')
//       .data(data, function(d){ return d; })
//       .style('color', 'blue');
//
//   list.enter().append('li')
//     .style('color', 'green')
//     .text(function(d){ return d; });
//
//   list.exit().style('color', 'red');
// }

//updateGroceries(groceryList);
//updateGroceries(newList);

var stockPrices = [510, 498, 513, 502, 497, 515, 522, 517];

function updateStockPrices(data){
  d3.select('#simple-list')
    .selectAll('li')
      .data(data)
    .enter().append('li')
      .text(function(d, index){ return 'Day ' + index + ': ' + d; });
}

//updateStockPrices(data);

var friends = [
  { name: 'Chris', hair: 'black' },
  { name: 'Seamus', hair: 'red' },
  { name: 'Kate', hair: 'blue' }
];

function updateFriends(data){
  d3.select('#simple-list')
    .selectAll('li')
      .data(data)
    .enter().append('li')
      .style('color', function(d){ return d.hair; })
      .text(function(d){ return d.name + ' has ' + d.hair + ' hair'; });
}

//updateFriends(friends);
