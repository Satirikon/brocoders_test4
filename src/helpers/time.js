export const HHMMSS = (time, isUTC) => {
  const date = new Date(time);
  if (isUTC) return date.toISOString().substr(11, 8);
  return date.toLocaleTimeString();
};
