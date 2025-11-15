import type { TreeNode } from '~/utils/binary-tree';

type LongestZigZag = (root: TreeNode | null) => number;

/**
 * Accepted
 */
export const longestZigZag: LongestZigZag = (root) => {
  let maxLength = 0;

  function dfs(node: TreeNode | null, direction: 'left' | 'right', length: number): void {
    if (!node) return;

    // Update the maximum ZigZag length
    maxLength = Math.max(maxLength, length);

    // If the current direction is 'left', try to go left and then right
    if (direction === 'left') {
      dfs(node.left, 'right', length + 1);
      dfs(node.right, 'left', 1);
    }
    // If the current direction is 'right', try to go right and then left
    else {
      dfs(node.right, 'left', length + 1);
      dfs(node.left, 'right', 1);
    }
  }

  // Start DFS from the root, considering both initial directions
  if (root) {
    dfs(root.left, 'right', 1);
    dfs(root.right, 'left', 1);
  }

  return maxLength;
};
