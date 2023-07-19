import "./Navbar.scss";
import logo from "../images/twittfake.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const navbarIcons = [faPlus, faMagnifyingGlass];
  const location = useLocation();

  const hideElement = location.pathname === "/Profile";

  return (
    <div className='navbar'>
      {!hideElement && (
        <>
          <Link to='/Profile'>
            <img
              src={logo}
              alt="user's logo"
              className='navbar__users-profile-pic'
            />
          </Link>
          <h1 className='navbar__username'>@Twittfake_Dev</h1>
        </>
      )}

      {navbarIcons.map((icon) => (
        <FontAwesomeIcon
          icon={icon}
          key={icon.iconName}
          className={`navbar__${icon.iconName}`}
        />
      ))}
    </div>
  );
};

export default Navbar;
