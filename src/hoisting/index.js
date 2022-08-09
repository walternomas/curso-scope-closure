console.log(nameOfDog); //undefined
var nameOfDog='Elmo';
console.log(nameOfDog);

fnNameOfDog();
function fnNameOfDog() {
  console.log(`El mejor perrito es ${elmo}`); // undefined
}
var elmo = 'Elmito';
fnNameOfDog();