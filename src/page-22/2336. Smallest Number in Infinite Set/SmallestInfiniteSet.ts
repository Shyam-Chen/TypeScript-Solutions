/**
 * Accepted
 */
export class SmallestInfiniteSet {
  private minHeap: number[];
  private addedBack: Set<number>;
  private current: number;

  constructor() {
    this.minHeap = [];
    this.addedBack = new Set();
    this.current = 1;
  }

  popSmallest(): number {
    if (this.minHeap.length > 0) {
      const smallest = this.minHeap.shift();

      if (smallest !== undefined) {
        this.addedBack.delete(smallest);
        return smallest;
      }
    }

    // If heap is empty, return the current smallest number in sequence
    const smallest = this.current;
    this.current += 1; // Manually increment current
    return smallest;
  }

  addBack(num: number): void {
    if (num < this.current && !this.addedBack.has(num)) {
      this.minHeap.push(num);
      this.minHeap.sort((a, b) => a - b); // Ensure heap property
      this.addedBack.add(num);
    }
  }
}
