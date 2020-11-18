// Write a recursive function called reverse which accepts a string
// and returns a new string in reverse

function reverse(str) {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}
console.log('REVERSE ====================');
console.log(reverse('awesome')); // 'emosewa'
console.log(reverse('rithmschool')); // 'loohcsmhtir'

// Write a function called isPalindrome which returns true if the
// string passed to it is a palindrome (reads the same forward and backward)
// Otherwise it returns false
function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
}

console.log('\nISPALINDROME ====================');
console.log(isPalindrome('awesome')); // false
console.log(isPalindrome('foobar')); // false
console.log(isPalindrome('tacocat')); // true
console.log(isPalindrome('amanaplanacanalpanama')); // true
console.log(isPalindrome('amanaplanacanalpandemonium')); // false

//Write a recursive function called someRecursive which accepts
// an array and a callback. The function returns true
// if a single value in the array returns true when passed
// to the callback. Otherwise it returns false

const isOdd = (val) => val % 2 !== 0;

function someRecursive(array, callback) {
  if (array.length === 0) return false;
  if (callback(array[0])) return true;
  return someRecursive(array.slice(1), callback);
}

console.log('\nSOME RECURSIVE ====================');
console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
console.log(someRecursive([4, 6, 8], isOdd)); // false
console.log(someRecursive([4, 6, 8], (val) => val > 10)); // false

function flatten(oldArr) {
  let newArr = [];
  for (let i = 0; i < oldArr.length; i++) {
    if (Array.isArray(oldArr[i])) {
      newArr = newArr.concat(flatten(oldArr[i]));
    } else {
      newArr.push(oldArr[i]);
    }
  }
  return newArr;
}
console.log('\nFLATTEN ====================');
console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]

// Write a recursive function called capitalizeFirst. Given an array of strings,
// capitalize the first letter of each string in the array.

function capitalizeFirst(arr) {
  if (arr.length === 0) return [];
  let newArr = [arr[0].slice(0, 1).toUpperCase() + arr[0].slice(1)];
  return newArr.concat(capitalizeFirst(arr.slice(1)));
}

console.log('\nCAPITALIZE FIRST ====================');
console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']

function capitalizeWords(array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  let res = capitalizeWords(array.slice(0, -1));
  res.push(array.slice(array.length - 1)[0].toUpperCase());
  return res;
}

console.log('\nCAPITALIZE WORDS ====================');
console.log(capitalizeWords(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']

// Write a recursive function called nestedEvenSum. Return the sum
// of all even numbers in an object
// which may contain nested objects

function nestedEvenSum(obj, sum = 0) {
  for (var key in obj) {
    if (typeof obj[key] === 'object') {
      sum += nestedEvenSum(obj[key]);
    } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }
  return sum;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: 'yup',
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: 'car' },
};

console.log('\nNESTED EVEN SUM ====================');
console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10
