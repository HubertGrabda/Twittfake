import PropTypes from "prop-types";
import { createContext, useState } from "react";

export const ThemeContext = createContext();

const bodyAttributeSetter = (value) =>
  document.querySelector("body").setAttribute("data-theme", value);

export const ThemeProvider = ({ children }) => {
  const rememberTheme = localStorage.getItem("selectedTheme");
  const defaultTheme = "isBright";
  const [theme, setTheme] = useState(rememberTheme || defaultTheme);
  bodyAttributeSetter(theme);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === defaultTheme ? "isDark" : defaultTheme;
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