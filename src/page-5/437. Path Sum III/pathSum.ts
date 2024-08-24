import type { TreeNode } from '~/utils/binary-tree';

type PathSum = (root: TreeNode | null, targetSum: number) => number;

/**
 * Accepted
 */
export const pathSum: PathSum = (root, targetSum) => {
  // Initialize a counter to track the number of valid paths
  let count = 0;

  // Helper function for DFS traversal, takes the current node and the path from root to this node
  const dfs = (node: TreeNode | null, currentPath: number[]) => {
    // Base case: If the current node is null, return (end of path)
    if (node === null) return;

    // Add the current node's value to the path
    currentPath.push(node.val);

    // Variable to track the sum of values in the current path
    let pathSum = 0;

    // Check all sub-paths ending at the current node
    // We do this by iterating backward from the current node to the start of the path
    for (let i = currentPath.length - 1; i >= 0; i--) {
      pathSum += currentPath[i];

      // If the sum of any sub-path equals the targetSum, increment the counter
      if (pathSum === targetSum) count += 1;
    }

    // Recursively call DFS on the left and right children of the current node
    dfs(node.left, currentPath);
    dfs(node.right, currentPath);

    // Backtrack: Remove the current node's value from the path before returning
    // This ensures that the path remains accurate for other branches of the tree
    currentPath.pop();
  };

  // Start DFS traversal from the root with an empty path
  dfs(root, []);

  // Return the total number of paths that sum up to targetSum
  return count;
};
