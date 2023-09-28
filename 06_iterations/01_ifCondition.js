// for loop
for (let i = 0; i < 10; i++) {
    const element = i
    console.log(element);
    
}

//nested loop
for (let i = 1;  i<=10 ; i++) {
    // console.log(`Table of ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(i + " * " + j + " = " + i * j);
        
    }
    
}

//Break and continue statement
for(let i=1; i<=10; i++){
    if (i == 5){
        console.log("5 is unique number");
        // break;
        continue;
    }
    console.log(`value of ${i}`);
}