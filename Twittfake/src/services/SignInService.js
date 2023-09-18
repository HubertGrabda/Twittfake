import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTweetContext } from "../hooks/useTweetContext";

const SignInService = () => {
  const InputsRef = useRef([]);
  const [errorOccurred, setErrorOccured] = useState([]);
  const { setisUserLogged } = useTweetContext();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState();
  
  const setError = (id, boolean) => {
    setErrorOccured((prevErrorState) => {
      const errorStateArray = [...(prevErrorState ?? [])];
      errorStateArray[id] = boolean;
      return errorStateArray;
    });
  };

  const inputIsValid = (input, id) => {
    if (!input?.value || input?.value.length <= 5 || input?.value.length > 15) {
      setError(id, true);
      return false;
    } else {
      setError(id, false);
      return true;
    }
  };

  const logInFunction = (e) => {
    e.preventDefault();

    const usernameInput = InputsRef.current[0];
    const passwordInput = InputsRef.current[1];

    const isUsernameValid = inputIsValid(usernameInput, 0);
    const isPasswordValid = inputIsValid(passwordInput, 1);

    if (isUsernameValid && isPasswordValid) {
      sessionStorage.setItem("username", inputValue);
      navigate("/");
      setisUserLogged(true);
    }
  };

  return {
    inputIsValid,
    logInFunction,
    InputsRef,
    errorOccurred,
    setInputValue,
  };
};

export default SignInService;
