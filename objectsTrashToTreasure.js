const smartGarbage = function(trash, bins){
  if (bins[trash] !== undefined) {
    bins[trash] += 1;
    return bins;
  }
  return `Smart Garbage bins do not sort: ${trash}`;
}

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, composte: 5} ));