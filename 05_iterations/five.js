const coding = ['python','ruby','html','java','cpp']

//use forEach loop in array
// coding.forEach((val) => {
//     console.log(val);
// })

// using function expression
// coding.forEach(function(item){
//     console.log(item);
// })


//pass function as a parameter in forEach function
// function printMe(item){
//     console.log(item);
// }
//when we pass in foreach method function we always only pass function reference not function execute

// coding.forEach(printMe)

coding.forEach( (item, idx, arr) => {
    console.log(item, idx, arr);
})

const arrObj = [
    {
        langName:'javascript',
        langProgam:'js'
    },
    {
        langName:'python',
        langProgam:'py'
    },
    {
        langName:'java',
        langProgam:'java'
    },
    {
        langName:'cpp',
        langProgam:'cpp'
    },
    {
        langName:'ruby',
        langProgam:'ruby'
    }
]

arrObj.forEach( (item) => {
      console.log(`${item.langProgam} and ${item.langName}`);
})