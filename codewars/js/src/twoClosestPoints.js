function twoClosestPoints(points) {
  const sortedByX = points.sort((a, b) => a[0] - b[0]);
  const sortedByY = sortedByX.slice().sort((a, b) => a[1] - b[1]);

  return closestPair(sortedByX, sortedByY);
}

function calculateStrip(stripArray, minDistance) {
  let minValue = minDistance;

  for (let i = 0; i < stripArray.length; i++) {
    for (
      let j = i + 1;
      j < Math.min(stripArray.length, i + 1 + 7);
      j++
    ) {
      minValue = Math.min(
        minValue,
        dist(stripArray[i], stripArray[j])
      );
    }
  }
  return minValue;
}
function bruteForce(sortedByX) {
  let min = Infinity;
  for (let i = 0; i < sortedByX.length - 1; i++) {
    let d = dist(sortedByX[i], sortedByX[i + 1]);
    if (d < Infinity) min = d;
  }
  if (sortedByX.length === 3) {
    let d = dist(sortedByX[0], sortedByX[2]);
    min = Math.min(min, d);
  }
  return min;
}

function closestPair(sortedByX, sortedByY) {
  if (sortedByX.length <= 3) return bruteForce(sortedByX);

  let mid = Math.floor(sortedByX.length / 2);

  let midPoint = sortedByX[mid];

  let left = sortedByX.slice(0, mid);
  let right = sortedByX.slice(mid);

  let distanceLeft = closestPair(left, sortedByY);

  let distanceRight = closestPair(right, sortedByY);

  let distance = Math.min(distanceLeft, distanceRight);

  let stripArray = [];

  for (let i = 0; i < sortedByY.length; i++) {
    if (Math.abs(sortedByY[i][0] - midPoint[0])) {
      stripArray.push(sortedByY[i]);
    }
  }

  return Math.min(distance, calculateStrip(stripArray, distance));
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

console.log(twoClosestPoints(points));

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
