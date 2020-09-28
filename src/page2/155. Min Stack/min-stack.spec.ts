import { MinStack } from './min-stack';

describe('155. Min Stack', () => {
  it('MinStack', () => {
    const minStack = new MinStack();

    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);
    expect(minStack.getMin()).toEqual(-3);
    minStack.pop();
    expect(minStack.top()).toEqual(0);
    expect(minStack.getMin()).toEqual(-2);
  });
});
