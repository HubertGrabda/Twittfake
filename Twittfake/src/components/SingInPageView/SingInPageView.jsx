import "./SingInPageView.scss";
import logo from "../../images/twittfake.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

const SingInPageView = () => {
  const buttonText = "Zaloguj",
    usernamePlaceholderText = "Nazwa użytkownika",
    passwordPlaceholderText = "Hasło",
    welcomeText = "Zaloguj się",
    passwordErrorText = "Hasło powinno zawierać od 5 do 15 znaków!",
    usernameInputError = "Podaj nazwę użytkownika!",
    defaultInputClassName = "form-wrapper__inputs-field__input",
    errorInputClassName = "form-wrapper__inputs-field__input error",
    navigate = useNavigate(),
    InputsRef = useRef([]),
    [errorOccurred, setErrorOccured] = useState([]);

  const inputIsValid = (input, id) => {
    if (
      input?.value.trim() === "" ||
      input?.value.length <= 5 ||
      input?.value.length >= 15
    ) {
      setErrorOccured((prevErrorState) => {
        const errorStateArray = [...(prevErrorState ?? [])];
        errorStateArray[id] = true;
        return errorStateArray;
      });

      input.className = errorInputClassName;
      return false;
    } else {
      setErrorOccured((prevErrorState) => {
        const errorStateArray = [...(prevErrorState ?? [])];
        errorStateArray[id] = false;
        return errorStateArray;
      });
      input.className = defaultInputClassName;
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
      navigate("/");
    }
  };

  return (
    <div className='form-wrapper'>
      <h1 className='form-wrapper__welcome-text'> {welcomeText} </h1>
      <img src={logo} alt='Logo' className='form-wrapper__logo' />
      <Link to='/'>
        <FontAwesomeIcon
          className='form-wrapper__return-arrow'
          icon={faArrowAltCircleLeft}
        />
      </Link>

      <form className='form-wrapper__inputs-field' noValidate>
        <input
          id='username-input'
          maxLength={13}
          ref={(ref) => (InputsRef.current[0] = ref)}
          type='text'
          className={defaultInputClassName}
          placeholder={usernamePlaceholderText}
          onInput={(e) => sessionStorage.setItem("username", e.target.value)}
          required
        ></input>
        <label
          htmlFor='username-input'
          className={`form-wrapper__inputs-field__error ${
            errorOccurred[0] ? "display" : ""
          }`}
        >
          {usernameInputError}
        </label>
        <input
          maxLength={15}
          type='password'
          id='password-input'
          ref={(ref) => (InputsRef.current[1] = ref)}
          className={defaultInputClassName}
          placeholder={passwordPlaceholderText}
          required
        ></input>
        <label
          htmlFor='password-input'
          className={`form-wrapper__inputs-field__error ${
            errorOccurred[1] ? "display" : ""
          }`}
        >
          {passwordErrorText}
        </label>
        <button
          className='form-wrapper__inputs-field__submit-button'
          onClick={logInFunction}
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
};

export default SingInPageView;
