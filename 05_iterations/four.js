const language = {
    js: 'javascript',
    py:'python',
    java:"java",
    swift:'swift by apple'
}

//for in loop use in object but not only for in
for (const key in language) {
    // console.log(`${key} shortut for ${language[key]}`);
}

const programming = ["py","ruby","cpp","java","js"]

//for in loop array me alwys position ki print karta hai
for (const key in programming) {
    // console.log(key);
}

//for of loop
for (const val of programming) {
    console.log(val);
}