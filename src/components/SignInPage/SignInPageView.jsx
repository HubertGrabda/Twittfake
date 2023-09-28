import "./SignInPageView.scss";
import logo from "../../images/TwittfakeLogoAlt.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";
import { classNames } from "../../shared";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { LOG_IN_TEXT } from "../../const/input";

const SignInPageView = ({
  usernamePlaceholderText,
  passwordPlaceholderText,
  errorText,
  defaultInputClassName,
  errorInputClassName,
  logIn,
  inputsRef,
  errorOccurred,
  theme,
}) => (
  <div className='form-wrapper'>
    <p
      className={classNames([
        "form-wrapper__welcome-text",
        theme === "isDark" && "form-wrapper__welcome-text--isDark",
      ])}
    >
      {LOG_IN_TEXT}
    </p>
    <img src={logo} alt='Logo' className='form-wrapper__logo' />
    <Link to='/'>
      <FontAwesomeIcon
        className='form-wrapper__return-arrow'
        icon={faArrowAltCircleLeft}
      />
    </Link>

    <form className='form'>
      <input
        data-testid='username-input'
        id='username-input'
        maxLength={13}
        ref={(ref) => (inputsRef.current[0] = ref)}
        type='text'
        className={classNames([
          defaultInputClassName,
          errorOccurred[0] && errorInputClassName,
        ])}
        placeholder={usernamePlaceholderText}
      ></input>
      <label
        htmlFor='username-input'
        className={classNames([
          "form__error-label",
          errorOccurred[0] && "form__error-label--display",
        ])}
      >
        {errorText("Nazwa użytkownika")}
      </label>
      <input
        data-testid='password-input'
        maxLength={15}
        type='password'
        id='password-input'
        ref={(ref) => (inputsRef.current[1] = ref)}
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
        {errorText("Hasło")}
      </label>
      <button
        className='form__submit-button'
        onClick={logIn}
        data-testid='submit-button'
      >
        {LOG_IN_TEXT.slice(0, -3)}
      </button>
    </form>
  </div>
);

SignInPageView.propTypes = {
  usernamePlaceholderText: PropTypes.string.isRequired,
  passwordPlaceholderText: PropTypes.string.isRequired,
  errorText: PropTypes.func.isRequired,
  defaultInputClassName: PropTypes.string.isRequired,
  errorInputClassName: PropTypes.string.isRequired,
  logIn: PropTypes.func.isRequired,
  inputsRef: PropTypes.object.isRequired,
  errorOccurred: PropTypes.arrayOf(PropTypes.bool).isRequired,
  setInputValue: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
};

export default SignInPageView;