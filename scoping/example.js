const a = 1;

function fn() {
  const b = 2;
  if (a < b) {
    const c = a + b;
    return c;
  } else {
    const c = a - b;
    return c;
  }
}
