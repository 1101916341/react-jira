import { useEffect, useState } from "react";

export const isFalsy = (value: unknown) => {
  if (value === 0) {
    return false;
  } else {
    return !value;
  }
};

export const cleanObject = (object: object) => {
  const result = { ...object };
  Object.keys(object).forEach((key) => {
    // @ts-ignore
    const value = object[key];
    if (isFalsy(value)) {
      // @ts-ignore
      delete result[key];
    }
  });
  return result;
};

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

export const useDebounce = <T>(value: T, delay?: number) => {
  const [debounceValue, setDebounce] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => setDebounce(value), delay);

    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debounceValue;
};
