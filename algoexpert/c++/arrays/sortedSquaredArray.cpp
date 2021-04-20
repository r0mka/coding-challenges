/**
 * Write a function that takes in a non-empty array of integers that are sorted
 * in ascending order and returns a new array of the same length with the
 * squares of the original integers also sorted in ascending order.
 */

// Input : [1, 2, 3,  5,  6,  8,  9]
// Output: [1, 4, 9, 25, 36, 64, 81]


// Input : [-5, -3, 0, 1, 2, 3,  5,  6,  8,  9]
// Output: [0, 1, 4, 9, 9, 25, 25, 36, 64, 81]
// [25, 9] -> [9, 25]
// [0, 1, 2, 3,  5,  6,  8,  9]

// p1 = 0 
// p2 = 2
// arr[p2] - arr[p1] < 0 : 
    // newArr.push(arr[p2] ** 2) 
    // p2++;
// arr[p2] - arr[p1] > 0: 
   // newArr.push(arr[p1] ** 2)
   // p1++
// else 
   // newArr.push(arr[p1] ** 2, arr[p2] ** 2)    
   // p1++
   // p2++

#include <iostream>
#include <vector>

void sortedSquaredArray(std::vector<int> array) {
    std::vector<int>result; 

    int p1 = 0; 
    int p2 = 0; 
    while(array[p2] < 0) {
        p1 = p2;
        p2++; 
    }
    if (p1 == p2) p2++; 

    while(p1 >= 0 && p2 < array.size()) {
        int diff = array[p2] * array[p2] - array[p1] * array[p1]; 
        if (diff < 0) {
            result.push_back(array[p2] * array[p2]); 
            p2++; 

        } else  {
            result.push_back(array[p1] * array[p1]); 
            p1--; 
        } 
    }

    while(p1 >= 0) {
        result.push_back(array[p1] * array[p1]); 
        p1--; 
    }

    while(p2 < array.size()) {
        result.push_back(array[p2] * array[p2]); 
        p2++; 
    }

  
    for(int i = 0; i < result.size(); i++) {
        std::cout << result[i] << ", "; 
    }
    std::cout << std::endl;
}

int main() {
    sortedSquaredArray(std::vector<int>{-5, -3, 0, 1, 2, 3,  5,  6,  8,  9});
    sortedSquaredArray(std::vector<int>{1, 2, 3,  5,  6,  8,  9});

    std::cout << std::endl << std::endl;
}







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