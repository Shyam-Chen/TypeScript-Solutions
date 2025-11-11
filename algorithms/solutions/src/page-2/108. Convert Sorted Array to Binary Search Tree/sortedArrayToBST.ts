import { TreeNode } from '~/utils/binary-tree';

type SortedArrayToBST = (nums: number[]) => TreeNode | null;

/**
 * Accepted
 */
export const sortedArrayToBST: SortedArrayToBST = (nums) => {
  if (nums.length === 0) return null;

  function convertToBST(left: number, right: number): TreeNode | null {
    if (left > right) return null;

    const mid = Math.floor((left + right) / 2);
    const node = new TreeNode(nums[mid]);

    node.left = convertToBST(left, mid - 1);
    node.right = convertToBST(mid + 1, right);

    return node;
  }

  return convertToBST(0, nums.length - 1);
};
