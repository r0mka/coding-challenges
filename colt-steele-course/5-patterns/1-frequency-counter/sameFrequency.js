// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

function sameFrequency(num1, num2) {
  const fistNumFrequency = {};
  let str1 = num1.toString();
  let str2 = num2.toString();
  if (str1.length !== str2.length) return false;

  for (let i = 0; i < str1.length; i++) {
    fistNumFrequency[str1[i]] = (fistNumFrequency[str1[i]] || 0) + 1;
  }
  for (let i = 0; i < str2.length; i++) {
    if (!fistNumFrequency[str2[i]]) return false;
    fistNumFrequency[str2[i]]--;
  }
  return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
