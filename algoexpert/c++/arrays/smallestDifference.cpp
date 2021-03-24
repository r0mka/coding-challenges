/*
   Write a function that takes in two non-empty arrays of integers, finds the pair of numbers (one from each array)
   whose absolute difference is closest to zero,  and returns an array containing these two numbers, with the number from the first
   array in the first position.

   Note that the absolute difference of two integers is the distance between them on the real number
   line. For example, the absolute difference of -5 and 5 is 10, and the absolute difference of -5 and -4 is 1.

   You can assume that there will only be one pair of numbers with the smallest difference.

*/
#include <iostream>
void smallestDifference(int arrayOne[], int arrayTwo []) {
    
}

int main() {
    std::cout << "SMALLEST DIFFERENCE" << std::endl;
}









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