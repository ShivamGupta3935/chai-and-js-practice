//inbuilt filter function in js
let myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//single line
// let filterData=myNum.filter( (num) => num > 5 )


//multiline
//note :-- in multiline we necessary to use return keyword
// let filterData = myNum.filter( (num) => {
//     return  num > 5;
// })

// console.log(filterData);

//same work doing forEach method
//first we will declare a mt array
//then filter data and assign to mt arry


// const filterArr = []
// myNum.forEach( (num) => {
//     if (num > 3) {
//          filterArr.push(num)
//     }
// })

// console.log(filterArr);

// map method  

//a mini practice project for filter function
const books = [
    {title:"Book One", genre: 'fiction', publish: 1981, edition:2004},
    {title:"Book Two", genre: 'Non-fiction', publish: 1999, edition:2009},
    {title:"Book Three", genre: 'History', publish: 2001, edition:2015},
    {title:"Book Four", genre: 'Math', publish: 2021, edition:2023},
    {title:"Book Five", genre: 'Science', publish: 2001, edition:2010},
    {title:"Book Six", genre: 'bio', publish: 1960, edition:2000},
    {title:"Book Seven", genre: 'Science', publish: 2005, edition:2012},
    {title:"Book Eight", genre: 'fiction', publish: 1997, edition:1999},
    {title:"Book Nine", genre: 'Non-fiction', publish: 2010, edition:2018},
    {title:"Book Ten", genre: 'Science', publish: 2000, edition:2003},
    {title:"Book Eleven", genre: 'Math', publish: 1995, edition:1998},
    {title:"Book Twelve", genre: 'Non-fiction', publish: 2020, edition:2022},
]

// const newBook = books.filter( (bk) => {
//         return bk.publish > 2000
// })

// const newBook = books.filter( (bk) => {
    // return bk.genre === 'Non-fiction'
// })

const newBook = books.filter( (bk) =>  bk.genre === 'fiction' && bk.edition > 2000
    )
console.log(newBook);






