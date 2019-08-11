export const dayOfYear = (date: string): number => {
  const target = new Date(date);
  const start = new Date(target.getFullYear(), 0, 0);
  const diff = target.getTime() - start.getTime();
  return Math.floor(diff / (24 * 60 * 60 * 1000));
};
