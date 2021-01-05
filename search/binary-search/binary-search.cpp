#include <iostream>


int binarySearch(int arr[], int length, int val) {
    int left = 0; 
    int right = length - 1;
    int middle; 
    while(left <= right) {
        middle = (right + left) / 2;
        if (arr[middle] == val) return middle;
        else if (arr[middle] > val) right = middle - 1;
        else left = middle + 1;
    }

    return -1;
}

int main() {
    std::cout << "BINARY SEARCH!" << std::endl;
    int arr[10] = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}; 
    
    for (int i = 0; i < 10; i++) {
        std::cout << (binarySearch(arr, sizeof(arr)/ sizeof(int), i) == i ? "Test passed" : "Test failed") << std::endl;
    }

    // test for the value that doesn't exist in the array. Should return true
    std::cout << (binarySearch(arr, sizeof(arr)/ sizeof(int), 10) == -1 ? "Test passed" : "Test failed") << std::endl;
}