import "./SingInPageView.scss";
import logo from "../../images/TwittfakeLogoAlt.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import { TweetsContext } from "../../context/Tweet'sState";
import { classNames } from "../../functions/classNames";
import { useTheme } from "../../hooks/useTheme";

const SingInPageView = () => {
  const buttonText = "Zaloguj",
    usernamePlaceholderText = "Nazwa użytkownika",
    passwordPlaceholderText = "Hasło",
    welcomeText = "Zaloguj się",
    ErrorText = (inputName) => `${inputName} musi zawierać od 5 do 15 znaków!`,
    defaultInputClassName = "form__input",
    errorInputClassName = "form__input error",
    InputsRef = useRef([]),
    [errorOccurred, setErrorOccured] = useState([]),
    { setUserIsLogged } = useContext(TweetsContext),
    navigate = useNavigate(),
    { theme } = useTheme(),
    [inputValue, setInputValue] = useState(),
    setError = (id, boolean) => {
      setErrorOccured((prevErrorState) => {
        const errorStateArray = [...(prevErrorState ?? [])];
        errorStateArray[id] = boolean;
        return errorStateArray;
      });
    };

  const inputIsValid = (input, id) => {
    if (!input?.value || input?.value.length <= 5 || input?.value.length > 15) {
      setError(id, true);
      input.className = errorInputClassName;
      return false;
    } else {
      setError(id, false);
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
      sessionStorage.setItem("username", inputValue);
      navigate("/");
      setUserIsLogged(true);
    }
  };

  return (
    <div className='form-wrapper'>
      <h1
        className={classNames([
          "form-wrapper__welcome-text",
          theme === "isDark" && "form-wrapper__welcome-text--isDark",
        ])}
      >
        {" "}
        {welcomeText}{" "}
      </h1>
      <img src={logo} alt='Logo' className='form-wrapper__logo' />
      <Link to='/'>
        <FontAwesomeIcon
          className='form-wrapper__return-arrow'
          icon={faArrowAltCircleLeft}
        />
      </Link>

      <form className='form'>
        <input
          id='username-input'
          maxLength={13}
          ref={(ref) => (InputsRef.current[0] = ref)}
          type='text'
          className={defaultInputClassName}
          placeholder={usernamePlaceholderText}
          onInput={(e) => setInputValue(e.target.value)}
          required
        ></input>
        <label
          htmlFor='username-input'
          className={classNames([
            "form__error-label",
            errorOccurred[0] && "form__error-label--display",
          ])}
        >
          {ErrorText("Nazwa użytkownika")}
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
          className={classNames([
            "form__error-label",
            errorOccurred[1] && "form__error-label--display",
          ])}
        >
          {ErrorText("Hasło")}
        </label>
        <button className='form__submit-button' onClick={logInFunction}>
          {buttonText}
        </button>
      </form>
    </div>
  );
};

export default SingInPageView;
