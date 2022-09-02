// Can't use a variable before it has been declared 
// console.log(firstName)
// let firstName = "Megan"

// Order of function definitions doesn't matter
// printAnotherName("John");

// function printAnotherName(name){
//     printName(name);
// }

// function printName(name){
//     console.log(name)
// }

// Global Scope
let firstName = "Joe"

// Created Local Scope/Function Scope
function printName(){
    let firstName = "Jeff";
    console.log(firstName);
}

console.log(firstName)
console.log(printName());