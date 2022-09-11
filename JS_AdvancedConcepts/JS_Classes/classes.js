// A class is a blueprint for objects
class User{
// Instance properties -> data
username = ''
// constructor -> what is executed when an instance gets created
constructor(newUserName){
    this.username = newUserName;
    console.log("Instance was created!")
}
// methods -> define logic to manipulare data
printMyName(){
    console.log(`My name is ${this.username}`)
}
}

let user = new User("John123");
console.log(user);
user.printMyName();

let userTwo = new User("Amy123");
console.log(userTwo);
userTwo.printMyName();


// example as an object
// let userExample = {
//     username: '',
// }