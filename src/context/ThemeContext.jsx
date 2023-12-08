import PropTypes from "prop-types";
import { createContext, useCallback, useMemo, useState } from "react";

export const ThemeContext = createContext();

const bodyAttributeSetter = (value) =>
  document.querySelector("body").setAttribute("data-theme", value);

export const ThemeProvider = ({ children }) => {
  const latestTheme = localStorage.getItem("selectedTheme");
  const defaultTheme = "dark";
  const [theme, setTheme] = useState(latestTheme || defaultTheme);
  bodyAttributeSetter(theme);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === defaultTheme ? "bright" : defaultTheme;
      localStorage.setItem("selectedTheme", newTheme);
      bodyAttributeSetter(newTheme);
      return newTheme;
    });
  }, []);

  const themeContextValue = useMemo(
    () => ({ theme, toggleTheme }),
    [theme, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
