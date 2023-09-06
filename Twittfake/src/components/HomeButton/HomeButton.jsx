import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import "./HomeButton.scss";
import { Link } from "react-router-dom";
import ScrollHandler from "../../functions/scrollHandler";
import { classNames } from "../../functions/classNames";

const HomeButton = () => {
  const showElement = ScrollHandler();

  return (
    <Link to='/'>
      <FontAwesomeIcon
        icon={faHome}
        className={classNames([
          "home-icon",
          showElement ? "" : "home-icon--hidden",
        ])}
      />
    </Link>
  );
};

export default HomeButton;
