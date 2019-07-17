export interface TreeNode {
  val: number;
  left: TreeNode;
  right: TreeNode;
}

export const isSymmetric = (root: TreeNode): boolean => {
  if (!root) return true;

  const isSymmetricTree = (p: TreeNode, q: TreeNode): boolean => {
    if (!p && !q) return true;
    if (!p || !q) return false;
    if (p.val !== q.val) return false;

    // compare left and right
    return isSymmetricTree(p.left, q.right) && isSymmetricTree(q.left, p.right);
  };

  return isSymmetricTree(root.left, root.right);
};
