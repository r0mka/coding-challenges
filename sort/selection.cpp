#include <iostream>


void selectionSort(int arr[], int size) {
    std::cout << "Before: ";
    for (int i = 0; i < size; i++) {
        std::cout << arr[i] << " ";
    }

    int minIdx = 0; 
    
    for (int i = 0; i < size; i++) {
        minIdx = i; 
        for (int j = i + 1; j < size; j++) {
            if (arr[minIdx] > arr[j]) {
                minIdx = j; 
            }
        }
        if (i != minIdx) {
            int temp = arr[i]; 
            arr[i] = arr[minIdx]; 
            arr[minIdx] = temp;
        }
        
    }

}

int main() {
    std::cout << "SELECTION SORT" << std::endl;
    int arr [10] = {0, 1, 9, 8, 7, 6, 5, 4, 3, 2};

    selectionSort(arr, 10);
    
    std::cout << "\nAfter: ";
    for (int i = 0; i < 10; i++) {
        std::cout << arr[i] << " ";
    }
    
    std::cout << std::endl << std::endl << std::endl;
}