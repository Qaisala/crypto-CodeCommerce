// This file is a complete Dark/Light Mode Theme Management System built for a React application using Tailwind CSS. Instead of just toggling a class on a single button, the author is setting up a scalable global state architecture so that any component in the app can know the current theme, switch between themes, and persist that choice.

import { createContext, useEffect, useState } from "react";

const getInitialTheme = () => {
  // localStorage: Did the user manually choose a theme on a previous visit? (e.g., saved as "color-theme").
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("color-theme");
    if (typeof storedPrefs === "string") {
      return storedPrefs;
    }

    // System Preferences: If there's no saved preference, it checks the user's operating system or browser setting via window.matchMedia("(prefers-color-scheme: dark)").
    const userMedia = window.matchMedia("(prefers-color-scheme:dark)");
    if (userMedia.matches) {
      return "dark";
    }
  }
  // Fallback: If neither exists, it defaults to "light"
  return "light";
};

export const ThemeContext = createContext();
export const ThemeProvider = ({ initialTheme, children }) => {
  const [theme, setTheme] = useState(getInitialTheme);

  const rawSetTheme = (theme) => {
    const root = window.document.documentElement;
    const isDark = theme === "dark";

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(theme);

    localStorage.setItem("color-theme", theme);
  };

  if (initialTheme) {
    rawSetTheme(initialTheme);
  }

  useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
