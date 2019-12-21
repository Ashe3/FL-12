const a = prompt('Input a');
const b = prompt('Input b');
const c = prompt('Input c');

if (a === '' || b === '' || c === '' || !a || !b || !c) {
  alert('input values should be ONLY numbers');
  console.log('Triangle doesn’t exist')
} else if (Number(a) <= 0 || Number(b) <= 0 || Number(c) <= 0) {
  alert('A triangle must have 3 sides with a positive definite length');
  console.log('Triangle doesn’t exist')
} else {
  if (a === b && b === c && c === a) {
    console.log('Equilateral triangle');
  } else if (a === b || b === c || c === a) {
    console.log('Isosceles triangle');
  } else {
    console.log('Scalene triangle');
  }
}