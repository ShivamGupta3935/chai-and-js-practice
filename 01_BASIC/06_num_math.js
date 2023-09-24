const score = 400
// console.log(score);

const amt = new Number(100)
// console.log(amt);
const otheramt = 23.345
// console.log(amt.toExponential(2));
// console.log(otheramt.toExponential(2));

console.log(otheramt.toFixed(2));
const str = otheramt.toString()
// console.log(str);
// console.log(typeof str);

const nxtNm = 354.8979
// console.log(nxtNm.toPrecision(4));


//++++++++++++++++++++Math method+++++++++++++++++++++
// console.log(Math)
// console.log(Math.abs(-19));
// console.log(Math.round(23.43));
// console.log(Math.ceil(23.43));
// console.log(Math.floor(23.43));
// console.log(Math.min());
// console.log(Math.max());
// console.log(Math.pow(2,3));
console.log(Math.random()*10);
console.log(Math.floor(Math.random()*10)+1)

//formula for between two value in math 
const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max - min + 1)) + min);


