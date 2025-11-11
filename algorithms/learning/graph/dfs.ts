function dfs(
  adjacencyList: Map<string, string[]>,
  startVertex: string,
  visited: Set<string>,
): void {
  visited.add(startVertex); // 標記該頂點已被訪問

  console.log(startVertex); // 當前訪問的頂點

  // 走訪所有相鄰的頂點
  for (const neighbor of adjacencyList.get(startVertex) || []) {
    // 如果未訪問
    if (!visited.has(neighbor)) {
      // 遞迴訪問
      dfs(adjacencyList, neighbor, visited);
    }
  }
}
