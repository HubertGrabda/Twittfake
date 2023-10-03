import "./LogOutButton.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import ScrollService from "../../services/ScrollService";
import { classNames } from "../../shared";
import AccountService from "../../services/AccountService";
import { useTweetContext } from "../../hooks/useTweetContext";

const LogOutButton = () => {
  const { profileToDisplay, userLogged } = useTweetContext();
  const isMobile = document.body.clientWidth <= 1024;

  if (profileToDisplay !== userLogged || !isMobile) {
    return null;
  }

  const showElement = ScrollService();
  const { logOut } = AccountService();

  return (
    <FontAwesomeIcon
      icon={faRightFromBracket}
      className={classNames([
        "log-out-button",
        !showElement && "log-out-button--hidden",
      ])}
      onClick={() => logOut()}
    ></FontAwesomeIcon>
  );
};

export default LogOutButton;
