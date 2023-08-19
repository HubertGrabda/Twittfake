import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./returnArrow.scss";
import { Link } from "react-router-dom";
import ScrollHandler from "../../functions/scrollHandler";

const ReturnButton = () => {
  const showElement = ScrollHandler();

  return (
    <Link to='/Search'>
      <FontAwesomeIcon
        icon={faArrowLeft}
        className={`return-icon${showElement ? "" : "--hidden"}`}
      ></FontAwesomeIcon>
    </Link>
  );
};

export default ReturnButton;
