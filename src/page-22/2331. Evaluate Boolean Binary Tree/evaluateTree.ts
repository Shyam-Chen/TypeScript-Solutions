import type { TreeNode } from '~/utils/binary-tree';

type EvaluateTree = (root: TreeNode | null) => boolean;

/**
 * Accepted
 */
export const evaluateTree: EvaluateTree = (root) => {
  if (root === null) return false;

  // If the node is a leaf node, return its boolean value.
  if (root.val === 0) return false;
  if (root.val === 1) return true;

  // Recursively evaluate left and right children.
  const leftEval = evaluateTree(root.left);
  const rightEval = evaluateTree(root.right);

  // Apply the boolean operation based on the node's value.
  if (root.val === 2) return leftEval || rightEval; // OR operation
  if (root.val === 3) return leftEval && rightEval; // AND operation

  // Default return value (should not reach here in a properly formed tree).
  return false;
};
