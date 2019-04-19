const PREFIX = 'brocoders:test4:';

export const setItem = (key, data) =>
  localStorage.setItem(`${PREFIX}${key}`, data);

export const getItem = key => localStorage.getItem(`${PREFIX}${key}`);

export const removeItem = key => localStorage.removeItem(`${PREFIX}${key}`);

export const clear = localStorage.clear;
