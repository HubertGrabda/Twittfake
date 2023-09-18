import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./returnArrow.scss";
import { Link, useLocation } from "react-router-dom";
import { classNames } from "../../shared";
import PropTypes from "prop-types";
import { useTweetContext } from "../../hooks/useTweetContext";
import ScrollService from "../../services/ScrollService";

const ReturnArrow = ({ returnTo }) => {
  const { setFilteredTweetsData, tweets, isTagClicked, setIsTagClicked } =
    useTweetContext();
  const showElement = ScrollService();
  const path = useLocation();

  const showElementBasedOnUrl =
    path.pathname === "/" ? isTagClicked : showElement;

  const handleClick = () => {
    setFilteredTweetsData(tweets), setIsTagClicked(false);
  };
  return (
    <Link to={`/${returnTo}`} onClick={() => handleClick()}>
      <FontAwesomeIcon
        icon={faArrowLeft}
        className={classNames([
          "return-icon",
          !showElementBasedOnUrl && "return-icon--hidden",
        ])}
      ></FontAwesomeIcon>
    </Link>
  );
};

ReturnArrow.propTypes = {
  returnTo: PropTypes.string.isRequired,
};

export default ReturnArrow;
