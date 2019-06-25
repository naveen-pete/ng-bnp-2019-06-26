// access specifiers - private, public, protected
class Animal {
  name: string;

  constructor(name: string = 'Snowy') {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  color: string;

  constructor(name?: string, color: string = 'white') {
    super(name);

    this.color = color;
  }

  speak() {
    super.speak();
    console.log(this.name + ' barks.');
  }
}

const a: Animal = new Animal('Tommy');
console.log('name:', a.name);
a.speak();

const d: Dog = new Dog();
console.log('name:', d.name);
d.speak();

