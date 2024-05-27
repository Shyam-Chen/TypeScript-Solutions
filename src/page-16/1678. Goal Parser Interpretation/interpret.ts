type Interpret = (command: string) => string;

export const interpret: Interpret = (command) =>
  command.replace(/\(\)/g, 'o').replace(/\(al\)/g, 'al');
