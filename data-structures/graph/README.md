# 圖 (Graph)

```ts
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
