import type { TreeNode } from '~/utils/binary-tree';

type DeleteNode = (root: TreeNode | null, key: number) => TreeNode | null;

/**
 * Accepted
 */
export const deleteNode: DeleteNode = (root, key) => {
  // Base case: If the root is null, the tree is empty, or we've reached a leaf node.
  if (root === null) return null;

  // If the key to be deleted is less than the current node's value,
  // search in the left subtree.
  if (key < root.val) {
    root.left = deleteNode(root.left, key);
    return root; // Return the unchanged root after deletion in the left subtree.
  }

  // If the key to be deleted is greater than the current node's value,
  // search in the right subtree.
  if (key > root.val) {
    root.right = deleteNode(root.right, key);
    return root; // Return the unchanged root after deletion in the right subtree.
  }

  // If the key matches the current node's value, this is the node to be deleted.

  // Case 1: Node has no left child, return the right child.
  if (root.left === null) return root.right;

  // Case 2: Node has no right child, return the left child.
  if (root.right === null) return root.left;

  // Case 3: Node has two children.
  // Find the inorder successor (smallest node in the right subtree).
  let minNode = root.right;

  while (minNode.left !== null) {
    minNode = minNode.left; // Traverse to the leftmost node.
  }

  // Replace the current node's value with the inorder successor's value.
  root.val = minNode.val;

  // Delete the inorder successor node (which is guaranteed to have at most one child).
  root.right = deleteNode(root.right, minNode.val);

  // Return the root of the updated tree.
  return root;
};
