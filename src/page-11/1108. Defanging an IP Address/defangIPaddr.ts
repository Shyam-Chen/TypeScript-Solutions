type DefangIPaddr = (address: string) => string;

/**
 * Accepted
 */
export const defangIPaddr: DefangIPaddr = (address) => {
  return address.replace(/\./g, '[.]');
};

/**
 * Accepted
 */
export const defangIPaddr2: DefangIPaddr = (address) => {
  return address.split('.').join('[.]');
};
