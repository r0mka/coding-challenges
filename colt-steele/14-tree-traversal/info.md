# Tree Traversal

There are 2 main ways to traversing a tree

- Breadth First Search
- Depth First Search

  - InOrder
  - PreOrder
  - PostOrder

## Breadth first

```
  ------->    10
            /     \
  -------> 6 ----> 15
          / \        \
------>  3   8------> 20
```

[10, 6, 15, 3, 8, 20]

In order to implement breadth first search we're gonna use a `Queue`

## DFS Preorder

```
              10
            /     \
           6      15
          / \        \
         3   8       20
```

[10, 6, 3, 8, 15, 20]
