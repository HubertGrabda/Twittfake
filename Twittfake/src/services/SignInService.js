import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTweetContext } from "../hooks/useTweetContext";

const SignInService = () => {
  const inputsRef = useRef([]);
  const [errorOccurred, setErrorOccured] = useState([]);
  const { setisUserLogged } = useTweetContext();
  const navigate = useNavigate();
  const setInputValue = () => {};
  
  const setError = (inputId, isError) => {
    setErrorOccured((prevErrorState) => {
      const errorStateArray = [...(prevErrorState ?? [])];
      errorStateArray[inputId] = isError;
      return errorStateArray;
    });
  };

  const isValidInput = (inputElement, inputId) => {
    const {
      value: {
        length: inputValueLength,
      } = {},
    } = inputElement || {};

    if (inputValueLength <= 5 || inputValueLength > 15) {
      setError(inputId, true);
      return false;
    } else {
      setError(inputId, false);
      return inputElement;
    }
  };

  const getUsername = () => {
    const userLogged = sessionStorage.getItem("username");

    if (userLogged) {
      return userLogged;
    } else {
      return false;
    }
  };
  
  const logOut = () => {
    sessionStorage.removeItem("username");
    setisUserLogged(false);
  }

  const getValidInput = (input) => {
    return isValidInput(input) || null;
  }

  const logIn = (e) => {
    e.preventDefault();

    const {
      current: inputElement = [],
    } = inputsRef || {};

    const usernameInput = getValidInput(inputElement[0]);
    const passwordInput = getValidInput(inputElement[1]);

    if (usernameInput && passwordInput) {
      sessionStorage.setItem("username", usernameInput.value);
      navigate("/");
      setisUserLogged(true);
    }
  };

  return {
    isValidInput,
    logIn,
    inputsRef,
    errorOccurred,
    setInputValue,
    logOut,
    getUsername,
  };
};

export default SignInService;
