function closestPair(points) {
  const sortedByX = points.sort((a, b) => a[0] - b[0]);
  const sortedByY = points.slice().sort((a, b) => a[1] - b[1]);

  return divideAndConquer(sortedByX, sortedByY)[1];
}

function divideAndConquer(sortedByX, sortedByY) {
  if (sortedByX.length <= 3) return bruteForce(sortedByX);

  let mid = Math.floor(sortedByX.length / 2);

  let midPoint = sortedByX[mid];

  let leftHalf = sortedByX.slice(0, mid);
  let rightHalf = sortedByX.slice(mid);

  let left = divideAndConquer(leftHalf, sortedByY);

  let right = divideAndConquer(rightHalf, sortedByY);

  //   let distance = Math.min(distanceLeft, distanceRight);

  let currentBest;

  if (left[0] < right[0]) {
    currentBest = left;
  } else {
    currentBest = right;
  }

  let middleStrip = [];

  for (let i = 0; i < sortedByY.length; i++) {
    if (Math.abs(sortedByY[i][0] - midPoint[0]) <= currentBest[0]) {
      middleStrip.push(sortedByY[i]);
    }
  }

  return closestPairInVerticalStrip(middleStrip, currentBest);
}
function closestPairInVerticalStrip(stripArray, currentBest) {
  for (let i = 0; i < stripArray.length; i++) {
    for (
      let j = i + 1;
      j < Math.min(stripArray.length, i + 1 + 7);
      j++
    ) {
      let d = dist(stripArray[i], stripArray[j]);
      if (d < currentBest[0]) {
        currentBest = [d, [stripArray[i], stripArray[j]]];
      }
    }
  }
  return currentBest;
}

function bruteForce(sortedByX) {
  let bestPair;
  let min = Infinity;
  for (let i = 0; i < sortedByX.length; i++) {
    for (let j = i + 1; j < sortedByX.length; j++) {
      let d = dist(sortedByX[i], sortedByX[j]);
      if (d < min) {
        min = d;
        bestPair = [sortedByX[i], sortedByX[j]];
      }
    }
  }
  return [min, bestPair];
}

function dist(p, q) {
  return Math.sqrt((p[0] - q[0]) ** 2 + (p[1] - q[1]) ** 2);
}

let points = [
  [2, 2], // A   2     2
  [2, 8], // B   2     3
  [5, 5], // C   5     4
  [6, 3], // D   6     5
  [6, 7], // E   6     7
  [7, 4], // F   7     8
  [7, 9], // G   7     9
];

// [2,2], [2,8], [5,5], [6,3], [6,7], [7,4], [7,9]

// [2,2], [6,3], [7,4], [5,5], [6,7], [2,8], [7,9]

console.log(closestPair(points));
console.log(bruteForce(points)[1]);
// [2,2], [2,8], [5,5], [6,3], [6,7], [7,4], [7,9]

// [2,2], [6,3], [7,4], [5,5], [6,7], [2,8], [7,9]

/* 
    1  2  3  4  5  6  7  8  9
    1  
    2  . A      
    3              . D
    4                 . F       
    5           . C
    6              
    7              . E
    8  . B
    9                 . G
*/
