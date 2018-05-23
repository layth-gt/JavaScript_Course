//Export a function called add, and use it in index.js
const add = (x, y) => x + y;

const subtract = (x, y) => x - y;

const PI = 3.14159;

// module.exports = {
//   add: add,
//   subtract: subtract,
//   PI: PI
// };
// we can write it this way below:

module.exports = {
  add,
  subtract,
  PI
};
