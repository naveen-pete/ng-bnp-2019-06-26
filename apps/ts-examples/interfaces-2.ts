interface CommonFeatures {
  name: string;

  create(); // save an object
  getAll(); // gets all the objects
}

class Product implements CommonFeatures {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  create() {
    console.log('Product created');
  }

  getAll() {
    console.log('Returning all products');
  }
}

class Student implements CommonFeatures {
  name: string;
  std: string;

  constructor(name: string, std: string) {
    this.name = name;
    this.std = std;
  }

  create() {
    console.log('Student created');
  }

  getAll() {
    console.log('Returning all students');
  }
}

let p: Product = new Product('iPhone X', 70000);
p.create();
p.getAll();

let s: Student = new Student('Hari', '10th');
s.create();
s.getAll();
