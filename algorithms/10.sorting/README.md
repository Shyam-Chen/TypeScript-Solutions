# 排序 (Sorting)

## 泡沫排序 (Bubble Sort)

依次比較相鄰的兩個元素，並將較大的元素交換到後面。

```ts
function bubbleSort(arr: number[]): number[] {
  let n = arr.length;

  // 外層迴圈控制需要走訪的次數
  for (let i = 0; i < n; i++) {
    // 用來標記是否發生過交換，如果沒有交換過則說明陣列已經排序完成
    let swapped = false;

    // 內層迴圈進行相鄰元素的比較和交換
    for (let j = 0; j < n - i - 1; j++) {
      // 如果前面的元素比後面的元素大，交換這兩個元素
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    // 如果內層迴圈中沒有發生過交換，提前終止排序
    if (!swapped) break;
  }

  return arr;
}
```

時間複雜度為 O(n<sup>2</sup>)

## 選擇排序 (Selection Sort)

每次從未排序的部分中選出最小的元素，並將其放到已排序部分的最後。

```ts
function selectionSort(arr: number[]): number[] {
  let n = arr.length;

  // 外層迴圈負責走訪未排序的部分
  for (let i = 0; i < n - 1; i++) {
    // 假設當前元素是未排序部分的最小值
    let minIndex = i;

    // 內層迴圈找到未排序部分的最小值
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j; // 更新最小值的索引
      }
    }

    // 如果找到比當前元素更小的元素，進行交換
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}
```

時間複雜度為 O(n<sup>2</sup>)

## 插入排序 (Insertion Sort)

已排序區間：

```ts
[0, i - 1];
```

```ts
function insertionSort(arr: number[]): number[] {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;

    // 將 arr[i] 插入已排序區間
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j]; // 向右移一位
      j -= 1;
    }

    arr[j + 1] = current;
  }

  return arr;
}
```

時間複雜度 (平均) 為 O(n<sup>2</sup>)

在實際的情況下，直接使用 `Array.prototype.sort()` (Timsort)。

## 堆積排序 (Heap Sort)

```ts
function heapify(arr: number[], n: number, i: number): void {
  let largest = i; // 設定當前節點為最大值

  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest]) largest = left;
  if (right < n && arr[right] > arr[largest]) largest = right;

  // 如果最大值不是根節點，則進行交換並遞迴堆積化
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  }
}

function heapSort(arr: number[]): number[] {
  const n = arr.length;

  // 建立大頂堆積
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // 從堆頂取出最大值並重建堆積
  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]]; // 將堆積頂移到已排序的部分
    heapify(arr, i, 0); // 對剩下的元素重新堆積化
  }

  return arr;
}
```

## 合併排序 (Merge Sort)

基於分治 (Divide and Conquer) 策略。

```ts
function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left: number[], right: number[]): number[] {
  const result: number[] = [];

  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i += 1;
    } else {
      result.push(right[j]);
      j += 1;
    }
  }

  return [...result, ...left.slice(i), ...right.slice(j)];
}
```

## 快速排序 (Quicksort)

基於分治 (Divide and Conquer) 策略。

從資料集中選擇一個「基準」元素，並將集合分成「小於基準」和「大於基準」的兩部分。

```ts
function quicksort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  const pivot = arr[0]; // 使用第一個元素作為基準
  const left: number[] = [];
  const right: number[] = [];

  // 從第二個元素開始迭代
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quicksort(left), pivot, ...quicksort(right)];
}
```

選擇最後一個元素作為基準：

```ts
function quicksort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  const pivot = arr.at(-1) as number;
  const left: number[] = [];
  const right: number[] = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quicksort(left), pivot, ...quicksort(right)];
}
```

## 希爾排序 (Shellsort)

## 計數排序 (Counting Sort)

## 基數排序 (Radix Sort)

## 桶排序 (Bucket Sort)
