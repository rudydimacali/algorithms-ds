/*

Storing graphs:

Adjacency Matrix:

  A B C D E F
A 0 1 0 0 0 1
B 1 0 1 0 0 0
C 0 1 0 1 0 0
D 0 0 1 0 1 0
E 0 0 0 1 0 1
F 1 0 0 0 1 0

Where 1 === a connection.
* Takes up more space (if there are less connections)
* Slower to iterate over all edges
* FASTER to look up specific edge

Adjacency List:

[
  [1,5], => Node 0 is connected to nodes 1 and 5
  [0,2],
  [1,3],
  [2,4],
  [3,5],
  [4,0] => Node 5 is connected to nodes 4 and 0
]

{
  A: ['B', 'F'],
  B: ['A', 'C'],
  C: ['B', 'D'],
  D: ['C', 'E'],
  E: ['D', 'F'],
  F: ['E', 'A']
}

* Can take up less space (if less connections)
* Faster to iterate over all edges
* SLOWER to look up specific edge

Time Complexity:
|V| = # of Vertices
|E| = # of Edges

               Adjacency List      Adjacency Matrix
Add Vertex      O(1)                O(|V^2|)
Add Edge        O(1)                O(1)
Remove Vertex   O(|V| + |E|)        O(|V^2|)
Remove Edge     O(|E|)              O(1)
Query           O(|V| + |E|)        O(1)
Storage         O(|V| + |E|)        O(|V^2|)
*/
