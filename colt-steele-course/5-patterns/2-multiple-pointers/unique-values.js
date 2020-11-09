/*
 * ## Multiple Pointers
 * Creating pointers or values that correspond to an index or position * * and move towards the beginning, end or middle based on a certain * * * * condition. Very efficient for solving problems with minimal space * * * complexity as well. 
 */

/* 
Implement a function called countUniqueValues, 
which accepts a sorted array, and counts the unique values in the array, but it will always be sorted.
*/

/*
     1, 2, 2, 5, 7, 7, 99
        2, 2, 5, 7, 7, 99
           5, 5, 7, 7, 99
              7, 7, 7, 99
                99, 7, 99
     0  1  2  3  4  5  6          
*/

function countUniqueValues(arr) {
    if (arr.length === 0) return 0;
    var i = 0;
    for (var j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}
console.log(countUniqueValues([1, 2, 2, 5, 7, 7, 99]));
console.log(countUniqueValues([1, 1, 1, 2, 3, 3, 4, 4, 5, 6])); // 6
console.log(countUniqueValues([1, 1, 1, 1, 1, 2])) // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])) // 7
console.log(countUniqueValues([])) // 0
console.log(countUniqueValues([1])) // 1
console.log(countUniqueValues([-2, -1, -1, 0, 1])) // 4
