// let person = {
//     name: "John",
//     age: 45,
//     printName: function(){
//         console.log(this)
//     }
// }

// person.printName()

let student = {
    name: "Jane"
}

function printName(){
    console.log(this.name)
}

printName.call(student)
