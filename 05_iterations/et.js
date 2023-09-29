const myNums = [1, 2, 3, 4]

//for understanding using function expression
 const myTotalVal = myNums.reduce( function (accu, curr) {
        return accu + curr
},0)

//reduce function
// const myTotal = myNums.reduce( (accu, curr) => (accu + curr), 0)
// console.log(myTotal);
console.log(myTotalVal);

//real example using array object
const  shoppingCart = [
    {
        course:"javascript",
        price: 2999
    },
    {
        course:"cpp",
        price: 999
    },
    {
        course:"java spring boot",
        price: 4999
    },
    {
        course:"DSA",
        price: 1999
    },
    {
        course:"python",
        price: 3999
    },
]

const myTotalCoursePrice  = shoppingCart.reduce( (accu, value) => (accu + value.price),0)
console.log(myTotalCoursePrice);