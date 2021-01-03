/**
 Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.
 */

// using frequency counter
function areThereDuplicates() {
  let collection = {};
  for (let val in arguments) {
    collection[arguments[val]] =
      (collection[arguments[val]] || 0) + 1;
  }
  for (let key in collection) {
    if (collection[key] > 1) return true;
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true
console.log('============================================');
// using multiple pointers solution
function areThereDuplicates2(...args) {
  // Two pointers
  args.sort((a, b) => {
    if (typeof a === 'string' && typeof b === 'string') {
      a = a.charCodeAt(0);
      b = b.charCodeAt(0);
    }
    return a - b;
  });
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}

console.log(areThereDuplicates2(1, 2, 3)); // false
console.log(areThereDuplicates2(1, 2, 2)); // true
console.log(areThereDuplicates2('a', 'b', 'c', 'a')); // true
console.log('============================================');

// One Line Solution
function areThereDuplicates3() {
  return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicates3(1, 2, 3)); // false
console.log(areThereDuplicates3(1, 2, 2)); // true
console.log(areThereDuplicates3('a', 'b', 'c', 'a')); // true
