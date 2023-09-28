import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const AccountService = () => {
  const inputsRef = useRef([]);
  const [errorOccurred, setErrorOccured] = useState([]);
  const navigate = useNavigate();

  const setError = (inputId, isError) => {
    setErrorOccured((prevErrorState) => {
      const errorStateArray = [...(prevErrorState ?? [])];
      errorStateArray[inputId] = isError;
      return errorStateArray;
    });
  };

  const isInputValid = (inputElement, inputId) => {
    const { value: { length: inputValueLength } = {} } = inputElement || {};

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

  const getValidInput = (inputElement, inputId) =>
    isInputValid(inputElement, inputId) || null;

  const logIn = (e) => {
    e.preventDefault();

    const { current: inputElement = [] } = inputsRef || {};

    const usernameValid = getValidInput(inputElement[0], 0);
    const passwordValid = getValidInput(inputElement[1], 1);

    if (usernameValid && passwordValid) {
      const inputValue = inputElement[0].value
      sessionStorage.setItem("username", inputValue);
      navigate("/");
    }
  };

  const logOut = () => {
    sessionStorage.removeItem("username");
    navigate("/");
  };

  return {
    isInputValid,
    logIn,
    inputsRef,
    errorOccurred,
    getUsername,
    logOut,
  };
};

export default AccountService;
