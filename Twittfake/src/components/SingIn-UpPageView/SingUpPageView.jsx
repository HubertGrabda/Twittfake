import "./SingInPageView.scss";
import logo from "../../images/twittfake.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const signUpPageView = () => {
  const buttonText = "Zarejestruj";
  const emailPlaceholderText = "E-mail";
  const usernamePlaceholderText = "Nazwa użytkownika";
  const passwordPlaceholderText = "Hasło";
  const welcomeText = "Zarejestruj  się";
  const ifUserDontHaveAccountText = "Posiadasz konto?";
  const signUpReferenece = (
    <a className='form-wrapper__reference-to-sign-up__link'>Zaloguj się</a>
  );

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

      <form className='form-wrapper__inputs-field'>
        <input
          type='email'
          className='form-wrapper__inputs-field__input'
          placeholder={emailPlaceholderText}
        ></input>
        <input
          type='text'
          className='form-wrapper__inputs-field__input'
          placeholder={usernamePlaceholderText}
        ></input>
        <input
          type='password'
          className='form-wrapper__inputs-field__input'
          placeholder={passwordPlaceholderText}
        ></input>
        <Link to='/'>
          <button className='form-wrapper__inputs-field__submit-button'>
            {buttonText}
          </button>
        </Link>
      </form>
      <h2 className='form-wrapper__reference-to-sign-up'>
        {ifUserDontHaveAccountText}
        <Link to='/SignIn'>{signUpReferenece}</Link>
      </h2>
    </div>
  );
};

export default signUpPageView;
