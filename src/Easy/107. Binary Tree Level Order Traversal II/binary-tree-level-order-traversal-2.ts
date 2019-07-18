import { maxDepth } from '../104. Maximum Depth of Binary Tree/maximum-depth-of-binary-tree';

export interface TreeNode {
  val: number;
  left: TreeNode;
  right: TreeNode;
}

export const levelOrderBottom = (root: TreeNode): number[][] => {
  const result = [[]];

  // two-dimensional array
  for (let i = 0; i < maxDepth(root); i += 1) {
    result[i] = [];
  }

  // depth-first search
  const dfs = (_root: TreeNode, level: number) => {
    if (!_root) return;

    if (level >= result.length) {
      result.push(...result);
    }

    result[result.length - level - 1].push(_root.val);

    dfs(_root.left, level + 1);
    dfs(_root.right, level + 1);
  };

  dfs(root, 0);

  return result;
};
