// Scope
// Accessability of Variables

// Global Scopes
// These variables are visible through the entire script/program
let e = 0;

// Local Scopes / Inner Scope / Block Scope
// A Local scope has access to its own variables as well as its outter scope variables

// Examples
// Functions, Conditional Statements, Classes, Loops etc.

function logToConsole(){
    let f = 1;
    console.log (e, f);
}

logToConsole()

console.log(f)