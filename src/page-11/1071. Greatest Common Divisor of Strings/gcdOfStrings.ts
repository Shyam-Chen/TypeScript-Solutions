type GcdOfStrings = (str1: string, str2: string) => string;

export const gcdOfStrings: GcdOfStrings = (str1, str2) => {
  // Function to find GCD of two numbers
  function gcd(a: number, b: number): number {
    if (b === 0) return a;
    return gcd(b, a % b);
  }

  // Function to check if str can divide baseStr
  function divides(baseStr: string, str: string): boolean {
    if (baseStr.length % str.length !== 0) return false;
    const repeatedStr = str.repeat(baseStr.length / str.length);
    return repeatedStr === baseStr;
  }

  // Get the GCD of the lengths of the two strings
  const lenGCD = gcd(str1.length, str2.length);

  // Get the candidate GCD string
  const candidate = str1.substring(0, lenGCD);

  // Check if the candidate can divide both strings
  if (divides(str1, candidate) && divides(str2, candidate)) {
    return candidate;
  }

  return '';
};
