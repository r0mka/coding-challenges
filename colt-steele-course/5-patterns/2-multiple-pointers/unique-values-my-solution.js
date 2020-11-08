/*
 * ## Multiple Pointers
 * Creating pointers or values that correspond to an index or position * * and move towards the beginning, end or middle based on a certain * * * * condition. Very efficient for solving problems with minimal space * * * complexity as well. 
 */

/* 
Implement a function called countUniqueValues, 
which accepts a sorted array, and counts the unique values in the array, but it will always be sorted.
*/


function countUniqueValues(arr) {
    let obj = {};
    arr.forEach(el => {
        obj[el] = ++obj[el] || 1; j
    });
    return Object.keys(obj).length;
}

function countUniqueValues2(arr) {
    let uniqueValues = 0;
    let temp;
    for (let i = 0; i < arr.length; i++) {
        if (temp !== arr[i]) {
            temp = arr[i];
            uniqueValues++;
        }
    }
    console.log(uniqueValues);
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])) // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])) // 7
console.log(countUniqueValues([])) // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])) // 4