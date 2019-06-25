const n: number[] = [10, 20, 30];
console.log('n =', n);

// generics syntax
const x: Array<string> = new Array<string>('hari', 'ram', 'krish');
console.log('x =', x);

let customer: [number, string] = [10, 'hari'];
console.log('customer:', customer);

customer[0] = 20;
customer[1] = 'krish';
console.log('customer:', customer);
