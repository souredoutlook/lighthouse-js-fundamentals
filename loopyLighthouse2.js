function loopyLighthouse(range, multiples, words){
  for (let num = range[0]; num <= range[1]; num++){
    num % multiples[0] === 0 && num % multiples[1] === 0  ? console.log(words[0]+words[1]) : 
    num % multiples[0] === 0                              ? console.log(words[0]) :
    num % multiples[1] === 0                              ? console.log(words[1]) : console.log(num);
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);