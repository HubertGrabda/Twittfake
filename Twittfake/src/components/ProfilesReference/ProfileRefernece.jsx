import "./ProfileReference.scss";
import logo from "../../images/twittfake.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { TweetsContext } from "../../context/Tweet'sState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const ProfileRefernece = () => {
  let userLogged = sessionStorage.getItem("username");
  const logInText = "Zaloguj się";
  const { setWhosProfileToDisplay, setUserIsLogged } =
    useContext(TweetsContext);

  const logOut = () => {
    userLogged = sessionStorage.removeItem("username");
    setUserIsLogged(false);
  };

  return (
    <>
      {userLogged ? (
        <div className='profile-ref'>
          <Link
            to='/Profile'
            onClick={() => setWhosProfileToDisplay(userLogged)}
            className='profile-link'
          >
            <img src={logo} className='profile-link__picture'></img>
            <h1 className='profile-link__username'> {userLogged} </h1>
          </Link>

          <FontAwesomeIcon
            icon={faArrowRightFromBracket}
            className='profile-ref__log-out-button'
            onClick={logOut}
          />
        </div>
      ) : (
        <div className='profile-ref'>
          <Link to='/SignIn' className='profile-link'>
            <h1 className='profile-link__username'> {logInText} </h1>
          </Link>
        </div>
      )}
    </>
  );
};

export default ProfileRefernece;
