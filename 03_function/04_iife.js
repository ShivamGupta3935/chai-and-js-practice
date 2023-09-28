// Immediatelly invoked function
// Note  when we write two iife then after ending first iife we necessary 
//at the end add semicolon
//name iife is function with name 
//simple iife is arrow function

(function chai(){
    console.log("Db connected");
})();
//hwo we can call iife function
//in second parenthesis we can pass which argu we want
((name) => {
    console.log(`Db connected again ${name}`);
})('suraj')