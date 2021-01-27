# Graphs

A graph data structure consists of a finite(and possibly mutable) set of vertices
or nodes or points, together with a set of unordered pairs of these vertices for an undirected `graph`
or a set of ordered pairs for a directed graph.

`Nodes` + `Connections` between those nodes

- `Vertext` - node
- `Edges` - connections from one vertex to another

`Undirected` graphs there's no direction or polarity to the edges. They're all two way connections.
`Directed` graphs often represented with arrows which indicates direction or polarity of that edge.

`Weighted` or `Unweighted` graphs
When we assign a value to the edges it becomes a `weighted graph`. There is information about the edge itself.

`Adjacency` matrix

- Takes up more space(in sparse graphs)
- Slower to iterate over all edges
- Faster to look up specific edge

`Adjacenct` list

- Can take up less space(in sparse graphs)
- Faster to iterate over edges
- Can be slower to lookup specific edge

## Differences and Big O

|V| abs(V) number of vertices
|E| abs(E) number of edges

| Operator      | Adjacency List     | Adjancency Matrix |
| ------------- | ------------------ | ----------------- |
| Add Vertex    | O(1)               | O(abs(V^2))       |
| Add Edge      | O(1)               | O(1)              |
| Remove Vertex | O(abs(V) + abs(E)) | O(abs(V^2))       |
| Remove Edge   | O(abs(E))          | O(1)              |
| Query         | O(abs(V) + abs(E)) | O(1)              |
| Storage       | O(abs(V) + abs(E)) | O(abs(V^2))       |

## Adding an Edge

- This function should accept two vertices, we can call them vertex1 and vertex2
- The function should find in the adjacency list the key of vertex1
  and push vertex2 to the array

## Removing an Edge

- This function should accept two vertices, we'll call them vertex1 and vertex2
- The function should reassign the key of vertex1 to be an array that does not contain vertex2
- The function should reassign the key of vertex2 to be an array that does not contain vertex1
