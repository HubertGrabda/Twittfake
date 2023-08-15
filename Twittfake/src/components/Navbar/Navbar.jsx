import "./Navbar.scss";
import logo from "../../images/twittfake.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const userLogged = sessionStorage.getItem("username");
  const navbarIcons = [faPlus, faMagnifyingGlass];
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollPos, setLastScrollPos] = useState(0);

  const routeToLoginOrProfile = userLogged ? "/Profile" : "SignIn";

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos > lastScrollPos) {
      setShowNavbar(false);
    } else setShowNavbar(true);
    setLastScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className={`navbar ${showNavbar ? "" : "hidden"}`}>
      <Link to={routeToLoginOrProfile}>
        {userLogged ? (
          <img
            src={logo}
            alt="user's logo"
            className='navbar__users-profile-pic'
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
