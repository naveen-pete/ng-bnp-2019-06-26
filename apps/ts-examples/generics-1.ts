// function reverseNumbers(items: number[]): number[] {
//   let reversedItems: number[] = [];

//   for (let i = items.length - 1; i >= 0; i--) {
//     reversedItems.push(items[i]);
//   }

//   return reversedItems;
// }

// function reverseStrings(items: string[]): string[] {
//   let reversedItems: string[] = [];

//   for (let i = items.length - 1; i >= 0; i--) {
//     reversedItems.push(items[i]);
//   }

//   return reversedItems;
// }

// Generic function
function reverse<T>(items: T[]): T[] {
  let reversedItems: T[] = [];

  for (let i = items.length - 1; i >= 0; i--) {
    reversedItems.push(items[i]);
  }

  return reversedItems;
}


const numbers = [10, 20, 30];
let result: any = reverse<number>(numbers);
console.log('numbers:', numbers);
console.log('reversed:', result);

const names = ['a', 'b', 'c'];
result = reverse<string>(names);
console.log('names:', names);
console.log('reversed:', result);

interface Customer {
  id: number,
  name: string
}

const customers: Customer[] = [
  { id: 1, name: 'hari' },
  { id: 2, name: 'krish' }
];
result = reverse<Customer>(customers);
console.log('customers:', customers);
console.log('reversed:', result);

