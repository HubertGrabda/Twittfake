import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import "./HomeButton.scss";
import { Link } from "react-router-dom";

const HomeButton = () => {
  return (
    <Link to="/">
      <FontAwesomeIcon icon={faHome} className='home-icon' />
    </Link>
  );
};

export default HomeButton;
