let people = ["John", "James", "Jimmy", "Jane"];
// console.log(`There are ${people.length} people.`);

// let people = {
//     0: 'John',
//     1: 'James',
//     3: 'Jimmy',
//     4: 'Jane',
//     length: 4,
//     map: function(){
//         let newArr = [];
//         for(let i =0; i < this.length; i++){
//             console.log(i)
//         }
//     }
// }

// console.log(people[0]);
//console.log(`There are ${people.length} people.`);

/*
let people = {
    0: 'John',
    1: 'James',
    3: 'Jimmy',
    4: 'Jane',
    length: 4,
    map: function(callback){
        let newArr = [];
        for(let i =0; i < this.length; i++){
            console.log(callback(this[i]))
        }
    }
}

people.map((person)=>{
    return `My name is ${person}.`
})
*/

// let people = {
//     0: 'John',
//     1: "James",
//     3: "Jimmy",
//     4: "Jane",
//     length: 4,
//     map: function(callback){
//         let newArr = [];
//         for(let i =0; i < this.length; i++){
//             newArr.push(callback(this[i]))
//         }
//         return newArr;
//     }
// }

let introductions = people.map((person)=>{
    return `My name is ${person}.`
})

console.log(introductions)