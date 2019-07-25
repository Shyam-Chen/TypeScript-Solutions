export interface TreeNode {
  val: number;
  left: TreeNode;
  right: TreeNode;
}

export const generateBinaryTree = (nums: number[]): TreeNode => {
  const n = nums.length;

  if (n === 0) return null;

  const root = { val: nums[0], left: null, right: null };

  const queue: TreeNode[] = [];
  queue[0] = root;

  let i = 1;

  while (i < n) {
    const node = queue[0];
    queue.shift();

    if (i < n && nums[i] !== null) {
      node.left = { val: nums[i], left: null, right: null };
      queue.push(node.left);
    }

    i += 1;

    if (i < n && nums[i] !== null) {
      node.right = { val: nums[i], left: null, right: null };
      queue.push(node.right);
    }

    i += 1;
  }

  return root;
};
