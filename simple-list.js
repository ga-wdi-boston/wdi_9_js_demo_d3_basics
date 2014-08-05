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
  { name: 'Chris', hair: 'brownish' },
  { name: 'Seamus', hair: 'reddish' },
  { name: 'Kate', hair: 'blondish' }
];

function updateFriends(data){
  d3.select('#simple-list')
    .selectAll('li')
      .data(data)
    .enter().append('li')
      .text(function(d){ return d.name + ' has ' + d.hair + ' hair'; });
}

//updateFriends(friends);
