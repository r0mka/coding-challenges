function insertionSort(arr) {
  let currentVal;
  for (let i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

console.log(insertionSort([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));

console.log(insertionSort([9, 8, 12, 18, 15, 13, 5]));
