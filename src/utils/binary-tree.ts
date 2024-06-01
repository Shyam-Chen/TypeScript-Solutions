export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export const generateBinaryTree = (nums: (number | null)[]): TreeNode | null => {
  const n = nums.length;

  if (n === 0) return null;

  const root = { val: nums[0] || 0, left: null, right: null };

  const queue: TreeNode[] = [];
  queue[0] = root;

  let i = 1;

  while (i < n) {
    const node = queue[0];
    queue.shift();

    if (i < n && nums[i] !== null) {
      node.left = { val: nums[i] || 0, left: null, right: null };
      queue.push(node.left);
    }

    i += 1;

    if (i < n && nums[i] !== null) {
      node.right = { val: nums[i] || 0, left: null, right: null };
      queue.push(node.right);
    }

    i += 1;
  }

  return root;
};
