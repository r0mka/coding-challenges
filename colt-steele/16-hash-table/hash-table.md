# Hash Table

- Hash tables are collections of `key value` pairs.
- Hash tables can find values quickly given a key.
- Hash tables can add new key-values quickly.
- Hash tables store data in a large array, and work by `hashing` keys.
- A good hash should be fast, distribute keys uniformly, and be deterministic
- Separate chaining(storing elements together in a nested structure at the same index)
  and linear probing(looking forward for the next empty slot)
  are two strategies used to deal with two keys that hash to the same index.

In order to look up values by key, we need a way to convert keys into valid array indices.
`Hashing` function takes data of arbitrary size and coverts it into data of fixed size.
It's a one way function. You cannot determine the input from the output.
What makes a good hash function

- Fast(i.e. constant time)
- Doesn't cluster outputs at specific indices, but distributes uniformly
- Deterministic (same input yields same output)

## Handling collisions

The prime number in the hash is helpful in spreading out the keys more uniformly. It's also
helpful if the array that you're putting values into has a prime length.

Even with a large array and a great hash function, collisions are inevitable.

There are many strategies for dealing with collisions, but we'll focus on two:

- Separate Chaining
- Linear Probing

# Big O

if we search for a value it'll be O(n)

|           | Time Complexity |
| --------- | --------------- |
| Insertion | O(1)            |
| Removal   | O(1)            |
| Access    | O(1)            |
