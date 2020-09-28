export const toLowerCase = (str: string): string => str.toLowerCase();

/**
 * 'A'.charCodeAt(0) -> 65
 * 'Z'.charCodeAt(0) -> 90
 * 'a'.charCodeAt(0) -> 97
 * 'z'.charCodeAt(0) -> 122
 * ------------------------
 * 97 - 65 = 32, 122 - 90 = 32
 *
 * String.fromCharCode(65) -> 'A'
 * String.fromCharCode(90) -> 'Z'
 * String.fromCharCode(97) -> 'a'
 * String.fromCharCode(122) -> 'z'
 */
export const toLowerCase2 = (str: string): string => {
  let result = '';

  for (let i = 0; i < str.length; i += 1) {
    const unicode = str[i].charCodeAt(0);

    if (unicode >= 'A'.charCodeAt(0) && unicode <= 'Z'.charCodeAt(0)) {
      result += String.fromCharCode(unicode + 32);
    } else {
      result += str[i];
    }
  }

  return result;
};
