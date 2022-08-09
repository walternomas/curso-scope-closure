// Re-declaración Re-asignación
var firstName; //declaración: undefined
firstName = 'Walter';
console.log(firstName);

var lastName = 'Barrios'; // declaración y asignación
lastName = 'Jaz'; // re-asignando
console.log(lastName);

var secondName = 'Omar'; // declarando y asignando
var secondName = 'Jaz'; // re-declarando y re-asignando
console.log(secondName);

// Let
let fruit = 'Apple'; // declaración y asignación
fruit = 'Kiwi'; // re-asignar
console.log(fruit);
let fruit = 'Banana'; //error en re-declaración

// const
const animal = 'dog';
const animal = 'snake'; // error en re-declaración
animal = 'cat'; // error en asignación de variable constante

const vehicles = [];
vehicles.push("🚗");
console.log(vehicles);

vehicles.pop();
console.log(vehicles);