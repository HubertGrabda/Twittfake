import "./SingInPageView.scss";
import logo from "../../images/TwittfakeLogoAlt.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";
import { classNames } from "../../shared";
import { useTheme } from "../../hooks/useTheme";
import { Link } from "react-router-dom";
import SignInService from "../../services/SignInService";

const SingInPageView = () => {
  const buttonText = "Zaloguj";
  const usernamePlaceholderText = "Nazwa użytkownika";
  const passwordPlaceholderText = "Hasło";
  const welcomeText = "Zaloguj się";
  const ErrorText = (inputName) =>
    `${inputName} musi zawierać od 5 do 15 znaków!`;
  const defaultInputClassName = "form__input";
  const errorInputClassName = "form__input error";

  const { logInFunction, InputsRef, errorOccurred, setInputValue } =
    SignInService();
  const { theme } = useTheme();

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
          className={classNames([
            defaultInputClassName,
            errorOccurred[0] && errorInputClassName,
          ])}
          placeholder={usernamePlaceholderText}
          onInput={(e) => setInputValue(e.target.value)}
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
          className={classNames([
            defaultInputClassName,
            errorOccurred[1] && errorInputClassName,
          ])}
          placeholder={passwordPlaceholderText}
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
