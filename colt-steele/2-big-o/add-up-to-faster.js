//  How we arrive at this formula

// addUpTo(n) =    1    +    2    +    3    + ... + (n - 1) +    n   
//   ADD LINE ABOVE AND LINE BELOW
// addUpTo(n) =    n    + (n - 1) + (n - 2) + ... +    2    +    1   

// LINE BELOW IS THE SUM
// 2addUpTo(n) = (n + 1) + (n + 1) + (n + 1) + ... + (n + 1) + (n + 1)
// line above : n copies


// 2addUpTo(n) = n * (n + 1)

// addUpTo(n) = n(n + 1) / 2


function addUpTo(n) {
  return n * (n + 1) / 2;
}

var time1 = performance.now();
addUpTo(1000000000);
var time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`)