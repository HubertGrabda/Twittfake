import "./Navbar.scss";
import logo from "../../images/TwittfakeLogoAlt.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { classNames } from "../../shared";
import { useTweetContext } from "../../hooks/useTweetContext";
import ScrollService from "../../services/ScrollService";
import {
  createTweetRoute,
  profileRoute,
  searchRoute,
  signInRoute,
} from "../../const/routing";

const Navbar = () => {
  const { setProfileToDisplay, userLogged } = useTweetContext();
  const navbarIcons = [faPlus, faMagnifyingGlass];
  const routeToLogInOrProfile = userLogged ? profileRoute : signInRoute;
  const routeToLoginOrNewTweetPage = userLogged
    ? createTweetRoute
    : signInRoute;
  const showElement = ScrollService();
  const magnifyingGlassIconPlacing = 1;

  return (
    <div className={classNames(["navbar", !showElement && "navbar--hidden"])}>
      <Link to={routeToLogInOrProfile}>
        {userLogged ? (
          <img
            src={logo}
            alt="user's profile picture"
            className='navbar__users-profile-pic'
            onClick={() => setProfileToDisplay(userLogged)}
          />
        ) : (
          <FontAwesomeIcon
            icon={faUser}
            className='navbar__person'
          ></FontAwesomeIcon>
        )}
      </Link>

      {navbarIcons.map((icon, index) => (
        <Link
          to={index === magnifyingGlassIconPlacing ? searchRoute : routeToLoginOrNewTweetPage}
          key={icon.iconName}
          className={`navbar__${icon.iconName}`}
        >
          <FontAwesomeIcon icon={icon} />
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
