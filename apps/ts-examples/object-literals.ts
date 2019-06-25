function printHello() {
  console.log('Hi TypeScript');
}

const age: number = 35;

// ES5
// const person = {
//   name: 'Admin',
//   age: age,
//   // ['hello' + (age + 2)]: 'I am here',

//   printHello: printHello,
//   printAge: function () {
//     console.log(this.age);
//   }
// };

// ES6
const person = {
  name: 'Admin',
  age,
  [`hello${age + 2}`]: 'I am here',

  printHello,
  printAge() {
    console.log(this.age);
  }
};

console.log('person:', person);

person.printHello();
person.printAge();
