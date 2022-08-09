// Function Scope
function greeting() {
  let userName = 'Jaz';
  console.log(userName);

  if(userName === 'Jaz') {
    console.log(`Hello, ${userName}!`);
  }
}
greeting();

console.log(userName); //error