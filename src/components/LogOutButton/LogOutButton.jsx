import "./LogOutButton.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import ScrollService from "../../services/ScrollService";
import { classNames } from "../../shared";
import AccountService from "../../services/AccountService";
import { useTweetContext } from "../../hooks/useTweetContext";
import useCheckIsMobile from "../../hooks/useCheckIsMobile";

const LogOutButton = () => {
  const { profileToDisplay, userLogged } = useTweetContext();
  const isMobile = useCheckIsMobile();

  if (profileToDisplay !== userLogged || !isMobile) {
    return;
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
