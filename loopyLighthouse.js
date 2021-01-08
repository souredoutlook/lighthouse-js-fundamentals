for (let num = 100; num <= 200; num++){
  num % 4 === 0 && num % 3 === 0  ? console.log('LoopyLighthouse') : 
  num % 4 === 0                   ? console.log('Lighthouse') :
  num % 3 === 0                   ? console.log('Loopy') : console.log(num);
}