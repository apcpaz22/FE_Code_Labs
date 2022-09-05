let paycheck = 300;

function addRandomNumber(num){
    let randomNumber = Math.random() * 100;
    logNumberToConsole (randomNumber + num);
}

function logNumberToConsole(num){
    console.log(num);
    }

    addRandomNumber(paycheck);