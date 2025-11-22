/**
 * Accepted
 */
export class MinStack {
  stack: number[];
  minStack: number[];

  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val: number): void {
    this.stack.push(val);

    if (!this.minStack.length || (this.minStack.length && this.getMin() >= val)) {
      this.minStack.push(val);
    }
  }

  pop(): void {
    const removed = this.stack.pop();

    if (this.getMin() === removed) {
      this.minStack.pop();
    }
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1];
  }
}
