import "./ProfileReference.scss";
import logo from "../../images/TwittfakeLogoAlt.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { TweetsContext } from "../../context/Tweet'sState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import getUsername from "../../functions/getUsername";
import { useTheme } from "../../hooks/useTheme";
import { classNames } from "../../functions/classNames";

const ProfileRefernece = () => {
  let userLogged = getUsername();
  const logInText = "Zaloguj się";
  const { setWhosProfileToDisplay, setUserIsLogged, userIsLogged } =
    useContext(TweetsContext);
  const { theme } = useTheme();
  const logOut = () => {
    userLogged = sessionStorage.removeItem("username");
    setUserIsLogged(false);
  };

  return (
    <>
      <div
        className={classNames([
          "profile-ref",
          theme === "isDark" && "profile-ref--dark",
        ])}
      >
        {userIsLogged ? (
          <>
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
          </>
        ) : (
          <Link to='/SignIn' className='profile-link'>
            <h1 className='profile-link__username'> {logInText} </h1>
          </Link>
        )}
      </div>
    </>
  );
};

export default ProfileRefernece;
