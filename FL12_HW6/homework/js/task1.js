const a = Number(prompt('Input a'));
const b = Number(prompt('Input b'));
const c = Number(prompt('Input c'));

if (!Number.isInteger(a) || !Number.isInteger(b) || !Number.isInteger(c) || a === 0) {
  console.log('Invalid input data')
} else {
  const discriminant = Math.pow(b, 2) - 4 * a * c;
  if (discriminant > 0) {
    const x1 = Math.round((-b + Math.sqrt(discriminant)) / (2 * a));
    const x2 = Math.round((-b - Math.sqrt(discriminant)) / (2 * a));
    console.log(`x1 = ${x1} and x2 = ${x2}`);
  } else if (discriminant === 0) {
    const x = Math.round(-b / (2 * a));
    console.log(`x = ${x}`);
  } else {
    console.log('no solution');
  }
}
