function range(start, end, step){
  let rngArray = [];
  if ((start === undefined || end === undefined || step === undefined ) || (start > end) || (step <= 0)) {
    return rngArray;
  }
  for (start; start <= end; start += step){
    rngArray.push(start);
  } 
  return rngArray;
}

console.log(range());
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));