import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./returnArrow.scss";
import { Link, useLocation } from "react-router-dom";
import ScrollHandler from "../../functions/scrollHandler";
import PropTypes from "prop-types";
import { useContext } from "react";
import { TweetsContext } from "../../context/Tweet'sState";

const ReturnButton = ({ returnTo }) => {
  const { setFilteredTweetsData, tweets, tileIsClicked, setTileIsClicked } =
    useContext(TweetsContext);
  const showElement = ScrollHandler();
  const path = useLocation();

  const showElementBasedOnUrl =
    path.pathname === "/" ? tileIsClicked : showElement;

  const handleClick = () => {
    setFilteredTweetsData(tweets), setTileIsClicked(false);
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

ReturnButton.propTypes = {
  returnTo: PropTypes.string.isRequired,
};

export default ReturnButton;
