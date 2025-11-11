type FindCircleNum = (isConnected: number[][]) => number;

/**
 * Accepted
 */
export const findCircleNum: FindCircleNum = (isConnected) => {
  const n = isConnected.length; // Number of cities (or nodes in the graph)
  const visited = Array(n).fill(false); // Array to keep track of visited cities

  // DFS function to explore all cities in the current province
  const dfs = (i: number) => {
    // Traverse all cities
    for (let j = 0; j < n; j++) {
      // If city 'i' is directly connected to city 'j' and 'j' has not been visited yet
      if (isConnected[i][j] === 1 && !visited[j]) {
        visited[j] = true; // Mark city 'j' as visited
        dfs(j); // Recursively visit all cities connected to city 'j'
      }
    }
  };

  let provinces = 0; // Variable to count the number of provinces

  // Loop through each city
  for (let i = 0; i < n; i++) {
    // If the city hasn't been visited yet, it's a new province
    if (!visited[i]) {
      provinces += 1; // Increment the province count
      visited[i] = true; // Mark the current city as visited
      dfs(i); // Perform DFS to visit all cities in this province
    }
  }

  return provinces; // Return the total number of provinces found
};
