# Tree

A data structure that consists of nodes in `parent/child` relationship.

Linked lists are `linear`. `Trees` are `non linear`

A singly linked list is a special case of a tree.

A `node` can only point to a `child`
Every node is moving away from the root node;

- `Root` - The top node in a tree.
- `Child` - A node directly connected to another node.
- `Parent` - The converse notion of a child.
- `Siblings` - A group of nodes with the same parent.
- `Leaf` - A node with no children.
- `Edge` - The connection between one node and another.

# Binary search tree

- Every parent node has at most `two` children
- Every node to the left of a parent node is `always less` than the parent
- Every node to the right of a parent node is `always greater` than the parent

| BTS       | Time Complexity(BEST) | Time complexity(AVERAGE) |
| --------- | --------------------- | ------------------------ |
| Insertion | O(logn)               | O(logn)                  |
| Searching | O(logn)               | O(logn)                  |

log n time complexity is not guaranteed. Some binary search tree configuratios are slow. If you have a special case of a tree like linked list then time complexity becomes O(n). This is a valid BTS 3->17->19->32->34->63->86->91 One way to improve this is to restructure this tree by picking ,for example, 32 as the root. That way some numbers will go to the left and some to the right. And that will improve our time complexity.
