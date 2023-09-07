import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ReturnToTopButton.scss";
import { ScrollHandler, classNames } from "../../shared";

const ReturnToTopButton = () => {
  const showElement = ScrollHandler();

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
        showElement && "return-icon--hidden",
      ])}
      onClick={() => scrollToTop()}
    ></FontAwesomeIcon>
  );
};

export default ReturnToTopButton;
