const myDate = new Date()
// console.log(myDate.toString());
// console.log(typeof myDate);

//++++++++++++++++++getDate() method ++++++++++++++++++++++
const birthday = new Date("july 06, 2001")
const date1 = birthday.getDate()
const day1 = birthday.getDay()
const daysName = ["sunday", "monday", "tuesday","wednesday","thursday","friday","saturday"]
console.log(date1);
console.log(daysName[day1]);
console.log(birthday.getFullYear());
console.log(birthday.getMonth()+1);

//+++++++++++++++++++Date.now() method++++++++++++++++++++++++
const start = Date.now()
console.log("starting timer...");

setTimeout(() => {
    const millis = Date.now() - start;
    console.log(`second elapsed = ${Math.floor(millis/1000)}`);
},3000)


//+++++++++++++++++++++setDate() method ++++++++++++++++++++++++
const events = new Date("july 16, 2001 13:14:30")
events.setDate("24")
console.log(events.getDate());
events.setFullYear("2002")
console.log(events.getFullYear());
console.log(events.toDateString());
const jsonDate = events.toJSON()
console.log(jsonDate.to);