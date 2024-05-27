/**
 * Accepted
 */
export class MyHashMap {
  #buckets: Map<number, number>;

  constructor() {
    this.#buckets = new Map();
  }

  put(key: number, value: number): void {
    this.#buckets.set(key, value);
  }

  get(key: number): number {
    const value = this.#buckets.get(key);
    return value !== undefined ? value : -1;
  }

  remove(key: number): void {
    this.#buckets.delete(key);
  }
}
