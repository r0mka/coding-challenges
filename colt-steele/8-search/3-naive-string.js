// my implementation
function naiveSearch1(long, short) {
  let j = 0;
  for (let i = 0; i < long.length; i++) {
    if (long[i] !== short[j]) {
      j = 0;
    } else if (j === short.length - 1) {
      return true;
    } else {
      j++;
    }
  }
  return false;
}

console.log('My implementation');

console.log(naiveSearch1('lorie loled', 'lol'));
console.log(naiveSearch1('wowomgzomga', 'omga'));
console.log(
  naiveSearch1('His name is roman. He lives in Los Angeles', 'roman')
);

console.log('====================================');
console.log("Colt' implementation");
// COLT'S IMPLEMENTATION
function naiveSearch(long, short) {
  let count = 0;

  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) count++;
    }
  }
  return count;
}

console.log(naiveSearch('lorie loled', 'lol'));
console.log(naiveSearch('wowomgzomga', 'omga'));
console.log(
  naiveSearch(
    'His name is roman. roman lives in Los Angeles',
    'roman'
  )
);
