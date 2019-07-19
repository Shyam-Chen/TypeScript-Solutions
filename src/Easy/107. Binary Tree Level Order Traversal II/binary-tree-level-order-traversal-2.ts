export interface TreeNode {
  val: number;
  left: TreeNode;
  right: TreeNode;
}

export const levelOrderBottom = (root: TreeNode): number[][] => {
  const result = [];

  // leetcode 104
  const maxDepth = (_root: TreeNode): number => {
    if (!_root) return 0;

    const leftHeight = maxDepth(_root.left);
    const rightHeight = maxDepth(_root.right);

    return Math.max(leftHeight, rightHeight) + 1;
  };

  // two-dimensional array
  for (let i = 0; i < maxDepth(root); i += 1) {
    result[i] = [];
  }

  // depth-first search
  const dfs = (_root: TreeNode, level: number) => {
    if (!_root) return;

    result[result.length - level - 1].push(_root.val);

    dfs(_root.left, level + 1);
    dfs(_root.right, level + 1);
  };

  dfs(root, 0);

  return result;
};
