import type { TreeNode } from '~/utils/binary-tree';

type LeafSimilar = (root1: TreeNode | null, root2: TreeNode | null) => boolean;

/**
 * Accepted
 */
export const leafSimilar: LeafSimilar = (root1, root2) => {
  // Helper function to collect all leaf values of a binary tree
  const getLeaves = (root: TreeNode | null): number[] => {
    const leaves: number[] = [];

    // Depth-First Search (DFS) function to traverse the tree
    const dfs = (node: TreeNode | null) => {
      // If the node is null, return (do nothing)
      if (node === null) return;

      // If the node is a leaf (no left or right children), add its value to the leaves array
      if (node.left === null && node.right === null) leaves.push(node.val);

      // Recursively traverse the left subtree
      dfs(node.left);

      // Recursively traverse the right subtree
      dfs(node.right);
    };

    // Start DFS traversal from the root to find all leaf nodes
    dfs(root);

    // Return the collected leaf values
    return leaves;
  };

  // Get the leaf value sequences for both trees
  const leaves1 = getLeaves(root1);
  const leaves2 = getLeaves(root2);

  // Compare the leaf value sequences for equality
  // Convert both sequences to strings and check if they are identical
  return JSON.stringify(leaves1) === JSON.stringify(leaves2);
};
