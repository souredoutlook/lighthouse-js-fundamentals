const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

const judgeVegetable = function (vegetables, metric) {

let sortedVegetables = [];

  //iterates over the array of objects to see if the metric argument is valid
  for (let i = 0; i < vegetables.length; i++){
      if (vegetables[i][metric] === undefined) {
    return `The vegetables have not been evaluated on the metric: ${metric}.`
    }
  }

sortedVegetables = vegetables.sort(function(a,b){
  if (a[metric] > b[metric] ){
    return -1;
  } else if (a[0] === b[0]){
    return 0;
  } else {
    return 1;
  }
});

return sortedVegetables[0].submitter;
}

console.log(judgeVegetable(vegetables, metric));