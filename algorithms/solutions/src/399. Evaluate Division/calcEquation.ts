type CalcEquation = (equations: string[][], values: number[], queries: string[][]) => number[];

/**
 * Accepted
 */
export const calcEquation: CalcEquation = (equations, values, queries) => {
  // Graph to store the relations between variables
  const graph: Map<string, Map<string, number>> = new Map();

  // Step 1: Build the graph
  for (let i = 0; i < equations.length; i++) {
    const [A, B] = equations[i];
    const value = values[i];

    // Use ?? to ensure we get a map, or create a new one if it doesn't exist
    const mapA = graph.get(A) ?? new Map();
    const mapB = graph.get(B) ?? new Map();

    // Update the graph with the relationships
    mapA.set(B, value);
    mapB.set(A, 1 / value);

    graph.set(A, mapA);
    graph.set(B, mapB);
  }

  // Step 2: DFS function to find the result for a query
  function dfs(start: string, end: string, visited: Set<string>): number {
    if (!graph.has(start) || !graph.has(end)) return -1.0;
    if (start === end) return 1.0;

    visited.add(start);

    for (const [neighbor, value] of graph.get(start) ?? new Map()) {
      if (!visited.has(neighbor)) {
        const result = dfs(neighbor, end, visited);
        if (result !== -1.0) return result * value;
      }
    }

    return -1.0;
  }

  // Step 3: Process each query
  const results: number[] = [];

  for (const [C, D] of queries) {
    if (C === D && graph.has(C)) {
      results.push(1.0);
    } else {
      results.push(dfs(C, D, new Set()));
    }
  }

  return results;
};
