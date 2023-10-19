import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./returnArrow.scss";
import { Link, useLocation } from "react-router-dom";
import { classNames } from "../../shared";
import { useTweetContext } from "../../hooks/useTweetContext";
import ScrollService from "../../services/ScrollService";

type ReturnArrowPropTypes = {
  returnTo:string,
};

const ReturnArrow = ({ returnTo }: ReturnArrowPropTypes) => {
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
          "return-arrow",
          !showElementBasedOnUrl && "return-arrow--hidden",
        ])}
      ></FontAwesomeIcon>
    </Link>
  );
};



export default ReturnArrow;
