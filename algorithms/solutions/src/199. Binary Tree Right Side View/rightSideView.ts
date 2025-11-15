import type { TreeNode } from '~/utils/binary-tree';

type RightSideView = (root: TreeNode | null) => number[];

/**
 * Accepted
 */
export const rightSideView: RightSideView = (root) => {
  // Result array to store the rightmost nodes at each level.
  const result: number[] = [];

  // If the tree is empty, return an empty array.
  if (root === null) return result;

  // Queue to perform BFS; initially containing the root node.
  const queue: TreeNode[] = [root];

  // Start BFS loop
  while (queue.length > 0) {
    // Number of nodes at the current level.
    const levelLength = queue.length;

    // Iterate over all nodes at the current level.
    for (let i = 0; i < levelLength; i++) {
      // Remove the front node from the queue.
      const node = queue.shift();

      // If this is the last node in the current level, add its value to the result.
      if (i === levelLength - 1 && node) result.push(node.val);

      // Add the left child to the queue if it exists.
      if (node?.left) queue.push(node.left);

      // Add the right child to the queue if it exists.
      if (node?.right) queue.push(node.right);
    }
  }

  // Return the collected rightmost nodes' values.
  return result;
};
