import PropTypes from "prop-types";
import { createContext, useState } from "react";

export const ThemeContext = createContext();

const bodyAttributeSetter = (value) =>
  document.querySelector("body").setAttribute("data-theme", value);

export const ThemeProvider = ({ children }) => {
  const latestTheme = localStorage.getItem("selectedTheme");
  const defaultTheme = "dark";
  const [theme, setTheme] = useState(latestTheme || defaultTheme);
  bodyAttributeSetter(theme);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === defaultTheme ? "bright" : defaultTheme;
      localStorage.setItem("selectedTheme", newTheme);
      bodyAttributeSetter(newTheme);
      return newTheme;
    });
  };

  const themeContextValue = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
