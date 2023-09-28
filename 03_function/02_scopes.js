// let a = 100
// const b = 200
// var c = 300

if(true){
    let a = 100
    const b = 200
    c = 30
}

// console.log(a);
// console.log(b);
// console.log(c);


// basic about clouser
function one(){
    const youtubeChannel = "chai and code"
    function two(){
        const teacher = "hitesh Choudhary"
        console.log(youtubeChannel);
    }
    // console.log(teacher);
    two()
    
}

// console.log(one());


if(true){
    const username = "shivam"
    if(username==="shivam"){
        const channel = " future coder "
        console.log(username + channel);
    }
    // console.log(channel);
}
// we can not access username out of curly braces
// console.log(username);



// ++++++++++++++++++++++++ interesting and important point +++++++++++++====
//function declaration 
addsumNm(5)
console.log(addsumNm(5));
function addsumNm(num){
    return num + 5;
}

// addsumNm(5)
// console.log(addsumNm(5));
//function expression

// in function expression we can not access before initialition but in declaration we can access before initialization
// console.log(addTwo(10));

const addTwo = function(num){
    return num + 2;
}
// addTwo(10)
// console.log(addTwo(10));

