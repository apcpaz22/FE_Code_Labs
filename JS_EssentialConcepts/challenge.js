// Challenge
// Return a Boolean if a number is divisible by 10 
// Here you'll create a function that will give you a "True" or "False" Boolean as its output. The inputted number should only return a "True" if the number is divisible by 10, otherwise your program should return "False" answer.

let optionOne = 3;
let optionTwo = 30;

function isDivisiblebyTen(){ 
    let result = null;
    if ((optionTwo % 10) === 0) {
        result = true;
    } else {
        result = false;
    }
    return result;
}

console.log(isDivisiblebyTen())
