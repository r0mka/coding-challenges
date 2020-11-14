/**
 * Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
 * 
 * Your solution MUST have AT LEAST the following complexities:

    Time Complexity - O(N + M)

    Space Complexity - O(1)
 */

function isSubsequence(subseq, str) {
  let i = 0;
  let j = 0;

  // loop over the first string and second string
  // at the same time using two pointers
  while (j < str.length) {
    // if element at first pointer equals element at second
    // increment first pointer
    if (subseq[i] === str[j]) i++;
    // Then increment second pointer
    j++;
  }

  // after loop if first pointer > first string length - 1 return true otherwise return false
  if (i > subseq.length - 1) return true;
  return false;
}

// hello
// hello world

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)
