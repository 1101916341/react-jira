import { useEffect, useState } from "react";

export const isFalsy = (value) => {
  if (value === 0) {
    return false;
  } else {
    return !value;
  }
};

export const cleanObject = (object) => {
  const result = { ...object };
  Object.keys(object).forEach((key) => {
    const value = object[key];
    if (isFalsy(value)) {
      delete result[key];
    }
  });
  return result;
};

export const useMount = (callback) => {
  useEffect(() => {
    callback();
  }, []);
};

export const useDebounce = (value, delay) => {
  const [debounceValue, setDebounce] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => setDebounce(value), delay);

    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debounceValue;
};
