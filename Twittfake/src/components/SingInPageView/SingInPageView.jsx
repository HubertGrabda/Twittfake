import "./SingInPageView.scss";
import logo from "../../images/twittfake.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";

const SingInPageView = () => {
  const buttonText = "Zaloguj";
  const usernamePlaceholderText = "Nazwa użytkownika";
  const passwordPlaceholderText = "Hasło";
  const welcomeText = "Zaloguj się";
  const usernameInput = useRef();
  const usernameInputError = "Podaj nazwę użytkownika!";
  const defaultInputClassName = "form-wrapper__inputs-field__input";
  const navigate = useNavigate();

  const logInFunc = (e) => {
    let input = usernameInput.current;

    if (input.value.trim() === "") {
      e.preventDefault();
      input.className = `${defaultInputClassName} error`;
      input.placeholder = usernameInputError;
      return;
    } else {
      localStorage.setItem("username", input.value);
      navigate("/");
    }

    input.placeholder = usernamePlaceholderText;
    input.className = "";
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
          maxLength={15}
          ref={usernameInput}
          type='text'
          className={defaultInputClassName}
          placeholder={usernamePlaceholderText}
        ></input>
        <input
          type='password'
          className='form-wrapper__inputs-field__input'
          placeholder={passwordPlaceholderText}
          min={3}
          max={15}
          required
        ></input>
        <button
          className='form-wrapper__inputs-field__submit-button'
          onClick={logInFunc}
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
};

export default SingInPageView;
