function basicHash(key, arrayLen) {
  let total = 0;
  for (let char of key) {
    // map "a" to 1, "b" to 2, "c" to 3, etc.
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }
  return total;
}
console.log(basicHash('pink', 13));
console.log(basicHash('orange', 13));
console.log(basicHash('cyan', 13));
console.log(basicHash('blue', 13));
console.log(basicHash('purple', 13));
