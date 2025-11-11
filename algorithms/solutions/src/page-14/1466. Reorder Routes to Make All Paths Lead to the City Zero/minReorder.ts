type MinReorder = (n: number, connections: number[][]) => number;

/**
 * Accepted
 */
export const minReorder: MinReorder = (n, connections) => {
  // Create an adjacency list
  const graph: Map<number, { to: number; originalDirection: boolean }[]> = new Map();

  // Build the bidirectional graph, noting the original directions
  for (const [u, v] of connections) {
    // Ensure both nodes u and v exist in the graph
    graph.set(u, [...(graph.get(u) ?? []), { to: v, originalDirection: true }]);
    graph.set(v, [...(graph.get(v) ?? []), { to: u, originalDirection: false }]);
  }

  let changes = 0;
  const visited = new Set<number>();

  // DFS function to explore the graph
  function dfs(node: number) {
    visited.add(node);

    for (const { to, originalDirection } of graph.get(node) ?? []) {
      if (!visited.has(to)) {
        // If the edge is originally directed away from node 0, increment the change count
        if (originalDirection) changes += 1;

        // Recursively apply DFS on the neighbor
        dfs(to);
      }
    }
  }

  // Start DFS from node 0
  dfs(0);

  return changes;
};
