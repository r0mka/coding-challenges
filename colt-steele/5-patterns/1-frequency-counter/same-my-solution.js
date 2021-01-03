/*
 * Frequency Counter Pattern 
 *
 * This pattern uses objects or sets to collect values/frequencies of values. 
 * This can often avoid the need for nested or O(N^2) operations with
 * arrays / strings. 
 */

/*
Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.
*/


function same(arr1, arr2) {
    // create an empty obj 
    let obj = {};

    // check if arrays of the same length
    if (arr1.length !== arr2.length) return false;

    // loop over first and second array simultaneously
    for (let i = 0; i < arr1.length; i++) {
        obj[arr1[i] ** 2] = ++obj[arr1[i] ** 2] || 1;
        obj[arr2[i]] = ++obj[arr2[i]] || 1;
    }
    return Object.values(obj).every(el => el % 2 === 0);
}

console.log(same([1, 2, 3], [4, 1, 9])); // true
console.log(same([1, 2, 3], [1, 9])); // false
console.log(same([1, 2, 1], [4, 4, 1])); // false (must be same frequency);
console.log(same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11])); // false

