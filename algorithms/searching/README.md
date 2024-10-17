# 搜尋 (Searching)

## 二分搜尋（Binary Search）- 雙閉區間

- [`binarySearch.ts`](./binarySearch.ts)

```ts
function binarySearch(arr: number[], target: number): number {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    // 找到目標，返回索引
    if (arr[mid] === target) return mid;

    // 如果 arr[mid] 小於 target，則移動 low 指標
    if (arr[mid] < target) {
      low = mid + 1;
    }

    // 如果 arr[mid] 大於 target，則移動 high 指標
    if (arr[mid] > target) {
      high = mid - 1;
    }
  }

  return -1; // 找不到目標
}

const sortedArray = [1, 2, 4, 7, 11, 16, 22, 29, 37, 46];
const target = 37;
console.log(binarySearch(sortedArray, target)); // 8
```
