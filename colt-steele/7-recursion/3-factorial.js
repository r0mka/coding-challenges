function factorialIteratively(num) {
  let total = 1;
  for (let i = num; i >= 1; i--) {
    total *= i;
  }
  return total;
}

function factorialRecursively(num) {
  if (num === 1) return 1;
  return num * factorialRecursively(num - 1);
}

console.log(factorialIteratively(4));
console.log(factorialRecursively(4));
