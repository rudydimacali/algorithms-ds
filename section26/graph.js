/* eslint-disable prefer-destructuring */
/* eslint-disable consistent-return */

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

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    return this.adjacencyList;
  }

  addEdge(vertexOne, vertexTwo) {
    if (!this.adjacencyList.hasOwnProperty(vertexOne)
      || !this.adjacencyList.hasOwnProperty(vertexTwo)) {
      return undefined;
    }
    if (!this.adjacencyList[vertexOne].includes(vertexTwo)) {
      this.adjacencyList[vertexOne].push(vertexTwo);
    }
    if (!this.adjacencyList[vertexTwo].includes(vertexOne)) {
      this.adjacencyList[vertexTwo].push(vertexOne);
    }
    return this.adjacencyList;
  }

  removeEdge(vertexOne, vertexTwo) {
    if (this.adjacencyList[vertexOne].includes(vertexTwo)) {
      const index = this.adjacencyList[vertexOne].indexOf(vertexTwo);
      this.adjacencyList[vertexOne].splice(index, 1);
    }
    if (this.adjacencyList[vertexTwo].includes(vertexOne)) {
      const index = this.adjacencyList[vertexTwo].indexOf(vertexOne);
      this.adjacencyList[vertexTwo].splice(index, 1);
    }
    return this.adjacencyList;
  }

  removeVertex(vertex) {
    if (!this.adjacencyList.includes(vertex)) return undefined;
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
    return this.adjacencyList;
  }

  depthFirstSearchRecursive(start) {
    if (this.adjacencyList[start].length === 0) return undefined;
    const results = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;
    const traverse = (vertex) => {
      if (!vertex) return null;
      visited[vertex] = true;
      results.push(vertex);
      adjacencyList[vertex].forEach((node) => {
        if (!visited[node]) traverse(node);
      });
    };
    traverse(start);
    return results;
  }

  depthFirstSearchIterative(start) {
    if (this.adjacencyList[start].length === 0) return undefined;
    const results = [];
    const visited = {};
    visited[start] = true;
    const stack = [start];
    while (stack.length) {
      const vertex = stack.pop();
      results.push(vertex);
      this.adjacencyList[vertex].forEach((node) => {
        if (!visited[node]) {
          visited[node] = true;
          stack.push(node);
        }
      });
    }
    return results;
  }

  breadthFirstSearchIterative(start) {
    if (this.adjacencyList[start].length === 0) return undefined;
    const results = [];
    const visited = {};
    visited[start] = true;
    const queue = [start];
    while (queue.length) {
      const vertex = queue.shift();
      results.push(vertex);
      this.adjacencyList[vertex].forEach((node) => {
        if (!visited[node]) {
          visited[node] = true;
          queue.push(node);
        }
      });
    }
    return results;
  }
}
