export const defangIPaddr = (address: string): string =>
  address.replace(new RegExp('[.]', 'g'), '[.]');
