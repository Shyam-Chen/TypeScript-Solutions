export class MinStack {
  public stack: number[] = [];

  public push(num: number): void {
    this.stack.push(num);
  }

  public pop(): void {
    this.stack.pop();
  }

  public top(): number {
    return this.stack.slice(-1)[0];
  }

  public getMin(): number {
    return Math.min(...this.stack);
  }
}
