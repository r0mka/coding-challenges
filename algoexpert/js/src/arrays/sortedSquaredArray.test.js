/**
 * Write a function that takes in a non-empty array of integers that are sorted
 * in ascending order and returns a new array of the same length with the
 * squares of the original integers also sorted in ascending order.
 */

const sortedSquaredArray = require('./sortedSquaredArray');

// it('Test Case #1', () => {
//   expect(sortedSquaredArray([1, 2, 3, 5, 6, 8, 9])).toEqual([
//     1,
//     4,
//     9,
//     25,
//     36,
//     64,
//     81,
//   ]);
// });

it('Test Case #2', () => {
  expect(
    sortedSquaredArray([-3, -3, -2, -2, 0, 1, 2, 6, 8, 9])
  ).toEqual([0, 1, 4, 4, 4, 9, 9, 36, 64, 81]);
});

it('Test Case #3', () => {
  expect(
    sortedSquaredArray([-50, -13, -2, -1, 0, 0, 1, 1, 2, 3, 19, 20])
  ).toEqual([0, 0, 1, 1, 1, 4, 4, 9, 169, 361, 400, 2500]);
});

/**
 * Hint 1
 * While the integers in the input array are sorted in increasing order, their squares won't necessarily be as well, because of the
 * possible presence of negative numbers.
 */

/**
 * Hint 2
 * Traverse the array value by value, square each value, and insert the squares into an output array. Then,
 * sort the output array before returning it. Is this the optimal solution?
 */

/**
 * Hint 3
 * To reduce the time complexity of the algorithms mentioned in Hint #2, you need to avoid sorting the output array.
 * To do this, as you square the values of the input array, try to directly insert
 * them into their correct position in the output array.
 */

/**
 * O(n) time | O(n) space
 */
