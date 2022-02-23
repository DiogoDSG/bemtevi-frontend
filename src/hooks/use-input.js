import { useState } from 'react';

const useInput = function (validator) {
  const [value, setValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const validation = validator(value);
  const hasError = !validation.valid && isTouched;

  const changeHandler = e => setValue(e.target.value);
  const blurHandler = () => setIsTouched(true);

  const reset = function () {
    setValue('');
    setIsTouched(false);
  };

  return {
    value,
    isValid: validation.valid,
    changeHandler,
    blurHandler,
    reset,
    hasError,
    error: validation.error,
  };
};

export default useInput;
