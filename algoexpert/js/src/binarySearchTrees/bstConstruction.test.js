const BST = require('./bstConstruction');

/*   
          10 
      /       \
     5         15
    / \        / \
   2   5     13   22
  /         /  \
 1        12    14

 Insertion, Search, Deletion
 Average: O(log(N)) time | O(N) space recursively | O(1) iteratively
 Worst: O(N) time | O(N) space recursively | O(1) iteratively
*/

let bst;
// bst.insert(5);
// bst.insert(2);
// bst.insert(5);
// bst.insert(1);
// bst.insert(15);
// bst.insert(13);
// bst.insert(22);
// bst.insert(14);
// bst.insert(12);

it('Insert Test #1', () => {
  bst = new BST(10);
  expect(bst).toEqual({ value: 10, left: null, right: null });
});

it('Insert Test #2', () => {
  expect(bst.insert(5)).toEqual({
    value: 10,
    left: { value: 5, left: null, right: null },
    right: null,
  });
});

it('Insert Test #3', () => {
  expect(bst.insert(2)).toEqual({
    value: 10,
    left: {
      value: 5,
      left: { value: 2, left: null, right: null },
      right: null,
    },
    right: null,
  });
});

it('Insert Test #4', () => {
  expect(bst.insert(5)).toEqual({
    value: 10,
    left: {
      value: 5,
      left: { value: 2, left: null, right: null },
      right: { value: 5, left: null, right: null },
    },
    right: null,
  });
});

it('Insert Test #5', () => {
  expect(bst.insert(1)).toEqual({
    value: 10,
    left: {
      value: 5,
      left: {
        value: 2,
        left: { value: 1, left: null, right: null },
        right: null,
      },
      right: { value: 5, left: null, right: null },
    },
    right: null,
  });
});

it('Insert Test #6', () => {
  expect(bst.insert(15).right).toEqual({
    value: 15,
    left: null,
    right: null,
  });
});
it('Insert Test #7', () => {
  expect(bst.insert(13).right.left).toEqual({
    value: 13,
    left: null,
    right: null,
  });
});
it('Insert Test #8', () => {
  expect(bst.insert(22).right.right).toEqual({
    value: 22,
    left: null,
    right: null,
  });
});

it('Insert Test #9', () => {
  expect(bst.insert(14).right.left.right).toEqual({
    value: 14,
    left: null,
    right: null,
  });
});

it('Insert Test #10', () => {
  expect(bst.insert(12).right.left.left).toEqual({
    value: 12,
    left: null,
    right: null,
  });
});

it('Contains Test #1', () => {
  expect(bst.contains(10)).toEqual(true);
});
it('Contains Test #2', () => {
  expect(bst.contains(12)).toEqual(true);
});
it('Contains Test #3', () => {
  expect(bst.contains(5)).toEqual(true);
});
it('Contains Test #4', () => {
  expect(bst.contains(22)).toEqual(true);
});
it('Contains Test #5', () => {
  expect(bst.contains(13)).toEqual(true);
});
it('Contains Test #6', () => {
  expect(bst.contains(7)).toEqual(false);
});
it('Contains Test #6', () => {
  expect(bst.contains(11)).toEqual(false);
});

it('Remove Test #1', () => {
  bst.remove(15);
  expect(bst.right.value).toEqual(22);
  expect(bst.right.left.value).toEqual(13);
  expect(bst.right.right).toEqual(null);
});
