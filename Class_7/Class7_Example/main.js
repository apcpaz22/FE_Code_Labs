// Closures
// Example 1
function outer(){
const someVar = "some value";

function inner(){
    console.log("someVar from inner function:", someVar);
    return "inner return value";
}
console.log("you will see this");
return inner();
console.log ("you won't see this");
}

const outerRes = outer()
console.log(outerRes);

// Example 2

function greeting(greeting){
    return function(name){
        return `${name}! ${greeting}`;
    }
}

const basicWelcome = greeting("Welcome.");
const friendlyWelcome = greeting("So glad to see you again!");
const myOwnGreeting = greeting("Nice to meet you!")

console.log("basicWelcome:", basicWelcome("John"));
console.log("friendlyWelcome:", friendlyWelcome("Joe"));
console.log("myOwnGreeting:", myOwnGreeting("Jeff"));

// Example 3

const createBankAccount = initialBalance => {
    let userBalance = initialBalance;
  
    return {
      getBalance: function() {
        return userBalance;
      },
      deposit: function(amount) {
        userBalance += amount;
        return userBalance;
      },
      withdrawl: function(amount) {
        userBalance -= amount;
        return userBalance;
      }
    };
  };
  
  const myAccount = createBankAccount(100);
  let myBalance;
  
  myBalance = myAccount.getBalance(); // 100
  console.log("myBalance after creation:", myBalance);
  
  myAccount.deposit(99);
  myBalance = myAccount.getBalance(); // 100
  console.log("myBalance after $99 deposit:", myBalance);
  
  myAccount.withdrawl(12);
  myBalance = myAccount.getBalance(); // 100
  console.log("myBalance after $12 withdrawl:", myBalance);

  // Objects 
  // Objects store data grouped together using key/value pairs

// Objects Example 1
  const myObj = {
    key: "Value",
    nestedInfo: {
      nestedKey: "Nested Value",
      age: 42,
      location: {
        state: {
          name: "Missouri",
          initials: "MO"
        }
      }
    },
    createdAt: new Date(),
    someMethod: function(text = "Hello") {
      console.log(text);
    }
  };

  // Object Example 2

  const someObj = {
    someKey: "some value"
  }

  const someKey = "someKey"

  console.log(someObj[`someKey`])

  //Object Property Usage

  const bestState = myObj.nestedInfo.location.state.name;
console.log("bestState:", bestState);

const whenWasThisObjCreated = myObj["createdAt"];
console.log("whenWasThisObjCreated:", whenWasThisObjCreated);

// Object Method Usage
myObj.someMethod(
  "Calling a method on an object . . . these are the same thing as functions but inside an object"
);

// Object Constructors

const student = new Object();

student.learning = "JavaScript";
student.name = "Missy";

console.log("student:", student);

// Arrays
// Arrays store information in list-like format

// Array Example 1
const myArr = [1, "Test", false, { name: "Chris", age: 33 }];

// Accessing Arrays
let firstItem = myArr[0];
console.log("firstItem:", firstItem);

let lastItem = myArr[myArr.length - 1];
console.log("lastItem:", lastItem);

// Array Constructor
const myArr2 = new Array("item 1", "item 2", "item 3");
console.log("myArr2:", myArr2);

const myEmptyArr = new Array(100);
console.log("myEmptyArr:", myEmptyArr);

// ~ Common Array Methods ~ \\
const students = [
    { name: "Medina", grade: 88 },
    { name: "Blake", grade: 72 },
    { name: "Roscoe", grade: 58 },
    { name: "Stephanie", grade: 99 },
    { name: "Edith", grade: 93 },
    { name: "Janey", grade: 34 },
    { name: "Ivan", grade: 89 }
  ];
  
  // filter
  const passingStudents = students.filter(student => student.grade > 58);
  console.log("passingStudents:", passingStudents);
  
  // map
  students.map(student => (student.isRegistered = true));
  console.log("students after being registered:", students);
  
  // sort (b - a = highest to lowest) ( a - b = lowest to highest)
  const studentsByGrade = students.sort((a, b) => b.grade - a.grade);
  console.log("studentsByGrade:", studentsByGrade);
  
  // find
  const classClown = students.find(student => student.name === "Roscoe");
  console.log("classClown:", classClown);
  
  // forEach (same as for loop, but for loop is cleaner)
  students.forEach(student => student.grade++);
  console.log("students w/ added grade point:", students);
  
  // some (checks for any, is any student failing?)
  const hasAnyFailingStudents = students.some(student => student.grade < 59);
  console.log("hasAnyFailingStudents (some):", hasAnyFailingStudents);
  
  // every (checks for all, is every student failing?)
  const hasAllFailingStudents = students.every(student => student.grade < 59);
  console.log("hasAllFailingStudents (every):", hasAllFailingStudents);

  // "This" Keyword
  // ~ Global Binding (Default) ~ //
console.log("'this' in Global Scope:", this);

// ~ Implicit Binding ~ //
const classroom = {
    name: "High Five",
    students: ["Valory", "Zane", "Ipsum"],
    printStudents: function() {
      console.log("'this' in Implicit Scope (Function Dec):", this.students);
    },
    printStudentsES6: () =>
      console.log("'this' in Implicit Scope (ES6):", this.students) // 'this' refers to the global window object here
  };
  
  classroom.printStudents();
  classroom.printStudentsES6();

  // ~ Explicit Binding ~ //
const getName = function() {
    console.log("'this' in Explicit Scope:", this.name);
  };
  
  const player = {
    name: "Borgov",
    isHappy: false
  };
  
  getName.call(player);

  // ~ Constructor Binding ~ // function that creates an object
function Company(name) {
    this.name = name;
  }
  
  const codefi = new Company("Codefi");
  console.log("'this' in Constructor Scope:", codefi.name);

 const eFactory = new Company("eFactory")
 console.log(eFactory)

