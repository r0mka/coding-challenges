#include <iostream>
#include <algorithm>
#include <vector>
#include <unordered_set>


std::vector<int> twoNumberSum(std::vector<int> array, int targetSum);

int main() {
    std::vector<int> input {3, 5, -4, 8, 11, 1, -1, 6}; 

    int targetSum = 10; 

    std::vector<int> result = twoNumberSum(input, targetSum);

    std::vector<int> result2 = twoNumberSum(input, targetSum);
    std::vector<int> result3 = twoNumberSum(input, targetSum);
    
    std::cout << "Result: " << result[0] << ", " << result[1] <<  std::endl;
    std::cout << "Result: " << result2[0] << ", " << result2[1] <<  std::endl;
    std::cout << "Result: " << result3[0] << ", " << result3[1] <<  std::endl;
    
}

// O(nlogn | O(1) space)
std::vector<int> twoNumberSum(std::vector<int> array,  int targetSum){
    std::sort(array.begin(), array.end());
     
    int pair[2]; 
    int left = 0; 
    int right = array.size() - 1;
    

    while(left < right) {
        int currentSum = array[left] + array[right];
        if (currentSum < targetSum) {
            left++;
        } else if (currentSum > targetSum) {
            right--; 
        } else {
            return {array[left], array[right]};
            
        }
    }
    return {};
}
 // O(n) time | O(n) space
std::vector<int> twoNumberSum2(std::vector<int> array,  int targetSum){
    std::unordered_set<int>nums;
    for (int num: array) {
        int potentialMatch = targetSum - num; 
        if (nums.find(potentialMatch) != nums.end()){
            return std::vector<int>{potentialMatch, num};
        } else {
            nums.insert(num);
        }
    }
    return {};
}
std::vector<int> twoNumberSum3(std::vector<int> array,  int targetSum){
    for(int i= 0; i < array.size() - 1; i++) {
        int firstNum = array[i]; 
        for(int j = 0; j < array.size(); j++) {
            int secondNum = array[j]; 
            if (firstNum + secondNum == targetSum) {
                return std::vector<int>{firstNum, secondNum};
            }
        }
    }
    return {};
}



// # Two number sum

// Write a function that takes in a non-empty array of distinct integers and an
// integer representing a target sum. If any two numbers in the input array sum
// up to the target sum, the function should return them in an array, in any
// order. If no two numbers sum up to the target sum, the function should return
// an empty array.

// Note that the target sum has to be obtained by summing two different integers
// in the array; you can't add a single integer to itself in order to obtain the
// target sum.

// You can assume that there will be at most one pair of numbers summing up to
// the target sum.

// O(n) time | O(n) space where n is the length of the input array

// ```
// array = [3, 5, -4, 8, 11, 1, -1, 6];
// targetSum = 10;
// // output [-1, 11] // the numbers could be in reverse order
// ```





/*
    Hint 1 
    Try using two for loops to sum all possible pairs of numbers in the input array. What are the time and space implications of this approach?

*/

/*
    Hint 2
    Realize that for every number X in the input array, you are essentially trying to find a corresponding number Y such that X + Y = targetSum. With two variables in this equation known to you, it shouldn't be hard to solve for Y.
*/
/*
    Hint 3
    Try storing every number in a hash table, solving the equation mentioned in Hint #2 for every number, and checking if the Y that you find is stored in the hash table. What are the time and space implications of this approach?
*/