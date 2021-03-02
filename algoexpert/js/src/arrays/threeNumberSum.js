function threeNumberSum(array, targetSum) {
  const triplets = [];
  // sort nlogn
  array = array.sort((a, b) => a - b);
  for (let i = 0; i < array.length; i++) {
    let left = i + 1;
    let right = array.length - 1;

    while (left < right) {
      const currentSum = array[i] + array[left] + array[right];
      if (currentSum === targetSum) {
        triplets.push([array[i], array[left], array[right]]);
        left++;
        right--;
      } else if (currentSum < targetSum) {
        left++;
      } else if (currentSum > targetSum) {
        right--;
      }
    }
  }
  return triplets;
}

// console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0));
// Input 12, 3, 1, 2, -6, 5, -8, 6 , targetSum 0
// sorted array // -8, -6, 1, 2, 3, 5, 6, 12
// [
//     [-8, 2, 6],
//     [-8, 3, 5],
//     [-6, 1, 5],
//   ]);

module.exports = threeNumberSum;

/*
 Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. The function should find all 
 triplets in the array that sum up to target sum and return a two dimensional array of all these triplets. The 
 numbers in each triplet should be ordered in acending order, and the triplets themselves should be ordered in ascending order with respect
 to the numbers the hold.

 if no three number sum up to the target sum, the function should return an empty array. 

*/

/*
    Input:  [12, 3, 1, 2, -6, 5, -8, 6], 0
    Ouutput: [
        [-8, 2, 6],
        [-8, 3, 5],
        [-6, 1, 5],
    ]

*/
