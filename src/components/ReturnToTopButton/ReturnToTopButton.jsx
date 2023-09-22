import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ReturnToTopButton.scss";
import { classNames } from "../../shared";
import ScrollService from "../../services/ScrollService";

const ReturnToTopButton = () => {
  const hideElement = ScrollService();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <FontAwesomeIcon
      icon={faArrowUp}
      className={classNames([
        "return-icon",
        hideElement && "return-icon--hidden",
      ])}
      onClick={() => scrollToTop()}
    ></FontAwesomeIcon>
  );
};

export default ReturnToTopButton;
