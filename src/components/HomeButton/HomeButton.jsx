import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import "./HomeButton.scss";
import { Link } from "react-router-dom";
import { classNames } from "../../shared";
import ScrollService from "../../services/ScrollService";

const HomeButton = () => {
  const showElement = ScrollService();

  return (
    <Link to='/'>
      <FontAwesomeIcon
        icon={faHome}
        className={classNames([
          "home-icon",
          !showElement && "home-icon--hidden",
        ])}
      />
    </Link>
  );
};

export default HomeButton;
