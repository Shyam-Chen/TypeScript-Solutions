# 圖 (Graph)

## 鄰接表 - 雜湊表方式

```ts
class Graph {
  // 鄰接表
  private adjacencyList: Map<string, string[]>;

  constructor(initialAdjList?: { [key: string]: string[] }) {
    this.adjacencyList = new Map();

    // 初始化
    if (initialAdjList) {
      for (const vertex in initialAdjList) {
        this.adjacencyList.set(vertex, initialAdjList[vertex]);
      }
    }
  }

  // 新增頂點
  addVertex(vertex: string): void {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  // 移除頂點
  removeVertex(vertex: string): void {
    if (this.adjacencyList.has(vertex)) {
      for (const adjacentVertex of this.adjacencyList.get(vertex) || []) {
        this.removeEdge(vertex, adjacentVertex);
      }

      this.adjacencyList.delete(vertex);
    }
  }

  // 新增邊
  addEdge(vertex1: string, vertex2: string): void {
    if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
      this.adjacencyList.get(vertex1)?.push(vertex2);
      this.adjacencyList.get(vertex2)?.push(vertex1);
    }
  }

  // 移除邊
  removeEdge(vertex1: string, vertex2: string): void {
    if (this.adjacencyList.has(vertex1)) {
      this.adjacencyList.set(
        vertex1,
        this.adjacencyList.get(vertex1)?.filter((v) => v !== vertex2) || [],
      );
    }

    if (this.adjacencyList.has(vertex2)) {
      this.adjacencyList.set(
        vertex2,
        this.adjacencyList.get(vertex2)?.filter((v) => v !== vertex1) || [],
      );
    }
  }

  // 印出圖的鄰接表
  print(): void {
    for (const [vertex, edges] of this.adjacencyList) {
      console.log(`${vertex} -> ${edges.join(', ')}`);
    }
  }
}

const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('B', 'E');
graph.addEdge('C', 'D');
graph.addEdge('D', 'E');

graph.print();
// A -> B, C
// B -> A, D, E
// C -> A, D
// D -> B, C, E
// E -> B, D
```

```mermaid
flowchart LR
    A((A))
    B((B))
    C((C))
    D((D))
    E((E))

    A o--o B
    A o--o C
    B o--o D
    B o--o E
    C o--o D
    D o--o E
```

### 初始化

```ts
const graph = new Graph({
  A: ['B', 'C'],
  B: ['A', 'D', 'E'],
  C: ['A', 'D'],
  D: ['B', 'C', 'E'],
  E: ['B', 'D'],
});
```
