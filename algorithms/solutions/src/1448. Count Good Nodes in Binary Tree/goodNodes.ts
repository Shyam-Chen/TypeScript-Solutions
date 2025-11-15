import type { TreeNode } from '~/utils/binary-tree';

type GoodNodes = (root: TreeNode | null) => number;

/**
 * Accepted
 */
export const goodNodes: GoodNodes = (root) => {
  // Helper function to perform DFS
  function dfs(node: TreeNode | null, maxVal: number): number {
    if (node === null) return 0;

    // Determine if the current node is a "good" node
    let count = 0;
    if (node.val >= maxVal) count = 1;

    // Update maxVal for the next recursion
    const newMaxVal = Math.max(maxVal, node.val);

    // Continue DFS on left and right children
    count += dfs(node.left, newMaxVal);
    count += dfs(node.right, newMaxVal);

    return count;
  }

  // Start DFS with the root node
  return dfs(root, root?.val ?? Number.NEGATIVE_INFINITY);
};
