import "./ThemeChangeButton.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { useTheme } from "../../hooks/useTheme";

const ThemeChangeButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <FontAwesomeIcon
        onClick={toggleTheme}
        className='theme-change-button'
        icon={theme === "light" ? faMoon : faSun}
      ></FontAwesomeIcon>
    </>
  );
};

export default ThemeChangeButton;
