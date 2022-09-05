let firstName = "Megan";
let age = 34;
let favoriteIceCream = 'bubblegum';

let person = {
    firstName: "Megan",
    age: 34,
    favoriteIceCream: 'Bubblegum',
    vehicle: {
        model: 'Ford'
    }
}

console.log(`My name is ${person.firstName}.`);
console.log(`My age is ${person.age}.`);
console.log(`My favorite flavor of ice cream is ${person["favoriteIceCream"]}.`);
console.log(`I own a ${person.vehicle.model}`)
