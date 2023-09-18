import "./SingInPageView.scss";
import logo from "../../images/TwittfakeLogoAlt.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";
import { classNames } from "../../shared";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const SingInPageView = (props) => (
  <div className='form-wrapper'>
    <p
      className={classNames([
        "form-wrapper__welcome-text",
        props.theme === "isDark" && "form-wrapper__welcome-text--isDark",
      ])}
    >
      {" "}
      {props.welcomeText}{" "}
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
        id='username-input'
        maxLength={13}
        ref={(ref) => (props.InputsRef.current[0] = ref)}
        type='text'
        className={classNames([
          props.defaultInputClassName,
          props.errorOccurred[0] && props.errorInputClassName,
        ])}
        placeholder={props.usernamePlaceholderText}
        onInput={(e) => props.setInputValue(e.target.value)}
      ></input>
      <label
        htmlFor='username-input'
        className={classNames([
          "form__error-label",
          props.errorOccurred[0] && "form__error-label--display",
        ])}
      >
        {props.ErrorText("Nazwa użytkownika")}
      </label>
      <input
        maxLength={15}
        type='password'
        id='password-input'
        ref={(ref) => (props.InputsRef.current[1] = ref)}
        className={classNames([
          props.defaultInputClassName,
          props.errorOccurred[1] && props.errorInputClassName,
        ])}
        placeholder={props.passwordPlaceholderText}
      ></input>
      <label
        htmlFor='password-input'
        className={classNames([
          "form__error-label",
          props.errorOccurred[1] && "form__error-label--display",
        ])}
      >
        {props.ErrorText("Hasło")}
      </label>
      <button className='form__submit-button' onClick={props.logInFunction}>
        {props.buttonText}
      </button>
    </form>
  </div>
);

SingInPageView.propTypes = {
  buttonText: PropTypes.string.isRequired,
  usernamePlaceholderText: PropTypes.string.isRequired,
  passwordPlaceholderText: PropTypes.string.isRequired,
  welcomeText: PropTypes.string.isRequired,
  ErrorText: PropTypes.func.isRequired,
  defaultInputClassName: PropTypes.string.isRequired,
  errorInputClassName: PropTypes.string.isRequired,
  logInFunction: PropTypes.func.isRequired,
  InputsRef: PropTypes.object.isRequired,
  errorOccurred: PropTypes.arrayOf(PropTypes.bool).isRequired,
  setInputValue: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
};

export default SingInPageView;
