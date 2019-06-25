{
  const sum = (...numbers: number[]): number => {
    let result = 0;

    // for...of syntax
    for (let n of numbers) {
      result += n;
    }

    return result;
  };

  let c: number = sum(10, 20);
  console.log('c =', c);

  c = sum(20, 30, 40, 50, 60);
  console.log('c =', c);

  c = sum(20, 30, 40, 50, 60, 10, 10, 10, 10);
  console.log('c =', c);
}