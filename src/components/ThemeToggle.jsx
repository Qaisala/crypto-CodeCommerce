import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { HiMoon, HiSun } from "react-icons/hi";

function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="p-2">
      {theme === "dark" ? (
        <div
          className="flex items-center cursor-pointer"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <HiSun className="text-yellow-400 text-2xl mr-2" />
          Light Mode
        </div>
      ) : (
        <div
          className="flex items-center cursor-pointer"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <HiMoon className="text-slate-700 text-2xl mr-2" />
          Dark Mode
        </div>
      )}
    </div>
  );
}

export default ThemeToggle;
