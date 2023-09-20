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

const Navbar = () => {
  const { setProfileToDisplay, userLogged } = useTweetContext();
  const navbarIcons = [faPlus, faMagnifyingGlass];
  const routeToLoginOrProfile = userLogged ? "/Profile" : "/SignIn";
  const showElement = ScrollService();

  return (
    <div className={classNames(["navbar", !showElement && "navbar--hidden"])}>
      <Link to={routeToLoginOrProfile}>
        {userLogged ? (
          <img
            src={logo}
            alt="user's logo"
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
          to={index === 1 ? "/Search" : "/CreateTweet"}
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
