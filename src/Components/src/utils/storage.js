// src/utils/storage.js
export const safeSetItem = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.warn(`Storage access blocked for ${key}`, e);
  }
};

export const safeGetItem = (key) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (e) {
    console.warn(`Storage access blocked for ${key}`, e);
    return null;
  }
};
