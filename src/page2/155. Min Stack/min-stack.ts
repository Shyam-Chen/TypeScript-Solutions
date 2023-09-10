/**
 * Accepted
 */
export class MinStack {
  stack: number[] = [];

  push(num: number): void {
    this.stack.push(num);
  }

  pop(): void {
    this.stack.pop();
  }

  top(): number {
    return this.stack.slice(-1)[0];
  }

  getMin(): number {
    return Math.min(...this.stack);
  }
}
