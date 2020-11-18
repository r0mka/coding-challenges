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

console.log('\nSome recursive ====================');
console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
console.log(someRecursive([4, 6, 8], isOdd)); // false
console.log(someRecursive([4, 6, 8], (val) => val > 10)); // false
