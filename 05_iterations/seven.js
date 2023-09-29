// map method
const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//single line mean without using return keyword or when 1 line condition
//it is use when all array value do any task
// const newNums = myNumber.map( (nums) =>  nums * 10 )

//prototype chaining or we say function chaining
//   let newNms = myNumber.map( (num) => num * 5).map( (nums) => nums + 1 )
  let newNms = myNumber
  .map( (num) => num * 5)
  .map( (nums) => nums + 1 )
  .filter((n) => n > 30)

console.log(newNms);

