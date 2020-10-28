function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIdx = i;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[minIdx] > arr[j]) {
        minIdx = j;
      }
    }
    [arr[minIdx], arr[i]] = [arr[i], arr[minIdx]];
  }
  return arr;
}

console.log(
  JSON.stringify(selectionSort([5, 1, 10, 45, 23, 15, 9])) ===
    '[1,5,9,10,15,23,45]'
);

console.log(
  JSON.stringify(selectionSort([10, 9, 8, 23, -19, 5])) ===
    '[-19,5,8,9,10,23]'
);

console.log(
  JSON.stringify(selectionSort([87, -5, -6, 32, 123])) ===
    '[-6,-5,32,87,123]'
);
