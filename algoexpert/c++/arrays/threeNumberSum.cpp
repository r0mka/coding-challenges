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

#include <iostream>
#include <vector>
#include <algorithm>

std::vector<int*> threeNumberSum (std::vector<int> array,  int targetSum){
    std::sort(array.begin(), array.end());
    std::vector<int*> result; 

    for(int i = 0; i < array.size() - 1; i++) {
        int left = i + 1; 
        int right = array.size() - 1; 

        while(left < right) {
            int sum = targetSum - array[i];
            int currentSum = array[left] + array[right];
            if (currentSum < sum) {
                left++; 
            } else if (currentSum > sum) {
                right--; 
            } else {
                int* arr = new int[3];
                arr[0] = array[i]; 
                arr[1] = array[left];
                arr[2] = array[right];  
                result.push_back(arr);
                left++; 
                right--;
            }
        }
    }
    return result;
}

int main() {
    std::vector<int> input {12, 3, 1, 2, -6, 5, -8, 6};
    std::vector<int*> result = threeNumberSum(input,  0);
    for(int i = 0; i < result.size(); i++) {
        std::cout << result[i][0] << ", " << result[i][1] << ", " << result[i][2] << std::endl;
    }
}









/*
    Hint 1: 
    Using three loops to calculate the sums of all possible triplets
    in the array would generate an algorithm that runs in O(n^3) time, where n
    is the length of the input array. Can you come up with something faster
    using only two for loops?    
*/

/**
 * Hint 2
 * Try sorting the array and traversing it once. At each number, place a left pointer on the
 * number immediately to the right of your current number and a right pointer on the final
 * number in the array. Check if the current number, the left number, and right number
 * sum up to the target sum. How can you proceed from there, remembering the fact that you
 * sorted the array?
 *
 */

/**
 * Hint 3
 * Since the array is now sorted (see Hint #2), you know that moving the left pointer mentioned in Hint #2 one place to
 * the right will lead to a greater left number and thus a greater sum. Similarly, you know that moving the right pointer
 * one place to the left will lead to a smaller right number and thus a smaller sum. This means that, depending on the size
 * of each triplet's (current number, left number, right number)sum relative to the target sum, you should either move
 * the left pointer, the right pointer, or both to obtain a potentially valid triplet.
 */