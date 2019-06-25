{
  // Optional parameters
  // const sum = (a: number, b?: number): number => {
  //   console.log('a =', a);
  //   console.log('b =', b);

  //   if (!b) {
  //     b = 10;
  //   }

  //   console.log('b =', b);

  //   return a + b;
  // };

  // Default parameters
  const sum = (a: number, b: number = 10): number => {
    console.log('a =', a);
    console.log('b =', b);

    return a + b;
  };

  // const c: number = sum(10, 20);
  // const c: number = sum(20, 30, 40);
  const c: number = sum(20, 30);
  console.log('c =', c);

  const d: number = sum(20);
  console.log('d =', d);
}
