let a1: any = '10';

// let b1 = <number>a1;

let b1 = (a1 as number);

console.log(b1);
console.log('typeof b1:', typeof b1);
console.log('typeof a1:', typeof a1);