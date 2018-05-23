// Can be reassigned

let score = 1000;
score = 1200;
console.log(score);

//Prevents Shadowing

let url = "http://fillmurray.com/";

// .....

// let url = "http://placecage.com/";

// Temporal Dead Zone

// console.log(tdz);
let tdz = true;

//Block Scoping - Curly Brackets create a scope

if (false) {
  let doesThisWork = false;
}

// console.log(doesThisWork);

// Const
// - Block Scoped
// - Temporal Dead Zone - Don't Hoisting
// Prevents Shadowing
//Prevents reassigning, rebinding and redeclaring

const FAV_NUMBER = 42;
FAV_NUMBER = 1000;
