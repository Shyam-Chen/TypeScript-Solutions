import { TreeNode } from '~/utils/binary-tree';

import { lowestCommonAncestor } from './lowestCommonAncestor';

describe('236. Lowest Common Ancestor of a Binary Tree', () => {
  test('lowestCommonAncestor', () => {
    {
      const node6 = new TreeNode(6);
      const node7 = new TreeNode(7);
      const node4 = new TreeNode(4);
      const node2 = new TreeNode(2, node7, node4);
      const node0 = new TreeNode(0);
      const node8 = new TreeNode(8);
      const node5 = new TreeNode(5, node6, node2);
      const node1 = new TreeNode(1, node0, node8);
      const root = new TreeNode(3, node5, node1);
      const p = node5;
      const q = node1;
      expect(lowestCommonAncestor(root, p, q)?.val).toBe(3);
    }

    {
      const node6 = new TreeNode(6);
      const node7 = new TreeNode(7);
      const node4 = new TreeNode(4);
      const node2 = new TreeNode(2, node7, node4);
      const node0 = new TreeNode(0);
      const node8 = new TreeNode(8);
      const node5 = new TreeNode(5, node6, node2);
      const node1 = new TreeNode(1, node0, node8);
      const root = new TreeNode(3, node5, node1);
      const p = node5;
      const q = node4;
      expect(lowestCommonAncestor(root, p, q)?.val).toBe(5);
    }

    {
      const node2 = new TreeNode(2);
      const root = new TreeNode(1, node2, null);
      const p = root;
      const q = node2;
      expect(lowestCommonAncestor(root, p, q)?.val).toBe(1);
    }
  });
});
