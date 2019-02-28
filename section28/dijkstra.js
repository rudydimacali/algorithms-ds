/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  swap(indexOne, indexTwo) {
    const temp = this.values[indexOne];
    this.values[indexOne] = this.values[indexTwo];
    this.values[indexTwo] = temp;
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const priority = this.values[index].priority;
    while (index !== 0 && priority < this.values[Math.floor((index - 1) / 2)].priority) {
      this.swap(index, Math.floor((index - 1) / 2));
      index = Math.floor((index - 1) / 2);
    }
    return this;
  }

  enqueue(val, priority) {
    this.values.push(new Node(val, priority));
    this.bubbleUp();
    return this;
  }

  sinkDown() {
    let index = 0;
    const element = this.values[0];
    let leftChild = this.values[(index * 2) + 1];
    let rightChild = this.values[(index * 2) + 2];
    while ((leftChild !== undefined && element.priority > leftChild.priority) ||
      (rightChild !== undefined && element.priority > rightChild.priority)) {
      if (rightChild === undefined || rightChild > leftChild) {
        this.swap(index, (index * 2) + 2);
        index = (index * 2) + 2;
      } else {
        this.swap(index, (index * 2) + 1);
        index = (index * 2) + 1;
      }
      leftChild = this.values[(index * 2) + 1];
      rightChild = this.values[(index * 2) + 2];
    }
  }

  dequeue() {
    this.swap(0, this.values.length - 1);
    const removed = this.values.pop();
    this.sinkDown();
    return removed;
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertexOne, vertexTwo, weight) {
    this.adjacencyList[vertexOne].push({ val: vertexTwo, weight });
    this.adjacencyList[vertexTwo].push({ val: vertexOne, weight });
  }

  shortestPath(start, end) {
    const distances = {};
    const queue = new PriorityQueue();
    const previous = {};
    const path = [];
    let vertex;
    for (const node in this.adjacencyList) {
      if (node !== start) {
        distances[node] = Infinity;
        queue.enqueue(node, Infinity);
      } else {
        distances[node] = 0;
        queue.enqueue(node, 0);
      }
      previous[node] = null;
    }
    while (queue.values.length) {
      vertex = queue.dequeue().val;
      if (vertex === end) {
        while (previous[vertex]) {
          path.push(vertex);
          vertex = previous[vertex];
        }
        break;
      }
      if (vertex || distances[vertex] !== Infinity) {
        for (const adjacentNode in this.adjacencyList[vertex]) {
          const adjacentVertex = this.adjacencyList[vertex][adjacentNode];
          const distance = distances[vertex] + adjacentVertex.weight;
          if (distance < distances[adjacentVertex.val]) {
            distances[adjacentVertex.val] = distance;
            previous[adjacentVertex.val] = vertex;
            queue.enqueue(adjacentVertex.val, distance);
          }
        }
      }
    }
    return path.concat(vertex).reverse();
  }
}

var graph = new WeightedGraph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);


console.log(graph.shortestPath('A', 'F'));