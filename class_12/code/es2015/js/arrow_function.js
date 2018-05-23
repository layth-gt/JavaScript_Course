const sayHi = () => {
  console.log("Hello there!");
};

const greetPerson = name => {
  console.log(`Hello ${name}`);
};

const add = (x, y) => {
  console.log(x + y);
};

add(4, 5);

//No curlys? No need for return === Implicit return
const multiply = (x, y) => x * y;

const nums = [1, 2, 3, 4, 5];
const evens = nums.filter(number => number % 2 === 0);

console.log(evens);

const multipliedByFive = nums.map(num => num * 5);

console.log(multipliedByFive);
