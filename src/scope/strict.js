// strict mode
'use strict';
pi = 3.1416; // error en definición
console.log(pi); 

function myFunction() {
  'use strict';
  return pi = 3.1416; // error en definición
}

console.log(myFunction());