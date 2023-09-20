import "./ProfileReference.scss";
import logo from "../../images/TwittfakeLogoAlt.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../../hooks/useTheme";
import { classNames } from "../../shared";
import { useTweetContext } from "../../hooks/useTweetContext";
import AccountService from "../../services/AccountService";

const ProfileReference = () => {
  const logInText = "Zaloguj się";
  const { setProfileToDisplay, isUserLogged } = useTweetContext();
  const { theme } = useTheme();
  const { logOut, getUsername } = AccountService();
  const userLogged = getUsername();

  return (
    <>
      <div
        className={classNames([
          "profile-ref",
          theme === "isDark" && "profile-ref--dark",
        ])}
      >
        {isUserLogged ? (
          <>
            <Link
              to='/Profile'
              onClick={() => setProfileToDisplay(userLogged)}
              className='profile-link'
            >
              <img src={logo} className='profile-link__picture'></img>
              <p className='profile-link__username'> {userLogged} </p>
            </Link>

            <FontAwesomeIcon
              icon={faArrowRightFromBracket}
              className='profile-ref__log-out-button'
              onClick={() => logOut()}
            />
          </>
        ) : (
          <Link to='/SignIn' className='profile-link'>
            <p className='profile-link__username'> {logInText} </p>
          </Link>
        )}
      </div>
    </>
  );
};

export default ProfileReference;
