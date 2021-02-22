const BST = require('./bstConstruction');

/*   
          10 
      /       \
     5         15
    / \        / \
   2   5     13   22
  /           \
 1             14
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

it('Insert #1', () => {
  bst = new BST(10);
  expect(bst).toEqual({ value: 10, left: null, right: null });
});

it('Insert #2', () => {
  expect(bst.insert(5)).toEqual({
    value: 10,
    left: { value: 5, left: null, right: null },
    right: null,
  });
});

it('Insert #3', () => {
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

it('Insert #4', () => {
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
