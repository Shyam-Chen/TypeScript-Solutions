import type { TreeNode } from '~/utils/binary-tree';

type MaxLevelSum = (root: TreeNode | null) => number;

/**
 * Accepted
 */
export const maxLevelSum: MaxLevelSum = (root) => {
  // If the tree is empty, return 0 as there are no levels
  if (!root) return 0;

  // Initialize maxSum with the root's value and maxLevel as 1 (root level)
  let maxSum = root.val;
  let maxLevel = 1;

  // Start at level 1
  let currentLevel = 1;

  // Initialize the queue for BFS with the root node
  const queue: TreeNode[] = [root];

  // Perform BFS until the queue is empty
  while (queue.length > 0) {
    // Determine the number of nodes at the current level
    const levelSize = queue.length;
    let levelSum = 0;

    // Process each node at the current level
    for (let i = 0; i < levelSize; i++) {
      // Dequeue the front node
      const node = queue.shift();

      if (node) {
        // Accumulate the sum of values at this level
        levelSum += node.val;

        // Enqueue left child if it exists
        if (node.left) queue.push(node.left);

        // Enqueue right child if it exists
        if (node.right) queue.push(node.right);
      }
    }

    // After processing the current level, check if its sum is greater than the maxSum found so far
    if (levelSum > maxSum) {
      maxSum = levelSum; // Update maxSum
      maxLevel = currentLevel; // Update maxLevel to the current level
    }

    // Move to the next level
    currentLevel += 1;
  }

  // Return the level with the maximum sum
  return maxLevel;
};
