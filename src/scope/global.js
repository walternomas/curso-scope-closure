// variables

var a; //declarando
var b = 'b'; //declaramos y asignamos (inicializar)
b = 'bb'; // re-asignando (re-inicializar)
var a = 'aa'; // re-declarando

// Global Scope
var fruit = 'Apple'; //global
console.log(fruit);

function bestFruit() {
  console.log(fruit);
}
bestFruit();

// sin declarar
function countries() {
  country = 'Argentina'; //
  console.log(country);
}
countries();
console.log(country);