import { useState } from 'react';

const toggleList = [];

const useToggle = (defaultState: boolean): [boolean, () => void] => {
  const [currentValue, setValue] = useState(defaultState);

  const toggle = () => {
    setValue((prev) => !prev);
  };

  return [currentValue, toggle];
};

export default useToggle;
