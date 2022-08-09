/**
 * CLOSURE
 * Tienes una closure cuando una función cualquiera accede
 * a una variable fuera de su contexto.
 */
function greeting() {
  let username='Walter';
  function displayUsername() {
    return `Hello, ${username}!`;
  }
  return displayUsername;
}

const g = greeting();
console.log(g);
console.log(g());
