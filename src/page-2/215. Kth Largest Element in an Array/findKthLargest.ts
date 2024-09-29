type findKthLargest = (nums: number[], k: number) => number;

/**
 * Accepted
 */
export const findKthLargest: findKthLargest = (nums, k) => {
  class MinHeap {
    private heap: number[];

    constructor() {
      this.heap = [];
    }

    // Helper methods to calculate the indices of parent and children
    private getParentIndex(index: number): number {
      return Math.floor((index - 1) / 2);
    }

    private getLeftChildIndex(index: number): number {
      return 2 * index + 1;
    }

    private getRightChildIndex(index: number): number {
      return 2 * index + 2;
    }

    // Method to add an element to the heap
    public add(val: number): void {
      this.heap.push(val);
      this.heapifyUp();
    }

    // Method to remove the minimum element (root) from the heap
    public poll(): number | undefined {
      if (this.heap.length === 0) return undefined;
      if (this.heap.length === 1) return this.heap.pop();

      const root = this.heap[0];
      const lastElement = this.heap.pop(); // Remove the last element safely

      if (lastElement !== undefined) {
        this.heap[0] = lastElement; // Only reassign if lastElement exists
        this.heapifyDown();
      }

      return root;
    }

    // Method to return the minimum element without removing it
    public peek(): number | undefined {
      return this.heap.length > 0 ? this.heap[0] : undefined;
    }

    // Method to return the size of the heap
    public size(): number {
      return this.heap.length;
    }

    // Heapify up to maintain the heap property after adding an element
    private heapifyUp(): void {
      let index = this.heap.length - 1;

      while (index > 0 && this.heap[this.getParentIndex(index)] > this.heap[index]) {
        [this.heap[this.getParentIndex(index)], this.heap[index]] = [
          this.heap[index],
          this.heap[this.getParentIndex(index)],
        ];

        index = this.getParentIndex(index);
      }
    }

    // Heapify down to maintain the heap property after removing the root
    private heapifyDown(): void {
      let index = 0;

      while (this.getLeftChildIndex(index) < this.heap.length) {
        let smallerChildIndex = this.getLeftChildIndex(index);

        if (
          this.getRightChildIndex(index) < this.heap.length &&
          this.heap[this.getRightChildIndex(index)] < this.heap[smallerChildIndex]
        ) {
          smallerChildIndex = this.getRightChildIndex(index);
        }

        if (this.heap[index] < this.heap[smallerChildIndex]) break;

        [this.heap[index], this.heap[smallerChildIndex]] = [
          this.heap[smallerChildIndex],
          this.heap[index],
        ];

        index = smallerChildIndex;
      }
    }
  }

  const heap = new MinHeap();

  for (const num of nums) {
    heap.add(num);

    if (heap.size() > k) {
      heap.poll();
    }
  }

  return heap.peek() || 0;
};

/**
 * Accepted
 */
export const findKthLargest2: findKthLargest = (nums, k) => {
  nums.sort((a, b) => b - a);
  return nums[k - 1];
};
