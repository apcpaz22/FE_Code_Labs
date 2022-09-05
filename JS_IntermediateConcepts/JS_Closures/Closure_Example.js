//  **Closure**
// When a function remembers it's outter variables

let x = 0;

function logToConsole(){
    console.log(x)
}

x = 10;
logToConsole();