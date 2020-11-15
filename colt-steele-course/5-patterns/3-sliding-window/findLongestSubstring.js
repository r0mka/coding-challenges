//Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.
// Time Complexity - O(n)

function findLongestSubstring(str) {
  let length = 0;
  let minLength = 0;
  const chars = {};
  // loop over the string
  for (let i = 0; i < str.length; i++) {
    // increment length
    length++;
    // check if the char exists in chars
    if (!chars[str[i]]) {
      // save it as key on chars with its index as value
      chars[str[i]] = i.toString();
      if (length > minLength) minLength = length;
    } else {
      // set length to currentIdx - (index of the char)

      length = i - parseInt(chars[str[i]]);
    }
  }
  return minLength;
}

// console.log(findLongestSubstring('')); // 0
// console.log(findLongestSubstring('rithmschool')); // 7
console.log(findLongestSubstring('thisisawesome')); // 6
console.log(findLongestSubstring('thecatinthehat')); // 7
console.log(findLongestSubstring('bbbbbb')); // 1
console.log(findLongestSubstring('longestsubstring')); // 8
console.log(findLongestSubstring('thisishowwedoit')); // 6
