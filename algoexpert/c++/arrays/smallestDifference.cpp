/*
   Write a function that takes in two non-empty arrays of integers, finds the pair of numbers (one from each array)
   whose absolute difference is closest to zero,  and returns an array containing these two numbers, with the number from the first
   array in the first position.

   Note that the absolute difference of two integers is the distance between them on the real number
   line. For example, the absolute difference of -5 and 5 is 10, and the absolute difference of -5 and -4 is 1.

   You can assume that there will only be one pair of numbers with the smallest difference.

*/
#include <algorithm>
#include <iostream>
#include <vector>
// #include <climits>

std::vector<int> smallestDifference(std::vector<int> arrayOne, std::vector<int> arrayTwo);


int main() {
    std::cout << std::endl << std::endl;
    std::cout << "SMALLEST DIFFERENCE" << std::endl;

    // int arr1 [6] =  {-1, 5, 10, 20, 28, 3}; 
    // int arr2 [5] = {26, 134, 135, 15, 17};
    
    // int arr1Size = sizeof(arr1) / sizeof(arr1[0]);
    // int arr2Size = sizeof(arr2) / sizeof(arr2[0]);
    
    // std::vector<int> arrayOne(arr1, arr1 + arr1Size);
    // std::vector<int> arrayTwo(arr2, arr2 + arr2Size);
    std::vector<int> arrayOne {-1, 5, 10, 20, 28, 3}; 
    std::vector<int> arrayTwo {26, 134, 135, 15, 17};

    std::vector<int> smallestPair = smallestDifference(arrayOne, arrayTwo);
    
    std::cout << smallestPair[0] << ", " << smallestPair[1] << std::endl;
}

std::vector<int> smallestDifference(std::vector<int> arrayOne, std::vector<int> arrayTwo) {
    std::sort(arrayOne.begin(), arrayOne.end());
    std::sort(arrayTwo.begin(), arrayTwo.end());
    int idxOne = 0; 
    int idxTwo = 0; 
    int smallest = INT_MAX; 
    int current = INT_MAX;
    std::vector<int> smallestPair;

    while(idxOne < arrayOne.size() && idxTwo < arrayTwo.size()) {
        int firstNum = arrayOne[idxOne]; 
        int secondNum = arrayTwo[idxTwo];
        if (firstNum < secondNum) {
            current = secondNum - firstNum; 
            idxOne++;
        } else if (secondNum < firstNum) {
            current = firstNum - secondNum; 
            idxTwo++;
        } else {
           return std::vector<int> {firstNum, secondNum};
        }

        
        if (smallest > current) {
            smallest = current; 
            smallestPair = {firstNum, secondNum};
        }
    }



    return smallestPair;
}

// smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]) -> [28, 26]


/*
    Optimal space and time complexity O(nlogn + mlogm) | O(1) space where n is the length of the first input array and m is 
    the length of the second input array
*/

/*
 Hint
 Start by sorting both arrays. Put a pointer at the beginning of both arrays and evaluate the absolute difference
 of the pointer-numbers. If the difference is equal to zero, then  you've found the closest pair; otherwise, increment
 the pointer of the smaller of the two numbers to find a potentially better pair. Continue until you get a pair with a difference
 of zero or until one of the pointers gets out of range of its array.
*/




// int* smallestDifference(int arrayOne[], int arrayOneLength,  int arrayTwo [], int arrayTwoLength);
// void printArray(int array[], int arraySize);

// int main() {
//     std::cout << std::endl << std::endl;
//     std::cout << "SMALLEST DIFFERENCE" << std::endl;
//     int arrayOne[6] = {-1, 5, 10, 20, 28, 3}; 
//     int arrayOneLength = sizeof(arrayOne)/sizeof(int); 
//     int arrayTwo[5] = {26, 134, 135, 15, 17};
//     int arrayTwoLength = sizeof(arrayTwo)/sizeof(int);

//     int* result;
//     result = smallestDifference(arrayOne, arrayOneLength, arrayTwo, arrayTwoLength);

//     printArray(result, 2);
//     std::cout << std::endl << std::endl;
// }

// void printArray(int array[], int arraySize) {
//     for (int i = 0; i < arraySize; i++) {
//         std::cout << array[i] << " ";
//     }
// }

// int* smallestDifference(int arrayOne[], int arrayOneLength,  int arrayTwo [], int arrayTwoLength) {
//     std::sort(arrayOne, arrayOne + arrayOneLength);
//     std::sort(arrayTwo, arrayTwo + arrayTwoLength);
    
//     int idxOne = 0; 
//     int idxTwo = 0; 
//     int smallestDifference = INT_MAX;
//     static int pair [2]; 
    
    

//     while(idxOne < arrayOneLength && idxTwo < arrayTwoLength) {
//         if (arrayOne[idxOne] < arrayTwo[idxTwo]) {
//             int currentDif = arrayTwo[idxTwo] - arrayOne[idxOne]; 
//             if (currentDif < smallestDifference) {
//                 smallestDifference = currentDif; 
//                 pair[0] = arrayOne[idxOne]; 
//                 pair[1] = arrayTwo[idxTwo];
//             } 
//             idxOne++; 
//         } else {
//             int currentDif = arrayOne[idxOne] - arrayTwo[idxTwo]; 
//             if (currentDif < smallestDifference) {
//                 smallestDifference = currentDif; 
//                 pair[0] = arrayOne[idxOne]; 
//                 pair[1] = arrayTwo[idxTwo];
//             }
//             idxTwo++; 
//         }
//     }
//     return pair; 
// }
