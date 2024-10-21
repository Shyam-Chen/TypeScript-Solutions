function bfs(adjacencyList: Map<string, string[]>, startVertex: string): void {
  const queue: string[] = [startVertex]; // 使用陣列作為佇列
  const visited = new Set<string>(); // 記錄已訪問的頂點

  visited.add(startVertex); // 標記起始頂點為已訪問

  while (queue.length > 0) {
    const current = queue.shift(); // 取出佇列的第一個元素
    if (current === undefined) continue;

    console.log(current); // 當前訪問的頂點

    // 走訪所有相鄰的頂點
    for (const neighbor of adjacencyList.get(current) || []) {
      // 如果未訪問
      if (!visited.has(neighbor)) {
        visited.add(neighbor); // 標記為已訪問
        queue.push(neighbor); // 加入佇列
      }
    }
  }
}
