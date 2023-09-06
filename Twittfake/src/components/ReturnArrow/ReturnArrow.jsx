import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./returnArrow.scss";
import { Link, useLocation } from "react-router-dom";
import ScrollHandler from "../../shared/scrollHandler";
import PropTypes from "prop-types";
import { useTweetContext } from "../../hooks/useTweetContext";

const ReturnArrow = ({ returnTo }) => {
  const { setFilteredTweetsData, tweets, TagIsClicked, setTagIsClicked } =
    useTweetContext();
  const showElement = ScrollHandler();
  const path = useLocation();

  const showElementBasedOnUrl =
    path.pathname === "/" ? TagIsClicked : showElement;

  const handleClick = () => {
    setFilteredTweetsData(tweets), setTagIsClicked(false);
  };

  return (
    <Link to={`/${returnTo}`} onClick={() => handleClick()}>
      <FontAwesomeIcon
        icon={faArrowLeft}
        className={`return-icon${showElementBasedOnUrl ? "" : "--hidden"}`}
      ></FontAwesomeIcon>
    </Link>
  );
};

ReturnArrow.propTypes = {
  returnTo: PropTypes.string.isRequired,
};

export default ReturnArrow;
