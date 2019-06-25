const colors = ['white', 'black'];
const rgb = ['red', 'green', 'blue'];

const allColors = ['yellow', 'brown', ...colors, ...rgb];

console.log('allColors:', allColors);

const product = {
  id: 10,
  name: 'Samsung M30',
  price: 16000
};

console.log('product:', product);
console.log('product name:', product.name);

// let product2: any = {};
// product2.id = product.id;
// product2.name = product.name;
// product2.price = product.price;

let product2 = { ...product };

console.log('product2:', product2);
