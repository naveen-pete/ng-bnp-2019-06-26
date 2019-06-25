interface RectangleOptions {
  l: number,
  w: number
}

// 2D library
function drawRectangle(obj: RectangleOptions) {
  console.log('l:', obj.l);
  console.log('w:', obj.w);

  // logic
}

// right way to call the method
drawRectangle({
  l: 10,
  w: 20
});

// wrong invocation
drawRectangle({
  l: 100,
  w: 300
});
