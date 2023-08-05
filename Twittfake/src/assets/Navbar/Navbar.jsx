import "./Navbar.scss";
import logo from "../images/twittfake.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navbarIcons = [faPlus, faMagnifyingGlass];
  // const location = useLocation();

  // const hideElement =
  //   location.pathname === "/Profile" || location.pathname === "/Search";

  const handleOnClick = [
    () => console.log("The plus button have been clicked"),
    () => console.log("The search button have been clicked"),
  ];

  return (
    <div className='navbar'>
      <Link to='/Profile'>
        <img
          src={logo}
          alt="user's logo"
          className='navbar__users-profile-pic'
        />
      </Link>

      {navbarIcons.map((icon, index) => (
        <Link
          to={index === 1 ? "/Search" : "/CreateTweet"}
          key={icon.iconName}
          className={`navbar__${icon.iconName}`}
          onClick={handleOnClick[index]}
        >
          <FontAwesomeIcon icon={icon} />
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
