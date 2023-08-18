import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import "./HomeButton.scss";
import { Link } from "react-router-dom";
import useScrollHandler from "../../hooks/useHandleScroll";

const HomeButton = () => {
  const showElement = useScrollHandler();

  return (
    <Link to='/'>
      <FontAwesomeIcon
        icon={faHome}
        className={`home-icon${showElement ? "" : "--hidden"}`}
      />
    </Link>
  );
};

export default HomeButton;
