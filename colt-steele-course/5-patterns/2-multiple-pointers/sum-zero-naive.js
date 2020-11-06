
/*
 * ## Multiple Pointers
 * Creating pointers or values that correspond to an index or position * * and move towards the beginning, end or middle based on a certain * * * * condition. Very efficient for solving problems with minimal space * * * complexity as well. 
 */


/* 
Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair when the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.
*/


function sumZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}


sumZero([-8, -5, -4, -3, -2, -1, 0, 1, 2, 5, 6, 7]); //  [-5, 5]
sumZero([-4, -3, -2, -1, 0, 1, 2, 5]); //  [-2, 2]
sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]); //  [-3, 3]
sumZero([-3, -2, -1, 0, 1, 2, 3]); // [-3, 3]
sumZero([-2, 0, 1, 3]); // undefined
sumZero([1, 2, 3]);  // undefined
sumZero([-1, 1]); // [-1 , 1]
sumZero([-1, 0, 1]); // [-1 , 1]
