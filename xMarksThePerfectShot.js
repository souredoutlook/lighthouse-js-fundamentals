function finalPosition(directions){
  let position = [0,0]; //the first and second elements of the array represent the X and Y positions respectively
  for (let cardinal of directions){
    switch (cardinal){
      case 'south' : position[1] -= 1;
        break;
      case 'north' : position[1] += 1;
        break;
      case 'west' : position[0] -= 1;
        break;
      case 'east' : position[0] += 1;
        break;
    }
  }
  return position;
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']
console.log(finalPosition(moves));