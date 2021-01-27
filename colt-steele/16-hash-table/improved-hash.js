/*
 The prime number in the hash is helpful in spreading out the keys more uniformly.
 It's also helpful if the array that you're putting values into has a prime length.
 */

function hash(key, arrayLen) {
  let total = 0;
  let WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}

const arrayLen = 21;
console.log(hash('pink', arrayLen));
console.log(hash('orange', arrayLen));
console.log(hash('cyan', arrayLen));
console.log(hash('blue', arrayLen));
console.log(hash('purple', arrayLen));
