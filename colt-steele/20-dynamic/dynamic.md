# Dynamic programming

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

## Example of non overlapping subproblems.

In this case we usually use divide and conquer approach, NOT dynamic programming.

```
       mergeSort([10, 24, 76, 73])
            /                       \
mergeSort([10, 24])                 mergeSort([76, 73])
        /
  [10] merge [24]
      /            \
mergeSort([10])    mergeSort([24])
```
