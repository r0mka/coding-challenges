#include <iostream>



void bubbleSort(int arr[], int size) {
    std::cout << "Before: ";
    for (int i = 0; i < size; i++) {
        std::cout << arr[i] << " ";
    }

    bool noSwaps = true;

    for (int i = size; i > 0; i--) {
        for (int j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp  = arr[j]; 
                arr[j] = arr[j+1]; 
                arr[j+1] = temp;
            }
            noSwaps = false;
        }
        if (noSwaps) break;
    }
}

int main() {
    std::cout << "SELECTION SORT" << std::endl;
     int arr [10] = {0, 1, 9, 8, 7, 6, 5, 4, 3, 2};


   


    bubbleSort(arr, 10);
    
    std::cout << "\nAfter: ";
    for (int i = 0; i < 10; i++) {
        std::cout << arr[i] << " ";
    }
    
    std::cout << std::endl << std::endl << std::endl;
}