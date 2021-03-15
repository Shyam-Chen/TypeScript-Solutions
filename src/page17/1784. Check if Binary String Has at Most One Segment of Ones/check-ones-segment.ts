interface CheckOnesSegment {
  (str: string): boolean;
}

export const checkOnesSegment: CheckOnesSegment = (str) => !str.includes('01');
