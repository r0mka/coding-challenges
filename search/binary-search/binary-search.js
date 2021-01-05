function search(arr, value) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((max + min) / 2);
    if (arr[middle] === value) return middle;
    if (arr[middle] > value) max = middle - 1;
    else min = middle + 1;
  }
  return -1;
}

console.log(search([2, 3, 4, 5, 6, 123, 989, 1000], 1000) === 7);
console.log(search([1, 2, 3, 6, 7, 10, 12], 3) === 2);
console.log(search([5, 32, 43, 57], 570) === -1);
