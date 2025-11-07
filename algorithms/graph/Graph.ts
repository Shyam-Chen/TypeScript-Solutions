class Graph {
  // 鄰接表
  adjacencyList: Map<string, string[]>;

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
