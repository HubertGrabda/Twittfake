import "./ThemeChangeButton.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { useTheme } from "../../hooks/useTheme";
import { classNames } from "../../shared";
import ScrollService from "../../services/ScrollService";

const ThemeChangeButton = () => {
  const { theme, toggleTheme } = useTheme();
  const showElement = ScrollService();

  return (
    <>
      <FontAwesomeIcon
        onClick={toggleTheme}
        className={classNames([
          "theme-change-button",
          !showElement && "theme-change-button--hidden",
        ])}
        icon={theme === "bright" ? faMoon : faSun}
      ></FontAwesomeIcon>
    </>
  );
};

export default ThemeChangeButton;
