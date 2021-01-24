# Binary Heaps

A heap is a tree structure. In a `MaxBinaryHeap`, parent nodes are always larger than child nodes. In a `MinBinaryHeap`, parent nodes are always smaller than child nodes. Each node can have at most
2 children. Unlike a binary search tree there is no order to the left or the right

Binary Heap

```
       41
   39     33
 18 27   12

```

Although these are the same numbers, this is NOT a binary heap! This is a binary search tree.

```
     33
  18    41
12 27  39
```

## Max Binary Heap

- Each parent has at most two child nodes.
- The value of each parent node is always greater than its child nodes
- In a max Binary Heap the parent is greater than the children, but there are
  no guarantees between sibling nodes.
- A binary heap is as compact as possible. All the children of each node are as full as they can
  be and `left` children are filled out first. Always takes up the least amount of space possible.

```
          100
     19         36
  17    3    25    1
2   7
```

100 is the largest number and it's at the top. To the left and to the right are `Smaller` numbers. But they are not neccessarily the second largest numbers in the entire heap. No implied order.

## Min Binary Heap

```
            1
     2             3
  17   19      36     7
25  100
```

Max Binary Heap

```
        41
  39          33
18  27     12
```

## Representing a heap

```
100
 |__________
      |     |
      19    36
      |      |_________________________
      |_______________        |       |
                |     |       |       |
                17    12      25      5
                |     |       |       |________________________________________________________
                |     |       |_________________________________________________        |      |
                |     |_____________________________________________      |     |       |      |
                |__________________________________        |       |      |     |       |      |
                                            |     |        |       |      |     |       |      |
                                            9     15       6       11     13    8       1      4
```

[100, 19, 36, 17, 12, 25, 5, 9, 15, 6, 11, 13, 8, 1, 4]
For any index of an array n... The left child is stored at `2n + 1`
The right child is `2n + 2`. For any child node at index `n` Its parent is at index `floor((n - 1) / 2)`

```
              100
      19                36
   17     12       25        5
 9   15  6  11   13   8    1   4
```
