//string constructor
//its create object
const a = new String("Hello world")

//string function
// if (a==="Hello world"){
//     console.log("true");
// }else{
//     console.log("false");
// }

//its create string
const b = String("Hello world")
// console.log((b==="Hello world")?"true":"false");

// console.log(typeof a);
// console.log(typeof b);

//length property in string
const str = "Earning money is very difficult"
console.log(str.length);

//empty string length
const empty = ""
console.log(`The length of empty ${empty.length}`);

//++++++++++++++String.at() method+++++++++++++++++++++
const str2 = "Hello world is a coder first word"
let index = 6;

console.log(`using an index of ${index} the returned keyword ${str2.at(index)}`);

//node we give negative value then at() method count the value at the end of the string
index = -7
console.log(`using an index of ${index} the returned keyword ${str2.at(index)}`);


//++++++++++++++charAt() method+++++++++++++++
const sentence = 'The quick brown fox jumps over the lazy dog.';
console.log(sentence.charAt(6));

//++++++++++++++String.concat() method++++++++++++++
// it add two string and return a new string
const str3 = "hello"
const str4 = " world"

console.log(str3.concat(str4));

//+++++++++++++String.includes() method ++++++++++++++++++++
const str5 = "you are amazing boy"
let word = "amazing"
console.log(str5.includes(word));  //true
word = "boys"
// console.log(str5.includes(word)); //false

//++++++++++++++++++++ indexof() method+++++++++++++++++++++++++++++
let anyString = "hi, hello world , hello brave new world"
console.log(anyString.indexOf("hello"));

console.log(anyString.lastIndexOf("hello"))


//+++++++++++++++++++++++++repeat()method +++++++++++++++++++++++
const mood = "happy!"
// console.log(`i feel ${mood.repeat(4)}`);

//+++++++++++++++++++++++++replace() & replaceAll() method++++++++++++++++++++++++
const p = "There was a monkey and a lion. monkey and lion  was a good friend"
// console.log(p.replace('monkey','fox'));
// console.log(p.replaceAll('monkey',"donkey"));

const regex = /Monkey/ig;
// console.log(p.replace(regex,'donkey'));
// console.log(p.replaceAll(regex,'donkey'));

//+++++++++++++++++++++++++++++slice() method++++++++++++++++++++++
const chaiAndCode = "chai and code is a good channel for learning free"
// console.log(chaiAndCode.slice(10));
console.log(chaiAndCode.slice(5,13));

//+++++++++++++++++++split() method +++++++++++++++++++++++++++
const para= "this is a split method understanding topic"
// const words = para.split(" ")
// console.log(words[4]);

const strCopy = para.split()
console.log(strCopy);


//+++++++++++++++++++++++++++substring() method +++++++++++++++++++++++

const str7 = "mozilla"
console.log(str7.substring(2));
console.log(str7.substring(2, 5));
console.log(str7);

//++++++++++++++++++tolowerCase()++++++++++++++
const name = "SHIVAM"
console.log(name.toLowerCase());

//+++++++++++++++++++++toUpperCase() method +++++++++++++++++++++++++++
const otherName = "shubham"
console.log(otherName.toUpperCase());


//++++++++++++++++++++++trim() method +++++++++++++++++++++++++++
const trimmeth= "               hello world           "
console.log(trimmeth);
console.log(trimmeth.trim());
