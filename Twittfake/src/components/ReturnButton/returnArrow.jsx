import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./returnArrow.scss";
import useScrollHandler from "../../hooks/useHandleScroll";
import { Link } from "react-router-dom";

const ReturnButton = () => {
  const showElement = useScrollHandler();

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
