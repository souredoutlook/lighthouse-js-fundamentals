function merge(firstArray, secondArray){
  for (let indices of secondArray){
    firstArray.push(indices);
  }
  return firstArray.sort(function(a,b){
    if (a < b ){
      return -1;
    } else if (a === b){
      return 0;
    } else {
      return 1;
    }
  });
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);