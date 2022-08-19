import { useState } from "react";

const validateInput = (str) => str.trim().length === 0;

const useInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [isInputTouched, setInputTouched] = useState(false);
  const isInputError = validateInput(inputValue) && isInputTouched;

  const onChangeInputHandler = (event) => {
    setInputValue(event.target.value);
  };

  const onBlurInputHandler = (event) => {
    setInputTouched(true);
  };

  return {
    value: inputValue,
    isError: isInputError,
    onChangeInputHandler,
    onBlurInputHandler,
  };
};

export default useInput;
