class Queue<T> {
  data: T[] = [];

  push = (item: T) => this.data.push(item);
  pop = (): T => this.data.shift();
}

let n = new Queue<number>();
n.push(10);
n.push(20);
n.push(30);
console.log(n.data);
console.log(n.pop());
console.log(n.data);

let s = new Queue<string>();
s.push('a');
s.push('b');
s.push('c');
console.log(s.data);
console.log(s.pop());
console.log(s.data);
