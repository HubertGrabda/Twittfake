import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

const bodyAttributeSetter = (value) =>
  document.querySelector("body").setAttribute("data-theme", value);

export const ThemeProvider = ({ children }) => {
  const rememberTheme = localStorage.getItem("selectedTheme");
  const defaultTheme = "light";
  const [theme, setTheme] = useState(rememberTheme || defaultTheme);
  bodyAttributeSetter(theme);


  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
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
