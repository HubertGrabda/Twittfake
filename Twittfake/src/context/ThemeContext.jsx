import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      sessionStorage.setItem("selectedTheme", newTheme);
      document.querySelector("body").setAttribute("data-theme", newTheme);
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
