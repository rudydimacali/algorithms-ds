class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertexOne, vertexTwo, weight) {
    this.adjacencyList[vertexOne].push({ node: vertexTwo, weight });
    this.adjacencyList[vertexTwo].push({ node: vertexOne, weight });
  }
}
