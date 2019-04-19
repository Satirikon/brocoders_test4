export const HHMMSS = time => {
  return new Date(time).toISOString().substr(11, 8);
};
