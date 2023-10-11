import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { homePageRoute } from "../const/routing";

const AccountService = () => {
  const inputsRef = useRef([]);
  const [errorOccurred, setisError] = useState([]);
  const navigate = useNavigate();

  const setError = (inputId, isError) => {
    setisError((prevErrorState) => {
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

    return userLogged || false;
  };

  const getValidInput = (inputElement, inputId) =>
    isInputValid(inputElement, inputId) || null;

  const logIn = (e) => {
    e.preventDefault();

    const { current: inputElement = [] } = inputsRef || {};

    const usernameValid = getValidInput(inputElement[0], 0);
    const passwordValid = getValidInput(inputElement[1], 1);

    if (usernameValid && passwordValid) {
      const inputValue = inputElement[0].value;
      sessionStorage.setItem("username", inputValue);
      navigate(homePageRoute);
    }
  };

  const logOut = () => {
    sessionStorage.removeItem("username");
    navigate(homePageRoute);
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
