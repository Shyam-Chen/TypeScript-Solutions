# 二元樹 (Binary Tree)

```ts
class TreeNode<T> {
  val: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;

  constructor(val: T, left: TreeNode<T> | null = null, right: TreeNode<T> | null = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
```

```ts
const n1 = new TreeNode(1);
```

## 前序走訪

以遞迴方式依序走訪「根節點 -> 左子樹 -> 右子樹」。

```ts

```

比對兩棵樹是否為相同:

```ts

```

## 中序走訪

## 後序走訪
