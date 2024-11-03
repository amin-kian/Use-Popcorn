import { useState, useEffect } from "react";

export function useLocalStorage(initialState, name) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(name);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(
    function () {
      localStorage.setItem(name, JSON.stringify(value));
    },
    [value, name]
  );

  return [value, setValue];
}
