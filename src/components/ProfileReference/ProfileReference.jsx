import "./ProfileReference.scss";
import logo from "../../images/TwittfakeLogoAlt.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../../hooks/useTheme";
import { classNames } from "../../shared";
import { useTweetContext } from "../../hooks/useTweetContext";
import AccountService from "../../services/AccountService";
import { LOG_IN_TEXT } from "../../const/input";

const ProfileReference = () => {
  const { setProfileToDisplay, userLogged } = useTweetContext();
  const { theme } = useTheme();
  const { logOut } = AccountService();

  return (
    <>
      <div
        className={classNames([
          "profile-ref",
          theme === "dark" && "profile-ref--dark",
        ])}
      >
        {userLogged ? (
          <>
            <Link
              to='/Profile'
              onClick={() => setProfileToDisplay(userLogged)}
              className='profile-link'
            >
              <img
                src={logo}
                className='profile-link__picture'
                alt="User's profile picture"
              ></img>
              <p className='profile-link__username'>{userLogged}</p>
            </Link>
            <FontAwesomeIcon
              icon={faArrowRightFromBracket}
              className='profile-ref__log-out-button'
              onClick={() => logOut()}
            />
          </>
        ) : (
          <Link to='/SignIn' className='profile-link'>
            <p className='profile-link__username'> {LOG_IN_TEXT} </p>
          </Link>
        )}
      </div>
    </>
  );
};

export default ProfileReference;
