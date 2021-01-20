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

## DFS PreOrder

```
              10
            /     \
           6      15
          / \        \
         3   8       20
```

[10, 6, 3, 8, 15, 20]

## DFS PostOrder

```
              10
            /     \
           6      15
          / \        \
         3   8       20
```

[3, 8, 6, 20, 15, 10]

## DFS InOrder

```
              10
            /     \
           6      15
          / \        \
         3   8       20
```

[3, 6, 8, 10, 15, 20]

# BFS vs DFS

Breadth first on a tree a lot wider than it is deep , will increase space complexity
Since we are using a queue to keep track of visited nodes. The queue will grow very fast in a wide
tree. In DFS we only have to keep track of the nodes on one branch. If we have a long one sided tree than DFS will take up more space since we'll keep all the nodes on that branch in memory.

DFS InOrder is good for binary search trees since we print the data in order
DFS PreOrder is good if you want to duplicate the tree or flatten it out to store in a file.

# RECAP

- Trees are non-linear data structures that contain a root and child nodes
- Binary Trees can have values of any type, but at most
  two children for each parent
- Binary Search Trees are a more specific version of binary trees where every node
  to the left of a parent is less than it's value and every node to the right is greater
- We can search through Trees using BFS and DFS
