import "./ProfileReference.scss";
import logo from "../../images/TwittfakeLogoAlt.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../../hooks/useTheme";
import { classNames, getUsername } from "../../shared";
import { useTweetContext } from "../../hooks/useTweetContext";

const ProfileReference = () => {
  let userLogged = getUsername();
  const logInText = "Zaloguj się";
  const { setprofileToDisplay, setisUserLogged, isUserLogged } =
    useTweetContext();
  const { theme } = useTheme();

  const logOut = () => {
    userLogged = sessionStorage.removeItem("username");
    setisUserLogged(false);
  };

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
              onClick={() => setprofileToDisplay(userLogged)}
              className='profile-link'
            >
              <img src={logo} className='profile-link__picture'></img>
              <p className='profile-link__username'> {userLogged} </p>
            </Link>

            <FontAwesomeIcon
              icon={faArrowRightFromBracket}
              className='profile-ref__log-out-button'
              onClick={logOut}
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
