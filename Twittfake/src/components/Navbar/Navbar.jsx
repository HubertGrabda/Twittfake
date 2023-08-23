import "./Navbar.scss";
import logo from "../../images/twittfake.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ScrollHandler from "../../functions/scrollHandler";
import { useContext } from "react";
import { TweetsContext } from "../../context/Tweet'sState";

const Navbar = () => {
  const userLogged = sessionStorage.getItem("username");
  const navbarIcons = [faPlus, faMagnifyingGlass];
  const routeToLoginOrProfile = userLogged ? "/Profile" : "SignIn";
  const { setWhosProfileToDisplay } = useContext(TweetsContext);

  const showElement = ScrollHandler();

  return (
    <div className={`navbar${showElement ? "" : "--hidden"}`}>
      <Link to={routeToLoginOrProfile}>
        {userLogged ? (
          <img
            src={logo}
            alt="user's logo"
            className='navbar__users-profile-pic'
            onClick={() => setWhosProfileToDisplay(userLogged)}
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
