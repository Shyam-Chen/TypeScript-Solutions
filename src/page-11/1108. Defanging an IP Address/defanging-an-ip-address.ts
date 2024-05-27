export const defangIPaddr = (address: string): string => address.replace(/[.]/g, '[.]');
