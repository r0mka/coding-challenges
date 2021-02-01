# Dynamic programming

A method for solving a complex problem by breaking it down into a
collection of simpler subproblems, solving each of those subproblems just once,
and storing their solutions.

## Overlapping subproblems is when dynamic programming is used

```
                fib(5)
            /              \
        fib(4)     +       fib(3)
        /     \          /     \
     fib(3) + fib(2)  fib(2) +  fib(1)
    /     \
   fib(2) + fib(1)
```

## Example of NO overlapping subproblems.

In this case we usually use divide and conquer approach, NOT dynamic programming.

```
       mergeSort([10, 24, 76, 73])
            /                       \
mergeSort([10, 24])                 mergeSort([76, 73])
        /                                       \
  [10] merge [24]                           [76] merge [73]
      /            \                        /               \
mergeSort([10])    mergeSort([24])      mergeSort([76])     mergeSort([73])
```

`A SPECIAL CASE: `
In this case we could use dynamic programming

```
            mergeSort([10, 24, 10, 24])
            /                       \
mergeSort([10, 24])                 mergeSort([10, 24])
          /                                       \
    [10] merge [24]                           [10] merge [24]
      /            \                        /               \
mergeSort([10])    mergeSort([24])      mergeSort([10])     mergeSort([24])

```

`Overlapping subproblems` a problem is said to have overlapping subproblems if it can be broken down
into subprobles which can reused several times.

## Optimal Substructure

`A problem is said to have optimal substructure if an optimal solution can be constructed from optimal solutions of its subproblems`

## Big O

Time complexity of this solution is 2^n which is very bad

```javascript
function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}
```

## Memoization

Storing the results of expensive function calls and returning
the cached result when the same inputs occur again.

Memoized solution for Fibonacci numbers has Time Complexity O(N)

## Tabulation: A bottom Up Approach

Storing the result of a previos result in a "table" (usually an array)

Usually done using iteration
Better space complexity can be achieved using tabulation
