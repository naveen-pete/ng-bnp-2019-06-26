// JS syntax 1 (ES5)
// function sum(a, b) {
//   return a + b;
// }

// JS syntax 2 (function expression, anonymous function)
// const sum = function (a, b) {
//   return a + b;
// };

// ES6 - arrow function syntax 1 / lambda expression
// const sum = (a, b) => {
//   return a + b;
// };

// ES6 - arrow function syntax 2 (implicit return)
// const sum = (a, b) => a + b;

// ES6 - arrow function syntax 2 (implicit return)
// with data types, TypeScript version
const sum = (a: number, b: number): number => a + b;

const c: number = sum(10, 20);
console.log('c =', c);

// const square = function (n) {
//   return n * n;
// }

// ES6 - arrow function syntax 3 (single parameter, implicit return)
const square = n => n * n;

console.log('square of 10:', square(10));
