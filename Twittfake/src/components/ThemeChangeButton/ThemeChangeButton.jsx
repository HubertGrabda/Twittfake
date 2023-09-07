import "./ThemeChangeButton.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { useTheme } from "../../hooks/useTheme";
import { ScrollHandler, classNames } from "../../shared";

const ThemeChangeButton = () => {
  const { theme, toggleTheme } = useTheme();
  const showElement = ScrollHandler();

  return (
    <>
      <FontAwesomeIcon
        onClick={toggleTheme}
        className={classNames([
          "theme-change-button",
          !showElement && "theme-change-button--hidden",
        ])}
        icon={theme === "isBright" ? faMoon : faSun}
      ></FontAwesomeIcon>
    </>
  );
};

export default ThemeChangeButton;
